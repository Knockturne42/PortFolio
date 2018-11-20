var slideIndex = 1;

function mySlide() {
	showImg(-42, '+');
	var button = document.getElementsByTagName('button');

	button[1].addEventListener("click", function() {
		showImg(slideIndex+=1, '+');
	});
	button[0].addEventListener("click", function() {
		showImg(slideIndex-=1, '-');
	});
}

function showImg(n, sens) {
	var slide = document.getElementsByClassName('imgSlide');
	if (n === -42 || n > slide.length)
		slideIndex = 1;
	else if (n < 1)
		slideIndex = slide.length;
	for (i = 0; i < slide.length; i++)
		slide[i].style.display = "none";
	if (sens === '+')
		leftSlide(n);
	else
		rightSlide(n);
}

function rightSlide(n) {
	var slide = document.getElementsByClassName('imgSlide');
	slide[slideIndex - 1].style.display = "block";
	slide[slideIndex - 1].style.left = "-100%";
	if (slideIndex == slide.length)
	{
		slide[0].style.display = "block";
		slide[0].style.left = "100%";
		setTimeout(function(){
			slide[slideIndex - 1].style.left = "0%";
		}, 200);
		setTimeout(function(){
			slide[0].style.display = "none";
			slide[0].style.left = "0";
		}, 1000);
	}
	else if (slide[slideIndex]) {
		slide[slideIndex].style.display = "block";
		slide[slideIndex].style.left = "100%";
		setTimeout(function(){
			slide[slideIndex - 1].style.left = "0%";
		}, 200);
		setTimeout(function(){
			slide[slideIndex].style.display = "none";
			slide[slideIndex].style.left = "0";
		}, 1500);
	}
}

function leftSlide(n) {
	var slide = document.getElementsByClassName('imgSlide');
	slide[slideIndex - 1].style.display = "block";
	slide[slideIndex - 1].style.left = "100%";
	if (n === -42)
		slide[slideIndex - 1].style.left = "0%";
	else if (n > slide.length)
	{
		slide[n - 2].style.display = "block";
		slide[n - 2].style.left = "-100%";
		setTimeout(function(){
			slide[slideIndex - 1].style.left = "0%";
		}, 200);
		setTimeout(function(){
			slide[n - 2].style.display = "none";
			slide[n - 2].style.left = "0";
		}, 1000);
	}
	else if (slide[slideIndex - 2]) {
		slide[slideIndex - 2].style.display = "block";
		slide[slideIndex - 2].style.left = "-100%";
		setTimeout(function(){
			slide[slideIndex - 1].style.left = "0%";
		}, 200);
		setTimeout(function(){
			slide[slideIndex - 2].style.display = "none";
			slide[slideIndex - 2].style.left = "0";
		}, 1500);
	}
}
mySlide();
setInterval(function(){
	showImg(slideIndex+=1, '+');
}, 5000);