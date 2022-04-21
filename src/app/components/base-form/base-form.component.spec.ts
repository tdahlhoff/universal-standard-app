import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseFormComponent } from './base-form.component';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'test-base-form',
    template: ''
})
export class TestBaseFormComponent extends BaseFormComponent {
    form = new FormGroup({
        control1: new FormControl('')
    });
}

describe('BaseFormComponent', () => {
    let component: TestBaseFormComponent;
    let fixture: ComponentFixture<TestBaseFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TestBaseFormComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestBaseFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('returns correct error messages', () => {
        const control = component.form.get('control1');
        control?.setErrors({'required': true});
        expect(component.getErrorMessage('control1')).toEqual('Dieses Feld ist ein Pflichtfeld.');
        control?.setErrors({'email': true});
        expect(component.getErrorMessage('control1')).toEqual('Bitte überprüfen Sie die E-Mail Adresse.');
        control?.setErrors({'value_mismatch': true});
        expect(component.getErrorMessage('control1')).toEqual('Der eingegebene Wert stimmt nicht überein.');
        control?.setErrors({'unknown': true});
        expect(component.getErrorMessage('control1')).toEqual('Dieses Feld ist fehlerhaft.');
    });
});
