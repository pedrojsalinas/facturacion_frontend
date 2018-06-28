import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AgregarProductoComponent } from './componentes/inventario/agregar-producto/agregar-producto.component';

import {MatTableModule,
  MatDividerModule,
  MatIconModule,
  MatSortModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatAutocompleteModule,
  MatGridListModule} from '@angular/material';

//Servicios
import {ProductoService} from './servicios/producto/producto.service';
import {ClienteService} from './servicios/cliente/cliente.service';
import { AgregarClienteComponent } from './componentes/cliente/agregar-cliente/agregar-cliente.component';
import { AgregarFacturaComponent } from './componentes/factura/agregar-factura/agregar-factura.component';
import { AgregarVentaComponent } from './componentes/venta/agregar-venta/agregar-venta.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarProductoComponent,
    AgregarClienteComponent,
    AgregarFacturaComponent,
    AgregarVentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatAutocompleteModule,
    MatGridListModule,
    MatDividerModule,
    MatIconModule
  ],
  providers: [
    ProductoService,
    ClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
