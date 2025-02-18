/**
 * Módulo principal de la aplicación.
 * Declara y configura los módulos y componentes principales.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './caracteristicas/inicio/inicio.component';
import { NosotrosComponent } from './caracteristicas/nosotros/nosotros.component';
import { ContactoComponent } from './caracteristicas/contacto/contacto.component';
import { ServiciosComponent } from './caracteristicas/servicios/servicios.component';
import { GaleriaComponent } from './caracteristicas/galeria/galeria.component';
import { BlogComponent } from './caracteristicas/blog/blog.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NosotrosComponent,
    ContactoComponent,
    ServiciosComponent,
    GaleriaComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }