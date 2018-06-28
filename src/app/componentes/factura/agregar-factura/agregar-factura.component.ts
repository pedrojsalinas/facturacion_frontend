import { Component, OnInit, ViewChild } from '@angular/core';
import  {ProductoService} from '../../../servicios/producto/producto.service';
import {Producto} from '../../../clases/producto';
import {MatSort, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-agregar-factura',
  templateUrl: './agregar-factura.component.html',
  styleUrls: ['./agregar-factura.component.scss']
})
export class AgregarFacturaComponent implements OnInit {

  producto:Producto []=[];

  displayedColumns = ['codigo', 'nombre', 'precio_compra', 'precio_venta','stock','categoria'];
  //dataSource;
  //@ViewChild(MatSort) sort: MatSort;



  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    this.productoService.getProductos().subscribe(data=>{
      this.producto = data;
      console.log(this.producto)
      this.addProducto()
      //this.dataSource = data;
      //this.dataSource = new MatTableDataSource(data);
      //.dataSource.sort = this.sort;
    })
  }
  addProducto(){
    let prod ={'codigo':42034, 'nombre':'asda', 'precio_compra':5, 'precio_venta':6,'stock':100,'categoria':50}
    this.producto.push(prod)
  }
}
