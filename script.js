const tidyDesk= {};

tidyDesk.list = $(".objects-list ul");
tidyDesk.listItem = $(".objects-list ul li");

tidyDesk.countHiddenImages = function() {
  const hiddenImagesN = $("img:hidden").length;
  return hiddenImagesN;
}










tidyDesk.init = () => {
  $(".modal-box button").on("click", function() {
    $(".modal-box").fadeOut(500);
    tidyDesk.listItem.fadeIn(500);
  })

  $("img").on("click", function() {
    const imgClass = $(this).attr("class");
    if (imgClass !== "sunrise") {
      $(this).fadeOut(500);
      tidyDesk.list
        .find("." + imgClass)
        .fadeOut(500);
      const numberOfHiddenImages = tidyDesk.countHiddenImages();
      if ( numberOfHiddenImages === 4) {
        $(".modal-box")
          .html(`<p>Congratulations! Your desk is ready for another bootcamp project!</p>
          <button type="button">Play again</button>`)
          .fadeIn(500);
      }
      $(".modal-box button").on("click", function() {
        $(".modal-box").fadeOut(500);
        tidyDesk.listItem.fadeIn(500);
        $("img").fadeIn(500);
      })
    }
    
  })
}


$(function() {
  tidyDesk.init();
})