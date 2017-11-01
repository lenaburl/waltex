function LoginVisible () {
  $(".btn__enter").click(function (event){
    var popup_login = $(".enter-pop-up");
    event.preventDefault();
    popup_login.addClass("enter-pop-up--visible");
    $(".registration-form__email").focus();
  });
}

function RegistrationVisible () {
  $(".btn__registration").click(function (event){
    var popup_registration = $(".registration-pop-up");
    event.preventDefault();
    popup_registration.addClass("registration-pop-up--visible");
    $(".registration-form__email").focus();
  });
}

function LoginInvisible () {
  $(".enter-pop-up__exit").click(function (event){
    var popup_login = $(".enter-pop-up");
    event.preventDefault();
    popup_login.removeClass("enter-pop-up--visible");
  });
}

function RegistrationInvisible () {
  $(".registration-pop-up__exit").click(function (event){
    var popup_registration = $(".registration-pop-up");
    event.preventDefault();
    popup_registration.removeClass("registration-pop-up--visible");
  });
}

$(document).ready(function() {
  LoginVisible();
  RegistrationVisible();
  LoginInvisible();
  RegistrationInvisible();
});
