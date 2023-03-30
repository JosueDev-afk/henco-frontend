import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisasMasImportacionesComponent } from './paisas-mas-importaciones/paisas-mas-importaciones.component';
import { UserListComponent } from './user-list.component';
import { DatabaseComponent } from './database/database.component';
import { PaisesMasExportacionesComponent } from './paises-mas-exportaciones/paises-mas-exportaciones.component';
import { TipoProductoExportacionesPaisComponent } from './tipo-producto-exportaciones-pais/tipo-producto-exportaciones-pais.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'paisas-mas-importaciones', component: PaisasMasImportacionesComponent},
  {path: 'user-list', component: UserListComponent},
  {path: 'database', component: DatabaseComponent},
  {path: 'paises-mas-exportaciones', component: PaisesMasExportacionesComponent},
  {path: 'producto-exportacion', component: TipoProductoExportacionesPaisComponent},
  {path: 'navbar', component: NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
