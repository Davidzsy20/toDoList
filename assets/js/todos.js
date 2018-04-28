$("ul").on("click","li",function() {
    // var listStyleOn = {
    //     color: "gray",
    //     textDecoration: "line-through"
    // }
    // var listStyleOff = {
    //     color: "black",
    //     textDecoration: "none"
    // } 
    // if( $(this).css("color") === 'rgb(128, 128, 128)') {
    //     $(this).css(listStyleOff);
    // }  else{

    //      $(this).css(listStyleOn);
    // }
    $(this).toggleClass("completed")
   
   
});

$("ul").on("click", "span", function() {
    $(this).parent().fadeOut(500, function() {
   $(this).remove();
    });
    event.stopPropagation();

})
$("input[type= 'text']").keypress(function(event) {
    if(event.which === 13) {
       var task =  $(this).val();
       $(this).val("");
       $('ul').append("<li><span><i class='fa fa-trash'></i></span>"+ task+"</li>")
    }
})
$(".add").click(function() {
    $("input[type= 'text']").fadeToggle();
})