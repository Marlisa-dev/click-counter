const decreaseBtnEl = document.querySelector(".decrease");
const increaseBtnEl = document.querySelector(".increase");
const resetBtnEl = document.querySelector(".reset");
let countEl = document.querySelector(".currentCount")

let count = 0;
increaseBtnEl.onclick = function(){
	count++;
	countEl.innerHTML = count;
	countColor ();
}

decreaseBtnEl.onclick = function(){
	count--;
	countEl.innerHTML = count;
}

resetBtnEl.onclick = function(){	
	count = 0;
	countEl.innerHTML = count;
}



/* Bottom section is for color of count. Still working on it
function countColor () {
	if (count > 0) {
		countEL.style.color = "green";
	}
	else if (count < 0) {
		countEL.style.color = "red";

}}*/



