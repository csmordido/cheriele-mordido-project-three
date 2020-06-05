const tidyDesk= {};

tidyDesk.list = $(".objects-list ul");
tidyDesk.listItem = $(".objects-list ul li");

tidyDesk.checkListItem = () => {
  const hiddenListItems = tidyDesk.listItem.attr("style", "display: none;");
  const hiddenListItemsN = hiddenListItems.length;
  console.log(hiddenListItemsN);
}






tidyDesk.init = () => {
  $(".modal-box button").on("click", function() {
    $(".modal-box").fadeOut(500);
    tidyDesk.list.fadeIn(500);
  })

  $("img").on("click", function() {
    const imgClass = $(this).attr("class");
    $(this).fadeOut(500);
    tidyDesk.list
      .find("." + imgClass)
      .fadeOut(500);
      tidyDesk.checkListItem();    

  })

}


$(function() {
  tidyDesk.init();
})