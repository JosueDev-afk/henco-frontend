import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserListComponent } from './user-list.component';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaisasMasImportacionesComponent } from './paisas-mas-importaciones/paisas-mas-importaciones.component';
import { DatabaseComponent } from './database/database.component';
import { PaisesMasExportacionesComponent } from './paises-mas-exportaciones/paises-mas-exportaciones.component';
import { TipoProductoExportacionesPaisComponent } from './tipo-producto-exportaciones-pais/tipo-producto-exportaciones-pais.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrediccionExportacionComponent } from './prediccion-exportacion/prediccion-exportacion.component';
import { PrediccionImportacionComponent } from './prediccion-importacion/prediccion-importacion.component';
import { TipoProductoImportacionesPaisComponent } from './tipo-producto-importaciones-pais/tipo-producto-importaciones-pais.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    PaisasMasImportacionesComponent,
    DatabaseComponent,
    PaisesMasExportacionesComponent,
    TipoProductoExportacionesPaisComponent,
    NavbarComponent,
    PrediccionExportacionComponent,
    PrediccionImportacionComponent,
    TipoProductoImportacionesPaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    BrowserAnimationsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
