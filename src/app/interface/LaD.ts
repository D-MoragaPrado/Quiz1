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
[ //Valparaiso
  { id:1,
    nombre:"Lunes",
    imagen:"img/Lluvioso.jpg",
    gradosC:16,
    gradosF:60.8,
    clima:"Lluvioso",
  },
  {  id:2,
     nombre:"Martes",
     imagen:"img/Lluvioso.jpg",
     gradosC:17,
     gradosF:62.6,
     clima:"Lluvioso",
   },
   { id:3,
     nombre:"Miercoles",
     imagen:"img/Nublado.jpg",
     gradosC:17,
     gradosF:62.6,
     clima:"Nublado",
   },
   { id:4,
     nombre:"Jueves",
     imagen:"img/Soleado.jpg",
     gradosC:17,
     gradosF:62.6,
     clima:"Soleado",
   },
   { id:5,
     nombre:"Viernes",
     imagen:"img/Nublado.jpg",
     gradosC:15,
     gradosF:59,
     clima:"Nublado",
   },
   { id:6,
     nombre:"Sábado",
     imagen:"img/Lluvioso.jpg",
     gradosC:15,
     gradosF:59,
     clima:"Lluvioso"

   },
   { id:7,
     nombre:"Domingo",
     imagen:"img/Tormenta.jpg",
     gradosC:14,
     gradosF:57.2,
     clima:"Tormenta"
   },

];

