var header = document.querySelector(".app-navbar");
var btns = header.getElementsByClassName("btnn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("activee");
    current[0].className = current[0].className.replace(" activee", "");
    this.className += " activee";
  });
}

function onloadpage() {
  let anaCon = document.getElementById("anaContent");
  let disp = document.getElementsByClassName("display");
  let head = document.getElementById("secHeaderAnaSayfa");
  for (let i = 0; i < disp.length; i++) {
    disp[i].style.display = "none";
    head.innerHTML = "Ana Sayfa";
  }
  anaCon.style.display = "block";
}

function anaClick() {
  let anaCon = document.getElementById("anaContent");
  let disp = document.getElementsByClassName("display");
  let head = document.getElementById("secHeaderAnaSayfa");
  for (let j = 0; j < disp.length; j++) {
    if (disp[j].style.display === "block") {
      disp[j].style.display = "none";
      head.innerHTML = "Ana Sayfa";
    }
    anaCon.style.display = "block";
  }
}

function profClick() {
  let profCon = document.getElementById("profContent");
  let disp = document.getElementsByClassName("display");
  let head = document.getElementById("secHeaderProf");
  for (let x = 0; x < disp.length; x++) {
    if (disp[x].style.display === "block") {
      disp[x].style.display = "none";
      head.innerHTML = "Profil";
    }
    profCon.style.display = "block";
  }
}

function egitClick() {
  let egitCon = document.getElementById("egitContent");
  let disp = document.getElementsByClassName("display");
  let head = document.getElementById("secHeaderEgit");
  for (let y = 0; y < disp.length; y++) {
    if (disp[y].style.display === "block") {
      disp[y].style.display = "none";
      head.innerHTML = "Eğitimler";
    }
    egitCon.style.display = "block";
  }
}

function canliClick() {
  let canliCon = document.getElementById("canliContent");
  let disp = document.getElementsByClassName("display");
  let head = document.getElementById("secHeaderCanli");
  for (let z = 0; z < disp.length; z++) {
    if (disp[z].style.display === "block") {
      disp[z].style.display = "none";
      head.innerHTML = "Canlı";
    }
    canliCon.style.display = "block";
  }
}

function sinavClick() {
  let sinavCon = document.getElementById("sinavContent");
  let disp = document.getElementsByClassName("display");
  let head = document.getElementById("secHeaderSinav");
  for (let v = 0; v < disp.length; v++) {
    if (disp[v].style.display === "block") {
      disp[v].style.display = "none";
      head.innerHTML = "Sınavlar";
    }
    sinavCon.style.display = "block";
  }
}

function kutupClick() {
  let kutupCon = document.getElementById("kutupContent");
  let disp = document.getElementsByClassName("display");
  let head = document.getElementById("secHeaderKutup");
  for (let a = 0; a < disp.length; a++) {
    if (disp[a].style.display === "block") {
      disp[a].style.display = "none";
      head.innerHTML = "Kütüphane";
    }
    kutupCon.style.display = "block";
  }
}

function catalClick() {
  let catalCon = document.getElementById("catalContent");
  let disp = document.getElementsByClassName("display");
  let head = document.getElementById("secHeaderCatal");
  for (let s = 0; s < disp.length; s++) {
    if (disp[s].style.display === "block") {
      disp[s].style.display = "none";
      head.innerHTML = "Katalog";
    }
    catalCon.style.display = "block";
  }
}

function blogClick() {
  let blogCon = document.getElementById("blogContent");
  let disp = document.getElementsByClassName("display");
  let head = document.getElementById("secHeaderBlog");
  for (let m = 0; m < disp.length; m++) {
    if (disp[m].style.display === "block") {
      disp[m].style.display = "none";
      head.innerHTML = "Blog";
    }
    blogCon.style.display = "block";
  }
}

function sosyalClick() {
  let sosyalCon = document.getElementById("sosyalContent");
  let disp = document.getElementsByClassName("display");
  let head = document.getElementById("secHeaderSosyal");
  for (let n = 0; n < disp.length; n++) {
    if (disp[n].style.display === "block") {
      disp[n].style.display = "none";
      head.innerHTML = "Sosyal";
    }
    sosyalCon.style.display = "block";
  }
}

function portalClick() {
  let porCon = document.getElementById("portalContent");
  let disp = document.getElementsByClassName("display");
  let head = document.getElementById("secHeaderPortal");
  for (let x = 0; x < disp.length; x++) {
    if (disp[x].style.display === "block") {
      disp[x].style.display = "none";
      head.innerHTML = "Portal";
    }
    porCon.style.display = "block";
  }
}
// ------------------------------------------------------------------------------
// Person Informational Ana Sayfa Section Code Area Start in the Here
let infoSec = document.querySelector(".info-section");
infoSec.style.display = "none";

function infoViewAna() {
  if (infoSec.style.display === "block") {
    infoSec.style.display = "none"
  } else {
    infoSec.style.display = "block";
  }
}
// click exit button and page go on index.html
let extBtn = document.querySelector(".exitBtn");

function exit() {
  window.location.href = "../index.html";
}
// Person Informational Ana Sayfa Section Code Area end the Here
// ------------------------------------------------------------------------------
// Person Informational Profil Section Code Area Start in the Here
let infoSec2 = document.querySelector(".info-section2");
infoSec2.style.display = "none";

function infoViewProf() {
  if (infoSec2.style.display === "block") {
    infoSec2.style.display = "none"
  } else {
    infoSec2.style.display = "block";
  }
}
// click exit button and page go on index.html
let extBtn2 = document.querySelector(".exitBtn2");

function exitProf() {
  window.location.href = "../index.html";
}
// Person Informational Profil Section Code Area end the Here
// ------------------------------------------------------------------------------
// Person Informational Egitim Section Code Area Start in the Here
let infoSec3 = document.querySelector(".info-section3");
infoSec3.style.display = "none";

function infoViewEgit() {
  if (infoSec3.style.display === "block") {
    infoSec3.style.display = "none"
  } else {
    infoSec3.style.display = "block";
  }
}
// click exit button and page go on index.html
let extBtn3 = document.querySelector(".exitBtn3");
function exitEgit() {
  window.location.href = "../index.html";
}
// Person Informational Egitim Section Code Area end the Here
// ------------------------------------------------------------------------------
// Person Informational Canli Section Code Area Start in the Here
let infoSec4 = document.querySelector(".info-section4");
infoSec4.style.display = "none";

function infoViewCanli() {
  if (infoSec4.style.display === "block") {
    infoSec4.style.display = "none"
  } else {
    infoSec4.style.display = "block";
  }
}
// click exit button and page go on index.html
let extBtn4 = document.querySelector(".exitBtn4");

function exitCanli() {
  window.location.href = "../index.html";
}
// Person Informational Canli Section Code Area end the Here

// Person Informational Sinav Section Code Area Start in the Here
let infoSec5 = document.querySelector(".info-section5");
infoSec5.style.display = "none";

function infoViewSinav() {
  if (infoSec5.style.display === "block") {
    infoSec5.style.display = "none"
  } else {
    infoSec5.style.display = "block";
  }
}
// click exit button and page go on index.html
let extBtn5 = document.querySelector(".exitBtn5");

function exitSinav() {
  window.location.href = "../index.html";
}
// Person Informational Sinav Section Code Area end the Here

// Person Informational Kutuphane Section Code Area Start in the Here
let infoSec6 = document.querySelector(".info-section6");
infoSec6.style.display = "none";

function infoViewKutuphane() {
  if (infoSec6.style.display === "block") {
    infoSec6.style.display = "none"
  } else {
    infoSec6.style.display = "block";
  }
}
// click exit button and page go on index.html
let extBtn6 = document.querySelector(".exitBtn6");

function exitKutuphane() {
  window.location.href = "../index.html";
}
// Person Informational Kutuphane Section Code Area end the Here

// Person Informational Catalog Section Code Area Start in the Here
let infoSec7 = document.querySelector(".info-section7");
infoSec7.style.display = "none";

function infoViewCatalog() {
  if (infoSec7.style.display === "block") {
    infoSec7.style.display = "none"
  } else {
    infoSec7.style.display = "block";
  }
}
// click exit button and page go on index.html
let extBtn7 = document.querySelector(".exitBtn7");

function exitCatalog() {
  window.location.href = "../index.html";
}
// Person Informational Catalog Section Code Area end the Here

// Person Informational Blog Section Code Area Start in the Here
let infoSec8 = document.querySelector(".info-section8");
infoSec8.style.display = "none";

function infoViewBlog() {
  if (infoSec8.style.display === "block") {
    infoSec8.style.display = "none"
  } else {
    infoSec8.style.display = "block";
  }
}
// click exit button and page go on index.html
let extBtn8 = document.querySelector(".exitBtn8");

function exitBlog() {
  window.location.href = "../index.html";
}
// Person Informational Blog Section Code Area end the Here

// Person Informational Sosyal Section Code Area Start in the Here
let infoSec9 = document.querySelector(".info-section9");
infoSec9.style.display = "none";

function infoViewSosyal() {
  if (infoSec9.style.display === "block") {
    infoSec9.style.display = "none"
  } else {
    infoSec9.style.display = "block";
  }
}
// click exit button and page go on index.html
let extBtn9 = document.querySelector(".exitBtn9");

function exitSosyal() {
  window.location.href = "../index.html";
}
// Person Informational Sosyal Section Code Area end the Here

// Person Informational Portal Section Code Area Start in the Here
let infoSec10 = document.querySelector(".info-section10");
infoSec10.style.display = "none";

function infoViewPortal() {
  if (infoSec10.style.display === "block") {
    infoSec10.style.display = "none"
  } else {
    infoSec10.style.display = "block";
  }
}
// click exit button and page go on index.html
let extBtn10 = document.querySelector(".exitBtn10");

function exitPortal() {
  window.location.href = "../index.html";
}
// Person Informational Portal Section Code Area end the Here