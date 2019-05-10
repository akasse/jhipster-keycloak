import { NgModule } from '@angular/core';

import { DemonJhipsterKeycloakSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [DemonJhipsterKeycloakSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [DemonJhipsterKeycloakSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class DemonJhipsterKeycloakSharedCommonModule {}
