const d = document;
const texArea = d.getElementById("textarea");
const imagenPrincipal = d.getElementById("imagen1");
const textoEncrip = d.getElementById("msj__encrip");
const tituloEncrip = d.getElementById("titulo-encrip");
const btnEncriptar = d.getElementById("form-btn-encriptar");
const btnDesencriptar = d.getElementById("form-btn-desencriptar");
const btnCopiar = d.getElementById("btn-encriptado");
const divTexto = d.querySelector(".txt-encrip__container");


const llaves = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];




//Funcion para encriptar

function encriptarMensaje(mensaje) {
  let mensajeEncriptado = "";
  for (let i = 0; i < mensaje.length; i++) {
    let letra = mensaje[i];
    let encriptada = letra;
    for (let j = 0; j < llaves.length; j++) {
      if (letra === llaves[j][0]) {
        encriptada = llaves[j][1];
        break;
      }
    }
    mensajeEncriptado += encriptada;
  }
  return mensajeEncriptado;
}



//Funcion para desencriptar

function desencriptarMensaje(mensaje) {
  let mensajeDesencriptado = mensaje;

  for (let i = 0; i < llaves.length; i++) {
    let regex = new RegExp(llaves[i][1], "g");
    mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
  }

  return mensajeDesencriptado;
}


//Funcion del boton encriptar
btnEncriptar.addEventListener("click", (e) => {
  e.preventDefault();
  let mensaje = texArea.value.toLowerCase();
  let mensajeEncriptado = encriptarMensaje(mensaje);
  textoEncrip.textContent = mensajeEncriptado;
  btnCopiar.classList.remove("hidden");
  imagenPrincipal.style.display = "none";
  tituloEncrip.remove();
  textoEncrip.classList.add("txt-encrip__texto");
  divTexto.classList.add(txt-encrip__container);



});

btnDesencriptar.addEventListener("click" , (e) =>{
  e.preventDefault();
  let mensaje = texArea.value.toLowerCase();
  let mensajedesencriptado = desencriptarMensaje(mensaje);
  textoEncrip.textContent = mensajedesencriptado;
  textoEncrip.classList.add("txt-encrip__texto");
  btnCopiar.classList.remove("hidden");
  tituloEncrip.remove();
  imagenPrincipal.style.display = "none";

})


btnCopiar.addEventListener("click" , () =>{
  let textoCopiado = textoEncrip.textContent;
  navigator.clipboard.writeText(textoCopiado).then(()=>{
    console.log(`se copio el texto ${textoCopiado}`);
    divTexto.classList.add(txt-encrip__container);
     })

     Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Texto Copiado",
      showConfirmButton: false,
      timer: 1700
    });

})