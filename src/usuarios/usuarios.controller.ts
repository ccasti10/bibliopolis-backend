import {
  Body,
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Res,
} from '@nestjs/common';
import { Usuario } from 'src/models/usuario';
import { UsuariosService } from './usuarios.service';
import { UsuarioDto } from 'src/models/usuario.dto';
import { response } from 'express';

@Controller('usuarios')
export class UsuariosController {
  private Usuario: Usuario[] = [];
  constructor(private readonly servicio: UsuariosService) {}

  // Registra un usuario
  @Post('')
  registraUsuario(@Body() Usuario: Usuario, @Res() response): void {
    return this.servicio.agregarUsuario(Usuario, response);
  }
  //Obtiene todos los usuarios
  @Get()
  obtenerUsuarioDto(): UsuarioDto[] {
    return this.servicio.obtieneUsuarioDTO();
  }

  //Obtiene usuario por id
  @Get(':id')
  obtenerUsuarioID(@Param('id') id: number, @Res() response): Usuario {
    return this.servicio.obtenerUsuario(id, response);
  }

  @Delete(':id')
  eliminaUsuario(@Param('id') id: number, @Res() response): void {
    return this.servicio.eliminarUsuario(id, response);
  }
  @Put(':id')
  editarUsuario(
    @Param('id') id: number,
    @Body() Usuario: Usuario,
    @Res() response,
  ): void {
    return this.servicio.editarUsuario(id, Usuario, response);
  }
} // fin de la clase
