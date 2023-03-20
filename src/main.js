let usuario,
  USER,
  PASS,
  password,
  contador,
  maxIntentos,
  acceso,
  nueva_password,
  opcion_valida,
  opcion,
  parrafo,
  titulo;

USER = "admin";
PASS = "12345";
maxIntentos = 3;
contador = 0;
acceso = false;

function login() {
  while (contador < maxIntentos && acceso === false) {
    usuario = prompt("Usuario: ");
    password = prompt("Contraseña: ");

    if (usuario == USER && password == PASS) {
      acceso = true;

      alert(`Bienvenido a la galeria de imagenes del gobierno Bajiano`);
    } else {
      contador += 1;
      alert("Credenciales incorrectas");
    }

    if (contador == maxIntentos) {
      alert(
        "Has bloqueado tu cuenta. Favor, acercarse a la oficina del Gobierno mas cercana."
      );
    }
  }
}

function menu() {
  if (acceso == false) {
    exit();
  } else {
    opcion_valida = false;

    while (opcion_valida == false) {
      opcion = prompt(
        "Por favor seleccionar la opcion correcta: 0 - Salir, 1 - Cambio de contraseña. 2 - Ver nueva contraseña."
      );

      if (opcion == "0") {
        alert("Hasta Luego");
        opcion_valida = true;
      } else if (opcion == "1") {
        nueva_password = "";
        while (nueva_password != "salir") {
          nueva_password = prompt(
            "Ingrese la nueva contraseña. (Para salir, ingrese salir)"
          );
          if (nueva_password != "salir") {
            PASS = nueva_password;
            console.log(PASS);
          }
        }
      } else if (opcion == "2") {
        alert(`La nueva contraseña es ${PASS}`);
      } else {
        alert("La opcion que escribio no es valida");
      }
    }
  }
}

login();
menu();
