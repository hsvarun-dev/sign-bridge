import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslocoDirective, TranslocoPipe } from '@jsverse/transloco';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonTextarea,
  IonButton,
  IonIcon,
  IonNote,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-settings-feedback',
  standalone: true,
  templateUrl: './settings-feedback.component.html',
  styleUrls: ['./settings-feedback.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    TranslocoDirective,
    TranslocoPipe,

    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
    IonContent,

    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,

    IonItem,
    IonLabel,
    IonTextarea,
    IonButton,
    IonIcon,
    IonNote,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SettingsFeedbackComponent {
  readonly toEmail = '4mh22cs046@gmail.com';

  feedbackText = '';
  maxLen = 800;

  get remaining(): number {
    return this.maxLen - (this.feedbackText?.length ?? 0);
  }

  get canSubmit(): boolean {
    return !!this.feedbackText?.trim()?.length;
  }

  get mailtoHref(): string {
    const subject = 'Sign Bridge Feedback';
    const body = this.buildBody();
    return `mailto:${this.toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  submit(): void {
    if (!this.canSubmit) return;
    window.location.href = this.mailtoHref;
  }

  clear(): void {
    this.feedbackText = '';
  }

  private buildBody(): string {
    const msg = (this.feedbackText || '').trim();

    return [
      'Hello Sign Bridge Team,',
      '',
      msg,
      '',
      '— Sent from Sign Bridge app',
    ].join('\n'); // newline will be encoded via encodeURIComponent(). [web:400][web:378]
  }
}
