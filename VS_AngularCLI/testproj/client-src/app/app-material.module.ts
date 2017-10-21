import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from '@angular/material';
//import {MatButtonModule} from '@angular/material';
//import {MatSidenavModule, MdChipsModule, MdInputModule, MdSelectModule,  MdToolbarModule, MdIconModule, MdTooltipModule} from '@angular/material';
//import {MdListModule, MdProgressBarModule, MdDialogModule, MdCheckboxModule, MdTableModule, MdDatepickerModule, MdNativeDateModule} from '@angular2-material';
//import {MdSnackBarModule} from '@angular/material';
//import {CdkTableModule} from '@angular/cdk/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatToolbarModule
 //   MdSidenavModule, MdChipsModule, MdInputModule, MdSelectModule, MdButtonModule, MdToolbarModule, MdIconModule, MdTooltipModule,
 //   MdCardModule, MdListModule, MdProgressBarModule, MdDialogModule, MdCheckboxModule, MdTableModule,MdDatepickerModule,MdNativeDateModule,MdSnackBarModule,
 //   MdNativeDateModule,CdkTableModule
  ],
  declarations: []
})
export class AppMaterialModule {}
