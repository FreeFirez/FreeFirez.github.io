function aparecein() {
  document.getElementById("inicio").style.display = "block";
  document.getElementById("personajes").style.display = "none";
  document.getElementById("armas").style.display = "none";
  document.getElementById("colaboraciones").style.display = "none";
  document.getElementById("gia").style.display = "none";
}

function aparececolabora() {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("personajes").style.display = "none";
  document.getElementById("armas").style.display = "none";
  document.getElementById("colaboraciones").style.display = "block";
document.getElementById("gia").style.display = "none";
  
}

function aparecegia() {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("personajes").style.display = "none";
  document.getElementById("armas").style.display = "none";
  document.getElementById("colaboraciones").style.display = "none";
document.getElementById("gia").style.display = "block";
}


function apareceim() {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("personajes").style.display = "block";
  document.getElementById("armas").style.display = "none";
  document.getElementById("colaboraciones").style.display = "none";
  document.getElementById("gia").style.display = "none";
}

function aparecear() {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("personajes").style.display = "none";
document.getElementById("armas").style.display = "block";
document.getElementById("colaboraciones").style.display = "none";
document.getElementById("gia").style.display = "none";
}


let Sub;

document.addEventListener("DOMContentLoaded", function() {
  Sub = document.getElementById("Submenu");
 
});

function apareceSubmenu() {
  if (Sub.style.display === "block") {
    Sub.style.display = "none";
  } else {
    Sub.style.display = "block";
  }
  
}

document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");
  const submenu = document.getElementById("Submenu");

  sections.forEach(function(section) {
    section.addEventListener("click", function() {
      submenu.style.display = "none";
    });
  });
})function aparecein() {
  document.getElementById("inicio").style.display = "block";
  document.getElementById("personajes").style.display = "none";
  document.getElementById("armas").style.display = "none";
  document.getElementById("colaboraciones").style.display = "none";
  document.getElementById("gia").style.display = "none";
}

function aparececolabora() {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("personajes").style.display = "none";
  document.getElementById("armas").style.display = "none";
  document.getElementById("colaboraciones").style.display = "block";
document.getElementById("gia").style.display = "none";
  
}

function aparecegia() {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("personajes").style.display = "none";
  document.getElementById("armas").style.display = "none";
  document.getElementById("colaboraciones").style.display = "none";
document.getElementById("gia").style.display = "block";
}


function apareceim() {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("personajes").style.display = "block";
  document.getElementById("armas").style.display = "none";
  document.getElementById("colaboraciones").style.display = "none";
  document.getElementById("gia").style.display = "none";
}

function aparecear() {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("personajes").style.display = "none";
document.getElementById("armas").style.display = "block";
document.getElementById("colaboraciones").style.display = "none";
document.getElementById("gia").style.display = "none";
}


let Sub;

document.addEventListener("DOMContentLoaded", function() {
  Sub = document.getElementById("Submenu");
 
});

function apareceSubmenu() {
  if (Sub.style.display === "block") {
    Sub.style.display = "none";
  } else {
    Sub.style.display = "block";
  }
  
}

document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");
  const submenu = document.getElementById("Submenu");

  sections.forEach(function(section) {
    section.addEventListener("click", function() {
      submenu.style.display = "none";
    });
  });
});
