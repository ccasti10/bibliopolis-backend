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
import { Libro } from 'src/models/libro';
import { LibrosService } from './libros.service';

@Controller('libros')
export class LibrosController {
  constructor(private readonly servicio: LibrosService) {}

  // Registra un Libro
  @Post('')
  agregarLibro(@Body() Libro: Libro, @Res() response): void {
    return this.servicio.agregarLibro(Libro, response);
  }
  //Obtiene todos los Libros o filtra por autor y/o género
  @Get(':autor/:genero')
  obtenerLibros(
    @Param('autor') autor: string,
    @Param('genero') genero: string,
  ): Libro[] {
    return this.servicio.obtenerLibros(autor, genero);
  }

  //Obtiene Libro por id
  @Get(':isbn')
  obtenerLibroIsdb(@Param('isbn') isbn: string, @Res() response): Libro {
    return this.servicio.obtenerLibroIsbn(isbn, response);
  }

  @Delete(':isbn')
  eliminaLibro(@Param('isbn') isbn: string, @Res() response): void {
    return this.servicio.eliminarLibro(isbn, response);
  }
} // fin de la clase
