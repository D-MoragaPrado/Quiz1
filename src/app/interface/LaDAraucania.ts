export interface ClimaDia {
    id:number;
    nombre:string;
    imagen:string;
    gradosC:number;
    gradosF:number;
    clima:string;
    
}

export const ListaDias:Array<ClimaDia>=
[ //Araucania
   { id:22,
    nombre:"Lunes",
    imagen:"img/Lluvioso.jpg",
    gradosC:12,
    gradosF:53.6,
    clima:"Lluvioso"
  },
  {  id:23,
     nombre:"Martes",
     imagen:"img/Lluvioso.jpg",
     gradosC:14,
     gradosF:57.2,
     clima:"Lluvioso"
   },
   { id:24,
     nombre:"Miercoles",
     imagen:"img/Nublado.jpg",
     gradosC:20,
     gradosF:68,
     clima:"Nublado"
   },
   { id:25,
     nombre:"Jueves",
     imagen:"img/Nublado.jpg",
     gradosC:19,
     gradosF:66.2,
     clima:"Nubladoo"
   },
   { id:26,
     nombre:"Viernes",
     imagen:"img/Lluvioso.jpg",
     gradosC:17,
     gradosF:62.6,
     clima:"Lluvioso"
   },
   { id:27,
     nombre:"Sábado",
     imagen:"img/Lluvioso.jpg",
     gradosC:12,
     gradosF:53.6,
     clima:"Lluvioso"

   },
   { id:28,
     nombre:"Domingo",
     imagen:"img/Tormenta.jpg",
     gradosC:13,
     gradosF:55.4,
     clima:"Tormenta"
   },
];