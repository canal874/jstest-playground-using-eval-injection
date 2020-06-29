/**
 * JS Playground implementation using eval
 */

function run() {
  const code = document.getElementById("code").value;
  let completed = function() {
    say("Completed!");
  };
  eval(code);
  completed();
}

function say(txt) {
  document
    .getElementById("previewArea")
    .insertAdjacentHTML("beforeend", `${txt}<br>`);
}
