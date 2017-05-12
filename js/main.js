


var link=document.querySelector(".hotel_search_title");
var popup = document.querySelector(".search_form_box"); 
link.addEventListener("click", function(event) {
	event.preventDefault();
	if(!popup.classList.contains("modal-content-show"))
	{
 		popup.classList.add("modal-content-show");
	} else {
		popup.classList.remove("modal-content-show");
 	}
 }); 




