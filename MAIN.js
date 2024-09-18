function toggleMenu(){

    const menu = document.querySelector('.menu');
    const navMobile = document.querySelector('.nav-mobile');

    menu.classList.toggle('active');
    navMobile.classList.toggle('active');
}
var target_mill_sec = new Date("january 30, 2025 10:0:0").getTime();
function timer(){
    var now_mili_sec = new Date().getTime();
    var remaining_sec = Math.floor( (target_mill_sec - now_mili_sec) / 1000);

    var day = Math.floor(remaining_sec/(3600 * 24));
    var hour = Math.floor((remaining_sec % (3600 * 24)) / 3600);
    var min = Math.floor((remaining_sec % 3600) / 60);
    var sec = Math.floor(remaining_sec % 60);
    document.querySelector("#day").innerHTML = day;
    document.querySelector("#hour").innerHTML= hour;
    document.querySelector("#min").innerHTML = min;
    document.querySelector("#sec").innerHTML = sec;
}
setInterval(timer, 1000);


let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')


let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')

let thumbnail = document.querySelector('.thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')
thumbnail.appendChild(thumbnailItems[0])

nextBtn.onclick = function(){
    moveSlider('next')
}
prevBtn.onclick = function(){
    moveSlider('prev')
}
function moveSlider(direction){
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')

    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
    }else{
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
    }
    slider.addEventListener('animationed',function(){
        if(direction === 'next'){
            slider.classList.remove('next')
        }else{
            slider.classList.remove('prev')
        }
    })
}
const signUpButton = document.getElementById('signUp');
		const signInButton = document.getElementById('signIn');
		const container = document.getElementById('container');

		signUpButton.addEventListener('click', () => {
			container.classList.add("right-panel-active");
		});

		signInButton.addEventListener('click', () => {
			container.classList.remove("right-panel-active");
		}); 
        const control = document.getElementById("direction-toggle");

        