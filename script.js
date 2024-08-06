function displayRandomMessage() {
  // Array of messages
  const messages = [
    "Hey there! 🌟 Just wanted to share some positive vibes with you! 😊✨ ",
    "Life's a beautiful journey, and I'm grateful for amazing people like you! 🌈 ",
    "Let's chase our dreams, spread kindness like confetti 🎉, and make every moment count! 🌟 ",
    "Whether it's a sunny day ☀️ or a stormy one 🌧️, remember there's always a rainbow! 🌈💖 ",
    "Keep smiling, stay awesome, and let's make the world a better place, one good deed at a time! 🌟💪 ",
    "You're a shining star, and the world needs your light! 🌟💫 ",
    "Let's rock this day and every day! 🎸🎶 Sending you            all the love and good vibes! 💕✨",
  ];

  // Select a random message
  const randomIndex = Math.floor(Math.random() * messages.length);
  const randomMessage = messages[randomIndex];

  // Display the message
  document.getElementById("message").innerText = randomMessage;
}

// Call the function when the page loads
displayRandomMessage();

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
