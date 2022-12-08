// // elementos del Dom
// const inputNombre = document.getElementById("nombre")
// const inputApellido = document.getElementById("apellido")
// const botonIngresar = document.getElementById("ingresar")
// const divInicial = document.getElementById("divInicial")
// const divSaludar = document.getElementById("divSaludar")
// const selectProductos = document.getElementById("lista")
// const divCarrito = document.getElementById("divCarrito")

// // evento boton
// botonIngresar.onclick = () => {
//     if (inputNombre.value && inputApellido.value) {
//         const usuario = {
//             nombre: inputNombre.value,
//             apellido: inputApellido.value,
//         }
//         localStorage.setItem("infoUsuario", JSON.stringify(usuario))

//         //eliminando div del dom
//         divInicial.remove()

//         //agregando un h1 al dom
//         const saludarTitulo = document.createElement("h1")
//         saludarTitulo.innerText = `Bienvenido/a ${usuario.nombre} ${usuario.apellido}, ya puedes comenzar a comprar!`
//         divSaludar.append(saludarTitulo)
//      console.log
//     }
//}