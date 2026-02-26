import { Component } from '@angular/core';
import { SettingsAboutComponent } from '../settings-about/settings-about.component';
import { SettingsFeedbackComponent } from '../settings-feedback/settings-feedback.component';
import { TranslocoDirective } from '@jsverse/transloco';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonNavLink,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { airplane, chatbubbles, informationCircle, mic, personCircle, volumeMedium, chevronForwardOutline } from 'ionicons/icons';

interface Page {
  path: string;
  icon: string;
  component: any;
}

interface PagesGroup {
  name: string;
  pages: Page[];
}

@Component({
  selector: 'app-settings-menu',
  templateUrl: './settings-menu.component.html',
  styleUrls: ['./settings-menu.component.scss'],
  imports: [
    TranslocoDirective,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonNavLink,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
  ],
})
export class SettingsMenuComponent {
  groups: PagesGroup[] = [
    {
      name: 'support',
      pages: [
        { path: 'feedback', icon: 'chatbubbles', component: SettingsFeedbackComponent },
        { path: 'about', icon: 'information-circle', component: SettingsAboutComponent },
      ],
    },
  ];

  constructor() {
    addIcons({
      chatbubbles,
      informationCircle,
      mic,
      volumeMedium,
      airplane,
      personCircle,
      chevronForwardOutline,
    });
  }
}
