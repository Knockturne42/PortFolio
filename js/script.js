var slideIndex = 1;

function mySlide() {
	showImg(-42);
	var button = document.getElementsByTagName('button');

	button[1].addEventListener("click", function() {
		showImg(slideIndex+=1)
	});
	button[0].addEventListener("click", function() {
		showImg(slideIndex-=1)
	});
}

function showImg(n) {
	var slide = document.getElementsByClassName('imgSlide');
	if (n === -42 || n > slide.length)
		slideIndex = 1;
	else if (n < 1)
		slideIndex = slide.length;
	for (i = 0; i < slide.length; i++)
		slide[i].style.display = "none";
	// setTimeout(function(){slide[slideIndex - 1].style.display = "block";}, 1000);
	slide[slideIndex - 1].style.display = "block";
	slide[slideIndex - 1].style.transitionDuration = "0s";
	slide[slideIndex - 1].style.left = "-100%";
	if (n === -42)
	{
		slide[slideIndex - 1].style.transitionDuration = "1s";
		slide[slideIndex - 1].style.left = "0%";
	}
	if (n > slide.length)
	{
		slide[n - 2].style.display = "block";
		slide[n - 2].style.left = "-100%";
		slide[n - 2].style.zIndex = "2";
		setTimeout(function(){
			slide[slideIndex - 1].style.transitionDuration = "1s";
			slide[slideIndex - 1].style.left = "0%";
			slide[n - 2].style.display = "none";
			slide[n - 2].style.left = "0";
			slide[n - 2].style.zIndex = "1";
		}, 1000);
	}
	else if(slide[slideIndex - 2])
	{
		slide[slideIndex - 2].style.display = "block";
		slide[slideIndex - 2].style.left = "-100%";
		slide[slideIndex - 2].style.zIndex = "2";
		setTimeout(function(){
			slide[slideIndex - 1].style.transitionDuration = "1s";
			slide[slideIndex - 1].style.left = "0%";
			slide[slideIndex - 2].style.display = "none";
			slide[slideIndex - 2].style.left = "0";
			slide[slideIndex - 2].style.zIndex = "1";
		}, 1000);
	}
}
mySlide();
setInterval(function(){
	showImg(slideIndex+=1)
}, 3000);