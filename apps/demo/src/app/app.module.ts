//Standard Packages.
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
//Angular material inputs
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Don't like animations? Replace this with NoopAnimationsModule
import { AuthModule } from '@ruf/idp-auth';
// RUF Related packages
import {
  RufAppCanvasModule,
  RufBannerModule,
  RufDropdownPanelModule,
  RufDynamicMenubarModule,
  RufFooterModule,
  RufIconModule, RufInkbarModule, RufLayoutModule,
  RufMegamenuModule,
  RufMenubarModule,
  RufNavbarModule,
  RufPageHeaderModule,
  RufRouterModule, RufScrollbarModule,
  RufStatusbarModule,
  RufTriggerModule,
  RufUniqueIdModule,
  RufCardModule,
  RufDialogPanelModule,
  RufToolbarModule

} from '@ruf/shell';


import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';


import { RufMaterialModule } from '@ruf/material';

import { AppRoutingModule } from './app-routing.module';
//custom components.
import { AppComponent } from './app.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';



@NgModule({
  declarations: [

    AppComponent,DashboardComponent
  ],

  imports: [MatProgressSpinnerModule,MatFormFieldModule,MatInputModule,MatSlideToggleModule,
    MatToolbarModule,MatCardModule,
    RufToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    RufPageHeaderModule,
    MatSnackBarModule,
    MatTooltipModule,RufMaterialModule,
    RufDialogPanelModule,
    RufCardModule,
    MatListModule,
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    RufRouterModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    RufAppCanvasModule,
    RufLayoutModule,
    RufBannerModule,
    RufFooterModule,
    RufMenubarModule,
    RufNavbarModule,
    RufPageHeaderModule,
    RufMenubarModule,
    RufMegamenuModule,
    RufPageHeaderModule,
    RufBannerModule,
    RufDynamicMenubarModule,
    RufTriggerModule,
    MatIconModule,
    MatButtonModule,
    RufDropdownPanelModule,
    RufIconModule,
    RufScrollbarModule,
    RufUniqueIdModule,
    RufStatusbarModule,
    SharedModule,
    RufInkbarModule
  ],
  providers: [],

  bootstrap: [AppComponent],
  exports: [AppComponent],
})
export class AppModule {}

