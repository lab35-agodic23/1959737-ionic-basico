import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultaService } from '../consulta.service';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.scss'],
})
export class ProductoDetalleComponent  implements OnInit {
  idProducto: string = this.ruta.snapshot.params['id'];
  constructor(private ruta:ActivatedRoute,private consulta:ConsultaService) { 
    
  }
  producto:any = {}
  consultaProducto(id:string){
    this.consulta.getProductosDetalle(id)
    .subscribe((resp:Object)=>{
      console.log(resp);
      this.producto=resp as any;
    });
    
  }
  ngOnInit() {
    this.consultaProducto(this.idProducto);
  }

}
