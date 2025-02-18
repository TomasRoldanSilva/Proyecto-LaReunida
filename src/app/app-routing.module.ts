/**
 * Módulo de configuración de rutas de la aplicación.
 * Define las rutas y los componentes asociados.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './caracteristicas/inicio/inicio.component';
import { NosotrosComponent } from './caracteristicas/nosotros/nosotros.component';
import { ContactoComponent } from './caracteristicas/contacto/contacto.component';
import { ServiciosComponent } from './caracteristicas/servicios/servicios.component';
import { GaleriaComponent } from './caracteristicas/galeria/galeria.component';
import { BlogComponent } from './caracteristicas/blog/blog.component';

/**
 * Definición de rutas para la navegación de la aplicación.
 */
const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: BlogComponent },  // Ruta para artículos individuales de blog
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }