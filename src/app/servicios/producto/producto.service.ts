import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Producto} from '../../clases/producto';
import {Categoria} from '../../clases/categoria';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productosUrl = 'http://127.0.0.1:8000/productos/';
  categoriasUrl = 'http://127.0.0.1:8000/categorias/';

  httpOptions= {headers: new HttpHeaders({
  'Content-Type':  'application/json',
  'Authorization': 'my-auth-token'
  })}


  constructor(private http: HttpClient) {
   }

  getProductos() {
    return this.http.get<Producto[]>(this.productosUrl);
  }
  getCategorias() {
    return this.http.get<Categoria[]>(this.categoriasUrl);
  }
  addProducto(producto:Producto){
    this.http.post<Producto>(this.productosUrl,producto,this.httpOptions).subscribe(respose=>{
      alert('Producto creado.');
    },error=>console.log(error)
    );
  }
}
