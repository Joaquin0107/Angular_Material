import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  listUsuarios: Usuario[] = [
    { usuario: 'peGc', nombre: 'Pedro', apellido: 'García', sexo: 'Masculino' },
    { usuario: 'calz', nombre: 'Carla', apellido: 'Pérez', sexo: 'Femenino' },
    { usuario: 'angV', nombre: 'Ana', apellido: 'Vega', sexo: 'Femenino' },
    { usuario: 'jumzG', nombre: 'Juan', apellido: 'Gómez', sexo: 'Masculino' },
  ];

  constructor() {}

  getUsuario() {
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number) {
    this.listUsuarios.splice(index, 1);
  }

  agregarUsuario(usuario: Usuario) {
    this.listUsuarios.unshift(usuario);
  }
}
