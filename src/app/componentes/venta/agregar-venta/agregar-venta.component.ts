import { Component, OnInit ,ChangeDetectorRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Producto} from '../../../clases/producto';
import {Detalle} from '../../../clases/detalle';
import {ProductoService} from '../../../servicios/producto/producto.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material';

import { MatTable } from '@angular/material';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-agregar-venta',
  templateUrl: './agregar-venta.component.html',
  styleUrls: ['./agregar-venta.component.scss']
})
export class AgregarVentaComponent implements OnInit {
  @ViewChild(MatTable) table: MatTable<any>;
filteredProductos: Observable<Producto[]>;
  myControl: FormControl = new FormControl();
  displayedColumns = ['nombre', 'precio', 'cantidad', 'total'];
  productos:Producto[]=[];
  dataSource : MatTableDataSource<Detalle>;
  detalles:Detalle[]=[];
  detalle:Detalle={
    nombre:'',
    precio:null,
    cantidad:null,
    total:null,
  };
  cantidad = 1;
  total=0;
  iva=0;
  subtotal=0;
  isCliente = true;

  constructor(private productoService: ProductoService,private changeDetectorRefs: ChangeDetectorRef) {
    let prod ={'nombre':'Coca Cola', 'precio':1, 'cantidad':6,'total':6};
    let prod1 ={'nombre':'Pepsi Cola', 'precio':1, 'cantidad':6,'total':8};
    this.detalles.push(prod);
    this.detalles.push(prod1);
    this.detalles.forEach(data=>{
      this.total +=data.total;
    })
    this.iva=(this.total*0.12);
    this.subtotal=this.total-this.iva;
  }

  ngOnInit() {
    this.productoService.getProductos().subscribe(data=>{
  this.productos = data;
});
  this.filteredProductos = this.myControl.valueChanges
    .pipe(
      startWith<string | Producto>(''),
      map(value => typeof value === 'string' ? value : value.nombre),
      map(nombre => nombre ? this.filter(nombre) : this.productos.slice())
    );
  }
  filterproductos(name: string) {
 return this.productos.filter(producto =>
   producto.nombre.toLowerCase().indexOf(name.toLowerCase()) === 0);
}

filter(name: string): Producto[] {
    return this.productos.filter(option =>
  option.nombre.toLowerCase().indexOf(name.toLowerCase()) === 0);
}

displayFn(producto?: Producto): string | undefined {
  return "";
}

dataChanged(e){
  if (e !== null && typeof e === 'object' ) {
    this.detalle.nombre = e.nombre;
    this.detalle.precio = e.precio_venta;
    this.detalle.cantidad = this.cantidad;
    let total:number;
    total = e.precio_venta * this.cantidad;
    this.detalle.total = total;
    console.log(this.detalle)
    this.dataSource.data.push(this.detalle);
    console.log(this.detalles);
  //  this.detalles=this.detalles.slice();
  }else{
    console.log('undefined')
  }

    }
  onRowClicked(row){
    console.log(row);
  }

}
