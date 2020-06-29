/**
 * JS Playground implementation using eval
 */

function run() {
  const code = document.getElementById("code").value;
  let completed = function() {};
  eval(code);
  completed();
}

function say(txt) {
  document
    .getElementById("previewArea")
    .insertAdjacentHTML("beforeend", `${txt}<br>`);
}
