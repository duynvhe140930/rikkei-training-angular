import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  switch_component = '';
  onClickSwitchComponent(val: string) {
    this.switch_component = val;
  }
}
