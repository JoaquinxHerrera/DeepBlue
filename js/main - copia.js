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

class paquete {
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
  let nombreUsuario = prompt("Ingrese su nombre:").toUpperCase();
  let apellidoUsuario = prompt("Ingrese su apellido:").toUpperCase();
  alert("¡Bienvenido " + nombreUsuario + " " + apellidoUsuario +"!");
}

saludar();

alert("Los paquetes disponibles son: \nA--> Snorkeling x $60  \nB--> Shipwreck x $100 \nC--> Dive with sharks x $120");


let paquete = prompt("Ingrese el paquete deseado y si quiere salir usar ESC");

do{ 
  if(paquete === "A"){
    contadorA = contadorA + 1;
    alert("Paquete: Snorkeling" + " fue agregado al carrito con exito!")
  }
  if(paquete === "B"){
    alert("Paquete: Shipwreck" + " fue agregado al carrito con exito!")
    contadorB = contadorB + 1;
  }
  if(paquete === "C"){
    alert("Paquete: Dive with sharks" + " fue agregado al carrito con exito!")
    contadorC = contadorC + 1;
  }
    
    /*if(paquetes !== "A"&&"B"&&"C"&&"ESC"){
        alert("Paquete inexistente, ingrese un paquete disponible")
    }*/
  if(paquete != "ESC"){
    paquete = prompt("Ingrese el paquete deseado o use ESC si quiere finalizar la compra");
  }
}

while(paquete != "ESC")
let subtotal = contadorA*60 + contadorB*100 + contadorC*120;
alert("Resumen del carrito: \n- Paquete A (Snorkeling): " + contadorA + " \n- Paquete B (Deep sea diving): " + contadorB + " \n- Paquete C (Shark diving): " + contadorC + "\n" +"\nSubtotal: " + subtotal);


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
alert("Resumen del carrito: \n- Paquete A (Snorkeling): " + contadorA + " \n- Paquete B (Deep sea diving): " + contadorB + " \n- Paquete C (Shark diving): " + contadorC + "\n" +"\nSubtotal: " + subtotal);
