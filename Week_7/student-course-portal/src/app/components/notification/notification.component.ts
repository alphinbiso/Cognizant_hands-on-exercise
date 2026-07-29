import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  providers: [NotificationService],
  template: `
    <div *ngIf="notificationService.getNotifications().length > 0" style="position: fixed; top: 60px; right: 20px; background: #333; color: white; padding: 15px; border-radius: 8px; z-index: 1000;">
      <div *ngFor="let n of notificationService.getNotifications()" style="margin-bottom: 5px;">{{ n }}</div>
    </div>
  `,
  styles: []
})
export class NotificationComponent {
  constructor(public notificationService: NotificationService) {}
}
