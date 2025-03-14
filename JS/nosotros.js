
function translateToEnglish() {
    var selectField = document.querySelector('.goog-te-combo');
    if (selectField) {
      selectField.value = 'en';  // 'en' es el código del idioma para inglés
      selectField.dispatchEvent(new Event('change')); // Disparar el cambio de idioma
    }
  }

  function translateToSpanish() {
    var selectField = document.querySelector('.goog-te-combo');
    if (selectField) {
      selectField.value = 'es';  // 'es' es el código del idioma para español
      selectField.dispatchEvent(new Event('change')); // Disparar el cambio de idioma
    }
  }



//loader

function pageLoaded() {
    let loaderSection = document.querySelector('.loader-section');
    loaderSection.classList.add('loaded');
}

document.onload = pageLoaded();

//cassusel home

var actual = 0;
function puntos(n) {
	var ptn = document.getElementsByClassName("punto");
	for (i = 0; i < ptn.length; i++) {
		if (ptn[i].className.includes("activo")) {
			ptn[i].className = ptn[i].className.replace("activo", "");
			break;
		}
	}
	ptn[n].className += " activo";
}
function mostrar(n) {
	var imagenes = document.getElementsByClassName("imagen");
	for (i = 0; i < imagenes.length; i++) {
		if (imagenes[i].className.includes("actual")) {
			imagenes[i].className = imagenes[i].className.replace("actual", "");
			break;
		}
	}
	actual = n;
	imagenes[n].className += " actual";
	puntos(n);
}

function siguiente() {
	actual++;
	if (actual > 3) {
		actual = 0;
	}
	mostrar(actual);
}
function anterior() {
	actual--;
	if (actual < 0) {
		actual = 3;
	}
	mostrar(actual);
}

var velocidad = 6000;
var play = setInterval("siguiente()", velocidad);



