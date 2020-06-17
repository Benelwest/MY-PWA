import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-pwa';

 constructor(private swPush: SwPush) {}
 public message = 'Warning';

  async registerForPush() {
    const subscription = await this.swPush.requestSubscription({
       serverPublicKey:  'BCst2kw534_EurmkeZVO_u5EH8kk-FwQNNUHZqlmM9HPnATqIGgmhN1KYmSRTVbQHvqJfkgPuMNnOKUy20pdXd0',
    });

    console.log(subscription);
  }

  share() {
    if ('share' in navigator) {
      (navigator as any).share({text: 'Hallo BASTA!'});
    } else {
      // use fallback

      alert(this.message);

    }

  }
}
