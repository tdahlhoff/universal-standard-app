import { Injectable, Optional } from '@angular/core';
import { EMPTY, from, Observable } from 'rxjs';
import {
    Auth,
    authState,
    confirmPasswordReset,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    sendEmailVerification,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    User,
    UserCredential
} from '@angular/fire/auth';


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    readonly user: Observable<User | null> = EMPTY;

    constructor(@Optional() private auth: Auth) {
        if (auth) {
            this.user = authState(this.auth);
        }
    }

    get currentUser() {
        return this.auth.currentUser;
    }

    get lastRoute() {
        return sessionStorage.getItem('last-route');
    }

    init(): Promise<any> {
        return new Promise<any>(resolve => resolve(true));
    }

    confirmPasswordReset(code: string, password: string): Observable<any> {
        return from(confirmPasswordReset(this.auth, code, password));
    }

    register(email: string, password: string): Observable<UserCredential> {
        return from(createUserWithEmailAndPassword(this.auth, email, password));
    }

    sendPasswordResetEmail(email: string): Observable<void> {
        return from(sendPasswordResetEmail(this.auth, email));
    }

    signIn(email: string, password: string): Observable<UserCredential> {
        return from(signInWithEmailAndPassword(this.auth, email, password));
    }

    signInWithGoogle(): Observable<UserCredential> {
        return from(signInWithPopup(this.auth, new GoogleAuthProvider()));
    }

    signOut(): Observable<void> {
        return from(signOut(this.auth));
    }

    setLastRoute(route: string) {
        sessionStorage.setItem('last-route', route);
    }

    sendEmailVerification(user: User) {
        return from(sendEmailVerification(user));
    }
}
