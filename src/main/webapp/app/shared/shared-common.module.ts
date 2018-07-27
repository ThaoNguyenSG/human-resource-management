import { NgModule } from '@angular/core';

import { HumanResourceManagementSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [HumanResourceManagementSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [HumanResourceManagementSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class HumanResourceManagementSharedCommonModule {}
