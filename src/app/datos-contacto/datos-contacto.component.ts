import { Component } from '@angular/core';

@Component({
  selector: 'app-datos-contacto',
  templateUrl: './datos-contacto.component.html',
  styleUrls: ['./datos-contacto.component.css']
})
export class DatosContactoComponent {
  nombre: string = 'Kevin Tamayo';
  email: string = 'kevin@example.com';
  telefono: string = '123-456-7890';
}
