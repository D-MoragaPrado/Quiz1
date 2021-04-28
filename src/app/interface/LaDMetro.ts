export interface ClimaDia {
    id:number;
    nombre:string;
    imagen:string;
    gradosC:number;
    gradosF:number;
    clima:string;
    
}

export const ListaDias:Array<ClimaDia>=
[ //metropolitana
   { id:8,
    nombre:"Lunes",
    imagen:"img/Lluvioso.jpg",
    gradosC:16,
    gradosF:60.8,
    clima:"Lluvioso"
  },
  {  id:9,
     nombre:"Martes",
     imagen:"img/Nublado.jpg",
     gradosC:18,
     gradosF:64.4,
     clima:"Nublado"
   },
   { id:10,
     nombre:"Miercoles",
     imagen:"img/Soleado.jpg",
     gradosC:26,
     gradosF:78.8,
     clima:"Soleado"
   },
   { id:11,
     nombre:"Jueves",
     imagen:"img/Soleado.jpg",
     gradosC:23,
     gradosF:73.4,
     clima:"Soleado"
   },
   { id:12,
     nombre:"Viernes",
     imagen:"img/Nublado.jpg",
     gradosC:17,
     gradosF:62.6,
     clima:"Nublado"
   },
   { id:13,
     nombre:"Sábado",
     imagen:"img/Nublado.jpg",
     gradosC:13,
     gradosF:55.4,
     clima:"Nublado"

   },
   { id:14,
     nombre:"Domingo",
     imagen:"img/Tormenta.jpg",
     gradosC:9,
     gradosF:48.2,
     clima:"Tormenta"
   },
];