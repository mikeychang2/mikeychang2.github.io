$(document).ready(function() {
  // Intro - Display skills with clicked
  $("#web").on("click", function(){
    $("#web").hide();
    $(".web-skills").removeClass("hidden");
  });

  $("#marketer").on("click", function(){
    $("#marketer").hide();
    $(".marketing-skills").removeClass("hidden");
  });

  $("#traveler").on("click", function(){
    $("#traveler").hide();
    $(".travel-skills").removeClass("hidden");
  });

  $("#yoga").on("click", function(){
    $("#yoga").hide();
    $(".yoga-skills").removeClass("hidden");
  });

  // Projects - Display description when clicked
  $("#traverse-group").on("click", function(){
    $("#traverse-group").hide();
    $(".traverse-group-description").removeClass("hidden");
  });

  $("#traverse-personal").on("click", function(){
    $("#traverse-personal").hide();
    $(".traverse-personal-description").removeClass("hidden");
  });

  $("#personal-blog").on("click", function(){
    $("#personal-blog").hide();
    $(".personal-blog-description").removeClass("hidden");
  });

}); // last end brace

