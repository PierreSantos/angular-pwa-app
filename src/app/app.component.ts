import { Component, OnInit } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { NewsletterService } from './services/newsletter-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  readonly VAPID_PUBLIC_KEY = "BJAqnVGjrVV8ohWhgZetRSfbc70QQM1MMZSta5XxP3TweUkZ2HOokLI41KMhc5AyZgDzkTUOSzwQlcnM0k9wC_M";

  constructor(
      private swPush: SwPush,
      private newsletterService: NewsletterService,
      private swUpdate: SwUpdate) {}

      ngOnInit(): void {
        this.subscribeToNotifications();

        if (this.swUpdate.isEnabled) {
          this.swUpdate.checkForUpdate(); // Verifica se há uma nova versão disponível

          this.swUpdate.available.subscribe(event => {
            if (confirm('New version available. Load New Version?')) {
              this.swUpdate.activateUpdate().then(() => {
                window.location.reload();
              });
            }
          });
        }
  }

  subscribeToNotifications() {

      this.swPush.requestSubscription({
          serverPublicKey: this.VAPID_PUBLIC_KEY
      })
      .then(sub => this.newsletterService.addPushSubscriber(sub).subscribe())
      .catch(err => console.error("Could not subscribe to notifications", err));
  }
}
