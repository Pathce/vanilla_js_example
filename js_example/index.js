"use strict";

function hello(name) {
  let phrase = `Hello, ${name}!`;

  say(phrase);
}

function say(phrase) {
  alert(`** ${phrase} **`);
}

hello("min");
