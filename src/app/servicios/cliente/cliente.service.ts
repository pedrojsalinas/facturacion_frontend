import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Cliente} from '../../clases/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  clientesUrl = 'http://127.0.0.1:8000/clientes/';

  httpOptions= {headers: new HttpHeaders({
  'Content-Type':  'application/json',
  'Authorization': 'my-auth-token'
  })}

  constructor(private http: HttpClient) {}

  addCliente(cliente:Cliente){
    this.http.post<Cliente>(this.clientesUrl,cliente,this.httpOptions).subscribe(respose=>{
      alert('Cliente creado.');
    },error=>console.log(error)
    );
  }
}
