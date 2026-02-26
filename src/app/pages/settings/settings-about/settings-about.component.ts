import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoPipe } from '@jsverse/transloco';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonIcon,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-settings-about',
  standalone: true,
  templateUrl: './settings-about.component.html',
  styleUrls: ['./settings-about.component.scss'],
  imports: [
    CommonModule,
    TranslocoPipe,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonContent,
    IonIcon,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SettingsAboutComponent {}
