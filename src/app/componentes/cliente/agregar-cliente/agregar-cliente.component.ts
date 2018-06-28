import { Component, OnInit } from '@angular/core';
import {Cliente} from '../../../clases/cliente';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import {ClienteService} from '../../../servicios/cliente/cliente.service';
@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.scss']
})
export class AgregarClienteComponent implements OnInit {
  cliente:Cliente;
  clientes: Cliente[]=[];

  clienteForm: FormGroup;

  constructor(private clienteService: ClienteService,private fb: FormBuilder) { }

  ngOnInit() {
    this.clienteForm = this.fb.group({
      id: ['',[Validators.required,Validators.pattern("^[0-9]*$")]],
      nombre:['', Validators.required ],
      apellido:['', Validators.required ],
      direccion:['', Validators.required ],
      telefono:['', [Validators.required,Validators.pattern("^[0-9]*$")]],
      email:new FormControl(),
    })
  }
  addCliente(){
    //console.log(this.productoForm.value);
    this.clienteService.addCliente(this.clienteForm.value);
  }
}
