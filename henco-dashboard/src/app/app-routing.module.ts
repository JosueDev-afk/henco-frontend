import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisasMasImportacionesComponent } from './paisas-mas-importaciones/paisas-mas-importaciones.component';
import { UserListComponent } from './user-list.component';
import { DatabaseComponent } from './database/database.component';
import { PaisesMasExportacionesComponent } from './paises-mas-exportaciones/paises-mas-exportaciones.component';
import { TipoProductoExportacionesPaisComponent } from './tipo-producto-exportaciones-pais/tipo-producto-exportaciones-pais.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PrediccionExportacionComponent } from './prediccion-exportacion/prediccion-exportacion.component';
import { PrediccionImportacionComponent } from './prediccion-importacion/prediccion-importacion.component';
import { TipoProductoImportacionesPaisComponent } from './tipo-producto-importaciones-pais/tipo-producto-importaciones-pais.component';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'paisas-mas-importaciones', component: PaisasMasImportacionesComponent},
  {path: 'user-list', component: UserListComponent},
  {path: 'database', component: DatabaseComponent},
  {path: 'paises-mas-exportaciones', component: PaisesMasExportacionesComponent},
  {path: 'producto-exportacion', component: TipoProductoExportacionesPaisComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'prediccion-exp', component: PrediccionExportacionComponent},
  {path: 'prediccion-imp', component: PrediccionImportacionComponent},
  {path: 'producto-importacion', component: TipoProductoImportacionesPaisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
