const tidyDesk= {};

tidyDesk.modalBox = $(".modal-box");
tidyDesk.modalBoxParagraph = $(".modal-box p");
tidyDesk.modalBoxButton = $(".modal-box button");
tidyDesk.timerParagraph = $(".timer p");
tidyDesk.timerText = $(".timer p span");
tidyDesk.timerSeconds = parseInt($(".timer p span").text(), 10);
tidyDesk.list = $(".images-list ul");
tidyDesk.listItem = $(".images-list ul li");

tidyDesk.countHiddenImages = function() {
  const hiddenImagesN = $("img:hidden").length;
  return hiddenImagesN;
}

tidyDesk.startGame = function() {
  tidyDesk.modalBoxButton.on("click", function() {
    $("img").attr("tabindex", 0);
    tidyDesk.modalBox.fadeOut(500);
    tidyDesk.listItem.fadeTo(500, 1);
    tidyDesk.timer(tidyDesk.timerSeconds);
  })
}

tidyDesk.foundAllImages = function(numberOfImagesToFind) {
  const numberOfHiddenImages = tidyDesk.countHiddenImages();
  if ( numberOfHiddenImages === numberOfImagesToFind - 1 ) {
    $("img").removeAttr("tabindex");
    tidyDesk.modalBoxParagraph
      .text("Congratulations! Your desk is ready for another bootcamp project!");
    tidyDesk.modalBoxButton.text("Play again");
    tidyDesk.modalBox.fadeIn(500);
  }
}

tidyDesk.resetGame = function() {
  tidyDesk.modalBoxButton.on("click", function() {
    $("img").attr("tabindex", 0);
    tidyDesk.modalBox.fadeOut(500);
    tidyDesk.listItem.fadeTo(500, 1);
    $("img").fadeIn(500);
    tidyDesk.timer(tidyDesk.timerSeconds);
  })
}

tidyDesk.timer = function(seconds) {
  let counter = seconds;
  let timer = setInterval(function() {
    tidyDesk.timerText.text(counter);
    counter--;
    numberOfHiddenImages = tidyDesk.countHiddenImages();
    if (numberOfHiddenImages === 6) {
      clearInterval(timer);
      tidyDesk.timerText.text(seconds);
    } else if (counter === -1) {
      clearInterval(timer);
      tidyDesk.timerText.text(seconds);
      tidyDesk.listItem.fadeTo(500, 0);
      tidyDesk.modalBoxParagraph.text("Time's up!");
      tidyDesk.modalBoxButton.text("Play again");
      tidyDesk.modalBox.fadeIn(500);
    }
  }, 1000);
}


tidyDesk.init = () => {
  tidyDesk.startGame();
  
  $("img").on("click", function() {
    const imgClass = $(this).attr("class");
    $(this).fadeOut(500);
    tidyDesk.list
    .find("." + imgClass)
    .fadeTo(500, 0);
    tidyDesk.foundAllImages(6);
  })

  $("img").keypress(function(event){
    const keycode = event.which;
    if(keycode == '13'){
      const imgClass = $(this).attr("class");
      $(this).fadeOut(500);
      tidyDesk.list
        .find("." + imgClass)
        .fadeTo(500, 0);
      tidyDesk.foundAllImages(6);  
    }
  })

  tidyDesk.resetGame();
}
    
$(function() {
  tidyDesk.init();
})