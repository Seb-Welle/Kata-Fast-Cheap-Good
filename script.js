const checkFast = document.querySelector(".fast");
const checkCheap = document.querySelector(".cheap");
const checkGood = document.querySelector(".good");

/* Array needed
function chcontrol(e) {
  let count = 0;
  for (
    i = 0;
    i < checkFast.length || i < checkCheap.length || i < checkGood.length;
    i++
  ) {}
}*/

function toggle(clickedCheckbox1, clickedCheckbox2, clickedCheckbox3) {
  if (
    clickedCheckbox1.checked &&
    clickedCheckbox2.checked &&
    clickedCheckbox3.checked
  ) {
    lastCheckbox.checked = false;
  }
  lastCheckbox = clickedCheckbox1;
}

checkFast.addEventListener("change", () => {
  toggle(checkFast, checkCheap, checkGood);
});

checkCheap.addEventListener("change", () => {
  toggle(checkCheap, checkFast, checkGood);
});

checkGood.addEventListener("change", () => {
  toggle(checkGood, checkCheap, checkFast);
});
