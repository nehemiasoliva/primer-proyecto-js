// productos
const productosArray = [
  {
  id:1,
  name:"Pizzera",
  price: 23000,
  stock: 12,
  img: "../img/pizzera-img.jpeg",
  },
  {
    id:2,
    name:"Le Grill: Bifera Doble",
    price: 25000,
    stock:12,
    img:"../img/bifera-img.jpeg"
  },
  {
    id:3, 
    name:"Cacerola Mediana Con Mango",
    price:23000,
    stock:12,
    img: "../img/cazuela-grande-img.jpeg",
  },
  { 
    id:4,
    name:"Cazuela Grande Con Asas - Cassoulet",
    price:30000,
    stock:12,
    img:"../img/cazuelagrande-img.jpeg",
  },
  { 
    id:5,
    name:"Guisera Con Asas",
    price:19000,
    stock:12,
    img: "../img/guisera-img.jpeg",
  },
  { 
    id:6,
    name:"Panquequera - Panquequera Grande",
    price:22500,
    stock:12,
    img:"../img/panququera-img.jpeg",
  },
  { 
    id:7,
    name:"Wok",
    price:23600,
    stock:12,
    img:"../img/wok-img.jpeg",
  },
  { 
    id:8,
    name:"sartén Grande", 
    price:27000,
    stock:12,
    img:"../img/sarten-grande.img.jpeg",
  },
  { 
    id:9,
    name:"Sartén Grande Tapa De Vidrio",
    price:32100, 
    stock:12,
    img:"../img/sarten-tapa.vidrio.img.jpeg",
  },
  {
    id:10,
    name:"Olla Acero Inoxidable Con Tapa De Vidrio",
    precio:38000,
    stock:12,
    img: "../img/olla-img.jpeg",
  },
];


// buscando elementos del DOM
const divProductos = document.getElementById('divProductos')

productosArray.forEach(producto => {

  divProductos.innerHTML +=   `
  <div class="col">
  <div class="card">
  
    <img src="${producto.img}" class="card cardProducto" alt="${producto.name}" width=50% >
     <div class="card-body">
      <h5 class="card-title">${producto.name}</h5>
       <p class="card-text">$${producto.price}</p>
       <button id="${producto.id}" class="btn btn-primary"> AGREGAR </button>
     </div>
   </div>
   </div>
  `
}); 

//carrito de compra

const carrito = []

































