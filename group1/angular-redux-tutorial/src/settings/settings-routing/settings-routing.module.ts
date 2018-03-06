import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {WelcomeComponent} from '../welcome/welcome.component';

@NgModule({
  imports: [RouterModule.forChild([
    {component: WelcomeComponent, path: ''}
  ])],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}
