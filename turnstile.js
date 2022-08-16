function changeTurnstileContent() {
  switch (location.hash) {
    case "#about":
      $("#right-turnstile").load("about.html");
      removeOrAddLinks("#about-text");
      break;
    case "#contact":
      $("#right-turnstile").load("contact.html");
      removeOrAddLinks("#contact-text");
      console.log("contact page");
      break;
    default:
      $("#right-turnstile").load("home.html");
      removeOrAddLinks("#jk-text");
      console.log("home page");
  }
}

function removeOrAddLinks(noLinkText) {
  textElements = ["#jk-text", "#about-text", "#contact-text"];

  for (let i = 0; i < textElements.length; i++) {
    if (textElements[i] != noLinkText) {
      $(textElements[i])
        .removeClass("cloth-text-no-link")
        .addClass("cloth-text")
        .parent()
        .removeClass("disable-link");
    }
  }

  $(noLinkText)
    .removeClass("cloth-text")
    .addClass("cloth-text-no-link")
    .parent()
    .addClass("disable-link");
}

window.addEventListener("hashchange", changeTurnstileContent);
$(document).ready(changeTurnstileContent);
