//Paquetes
/*const paquetes =[
 {
  letra:"A",
  nombre:"Snorkeling",
  precio:60,
},
  {
    letra:"B",
    nombre:"Shipwreck",
    precio:100,
},
{
  letra:"C",
  nombre:"Dive with sharks",
  precio:120,
}
]
*/

class Paquete {
  constructor (letraPaquete,dia){
    this.letraPaquete = letraPaquete
    this.dia = dia
  }
}

const paquetes = []
let continuar = true
let contadorA = 0;
let contadorB = 0;
let contadorC = 0;

function saludar() {
  let nombreUsuario = prompt("Ingrese su nombre:");
  let apellidoUsuario = prompt("Ingrese su apellido:");
  alert("¡Bienvenido " + nombreUsuario + " " + apellidoUsuario +"!")
}

saludar();

alert("Los paquetes disponibles son: \nA--> Snorkeling x $60  \nB--> Shipwreck x $100 \nC--> Dive with sharks x $120");

while(continuar){
  const letraPaquete = prompt("Ingrese el paquete deseado ").toUpperCase()
  const dia = parseInt(prompt("Ingrese dia para el tour").toUpperCase())
  const paquete = new Paquete (letraPaquete,dia)
  paquetes.push(paquete)
    if(letraPaquete === "A"){
      contadorA = contadorA + 1;
      alert("Paquete: Snorkeling" + " fue agregado al carrito con exito!")
    }
    if(letraPaquete === "B"){
      alert("Paquete: Shipwreck"+ " fue agregado al carrito con exito!")
      contadorB = contadorB + 1;
    }
    if(letraPaquete === "C"){
      alert("Paquete: Dive with sharks"+ " fue agregado al carrito con exito!")
      contadorC = contadorC + 1;
    }
      
      /*if(paquetes !== "A"&&"B"&&"C"&&"ESC"){
          alert("Paquete inexistente, ingrese un paquete disponible")
      }*/
  continuar = confirm ("Quiere seguir cargando paquetes?") 
}  

let subtotal = contadorA*60 + contadorB*100 + contadorC*120;
alert("Resumen del carrito: \n- Paquete A (Snorkeling): " + contadorA + " \n- Paquete B (Deep sea diving): " + contadorB + " \n- Paquete C (Shark diving): " + contadorC + "\n" +"\nSubtotal: " + subtotal);

while (continuar){
  const paqueteEliminar = prompt("Ingrese la letra del paquete a eliminar")
  const index = paquetes.findIndex((paquete)=>paquete.letraPaquete == paqueteEliminar)
  if (index != -1){
    paquetes.splice(index,1)
    alert("Paquete eliminado")
  }else{
    alert("Paquete no encontrado")
  }
  continuar=confirm("Quiere eliminar otro paquete?")
}
console.log(paquetes)
/*
continuar = confirm("Quiere eliminar algun paquete?")
while (continuar){
  const paqueteLetraEliminar = prompt ("que paquete desea eliminar?").toUpperCase()
  const index = paquetes.findIndex((paquete)=> paquete.letra === paqueteLetraEliminar)
    if(index != -1){
      paquetes.splice(index,1)
      alert("Paquete eliminado")
        if(paqueteLetraEliminar === "A"){
          contadorA = contadorA - 1;
        }
        if(paqueteLetraEliminar === "B"){
          contadorB = contadorB - 1;
        }
        if(paqueteLetraEliminar === "C"){
          contadorC = contadorC -1;
        }
    }else{
      alert("El paquete es inexistente")
    }
  continuar = confirm ("Quiere eliminar algun producto?")
}

*/
alert("Resumen del carrito: \n- Paquete A (Snorkeling): " + contadorA + " \n- Paquete B (Deep sea diving): " + contadorB + " \n- Paquete C (Shark diving): " + contadorC + "\n" +"\nSubtotal: " + subtotal);
