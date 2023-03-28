import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserListComponent } from './user-list.component';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaisasMasImportacionesComponent } from './paisas-mas-importaciones/paisas-mas-importaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    PaisasMasImportacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
