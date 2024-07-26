import { Injectable } from '@nestjs/common';
import { Param, Body, Res } from '@nestjs/common';
import { response } from 'express';
import { Usuario } from 'src/models/usuario';
import { UsuarioDto } from 'src/models/usuario.dto';

@Injectable()
export class UsuariosService {
  private Usuario: Usuario[] = [];

  //Obtener todos los usuarios
  obtenerUsuarios(): Usuario[] {
    return this.Usuario;
  }
  //Insertar un usuario y valida que no exista el mail
  agregarUsuario(@Body() usuario: Usuario, @Res() response): void {
    let valida: boolean = false;
    for (let i = 0; i < this.Usuario.length; i++) {
      if (this.Usuario[i].correoElectronico === usuario.correoElectronico) {
        valida = true;
      }
    }
    if (!valida) {
      usuario.id = this.Usuario.length + 1;
      this.Usuario.push(usuario);
      response.status(201).send(usuario);
    } else {
      response.status(400).send('email ya resgistrado');
    }
  }
  //Obtener un usuario por id
  obtenerUsuario(@Param('id') id: number, @Res() response): Usuario {
    if (this.Usuario.length > 0) {
      for (let i = 0; i < this.Usuario.length; i++) {
        if (this.Usuario[i].id == id) {
          return this.Usuario[i];
        } else {
          response.status(404).send('Usuario no encontrado');
        }
      }
    }
  }
  //Eliminar un usuario por id
  eliminarUsuario(@Param('id') id: number, @Res() response): void {
    if (this.Usuario.length > 0) {
      for (let i = 0; i < this.Usuario.length; i++) {
        if (this.Usuario[i].id == id) {
          this.Usuario.splice(i, 1);
          response.status(200).send('Usuario eliminado');
        }
      }
    }
    response.status(404).send('Usuario no encontrado');
  }
  //Editar un usuario por id
  editarUsuario(id: number, usuario: Usuario, @Res() response): void {
    for (let i = 0; i < this.Usuario.length; i++) {
      if (this.Usuario[i].id === id) {
        this.Usuario[i].nombre = usuario.nombre;
        this.Usuario[i].correoElectronico = usuario.correoElectronico;
        this.Usuario[i].direccion = usuario.direccion;
        response.status(200).send('Usuario actualizado');
      }
    }
  }
  //Obtiene todos los usuarios sin contraseña
  obtieneUsuarioDTO(): UsuarioDto[] {
    // Excluye la password de los usuarios
    let listaUsuarios: UsuarioDto[] = [];
    for (let i = 0; i < this.Usuario.length; i++) {
      listaUsuarios.push(
        new UsuarioDto(
          this.Usuario[i].id,
          this.Usuario[i].nombre,
          this.Usuario[i].correoElectronico,
          this.Usuario[i].direccion,
          this.Usuario[i].historialPedidos,
        ),
      );
    }
    return listaUsuarios;
  }
}
