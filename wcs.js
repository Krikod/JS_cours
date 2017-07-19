/* Sélectionner */
	/* class */
	/* balise */
	/* id */
	/* cibler */
/* Ajouter du texte à un élément */
/* Ajout un élément au DOM */
/* Styliser un élément du DOM */
/* Ajouter un écouter un événement */
/* Retirer un écouteur d'événement */

/* BONUS */
/* SetTimeout */
/* SetInterval */


 /////////////////////////////////////////////////////////


/* JQ =>    $('.paragraph') 
var pEls = document.getElementsByClassName('paragraph');
console.log(pEls.length);
*/

/*$('p')
var pEls = document.getElementsByTagName('paragraph');
console.log(pEls); */

/*$('#wcs'). etc 
var pEl = document.getElementById('wcs');
console.log(pEl.textContent.length); //. innerHTML

var pEl = document.querySelectorAll('div'); //('p:nth-child(1)').textContent
console.log(pEl); //*/

$('p').click(function(){});
var pEls = document.getElementsByTagName('p');


for (var i=0; i < pEls.length; ++i)
{
	pEls[i].addEventListener('mouseover', function(){ // mouseover, click, 
		this.textContent = "Nouveau texte";
		this.style.color = 'red';
		this.style.backgroundColor = 'yellow';
		if (this.classList.contains ('plop')) {
				this.setAttribute('class', 'plip');
				this.setAttribute('name', 'jacob');

					};
};

/*
var pEls = document.getElementsByTagName('img');
for (var i=0; i < pEls.length; ++i)
{pEls[i].addEventListener('mouseover', function(){ // mouseover, click, 
		this.heigth = 1000;
		this.width = 1000;
	})
	setTimeout(function (){
				img.remove()
			}, 2000);
};


/*setTimeout(function (){
		pEls.remove()
			}, 2000); PAS CORRECT */

/*
var divElt = document.getElementById('fleur');
var buttonElt = document.getElementsByTagName('button');
console.log(buttonElt);

// $('input').change etc.
var inputElt = document.getElementById('film');
inputElt.addEventListener('input', function(){ // mouseover, click, 
		var result = this.value;
		if (result === 'abc') {
				this.style.height = '50px';
				buttonElts[0].textContent += ' go ahead';
				buttonElts[0].style.backgroundColor = 'green';
				buttonElts[1].style.width = '50%';
					}
				});
// $('button').on('click', function()...)

for (i = 0; i<buttonElts.length; i++)  {
		buttonElts[i].addEventListener('click', function() {
			inputElt.value = "cliqué";
			var pElt = document.createElement('p');
			pElt.textContent = 'nouveau paragraph';
			pElt.setAttribute('class', 'paragraph');
			divElt.appendChild(pElt);

			
	
	function alert(){
			setTimeout(function(){
				alert('Bienvenu sur le site');
				}, 5000);

		}
		
	})
};


var pElt = document.getElementById('fleur');
var pElt2 = document.getElementById('nuage');
var counter = 10;
var counter2 = 0;
function getHamb() {
	setTimeout(function(){
		counter -= 1;
		counter2 += 1;
		pElt.textContent = "Il reste "
+ counter + " hamburgers à manger.";
	}, 1000);
		pElt2.textContent = "Il y a " + counter2 + " hamburgers à manger."
}
getHamb();

///////////////////////
var audio = new Audio('https://www.google.fr/url?sa=t&rct=j&q=&esrc=s&source=web&cd=4&cad=rja&uact=8&ved=0ahUKEwi0vMeNk5_UAhUBYVAKHW6ECrEQtwIIOjAD&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DU54G6obOSQI&usg=AFQjCNEXba7qBn5IWLixmp6obZjPYxv_Qw');
audio.play();


var buttonElt = document.getElementById('d');
buttonElt.style.position = 'absolute';
buttonElt.style.bottom = '0';

var WindowWidth = Windows.innerWidth; // $(window).width();
var WindowHeight = Windows.innerHeight; 

var counter = 0;
var em = 1;
requestAnimationFrame  ------>  COMPLETER  
///////////////////////////////////////
var buttonElt = document.getElementById('btn');

buttonElt.addEventListener('click', function() {
var opacity = 1;
var opacityInterval = setInterval(opacityLess, 100);

function opacityLess() {
	if (opacity >= 0) {
		buttonElt.style.opacity = " " + opacity + " ";
		opacity -= 0.2;
	} else if (opacity <= 0) {
		buttonElt.style.opacity = " " + opacity + " ";
		buttonElt.style.backgroundColor = 'red';
		opacity += 0.3;

	} else {
		clearInterval(opacityInterval);
	}}
});
*/