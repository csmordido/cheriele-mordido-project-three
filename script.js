const tidyDesk= {};

tidyDesk.modalBox = $(".modal-box");
tidyDesk.timerParagraph = $(".timer p");
tidyDesk.timerText = $(".timer p span");
tidyDesk.timerSeconds = $(".timer p span").text();
tidyDesk.list = $(".images-list ul");
tidyDesk.listItem = $(".images-list ul li");

tidyDesk.countHiddenImages = function() {
  const hiddenImagesN = $("img:hidden").length;
  return hiddenImagesN;
}

tidyDesk.startGame = function() {
  $(".modal-box button").on("click", function() {
    tidyDesk.modalBox.fadeOut(500);
    tidyDesk.listItem.fadeTo(500, 1);
    tidyDesk.timer(tidyDesk.timerSeconds);
  })
}

tidyDesk.foundAllImages = function(numberOfImagesToFind) {
  const numberOfHiddenImages = tidyDesk.countHiddenImages();
  if ( numberOfHiddenImages === numberOfImagesToFind - 1) {
    tidyDesk.modalBox
      .html(`<p>Congratulations! Your desk is ready for another bootcamp project!</p>
      <button type="button">Play again</button>`)
      .fadeIn(500);
  }
}

tidyDesk.resetGame = function() {
  $(".modal-box button").on("click", function() {
    tidyDesk.modalBox.fadeOut(500);
    tidyDesk.listItem.fadeTo(500, 1);
    $("img").fadeIn(500);
    tidyDesk.timer(tidyDesk.timerSeconds);
  })
}

tidyDesk.timer = function(seconds) {
  let counter = seconds;
  let timer = setInterval(function() {
    tidyDesk.timerParagraph.fadeTo("fast", 1);
    tidyDesk.timerText.text(counter);
    counter--;
    numberOfHiddenImages = tidyDesk.countHiddenImages();
    if (numberOfHiddenImages === 5) {
      clearInterval(timer);
      tidyDesk.timerParagraph.fadeTo("fast", 0.5);
      tidyDesk.timerText.text(seconds);
    } else if (counter === 0) {
      clearInterval(timer);
      tidyDesk.timerParagraph.fadeTo("fast", 0.5);
      tidyDesk.timerText.text(seconds);
      tidyDesk.modalBox
        .html(`<p>Time's up!</p>
        <button type="button">Play again</button>`)
        .fadeIn(500);
      tidyDesk.resetGame();
    }
  }, 1000);
}

tidyDesk.init = () => {
  tidyDesk.startGame();

  $("img").on("click", function() {
    const imgClass = $(this).attr("class");
    if (imgClass !== "sunrise") {
      $(this).fadeOut(500);
      tidyDesk.list
        .find("." + imgClass)
        .fadeTo(500, 0);
      tidyDesk.foundAllImages(5);
    }

    tidyDesk.resetGame();

  })
}

$(function() {
  tidyDesk.init();
})