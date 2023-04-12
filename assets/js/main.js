function abrirForm1() {
  document.getElementById("form1").classList.remove("d-none");
  document.getElementById("form2").classList.add("d-none");
}
function abrirForm2() {
  document.getElementById("form2").classList.remove("d-none");
  document.getElementById("form1").classList.add("d-none");
}

function enviarForm1() {
  let motivo = document.getElementById("listaData");
  let nombre = document.getElementById("nombre1");
  let email = document.getElementById("email1");
  let telefono = document.getElementById("telefono1");
  let mensaje = document.getElementById("mensaje1");
  if (nombre.value.length == 0) {
    alert("Tiene que escribir su nombre");
    return nombre.focus();
  } else if (email.value.length == 0) {
    alert("Tiene que escribir su email");
    return email.focus();
  } else if (telefono.value.length == 0) {
    alert("Tiene que escribir su telefono");
    return telefono.focus();
  } else if (motivo.value == "") {
    alert("Tiene que escribir su motivo");
    return motivo.focus();
  } else if (mensaje.value.length == 0) {
    alert("Tiene que escribir su mensaje");
    return mensaje.focus();
  }
  alert(
    "Muchas gracias por enviar el formulario " +
      nombre.value +
      " hemos recibido su " +
      motivo.value +
      " y enviaremos una pronta respuesta al correo " +
      email.value
  );

  document.getElementById("form1").submit();
}

//jQuery para Formulario Reserva

$("#boton").click(function () {
  let nombre = $("#nombre2").val();
  let correo = $("#email2").val();
  let telefono = $("#telefono2").val();
  let fecha = $('#fecha2').val();
  let hora = $('#hora2').val();
  let asistentes = $("#asistentes2").val();
console.log(hora);

  if (nombre.length == 0) {
    alert("Tiene que escribir su nombre");
    return $("#nombre2").focus();
  }
  else if (correo.length == 0) {
    alert("Tiene que escribir su email");
    return $("#email2").focus();
  } else if (telefono.length == 0) {
    alert("Tiene que escribir su telefono");
    return $("#telefono2").focus();
  } else if (fecha=="") {
    alert("Tiene que escribir su fecha");
    return $("#fecha2").focus();
  } else if (hora == "") {
    alert("Tiene que escribir su hora");
    return $("#hora2").focus();
  } else if (asistentes.length == 0) {
    alert("Tiene que escribir sus asistentes");
    return $("#asistentes2").focus();
  }

  alert(
    "Estimado: " + nombre +
      " agradecemos por reservar con nosotros. Hemos registrado " +
      asistentes+" asistentes. Se ha enviado el codigo de confirmacion al correo "+correo+" \nGracias por preferirnos"
  );
});
// cards 
$("#imagen1").click(function () { 
$("#maincard1").removeClass("d-none");
});
$("#boton1").click(function () { 
  $("#maincard1").addClass("d-none");
  });

$("#imagen2").click(function () { 
$("#maincard2").removeClass("d-none");
});
$("#boton2").click(function () { 
  $("#maincard2").addClass("d-none");
  });

$("#imagen3").click(function () { 
$("#maincard3").removeClass("d-none");
});
$("#boton3").click(function () { 
  $("#maincard3").addClass("d-none");
  });


$("#abrir_carousel").on("click",function () {
  $("#carousel_sobre_nosotros").removeClass("d-none")
  })


  $("#cerrar").on("click", function () {
    $("#carousel_sobre_nosotros").addClass("d-none");
    })
