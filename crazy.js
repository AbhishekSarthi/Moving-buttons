const crazy = document.querySelectorAll('.Buttons');


function goCrazy() {

	
const one = Math.random() * (window.innerWidth - this.clientWidth) ;
const two = Math.random() * (window.innerHeight - this.clientHeight);
console.log(one,two);
this.style.left = one + 'px';
this.style.top = two + 'px';
}

crazy.forEach(button => button.addEventListener('mouseenter',goCrazy));