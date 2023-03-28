import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisasMasImportacionesComponent } from './paisas-mas-importaciones/paisas-mas-importaciones.component';
import { UserListComponent } from './user-list.component';


const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'paisas-mas-importaciones', component: PaisasMasImportacionesComponent},
  {path: 'user-list', component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
