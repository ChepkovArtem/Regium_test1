$('.advices__list').slick({
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 5,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            dots: true,
            slidesToShow: 4
          }
        },
        {
          breakpoint: 960,
          settings: {
            dots: true,
            slidesToShow: 3
          }
        },
        {
            breakpoint: 640,
            settings: {
              dots: true,
              slidesToShow: 2
            }
          },
          {
              breakpoint: 480,
              settings: {
                dots: true,
                slidesToShow: 1
              }
            }
      ]
});


$('.reasons__list').slick({
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 3,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            dots: true,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            dots: true,
            slidesToShow: 1
          }
        }
      ]
});

$('.reviews__list').slick({
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 3,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            dots: true,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            dots: true,
            slidesToShow: 1
          }
        }
      ]
});

const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', (e) =>{
  e.preventDefault();
  checkInputs();
});

function checkInputs(){;
  const emailValue = email.value.trim();
  if(emailValue === ''){
      setErrorFor(email, 'Заполните поле');
  } else if (!isEmail(emailValue)) {
      setErrorFor(email, 'Электронный адрес введен не корректно');
  } else {
      setSuccessFor(email, '');
  }

}

function setErrorFor(input, message){
  const formControl = input.parentElement;
  input.style = "border: 2px solid red";
  const errorField = formControl.querySelector('.form__error--text');
  errorField.innerText = message;
}

function setSuccessFor(input, message){
  const formControl = input.parentElement;
  input.style = "border: 2px solid green";
  const errorField = formControl.querySelector('.form__error--text');
  errorField.innerText = message;
}

function isEmail(email) {
	return /^(([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/.test(email);
}

$(document).ready(function(){
  $(".button").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });
});