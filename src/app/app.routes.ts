import { Routes } from '@angular/router';
import { ListadoVideojuegosComponent } from './components/listado-videojuegos/listado-videojuegos.component';
import { VideojuegoComponent } from './components/videojuego/videojuego.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'listadoVideojuegos/videojuego', component: VideojuegoComponent },
  {
    path: 'listadoVideojuegos',
    component: ListadoVideojuegosComponent,
  },
  {
    path: 'sobreNosotros',
    component: SobreNosotrosComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  },
];
