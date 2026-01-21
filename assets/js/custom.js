// jQuery(document).ready(function ($) {


//   $('.lines').click(function(){
//     $('.header .navigation').toggleClass('show')
//   });
//   $('.lines').click(function(){
//     $('.lines').toggleClass('show')
//   });
//   $('.navigation > ul > li').click(function(){
//     $('.navigation > ul > li').removeClass('open')
//     $(this).addClass('open')
//   })

//   // sticky
//   $(window).scroll(function (e) {
//     if ($(window).scrollTop() > 100) {
//       $('.header').addClass('sticky');
//     } else {
//       $('.header').removeClass('sticky');
//     }
//   });

//   // Testimonial js
//   $('.testominal-slider').slick({
//     dots: false,
//     slidesToScroll: 1,
//     slidesToShow: 3,
//     arrows: File,
//     rows: 0,
//     autoplay: false,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           dots: false,
//         }
//       },
     
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           centerMode: true,
//           centerPadding: '80px',
//           slidesToScroll: 1
//         }
//       }
//     ]
//   });

//   // love from root slider js

// if ($(window).width() < 601) {
//   $('.cardSlider').slick({
//     infinite: true,
//     slidesToShow: 1,
//     centerMode: true,
//     centerPadding: '100px',
//     slidesToScroll: 1,
//     rows:0, 
//     arrows: false,
//     dots: false,
//   });
//   }



//   // single img slider start
//   var $status = $('.slider__counter');
//   var $slickElement = $('.big-img-slide');
//   $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
//     //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
//     var i = (currentSlide ? currentSlide : 0) + 1;
//     $status.html(i + ' / ' + slick.slideCount);
//   });
//   $('.big-img-slide').slick({
//     appendArrows: '.append_arrow',
//     slidesToShow: 1,
//     infinite: false,
//     rows: 0,
//     slidesToScroll: 1,
//   });




// });


//   $('.autoplay').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
// });

/* ===== DOCUMENT READY ===== */
// $(document).ready(function () {

//     /* ===== HERO SLIDER ===== */
//     $('.hero-slider').slick({
//         arrows: false,
//         dots: true,
//         autoplay: true,
//         autoplaySpeed: 4000,
//         fade: true,
//         cssEase: 'linear'
//     });

//     /* ===== MOBILE MENU ===== */
//     const hamburger = document.querySelector('.hamburger');
//     const mobileNav = document.querySelector('.mobile-nav');
//     const overlay = document.querySelector('.menu-overlay');

//     function toggleMenu() {
//         mobileNav.classList.toggle('active');
//         overlay.classList.toggle('active');

//         hamburger.classList.toggle('fa-bars');
//         hamburger.classList.toggle('fa-times');
//     }

//     hamburger.addEventListener('click', toggleMenu);
//     overlay.addEventListener('click', toggleMenu);
// });

// /* ===== NEWS AUTO SCROLL ===== */
// const list = document.getElementById("newsList");
// let offset = 0;
// const speed = 0.4;

// function scrollNews() {
//     if (!list || list.children.length === 0) return;

//     offset += speed;
//     const firstItem = list.children[0];

//     if (offset >= firstItem.offsetHeight) {
//         offset = 0;
//         list.appendChild(firstItem);
//     }

//     list.style.transform = `translateY(-${offset}px)`;
//     requestAnimationFrame(scrollNews);
// }

// scrollNews();

// /* ===== SCROLL TO TOP ===== */
// const scrollBtn = document.getElementById("scrollTop");

// if (scrollBtn) {

//     window.addEventListener("scroll", () => {
//         const triggerPoint = window.innerHeight * 0.8; // 110vh
//         scrollBtn.classList.toggle("show", window.scrollY > triggerPoint);
//     });

//     scrollBtn.addEventListener("click", () => {
//         window.scrollTo({
//             top: 0,
//             behavior: "smooth"
//         });
//     });
// }




// login/signup

// Load modal HTML once

// fetch("login.html")
//     .then(res => res.text())
//     .then(html => {
//         document.getElementById("auth-container").innerHTML = html;
//     });

// Open modal
// window.openAuth = function(type) {
//     document.getElementById("authOverlay").style.display = "block";
//     document.getElementById("authModal").classList.add("show");

//     document.getElementById("loginBox").style.display =
//         type === "login" ? "block" : "none";

//     document.getElementById("registerBox").style.display =
//         type === "register" ? "block" : "none";
// }

// Close modal
// window.closeAuth = function() {
//     document.getElementById("authOverlay").style.display = "none";
//     document.getElementById("authModal").classList.remove("show");
// }


// window.togglePass = function(id) {
//     const input = document.getElementById(id);
//     if (!input) return;
//     input.type = input.type === "password" ? "text" : "password";
// }



// Form switch karne ke liye (Login <-> Register)
    function switchForm(type) {
        if (type === 'register') {
            document.getElementById('loginBox').style.display = 'none';
            document.getElementById('registerBox').style.display = 'block';
        } else {
            document.getElementById('loginBox').style.display = 'block';
            document.getElementById('registerBox').style.display = 'none';
        }
    }

    // Password field toggle karne ke liye
    function togglePass(id) {
        var x = document.getElementById(id);
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }

    

function toggleSidebar(){
    const sidebar = document.getElementById("sidebar");
    const hamburger = document.getElementById("hamburger");
    
    // Body par class toggle karne se hum Header aur Layout dono ko control kar payenge
    document.body.classList.toggle("nav-is-open");
    sidebar.classList.toggle("open");

    hamburger.innerHTML = sidebar.classList.contains("open") ? "✖" : "☰";
}



// overview-chart

const ctx1 = document.getElementById('gridChart');

new Chart(ctx1, {
    type: 'doughnut',
    data: {
        
        datasets: [{
            data: [0, 11.48],
            backgroundColor: ['#E9641B', '#154c79'],
            borderWidth: 0
        }]
    },
    options: {
        cutout: '60%',
        plugins: {
            legend: { display: true }
        }
    }
});



//recharge

function toggleSection(el){
    const body = el.nextElementSibling;
    body.style.display = body.style.display === "none" ? "block" : "none";
}



//report

function showReport(id){
    document.querySelectorAll('.report').forEach(r=>r.style.display='none');
    document.getElementById(id).style.display='block';

    document.querySelectorAll('.tabs button').forEach(b=>b.classList.remove('active'));
    event.target.classList.add('active');
}

/* DAILY */
new Chart(document.getElementById('dailyChart'),{
    type:'line',
    data:{
        labels:['6 AM','9 AM','12 PM','3 PM','6 PM','9 PM'],
        datasets:[
            {label:'GRID',data:[1.2,2.4,3.1,2.8,3.9,4.3],tension:.4,borderWidth:3,fill:true},
            {label:'DG',data:[0,0.6,0.4,0,0,0],tension:.4,borderWidth:3,fill:true}
        ]
    }
});

/* MONTHLY */
new Chart(document.getElementById('monthlyChart'),{
    type:'bar',
    data:{
        labels:['Jan','Feb','Mar','Apr','May','Jun'],
        datasets:[
            {label:'Units',data:[120,135,128,140,150,165]}
        ]
    }
});

/* COMPARATIVE */
new Chart(document.getElementById('compareChart'),{
    type:'doughnut',
    data:{
        labels:['GRID','DG'],
        datasets:[
            {data:[92,8]}
        ]
    }
});




