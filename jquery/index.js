$("h1").append("<button><h6></h6>IKOMEYE</h6></button>").css("color", "darkgreen","fontSize","0.5rem").on("click", function(){
    $("h1").fadeIn().fadeOut().animate({ left: '250px',
    height: '+=30px',
    width: '+=30px'});
     $("button").css("background-color", "darkgreen");
});
