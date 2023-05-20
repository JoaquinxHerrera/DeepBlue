//Paquetes
const paquetes = [
  {letra: "A", nombre: "Snorkeling", precio: 60},
  {letra: "B", nombre: "Shipwreck", precio: 100},
  {letra: "C", nombre: "Dive with sharks", precio: 120}
];

const carrito = []
let continuar = true;

/*--No me salio filtrar el carrito por cada paquete para usar el lenght de estos nuevos arrays en vez de usar "paquetesA/B/C"
const paquetesA = carrito.filter((paquete)=>paquete.letra==="A");
const paquetesB = carrito.filter((paquete)=>paquete.letra==="B");
const paquetesC = carrito.filter((paquete)=>paquete.letra==="C");
*/
let paquetesA = 0
let paquetesB = 0
let paquetesC = 0

function saludar() {
  let nombreUsuario = prompt("Ingrese su nombre:");
  let apellidoUsuario = prompt("Ingrese su apellido:");
alert("¡Bienvenido " + nombreUsuario + " " + apellidoUsuario +"!")
}

saludar();

let seleccion = prompt ("Desea contratar algun paquete? si/no").toUpperCase();

while(seleccion != "SI" && seleccion != "NO"){
  alert("Por favor, ingresa si o no")
  seleccion = prompt("Desea contratar algun paquete? si/no").toUpperCase();
}

if(seleccion == "SI"){
  alert ("A continuacion nuestros paquetes disponibles:")
  let todosLosPaquetes = paquetes.map(
      (paquete) => "> Paquete "+ paquete.letra + " - " + paquete.nombre + ": " + paquete.precio + "$"
  );
  alert(todosLosPaquetes.join("\n"))
} else if (seleccion == "NO"){
  alert("Gracias por venir, vuelva pronto!")
}

while(continuar && seleccion != "NO"){
  let letra = prompt("Agrega un paquete al carrito").toUpperCase();
  let precio = 0

  if(letra == "A" || letra == "B" || letra == "C"){
      switch(letra) {
          case "A":
              precio = 60;
              paquetesA = paquetesA + 1
              break;
          case "B":
              precio = 100;
              paquetesB = paquetesB + 1
              break;
          case "C":
              precio = 120;
              paquetesC = paquetesC + 1
              break;
          default:
              break;
      }
      carrito.push({letra,precio})
      
  } else {
      alert("El paquete ingresado no es valido, vuelva a intentarlo")
  }
  
  continuar = confirm("Desea seguir comprando?")
}
if(seleccion != "NO"){
  alert(`Carrito:\n ===================================== \n > Paquete A - Snorkeling: ${paquetesA} paquete/s x 60$ c/u. \n > Paquete B - Shipwreck: ${paquetesB} paquete/s x 100$ c/u. \n > Paquete C - Dive with sharks: ${paquetesC} paquete/s x 120$ c/u.\n===================================== \n \n Subtotal: ${paquetesA*60 + paquetesB*100+paquetesC*120} `)

  continuar = confirm("Quiere eliminar algun paquete?")
  while (continuar){
      const paqueteEliminar = prompt("Ingrese la letra del paquete a eliminar").toUpperCase()
      const index = carrito.findIndex((paquete)=>paquete.letra == paqueteEliminar)
      if (index != -1){
          if (paqueteEliminar === "A"){
              paquetesA = paquetesA - 1
          }
          if (paqueteEliminar === "B"){
              paquetesB = paquetesB - 1
          }
          if (paqueteEliminar === "C"){
              paquetesC = paquetesC - 1
          }
          carrito.splice(index,1)
          alert("Paquete eliminado")
      }else{
          alert("Paquete no encontrado")
      }
      continuar=confirm("Quiere eliminar otro paquete?")
  }
  
  alert(`Carrito:\n ===================================== \n > Paquete A - Snorkeling: ${paquetesA} paquete/s x 60$ c/u. \n > Paquete B - Shipwreck: ${paquetesB} paquete/s x 100$ c/u. \n > Paquete C - Dive with sharks: ${paquetesC} paquete/s x 120$ c/u.\n===================================== \n \n Subtotal: ${paquetesA*60 + paquetesB*100+paquetesC*120} `)
  alert("Gracias por su compra")  
}
