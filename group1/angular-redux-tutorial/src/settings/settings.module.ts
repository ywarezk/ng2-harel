import {NgModule} from '@angular/core';
import {WelcomeComponent} from './welcome/welcome.component';
import {CommonModule} from '@angular/common';
import {SettingsStoreModule} from './settings-store/settings-store.module';
import {SettingsRoutingModule} from './settings-routing/settings-routing.module';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [CommonModule, SettingsStoreModule, SettingsRoutingModule]
})
export class SettingsModule {

}
