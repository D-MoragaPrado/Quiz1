export interface ClimaDia {
    id:number;
    nombre:string;
    imagen:string;
    gradosC:number;
    gradosF:number;
    clima:string;
    
}

export const ListaDias:Array<ClimaDia>=
[ //BioBio
   { id:15,
    nombre:"Lunes",
    imagen:"img/Lluvioso.jpg",
    gradosC:13,
    gradosF:55.4,
    clima:"Lluvioso"
  },
  {  id:16,
     nombre:"Martes",
     imagen:"img/Nublado.jpg",
     gradosC:16,
     gradosF:60.8,
     clima:"Nublado"
   },
   { id:17,
     nombre:"Miercoles",
     imagen:"img/Nublado.jpg",
     gradosC:23,
     gradosF:73.4,
     clima:"Nublado"
   },
   { id:18,
     nombre:"Jueves",
     imagen:"img/Nublado.jpg",
     gradosC:21,
     gradosF:69.8,
     clima:"Nubladoo"
   },
   { id:19,
     nombre:"Viernes",
     imagen:"img/Nublado.jpg",
     gradosC:17,
     gradosF:62.6,
     clima:"Nublado"
   },
   { id:20,
     nombre:"Sábado",
     imagen:"img/Lluvioso.jpg",
     gradosC:12,
     gradosF:53.6,
     clima:"Lluvioso"

   },
   { id:21,
     nombre:"Domingo",
     imagen:"img/Lluvioso.jpg",
     gradosC:13,
     gradosF:55.4,
     clima:"Lluvioso"
   },
];