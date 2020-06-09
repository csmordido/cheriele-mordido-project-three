const tidyDesk= {};

tidyDesk.image = $("img");
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
    tidyDesk.image.attr("tabindex", 0);
    tidyDesk.modalBox.fadeOut(500);
    tidyDesk.listItem.fadeTo(500, 1);
    tidyDesk.timer(tidyDesk.timerSeconds);
  })
}

tidyDesk.foundAllImages = function(numberOfImagesToFind) {
  const numberOfHiddenImages = tidyDesk.countHiddenImages();
  if ( numberOfHiddenImages === numberOfImagesToFind - 1 ) {
    tidyDesk.image.removeAttr("tabindex");
    tidyDesk.modalBoxParagraph
      .text("Congratulations! Your desk is ready for another bootcamp project!");
    tidyDesk.modalBoxButton.text("Play again");
    tidyDesk.modalBox.fadeIn(500);
  }
}

tidyDesk.resetGame = function() {
  tidyDesk.modalBoxButton.on("click", function() {
    tidyDesk.image.attr("tabindex", 0);
    tidyDesk.modalBox.fadeOut(500);
    tidyDesk.listItem.fadeTo(500, 1);
    tidyDesk.image.fadeIn(500);
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
    if (numberOfHiddenImages === 10) {
      clearInterval(timer);
      tidyDesk.timerParagraph.fadeTo("fast", 0.5);
      tidyDesk.timerText.text(seconds);
      tidyDesk.image.removeAttr("tabindex");
    } else if (counter === -1) {
      clearInterval(timer);
      tidyDesk.timerParagraph.fadeTo("fast", 0.5);
      tidyDesk.timerText.text(seconds);
      tidyDesk.listItem.fadeTo("fast", 0);
      tidyDesk.modalBoxParagraph.text("Time's up!");
      tidyDesk.modalBoxButton.text("Play again");
      tidyDesk.modalBox.fadeIn(500);
      tidyDesk.image.removeAttr("tabindex");
    }
  }, 1000);
}

tidyDesk.init = () => {
  tidyDesk.startGame();
  
  tidyDesk.image.on("click", function() {
    const imgClass = $(this).attr("class");
    $(this).fadeOut(500);
    tidyDesk.list
    .find("." + imgClass)
    .fadeTo(500, 0);
    tidyDesk.foundAllImages(10);
  })

  tidyDesk.image.keypress(function(event){
    const keycode = event.which;
    if(keycode == '13'){
      const imgClass = $(this).attr("class");
      $(this).fadeOut(500);
      tidyDesk.list
        .find("." + imgClass)
        .fadeTo(500, 0);
      tidyDesk.foundAllImages(10);  
    }
  })
  
  tidyDesk.resetGame();
}
    
$(function() {
  tidyDesk.init();
})