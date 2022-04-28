import { Component } from '@angular/core';
import { LayoutService } from '../../services/layout-service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    constructor(private layoutService: LayoutService) {
        this.layoutService.contentAlignment = 'normal';
    }
}
