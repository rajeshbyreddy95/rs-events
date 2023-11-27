let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.onclick = () =>{
  themeToggler.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  themeToggler.classList.remove('active');
}

document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn =>{
  
  btn.onclick = () =>{
    let color = btn.style.background;
    document.querySelector(':root').style.setProperty('--main-color', color);
  }

});

var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop:true,
  autoplay:{
    delay: 3000,
    disableOnInteraction:false,
  }
});

var swiper = new Swiper(".review-slider", {
    slidesPerView: 1,
    grabCursor: true,
    loop:true,
    spaceBetween: 10,
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1050: {
        slidesPerView: 3,
      },    
    },
    autoplay:{
      delay: 5000,
      disableOnInteraction:false,
  }
});



// database connect






document.querySelector('#send_btn').addEventListener('click',(e)=>{


  let name = document.getElementById('name');
  let mail = document.getElementById('mail');
  let number = document.getElementById('number'); // Adjusted ID here
  let subject = document.getElementById('subject');
  let message = document.getElementById('message');

  let data = []
 
    let obj = {
      name: name.value,
      mail: mail.value,
      mobile: number.value, // Changed variable name to match the previous code
      subject: subject.value,
      message: message.value,
      date_time:new Date().toLocaleString()

    }

  data.push(obj)


fetch('https://rs-events-90b17-default-rtdb.firebaseio.com/data.json',{method:'POST',body:JSON.stringify(data)}).then((res)=>{

}).then((res)=>{
  alert('data submitted successfully')
})
e.preventDefault()
name.value=""
mail.value=""
number.value=""
subject.value=""
message.value=""

})
