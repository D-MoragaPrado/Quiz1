import{ Clima,ListaClimas} from "../interface/climas";

export interface ClimaDia {
    id:number;
    nombre:string;
    imagen:string;
    gradosC:number;
    gradosF:number;
    clima:string;
    

}

export const ListaDias:Array<ClimaDia>=
[{  id:1,
    nombre:"Lunes",
    imagen:"img/Soleado.jpg",
    gradosC:15,
    gradosF:96,
    clima:"Soleado"
  },
  {  id:2,
     nombre:"Martes",
     imagen:"img/Lluvioso.jpg",
     gradosC:15,
     gradosF:96,
     clima:"Lluvioso"
   },
   { id:3,
     nombre:"Miercoles",
     imagen:"img/Nublado.jpg",
     gradosC:15,
     gradosF:96,
     clima:"Nublado"
   },
   { id:4,
     nombre:"Jueves",
     imagen:"img/Tormenta.jpg",
     gradosC:15,
     gradosF:96,
     clima:"Tormenta"
   },
   { id:5,
     nombre:"Viernes",
     imagen:"img/Soleado.jpg",
     gradosC:15,
     gradosF:96,
     clima:"Soleado"
   },
   { id:6,
     nombre:"Sábado",
     imagen:"img/Lluvioso.jpg",
     gradosC:15,
     gradosF:96,
     clima:"Lluvioso"

   },
   { id:7,
     nombre:"Domingo",
     imagen:"img/Tormenta.jpg",
     gradosC:15,
     gradosF:96,
     clima:"Tormenta"
   },


];

