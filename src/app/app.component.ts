import { Component } from '@angular/core';

import { PoMenuItem } from '@portinari/portinari-ui';

import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _electronService: ElectronService) { }

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) }
  ];

  private onClick() {
    alert('Clicked in menu item')
  }

  public playPingPong() {
    if (this._electronService.isElectronApp) {
      let pong: any = this._electronService.ipcRenderer.send('abrir-janela-sobre');
      console.log(pong);
    }
  }

}
