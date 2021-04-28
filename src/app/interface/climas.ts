export interface Clima {
    id:number;
    nombre:string;
    imagen:string;
    
}

export const ListaClimas:Array<Clima>=
[{  id:1,
    nombre:"Soleado",
    imagen:"img/Soleado.jpg",

 },
 {  id:2,
    nombre:"Lluvioso",
    imagen:"img/Lluvioso.jpg",

 },
 {  id:3,
    nombre:"Nublado",
    imagen:"img/Nublado.jpg",

 },
 {  id:4,
    nombre:"Tormenta",
    imagen:"img/Tormenta.jpg",

 },

];