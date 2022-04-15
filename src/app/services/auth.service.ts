import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { from, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _user: firebase.User | null = null;

    constructor(public angularFireAuth: AngularFireAuth) {
        this.angularFireAuth.authState.subscribe((user) => {
            if (user) {
                this._user = user;
            } else {
                this._user = null;
            }
        });
    }

    get user() {
        return this._user;
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
}
