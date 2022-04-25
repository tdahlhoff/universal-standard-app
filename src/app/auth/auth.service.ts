import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { from, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    user: Observable<firebase.User | null>;

    constructor(public angularFireAuth: AngularFireAuth) {
        this.user = angularFireAuth.authState;
    }

    get lastRoute() {
        return sessionStorage.getItem('last-route');
    }

    init(): Promise<any> {
        return new Promise<any>(resolve => resolve(true));
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
        return from(this.angularFireAuth.signOut());
    }

    setLastRoute(route: string) {
        sessionStorage.setItem('last-route', route);
    }
}
