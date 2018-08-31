/*jshint esversion: 6 */

// Navigation Bar
$("#resp-btn").click(function () {
	$("nav ul").toggleClass("resp-nav");
});

// Smooth Scrolling to section
let navHeight = $("nav").outerHeight(); //Get the height of the nav
$("nav li a").click(function (e) {
	e.preventDefault();
	// Get href from every link
	let linkHrefs = $(this).attr("href");
	$("html, body").animate({
			scrollTop: $(linkHrefs).offset().top - navHeight //Substract height of na
		},
		1500
	);
	$("nav ul").toggleClass("resp-nav");

});

//Highlight current section
$(window).scroll(function () {
	let scrollbarLocation = $(this).scrollTop();
	//console.log(scrollbarLocation);
	$('nav li a').each(function () {
		let sectionOffset = $(this.hash).offset().top;

		if (sectionOffset <= scrollbarLocation) {
			$(this).addClass('active');
			$(this).parent().siblings().children().removeClass('active'); //remove active class from other a tags
		}
	});

});


//----------------------------------------------------------------------------

// Embeded Youtube Videos

let youtube = $(".youtube");

for (let i = 0; i < youtube.length; i++) {
	let source =
		"https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/hqdefault.jpg";

	let image = new Image();
	image.src = source;
	image.addEventListener(
		"load",
		(function () {
			youtube[i].appendChild(image);
		})(i)
	);

	youtube[i].addEventListener("click", function () {
		let iframe = document.createElement("iframe");

		iframe.setAttribute("frameborder", "0");
		iframe.setAttribute("allowfullscreen", "");
		iframe.setAttribute(
			"src",
			"https://www.youtube.com/embed/" +
			this.dataset.embed +
			"?rel=0&showinfo=0&autoplay=1"
		);

		this.innerHTML = "";
		this.appendChild(iframe);
	});
}

//------------------------------------------------------------------------------------

// Show videos when image is clicked
let showVideo = document.querySelectorAll(".show-video");

for (let i = 0; i < showVideo.length; i++) {
	showVideo[i].addEventListener("click", function () {
		youtube[i].style.display = "block";
	});
}

// Show tooltip when clicked
let toolTip = document.querySelector(".tooltip");
toolTip.addEventListener("click", function () {
	document.querySelector(".tooltip-text").style.visibility = "visible";
});