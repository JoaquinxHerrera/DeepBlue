const productos = [
  {
    nombre: "Snorkel amarillo",
    precio: 30,
    stock: 10,
    urlImg:"https://i.ibb.co/2dD9Gvp/eccd697ca193a1661ad8a38dc1abfb104f8773fb2b824411f4f9521a7b7e01a210306.jpg"
  },
  {
    nombre: "Snorkel azul + Mascara",
    precio: 60,
    stock: 15,
    urlImg:"https://i.ibb.co/HP3JbJn/b281a81f7645ffca5dbf074cdbb46405deaa51313f4098dbf8e045a96bb5a72010306.jpg"
  },
  {
    nombre: "Snorkel rojo + Mascara",
    precio: 60,
    stock: 7,
    urlImg:"https://i.ibb.co/M52qp2r/e438486c01efd7c13bc4d4779e233ebeac8300e497ae45660a46165b187db33610306.png"
  },
  {
    nombre: "Neoprene azul",
    precio: 130,
    stock: 5,
    urlImg:"https://i.ibb.co/Bq9mk40/03e44f14b078f5a5f259f43f64afaa5a00df4774ca08559b785887b285a5b8ab10306.jpg"
  },
  {
    nombre: "Neoprene negro",
    precio: 6,
    stock: 120,
    urlImg:"https://i.ibb.co/8NYSVpf/a10c3935790cef0729ba3c485cf43d794b619d0de9bb70adfa65d5a33e52901910306.jpg"
  },
  {
    nombre: "Aletas negras",
    precio: 30,
    stock: 10,
    urlImg:"https://i.ibb.co/SNH5K3q/86d80556509ee1d5a01b9f5cea6efd51eea9f2631a7fb848219f2a5ab1b7f13a10306.jpg"
  },
  {
    nombre: "Aletas rojas",
    precio: 30,
    stock: 12,
    urlImg:"https://i.ibb.co/v19xj4D/86789d3faf0e2cd1c04f311e824eb83cdf49dc6510fc7982827341d8a778156c10306.webp"
  },
  {
    nombre: "Linterna",
    precio: 20,
    stock: 20,
    urlImg:"https://i.ibb.co/Zm6HfZr/c6fbe6e92a08291230aeadd1eca05e30b3de74fd82fee893f166ffb0065383ba10306.jpg"
  },
  {
    nombre: "Casco neoprene",
    precio: 30,
    stock: 10,
    urlImg:"https://i.ibb.co/R7TP5Xz/4b1898faecf8e33955d2b7bce69136ff8bcf1cc5cfc39ccf0d0f7bc111e7e3ab10306.webp"
  },
  {
    nombre: "Guante neoprene",
    precio: 30,
    stock: 10,
    urlImg:"https://i.ibb.co/DDZBYt5/accd12e5be472e27d059f26ccc3d6efcec78f67b48988185def921fff3bc771510306.webp"
  },

]

const verProducto = ({nombre,precio,stock,urlImg}) => {
  const contenedorTarjetas = document.querySelector("#contenedorTarjetas")
  const tarjeta = document.createElement("div")
  tarjeta.className = "tarjeta"
  tarjeta.innerHTML = `
                      <img src="${urlImg}" alt="">
                      <h3>${nombre}</h3>
                      <span>${precio}</span>
                      <span>${stock}</span>
                      <button>Add to cart</button>                    
  `
  contenedorTarjetas.append(tarjeta)
}

const verProductos = () =>{
  
  productos.forEach(producto =>{
    if(producto.stock !=0){
      verProducto(producto)
    }
    
  })
}

verProductos()

//Paquetes
class Paquete{
  constructor(letra,nombre,precio){
    this.letra = letra;
    this.nombre = nombre;
    this.precio = precio;
  }
}

const paqueteA = new Paquete ("A","Snorkeling", 60);
const paqueteB = new Paquete ("B","Shipwreck", 100);
const paqueteC = new Paquete ("C","Dive with sharks", 120);


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
  alert(" > Paquete A - Snorkeling: 60$. \n > Paquete B - Shipwreck:100$. \n > Paquete C - Dive with sharks:120$.");
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
  
  alert(`Carrito:\n ===================================== \n > Paquete A - Snorkeling: ${paquetesA} paquete/s x 60$ c/u. \n > Paquete B - Shipwreck: ${paquetesB} paquete/s x 100$ c/u. \n > Paquete C - Dive with sharks: ${paquetesC} paquete/s x 120$ c/u.\n===================================== \n \n Subtotal: ${paquetesA*60 + paquetesB*100+paquetesC*120}`)
  alert("Gracias por su compra")  
}