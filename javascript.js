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

  $(".main-capabilities__try-btn").click(function (event){
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

function Carousel () {
  $(".features-list__circle").click(function (){
    var btn_id = $(this).attr( "id");
    if (btn_id == "left") {
      $(".features-list").css("transform", "translate(0)");
      $(".features-list__left").addClass("features-list__circle--inactive");
      $(".features-list__right").addClass("features-list__circle--active");
      $(".features-list__right").removeClass("features-list__circle--inactive");
      $(".features-list__left").removeClass("features-list__circle--active");
    }
    else if (btn_id == "right") {
      $(".features-list").css("transform", "translate(-615px)");
      $(".features-list__left").addClass("features-list__circle--active");
      $(".features-list__right").addClass("features-list__circle--inactive");
      $(".features-list__right").removeClass("features-list__circle--active");
      $(".features-list__left").removeClass("features-list__circle--inactive");
    }
  });
}

function ChangeText () {
  if ($(window).width() <= "640") {
    $(".btn__enter").text("");
    $(".main-capabilities__link").removeClass("main-capabilities__link--hidden");
    $(".main-capabilities__try-btn").removeClass("main-capabilities__try-btn--hidden");
  } else {
      $(".btn__enter").text("Войти");
    $(".main-capabilities__link").addClass("main-capabilities__link--hidden");
    $(".main-capabilities__try-btn").addClass("main-capabilities__try-btn--hidden");
  }
}


function MinimizeTable () {
  if ($(window).width() <= "640") {
    $(".price").each(function() {
      var $this = $(this);
      var newrows = [];
      $this.find("tr").each(function(){
          var i = 0;
          $(this).find("td").each(function(){
              i++;
              if(newrows[i] === undefined) { newrows[i] = $("<tr></tr>"); }
              newrows[i].append($(this));
          });
      });
      $this.find("tr").remove();
      $.each(newrows, function(){
          $this.append(this);
      });
    });
  }
}


ChangeText();

$(document).ready(function() {
  LoginVisible();
  RegistrationVisible();
  LoginInvisible();
  RegistrationInvisible();
  $(window).on('load',MinimizeTable);
  Carousel();
});
