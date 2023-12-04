import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-videojuego',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './videojuego.component.html',
  styleUrl: './videojuego.component.css',
})
export class VideojuegoComponent {
  id: number;
  titulo: string;
  valoracionMedia: number;
  compania: string;
  imagenUrl: string;

  constructor(private router: Router) {
    let videojuego = router.getCurrentNavigation()?.extras.state;

    this.id = videojuego?.['_id'];
    this.titulo = videojuego?.['titulo'];
    this.valoracionMedia = videojuego?.['valoracionMedia'];
    this.compania = videojuego?.['compania'];
    this.imagenUrl = videojuego?.['imagenUrl'];
  }
}
