import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../../../servicios/producto/producto.service';
import {Producto} from '../../../clases/producto';
import {Categoria} from '../../../clases/categoria';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.scss']
})
export class AgregarProductoComponent implements OnInit {
  producto:Producto;
  categoria:Categoria;
  productos: Producto[] = [];
  categorias: Categoria[] = [];

  productoForm: FormGroup;

  constructor(private productoService: ProductoService,private fb: FormBuilder) {
    this.getCategorias();
  }

  ngOnInit() {
this.productoForm = this.fb.group({
  codigo: ['',[Validators.required,Validators.pattern("^[0-9]*$")]],
  nombre:['', Validators.required ],
  precio_compra:['', Validators.required ],
  precio_venta:['', Validators.required ],
  stock:['', [Validators.required,Validators.pattern("^[0-9]*$")]],
  categoria:new FormControl(),
})
  }

  getCategorias(){
    this.productoService.getCategorias().subscribe(data=>{
      this.categorias = data
    })
  }
  addProducto(){
    //console.log(this.productoForm.value);
    this.productoService.addProducto(this.productoForm.value);
  }
  }
