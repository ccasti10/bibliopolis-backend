import { Pedido } from "./pedido";

export class Usuario {
  constructor(
    public id: number,
    public nombre: string,
    public correoElectronico: string,
    private contrasena: string,
    public direccion: string,
    public historialPedidos: Pedido[],
  ) {}
}
