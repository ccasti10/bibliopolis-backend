import { Injectable } from '@nestjs/common';
import { Libro } from 'src/models/libro';
import { Param, Body, Res } from '@nestjs/common';
import { response } from 'express';

@Injectable()
export class LibrosService {
  private Libro: Libro[] = [];

  //Obtener todas los libros y permitir filtrar por autor y/o género (Si no se envían los filtros de autor o género debe devolver todos los libros,)
  obtenerLibros(
    @Param('autor') autor: string,
    @Param('genero') genero: string,
  ): Libro[] {
    if (autor && genero == null) {
      return this.Libro;
    }
    if (autor != null && genero == null) {
      for (let i = 0; i < this.Libro.length; i++) {
        if (this.Libro[i].autor === autor) {
          return this.Libro;
        }
      }
    }
    if (autor == null && genero != null) {
      for (let i = 0; i < this.Libro.length; i++) {
        if (this.Libro[i].genero === genero) {
          return this.Libro;
        }
      }
    }
  }
  //Insertar un Libro y valida que no exista el mail
  agregarLibro(@Body() Libro: Libro, @Res() response): void {
    let valida: boolean = false;
    for (let i = 0; i < this.Libro.length; i++) {
      if (this.Libro[i].isbn === Libro.isbn) valida = true;
    }
    if (!valida) {
      this.Libro.push(Libro);
      response.status(201).send(Libro);
    } else {
      response.status(400).send('ISBN ya registrado');
    }
  }

  //Obtener un Libro por id
  obtenerLibroIsbn(@Param('isbn') isbn: string, @Res() response): Libro {
    if (this.Libro.length > 0) {
      for (let i = 0; i < this.Libro.length; i++) {
        if (this.Libro[i].isbn == isbn) {
          return this.Libro[i];
        } else {
          response.status(404).send('Libro no encontrado');
        }
      }
    }
  }
  //Eliminar un Libro por id
  eliminarLibro(@Param('isbn') isbn: string, @Res() response): void {
    if (this.Libro.length > 0) {
      for (let i = 0; i < this.Libro.length; i++) {
        if (this.Libro[i].isbn == isbn) {
          this.Libro.splice(i, 1);
          response.status(200).send('Libro eliminado');
        }
      }
    }
    response.status(404).send('Libro no encontrado');
  }
//  //Editar un Libro por id
//  editarLibro(id: number, Libro: Libro, @Res() response): void {
//    for (let i = 0; i < this.Libro.length; i++) {
//      if (this.Libro[i].id === id) {
//        this.Libro[i].nombre = Libro.nombre;
//        this.Libro[i].correoElectronico = Libro.correoElectronico;
//        this.Libro[i].direccion = Libro.direccion;
//        response.status(200).send('Libro actualizado');
//      }
//    }
//  }
} // fin de la clase
