// check off specific todos by clicking
// $("li").click(function(){
// 	if($(this).css("color") === "rgb(128, 128, 128)"){
// 		$(this).css({
// 			color: "black",
// 			textDecoration: "none"
// 		});
// 	} else {
// 		$(this).css({
// 			color: "grey",
// 			textDecoration: "line-through"
// 		});
// 	}
// }); Shorter version below

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// click on x to delete a todo 
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$(".fa-pencil").click(function(){
	$("input[type='text']").fadeToggle();
});