import { Component } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  render() {
    return (
      <ion-app>
        <ion-router useHash={false} id="main">
          <ion-route url="/login" component="ef-intro" />
          <ion-route url="/login/user" component="ef-login" />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
