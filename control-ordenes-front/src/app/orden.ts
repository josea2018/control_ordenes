export class Orden {
  id: number;
  nota_recibido: string;
  fecha_recibido: DateTimeFormat;
  nota_entregado: string;
  fecha_entregado: DateTimeFormat;
  estado: string;
  cedula_cliente: string;
  costo: number;
  firma: string;

  constructor() {
    // code...
  }
}
