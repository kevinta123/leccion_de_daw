
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  login() {
    // Aquí puedes agregar la lógica para validar el usuario y la contraseña
    if (this.username === 'usuario' && this.password === 'contraseña') {
      console.log('Inicio de sesión exitoso');
      // Aquí puedes redirigir a otra página o realizar otras acciones después de un inicio de sesión exitoso
    } else {
      console.log('Inicio de sesión fallido');
      // Aquí puedes mostrar un mensaje de error o realizar otras acciones después de un inicio de sesión fallido
    }
  }
}




