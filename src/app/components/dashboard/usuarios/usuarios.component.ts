import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuario } from './../../../interfaces/usuario';
import { UsuarioService } from './../../../services/usuario.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  listUsuarios: Usuario[] = [];
  displayedColumns: string[] = [
    'usuario',
    'nombre',
    'apellido',
    'sexo',
    'acciones',
  ];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private usuarioService: UsuarioService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.listUsuarios = this.usuarioService.getUsuario();
    this.dataSource = new MatTableDataSource(this.listUsuarios);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarUsuario(index: number) {
    console.log(index);
    this.usuarioService.eliminarUsuario(index);
    this.cargarUsuarios();

    this.snackBar.open('El usuario fue eliminado con éxito', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
