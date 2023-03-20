let usuario,
  USER,
  PASS,
  password,
  acceso,
  nueva_password,
  opcion;

USER = "admin";
PASS = "12345";
acceso = false;

function cambiarPassword() {
  nueva_password = ""
  while(nueva_password == "") {
    nueva_password = prompt("Ingrese la nueva contraseña.");
    if (nueva_password != "") {
      PASS = nueva_password;
      console.log(`La nueva contraseña es ${PASS}`);
      alert(`La nueva contraseña es ${PASS}`);
    } else {
      alert("La contraseña no puede estar vacia");
    }
}
}

function login() {
  if (acceso === false) {
    usuario = document.getElementById("usuario").value;
    password = document.getElementById("contraseña").value;

    if (usuario == USER && password == PASS) {
      acceso = true;
      alert("Bienvenido a una pagina del gobierno Bajiano")
      window.location = "/infoBajia.html";
    } else {
      opcion = parseInt(prompt(
        "Credenciales incorrectas. Quieres cambiar la contraseña? Responde 1 - SI o 2 - NO"
      ));

      switch (opcion) {
        case 1:
          cambiarPassword();
          break;
        case 2:
          alert("Por favor, volver a intentar hacer el ingreso!");
          break;
        default:
          alert("Escribir solo 1 - SI o 2 - NO");
      }
    }
  }
}

// function menu() {
//   if (acceso == false) {
//     exit();
//   } else {
//     opcion_valida = false;

//     while (opcion_valida == false) {
//       opcion = prompt(
//         "Por favor seleccionar la opcion correcta: 0 - Salir, 1 - Cambio de contraseña. 2 - Ver nueva contraseña."
//       );

//       if (opcion == "0") {
//         alert("Hasta Luego");
//         opcion_valida = true;
//       } else if (opcion == "1") {
//         nueva_password = "";
//         while (nueva_password != "salir") {
//           nueva_password = prompt(
//             "Ingrese la nueva contraseña. (Para salir, ingrese salir)"
//           );
//           if (nueva_password != "salir") {
//             PASS = nueva_password;
//             console.log(PASS);
//           }
//         }
//       } else if (opcion == "2") {
//         alert(`La nueva contraseña es ${PASS}`);
//       } else {
//         alert("La opcion que escribio no es valida");
//       }
//     }
//   }
// }
