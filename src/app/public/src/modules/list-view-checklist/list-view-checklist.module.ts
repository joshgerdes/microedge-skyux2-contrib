import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SkyWaitModule, SkyCheckboxModule } from '@blackbaud/skyux/dist/core';
import { SkyContribListViewChecklistComponent } from './list-view-checklist.component';
import { SkyContribListViewChecklistItemComponent } from './list-view-checklist-item.component';

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    SkyContribListViewChecklistComponent,
    SkyContribListViewChecklistItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SkyCheckboxModule,
    SkyWaitModule
  ],
  exports: [
    SkyContribListViewChecklistComponent,
    SkyContribListViewChecklistItemComponent
  ]
})
export class SkyContribListViewChecklistModule {
}
