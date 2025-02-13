document.getElementById("enter-btn").addEventListener("click", function () {
  document.querySelector(".landing").style.display = "none";
  document.querySelector(".main-content").style.display = "block";

  // Initialize the title animation after showing the main content
  const title = document.querySelector(".title");
  const text = "Happy Valentines Day Hon!".split("");
  for (let index = 0; index < text.length; index++) {
    if (text[index] !== " ") {
      title.innerHTML += `<span>${text[index]}<span/>`;
    } else {
      title.innerHTML += `<span style='margin-right: 20px;'><span/>`;
    }
  }

  const textElements = document.querySelectorAll(".title span");
  textElements.forEach((element) => {
    const randomDelay = Math.random() * 3;
    element.style.animationDelay = `${randomDelay}s`;
  });
});

document.addEventListener("click", function () {
  var audio = document.getElementById("bgAudio");
  var content = document.getElementById("landing");
  var overlay = document.getElementById("loadingOverlay");

  audio.play().catch(function (error) {
    console.log("Audio play failed: ", error);
  });

  audio.onplaying = function () {
    overlay.style.transition = "opacity 1s ease";
    overlay.style.opacity = "0";

    setTimeout(function () {
      overlay.style.display = "none";
      content.style.display = "block";
    }, 1000);
  };

  document.removeEventListener("click", arguments.callee);

  // Hide the button after the click
  this.style.display = "none";
});
