import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DemonJhipsterKeycloakSharedLibsModule, DemonJhipsterKeycloakSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [DemonJhipsterKeycloakSharedLibsModule, DemonJhipsterKeycloakSharedCommonModule],
  declarations: [HasAnyAuthorityDirective],
  exports: [DemonJhipsterKeycloakSharedCommonModule, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DemonJhipsterKeycloakSharedModule {
  static forRoot() {
    return {
      ngModule: DemonJhipsterKeycloakSharedModule
    };
  }
}
