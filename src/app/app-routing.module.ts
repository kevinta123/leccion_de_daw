import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ElementosComponent } from './elementos/elementos.component';
import { DatosContactoComponent } from './datos-contacto/datos-contacto.component';



const routes: Routes = [ 

  { path: '', redirectTo: 'login', pathMatch: 'full'  },
  { path: 'login',component: LoginComponent},
  { path: 'elementos', component: ElementosComponent },
  { path: 'datos-contacto', component: DatosContactoComponent }

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
