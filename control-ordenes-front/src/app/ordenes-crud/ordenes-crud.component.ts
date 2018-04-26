import { Component, OnInit, ViewChild } from '@angular/core';
import { Orden } from '../orden';
import { Cliente } from '../cliente';
import { Condition } from '../condition';
import { Photo } from '../photo';
import { OrdenService } from '../orden.service';
import { CombosService } from '../combos.service';
import { PhotoService } from '../photo.service';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import * as pdfMake from 'pdfmake/build/pdfmake';
 import * as pdfFonts from 'pdfmake/build/vfs_fonts';



@Component({
  selector: 'app-ordenes-crud',
  templateUrl: './ordenes-crud.component.html',
  styleUrls: ['./ordenes-crud.component.css']
})
export class OrdenesCrudComponent implements OnInit {

  files : FileList;
  data: Orden[];
  clientes: Cliente[];
  conditions: Condition[];
  photos: Photo[];
  current_orden: Orden;
  current_photo: Photo;
  photo_names: string[];
  //files : FileList;
  crud_operation = { is_new: false, is_visible: false };
  query: string = '';
  queryPhotos: string = '';
  url: string = '';
  isEntregado: boolean;
  private fileReader = new FileReader();
  //private base64Encoded: string;
  //base64Img = require('base64-img');
  //carro = this.base64Img.base64Sync('./assets/images/carro.jpg');

  @ViewChild(SignaturePad) signaturePad: SignaturePad;


  constructor(private service: OrdenService, private combos: CombosService, private photoService: PhotoService) {

   }

  ngOnInit() {
    this.service.read(this.query).subscribe(res => {
      //debugger;
      this.data = res.json();
      this.current_orden = new Orden();
    });
    this.combos.clientesReturn().subscribe(res => {
      this.clientes = res.json();
    });
    this.combos.conditionsReturn().subscribe(res => {
      this.conditions = res.json();
    });

  }

  generarPdf(){
      debugger;
      pdfMake.vfs = pdfFonts.pdfMake.vfs;
      var dd = {

                 header:    { columns: [{text: 'BOLETA DE TRABAJO FINALIZADA', alignment: 'center'}]},
                   content:[
                               {text: 'Nota recibido: ' + this.current_orden.nota_recibido + "\n\n\n" +
                                      'Fecha recibido: ' + this.current_orden.fecha_recibido + "\n\n\n" +
                                      'Nota entrega: ' + this.current_orden.nota_entregado + "\n\n\n" +
                                      'Fecha entrega' + this.current_orden.fecha_entregado + "\n\n\n" +
                                      'Estado: ' + this.current_orden.estado + "\n\n\n" +
                                      'Cliente: ' + this.current_orden.cedula_cliente + "\n\n\n" +
                                      'Costo: ' + this.current_orden.costo + "\n\n\n" +
                                      'Firma: ' +  "\n\n\n"},



                                {image: this.current_orden.firma, width: 150, height: 100},
                            ],

                            styles:{
                              header:{
                                margin: 30,
                                fontSize: 22,
                                bold: true
                              }

                            },

                            footer: {
                                    columns: [
                                      { text: 'Gracias por preferirnos', alignment: 'center' }
                                    ]
                            },

                };
      pdfMake.createPdf(dd).download();


  }



  new(){
    this.current_orden = new Orden();
    this.isEntregado = false;
    this.current_photo = new Photo();
    //this.current_photo.nombre = "";
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = true;
  }

  edit(row) {
    //let firmaPad = new SignaturePad();
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = false;
    this.current_photo = new Photo();
    this.current_orden = row;
    //debugger;
    //
    this.current_photo.id_ordens = this.current_orden.id;
    if(this.current_orden.estado === "Entregado"){
      this.isEntregado = true;
    }else{
      this.isEntregado = false;
    }debugger;
    if(this.current_orden != null)
    {
      this.photoService.read(this.current_orden.id.toString()).subscribe(res => {
        //debugger;
        this.photos = res.json();
      });
    }
    //this.generarPdf();

    setTimeout(() =>  this.signaturePad.fromDataURL(this.current_orden.firma), 500);
  }


  delete(id) {
    this.service.delete(id).subscribe(res => {
      this.crud_operation.is_new = false;
      this.ngOnInit();
    });
  }


  save() {

    if (this.crud_operation.is_new) {

    /*
             id: number;
      nota_recibido: string;
      fecha_recibido: string;
      nota_entregado: string;
      fecha_entregado: string;
      estado: string;
      cedula_cliente: string;
      costo: number;
      firma: string;*/
        this.current_orden.nota_entregado = "-";
        this.current_orden.fecha_entregado = "-";
        this.current_orden.costo = 0;
        this.current_orden.firma = this.signaturePad.toDataURL();

        this.service.insert(this.current_orden).subscribe(res => {
        this.current_orden = new Orden();
        this.crud_operation.is_visible = false;
        this.ngOnInit();
      });
      return;
    }

      //this.current_photo.nombre;
      debugger;
      this.current_orden.firma = this.signaturePad.toDataURL();
      this.service.update(this.current_orden).subscribe(res => {
      this.current_orden = new Orden();
      /*this.photoService.insert(this.current_photo).subscribe(res => {
      this.current_photo = new Photo();*/
      this.crud_operation.is_visible = false;
      this.insertPhotos();
      this.ngOnInit();
      });
      this.insertPhotos();

  }

 getFiles(event) {
   debugger;
        this.files = event.target.files;
        this.current_photo.nombre = this.files[0].name;
    }

    insertPhotos(){
      debugger;
      for (var i = 0; i < this.files.length; i++) {
         this.current_photo.nombre = this.files[i].name;

         this.photoService.insert(this.current_photo).subscribe(res => {
         this.current_photo = new Photo();
         });
      }
      this.current_photo = new Photo();
      debugger;
      this.ngOnInit();
    }

  limpiar_firma(){
    this.signaturePad.clear();
  }


}

