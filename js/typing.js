function typeWriter(text, i, speed) {
    var textBox = document.getElementById("typewriter-text");
    if (textBox === null) {
      throw new Error("Could not find element with id 'typewriter-text'");
    }
    if (text === null) {
      throw new Error("text is null");
    }
    if (i < 0) {
      throw new Error("i is negative");
    }
    if (speed < 1) {
      throw new Error("speed is less than 1");
    }
    if (i < text.length) {
      textBox.innerHTML += text.charAt(i);
      i++;
      setTimeout(function() { typeWriter(text, i, speed); }, speed);
    } else {
      // Once typing completes, reset the text content and start typing again (loop)
      setTimeout(function() {
        textBox.innerHTML = '';
        typeWriter(text, 0, speed);
      }, 2000); // Delay before starting typing again (2 seconds in this case)
    }
  }
  
  // Start typing
  window.onload = function() {
    var text = "SATYAM CREATOR";
    var speed = 100; // Adjust the speed here
    typeWriter(text, 0, speed);
  };