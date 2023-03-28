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

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    PaisasMasImportacionesComponent,
    DatabaseComponent,
    PaisesMasExportacionesComponent,
    TipoProductoExportacionesPaisComponent
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
