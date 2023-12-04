import { Component, Input } from '@angular/core';
import { Videojuego } from '../../Entidades/Videojuego';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-listado-videojuegos',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './listado-videojuegos.component.html',
  styleUrl: './listado-videojuegos.component.css',
})
export class ListadoVideojuegosComponent {
  listaVideojuegos: Videojuego[] = [];
  videojuego: Videojuego | null = null;

  constructor() {
    let videojuego: Videojuego = new Videojuego(
      'Mortal Kombat 1',
      8.7,
      'Netherrealms',
      '/assets/MK1.png'
    );

    this.listaVideojuegos.push(videojuego);

    videojuego = new Videojuego(
      'Octopath Traveler II',
      8.5,
      'Square Enix',
      '/assets/OT2.png'
    );

    this.listaVideojuegos.push(videojuego);

    videojuego = new Videojuego(
      'The Elder Scrolls V : Skyrim',
      9.4,
      'Bethesda',
      '/assets/skyrim.png'
    );

    this.listaVideojuegos.push(videojuego);
  }
}
