const tidyDesk= {};

tidyDesk.list = $(".images-list ul");
tidyDesk.listItem = $(".images-list ul li");

tidyDesk.countHiddenImages = function() {
  const hiddenImagesN = $("img:hidden").length;
  return hiddenImagesN;
}

tidyDesk.startGame = function() {
  $(".modal-box button").on("click", function() {
    $(".modal-box").fadeOut(500);
    tidyDesk.listItem.fadeIn(500);
  })
}

tidyDesk.foundAllImages = function(numberOfImagesToFind) {
  const numberOfHiddenImages = tidyDesk.countHiddenImages();
  if ( numberOfHiddenImages === numberOfImagesToFind - 1) {
    $(".modal-box")
      .html(`<p>Congratulations! Your desk is ready for another bootcamp project!</p>
      <button type="button">Play again</button>`)
      .fadeIn(500);
  }
}

tidyDesk.resetGame = function() {
  $(".modal-box button").on("click", function() {
    $(".modal-box").fadeOut(500);
    tidyDesk.listItem.fadeIn(500);
    $("img").fadeIn(500);
  })
}

tidyDesk.init = () => {
  tidyDesk.startGame();

  $("img").on("click", function() {
    const imgClass = $(this).attr("class");
    if (imgClass !== "sunrise") {
      $(this).fadeOut(500);
      tidyDesk.list
        .find("." + imgClass)
        .fadeOut(500);

      tidyDesk.foundAllImages(5);
    }

    tidyDesk.resetGame();

  })
}

$(function() {
  tidyDesk.init();
})