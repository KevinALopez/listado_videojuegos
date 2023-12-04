export class Videojuego {
  private _id: number = 0;

  public get id(): number {
    return this._id;
  }

  private static contadorId: number = 1;

  constructor(
    public titulo: string,
    public valoracionMedia: number,
    public compania: string,
    public imagenUrl: string
  ) {
    this._id = Videojuego.contadorId++;
    this.titulo = titulo;
    this.valoracionMedia = valoracionMedia;
    this.compania = compania;
    this.imagenUrl = imagenUrl;
  }
}
