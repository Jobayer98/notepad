console.log("live loading!");

const lists = document.querySelectorAll("li");
const inputText = document.getElementById("input_text");
const fontSizeEvent = document.getElementById("font_size");
const colorEvent = document.getElementById("font_color");

let fsize = document.getElementById("font_size").value;

fontSizeEvent.addEventListener("mouseenter", () => {
  fontSizeEvent.style.background = "white";
});
fontSizeEvent.addEventListener("mouseout", () => {
  fontSizeEvent.style.background = "transparent";
});

const fontSize = (s) => {
  inputText.style.fontSize = s + "px";
};

fontSize(fsize);

// set text align in textarea
const setTextAlign = (value) => {
  if (!isActive) {
    console.log(value);
    inputText.style.textAlign = value;
    isActive = true;
  } else {
    console.log("start");
    inputText.style.textAlign = "start";
    isActive = false;
  }
};

let isActive = false;
// set font style in textarea
lists.forEach((list) => {
  list.addEventListener("click", () => {
    if (list.dataset.font === "bold") {
      if (!isActive) {
        inputText.style.fontWeight = "bold";
        isActive = true;
      } else {
        inputText.style.fontWeight = "normal";
        isActive = false;
      }
    } else if (list.dataset.font === "italic") {
      if (!isActive) {
        inputText.style.fontStyle = "italic";
        isActive = true;
      } else {
        inputText.style.fontStyle = "normal";
        isActive = false;
      }
    } else if (list.dataset.font === "underline") {
      if (!isActive) {
        inputText.style.textDecoration = "underline";
        isActive = true;
      } else {
        inputText.style.textDecoration = "none";
        isActive = false;
      }
    } else if (list.dataset.align === "left") {
      setTextAlign("left");
    } else if (list.dataset.align === "center") {
      setTextAlign("center");
    } else if (list.dataset.align === "right") {
      setTextAlign("right");
    }
  });
});

// Set Font Size in textarea
fontSizeEvent.addEventListener("change", (e) => {
  fsize = e.target.value;
  fontSize(fsize);
});

// set font color in textArea

colorEvent.addEventListener("change", (e) => {
  inputText.style.color = e.target.value;
});
