import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class LayoutService {
    contentAlignment: 'normal' | 'centered' = 'normal';
}
