var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var i = 0; i < stars; i++) {
  var x = Math.random() * canvas.offsetWidth;
  var y = Math.random() * canvas.offsetHeight;
  var radius = Math.random() * 1.2;
  var hue = colorrange[getRandom(0, colorrange.length - 1)];
  var sat = getRandom(50, 100);
  var opacity = Math.random(); // Initialize with random opacity
  starArray.push({ x, y, radius, hue, sat, opacity });
}

var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;

var baseFrame = context.getImageData(
  0,
  0,
  window.innerWidth,
  window.innerHeight
);

function drawStars() {
  for (var i = 0; i < stars; i++) {
    var star = starArray[i];

    context.beginPath();
    context.arc(star.x, star.y, star.radius, 0, 360);
    context.fillStyle =
      "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
    context.fill();
  }
}

function updateStars() {
  for (var i = 0; i < stars; i++) {
    if (Math.random() > 0.99) {
      starArray[i].opacity = Math.random();
    }
  }
}

const button = document.getElementById("valentinesButton");

button.addEventListener("click", () => {
  if (button.textContent === "Click Me! ❤") {
    button.textContent = "loading...";
    fetch("send_mail.php")
      .then((response) => {
        if (response.ok) {
          button.textContent = "Check Your Email 🙃";
        } else {
          console.error("Failed to send email");
          button.textContent = "Error 😞";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        button.textContent = "Error 😞";
      });
  }
});

function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
  lines.forEach((line, index) => {
    context.fillText(line, x, y + index * (fontSize + lineHeight));
  });
}

function drawText() {
  var fontSize = Math.min(30, window.innerWidth / 25); // Adjust font size based on screen width
  var lineHeight = 8;

  context.font = fontSize + "px Comic Sans MS";
  context.textAlign = "center";

  if (frameNumber < 300) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "From the moment I met you🥰, I knew that you were someone special❤️.",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity + 0.01;
  }
  //fades out the text by decreasing the opacity
  if (frameNumber >= 300 && frameNumber < 600) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "i feel so lucky ap mille mujhe, Magical eyes👁️, Lovable uh🥰,",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity - 0.01;
  }

  //needs this if statement to reset the opacity before next statement on canvas
  if (frameNumber == 600) {
    opacity = 0;
  }
  if (frameNumber > 600 && frameNumber < 900) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

    if (window.innerWidth < 600) {
      drawTextWithLineBreaks(
        ["I love the feeling and the butterflies🦋,", "I get when I see you smiling🙈"],
        canvas.width / 2,
        canvas.height / 2,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        "I love the feeling and the butterflies🦋, I get when I see you smiling🙈",
        canvas.width / 2,
        canvas.height / 2
      );
    }

    opacity = opacity + 0.01;
  }
  if (frameNumber >= 900 && frameNumber < 1200) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

    if (window.innerWidth < 600) {
      drawTextWithLineBreaks(
        ["I love the feeling and the butterflies🦋,", "I get when I see you smiling🙈"],
        canvas.width / 2,
        canvas.height / 2,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        "I love the feeling and the butterflies🦋, I get when I see you smiling🙈",
        canvas.width / 2,
        canvas.height / 2
      );
    }

    opacity = opacity - 0.01;
  }

  if (frameNumber == 1200) {
    opacity = 0;
  }
  if (frameNumber > 1200 && frameNumber < 1500) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "its very magical and very different✨ , apse itna pyaar hogya🥺",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity + 0.01;
  }
  if (frameNumber >= 1500 && frameNumber < 1800) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "its very magical and different✨ , apse itna pyaar hogya🥺",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity - 0.01;
  }

  if (frameNumber == 1800) {
    opacity = 0;
  }
  if (frameNumber > 1800 && frameNumber < 2100) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "i just hope uh have🥺same feeling for me. i know and can understand uh have reasons😔",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity + 0.01;
  }
  if (frameNumber >= 2100 && frameNumber < 2400) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "i just hope uh have🥺same feeling for me. i know and can understand uh have reasons😔",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity - 0.01;
  }

  if (frameNumber == 2400) {
    opacity = 0;
  }
  if (frameNumber > 2400 && frameNumber < 2700) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

    if (window.innerWidth < 600) {
      drawTextWithLineBreaks(
        [
          " I know ap mujhe shayd nhi krte pasand but remember one thing",
          "someone is waiting for your love🥰,",
        ],
        canvas.width / 2,
        canvas.height / 2,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        [
          " I know ap mujhe shayd nhi krte pasand but remember one thing",
          "someone is waiting for your love🥰,",
        ],
        canvas.width / 2,
        canvas.height / 2
      );
    }

    opacity = opacity + 0.01;
  }
  if (frameNumber >= 2700 && frameNumber < 3000) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

    if (window.innerWidth < 600) {
      drawTextWithLineBreaks(
        [
          " I know ap mujhe shayd nhi krte pasand but remember one thing",
          "someone is waiting for your love🥰,",
        ],
        canvas.width / 2,
        canvas.height / 2,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        [
          " I know ap mujhe shayd nhi krte pasand but remember one thing",
          "someone is waiting for your love🥰,",
        ],
        canvas.width / 2,
        canvas.height / 2
      );
    }

    opacity = opacity - 0.01;
  }

  if (frameNumber == 3000) {
    opacity = 0;
  }
  if (frameNumber > 3000 && frameNumber < 99999) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

    if (window.innerWidth < 600) {
      drawTextWithLineBreaks(
        [
          "I love you so much , more than anything💖",
          "Love 3000 my princess👸",
        ],
        canvas.width / 2,
        canvas.height / 2,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        "I love you so much , more than anything💖Love 3000 my princess 👸",
        canvas.width / 2,
        canvas.height / 2
      );
    }

    opacity = opacity + 0.01;
  }

  if (frameNumber >= 3300 && frameNumber < 99999) {
    context.fillStyle = `rgba(255, 255, 255, ${secondOpacity})`;

    if (window.innerWidth < 600) {
      drawTextWithLineBreaks(
        [
          "And I would wait to spend all the time⏳",
          "in the world to share that love with you!🌷",
        ],
        canvas.width / 2,
        canvas.height / 2 + 70,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        "And I would wait to spend all the time⏳ in the world to share that love with you!🌷",
        canvas.width / 2,
        canvas.height / 2 + 50
      );
    }

    secondOpacity = secondOpacity + 0.01;
  }

  if (frameNumber >= 3600 && frameNumber < 99999) {
    context.fillStyle = `rgba(255, 255, 255, ${thirdOpacity})`;
    context.fillText(
      "Will You Be Mine?",
      canvas.width / 2,
      canvas.height / 2 + 120
    );
    thirdOpacity = thirdOpacity + 0.01;

    button.style.display = "block";
  }
}

function draw() {
  context.putImageData(baseFrame, 0, 0);

  drawStars();
  updateStars();
  drawText();

  if (frameNumber < 99999) {
    frameNumber++;
  }
  window.requestAnimationFrame(draw);
}

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
});

window.requestAnimationFrame(draw);
