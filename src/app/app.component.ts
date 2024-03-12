import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  readonly VAPID_PUBLIC_KEY = "BHyfahiZraUBG-fQvMtEN0jYcKJHhf-YiSzd80FnUXosjdmFQAD9o8NqfvO1hHVCZqKp4x36IrBYNVwo_nNLwQI";

  constructor(
      private swPush: SwPush) {}

  subscribeToNotifications() {

      this.swPush.requestSubscription({
          serverPublicKey: this.VAPID_PUBLIC_KEY
      })
      .then(sub => console.log(JSON.parse(JSON.stringify(sub))));
  }

}
