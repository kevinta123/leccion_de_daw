import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Personas } from '../models/Personas';

@Component({
  selector: 'app-elementos',
  templateUrl: './elementos.component.html',
  styleUrls: ['./elementos.component.css']
})
export class ElementosComponent implements OnInit{

  form!: FormGroup;
  cedula ="";
  nombre ="";
  apellido ="";
  fechaNacimiento ="";
  edad ="";
  listapersonasEliminadas: Personas[] =[];
  listaPersonas: Personas[] = [];

  ngOnInit(): void{
    this.form = new FormGroup({
      cedula: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      fechaNacimiento: new FormControl('', Validators.required),
      edad: new FormControl('', Validators.required)
    })
  }
  
  agregarPersona(){
    const personas: Personas = {
      cedula: this.form.value.cedula,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      fechaNacimiento: this.form.value.fechaNacimiento,
      ciudad: this.form.value.ciudad,
      estado: true,
    }
    this.listaPersonas.push(personas);
    console.log(personas);
  }

  eliminarPersona(indice: number, personas: Personas): void{
    this.listapersonasEliminadas.push(personas);
    console.log(this.listapersonasEliminadas);
    this.listaPersonas.splice(indice, 1);
  }
}
