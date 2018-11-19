var slideIndex = 1;

function mySlide() {
	showImg(slideIndex);
	var button = document.getElementsByTagName('button');

	button[1].addEventListener("click", function() {
		showImg(slideIndex+=1, '+')
	});
	button[0].addEventListener("click", function() {
		showImg(slideIndex-=1, '-')
	});
}

function showImg(n, sens) {
	var slide = document.getElementsByClassName('imgSlide');
	if (n > slide.length)
		slideIndex = 1;
	else if (n < 1)
		slideIndex = slide.length;
	for (i = 0; i < slide.length; i++)
		slide[i].style.display = "none";
	if(sens === '+')
	{
		slide[slideIndex - 2].style.display = "block";
		slide[slideIndex - 2].style.zIndex = "2";
		slide[slideIndex - 2].style.left = '0';
		// slide[slideIndex - 2].style.transitionProperty = "left";
		// slide[slideIndex - 2].style.left = "-100%";
	}
	slide[slideIndex - 1].style.display = "block";
	slide[slideIndex - 1].style.zIndex = "1";
	slide[slideIndex - 1].style.left = '0';
}

mySlide();