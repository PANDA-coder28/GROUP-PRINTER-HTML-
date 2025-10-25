if (document.querySelector('.login-box')) {
    const form = document.querySelector('.login-box form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = document.querySelector('input[type="email"]').value;
        const password = document.querySelector('input[type="password"]').value;

        if(!email || !password) {
            alert("Please fill in all fields");
            return;
        }
        
        if(!email.includes('@')) {
            alert("Please enter a valid email address");
            return;
        }

        if(email === "user@gmail.com" && password === "12345") {
            window.location.replace('index.html');
        } else {
            alert("Invalid email or password");
        }
    });
}

if (document.querySelector('.slider-container')) {
    const swiper = new Swiper('.slider-wrapper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}
