let dots = document.getElementsByClassName('slide-nav__dot')
console.log(dots[0])
// dots.addEventListener("click",function(){
// 	alert("Muestrame");
//  })

// dots.forEach(element => {
// 	element.addEventListener("click",function(){
// 		alert("Muestrame");
// 	})
// });

for(let element of dots){
	element.addEventListener("click",() => {
		hideSlide();
		showborder();
		document.getElementById(element.dataset.slideName).classList.remove('display--off')
		document.getElementById(element.dataset.slideName).classList.add('display--on')
		document.getElementById(element.dataset.slideName).classList.add('border-botton')
	})
}

function hideSlide() {
	let items = document.getElementsByClassName("slide__item")
	for(let element of items) {
		element.classList.remove('.display--on')
		element.classList.add('display--off')
		
	}
}
function showborder() {
	let items = document.getElementsByClassName("slide-nav__dot")
	for(let element of items) {
		element.classList.remove('border-botton')
		element.addEventListener("click",() => {

			element.classList.add('border-botton')
		
		})

		
	}
}
