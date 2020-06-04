const tidyDesk= {};


$("img").on("click", function() {
  const imgClass = $(this).attr("class");
  console.log(imgClass);
})



tidyDesk.init = () => {

}


$(function() {
  tidyDesk.init();
})