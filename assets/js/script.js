function myFunction1() {
  var x = document.getElementById("c1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function myFunction2() {
  var x = document.getElementById("c2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction3() {
  var x = document.getElementById("c3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// boton enviar
function validateForm() {
  let x = document.forms["formulario"]["fname"].value;
  if (x == "") {
    alert("formulario enviado");
    return false;
  }
}



