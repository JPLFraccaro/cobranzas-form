import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CobranzasComponent } from './components/cobranzas/cobranzas.component';
import { ErrorComponent } from './components/error/error.component';
import { SoonComponent } from './components/soon/soon.component';

const routes: Routes = [
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    title: 'Aplicación de Cobranzas',
    component: HomeComponent
  },
  {
    path: 'cobranzas',
    title: 'Aplicación de Cobranzas',
    component: CobranzasComponent
  },
  {
    path: 'soon',
    title: 'Muy pronto',
    component: SoonComponent,
  },
  {
    path: 'error',
    title: 'Sitio no encontrado',
    component: ErrorComponent,
  },
  {
    path: '**',
    redirectTo: 'error',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
