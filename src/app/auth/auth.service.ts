import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { BehaviorSubject, from, Observable, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public loginSuccessFull = new BehaviorSubject(false);
    private _lastRoute: string | null = null;
    private _user: firebase.User | null = null;

    constructor(public angularFireAuth: AngularFireAuth) {
        this.angularFireAuth.authState.subscribe((user) => {
            console.warn(user);
            if (user) {
                this._user = user;
                localStorage.setItem('user', JSON.stringify(this._user));
                this.loginSuccessFull.next(true);
            } else {
                this.resetUser();
            }
        });
        this._user = JSON.parse(localStorage.getItem('user')!);
    }

    get lastRoute() {
        return this._lastRoute;
    }

    get user() {
        return this._user;
    }

    confirmPasswordReset(code: string, password: string): Observable<any> {
        return from(this.angularFireAuth.confirmPasswordReset(code, password));
    }

    register(email: string, password: string): Observable<firebase.auth.UserCredential> {
        return from(this.angularFireAuth.createUserWithEmailAndPassword(email, password));
    }

    sendPasswordResetEmail(email: string): Observable<void> {
        return from(this.angularFireAuth.sendPasswordResetEmail(email));
    }

    signIn(email: string, password: string): Observable<firebase.auth.UserCredential> {
        return from(this.angularFireAuth.signInWithEmailAndPassword(email, password));
    }

    signInWithGoogle(): Observable<firebase.auth.UserCredential> {
        return from(this.angularFireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()));
    }

    signOut(): Observable<void> {
        return from(this.angularFireAuth.signOut()).pipe(
            tap(() => this.resetUser())
        );
    }

    isAuthenticated() {
        return this._user !== null && this._user.emailVerified;
    }

    setLastRoute(route: string) {
        this._lastRoute = route;
    }

    private resetUser() {
        this._user = null;
        localStorage.setItem('user', 'null');
    }
}
