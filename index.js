/**
 * JS Playground implementation using eval
 */

function run() {
  const code = document.getElementById("code").value;
  let completed = function() {
    document
      .getElementById("previewArea")
      .insertAdjacentHTML("beforeend", "Completed!<br>");
  };
  eval(code);
  completed();
}

function say(txt) {
  document
    .getElementById("previewArea")
    .insertAdjacentHTML("beforeend", `${txt}<br>`);
}
