document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.transition = "0.3s";

const toggleBtn = document.createElement("button");
toggleBtn.textContent = "Dark Mode";
toggleBtn.style.padding = "10px 20px";
toggleBtn.style.margin = "20px";
toggleBtn.style.border = "none";
toggleBtn.style.borderRadius = "8px";
toggleBtn.style.background = "#222";
toggleBtn.style.color = "#fff";
document.body.appendChild(toggleBtn);
let darkMode = false;
toggleBtn.addEventListener("click", () => {
  darkMode = !darkMode;
  if(darkMode){
    document.body.style.background = "#121212";
    document.body.style.color = "#f0f0f0";
    toggleBtn.textContent = "Light Mode ";
    toggleBtn.style.background = "#f0f0f0";
    toggleBtn.style.color = "#121212";

    [plusBtn, miunsBtn, resetBtn](btn => {
      btn.style.background = "#444"; 
      btn.style.color = "#fff";     
    });
  
  } else {
     document.body.style.background = "#fff";
    document.body.style.color = "#000";
    toggleBtn.textContent = "Dark Mode";
    toggleBtn.style.background = "#222";
    toggleBtn.style.color = "#fff";


    [plusBtn, miunsBtn, resetBtn](btn => {
      btn.style.background = "#111"; 
      btn.style.color = "#fff";    
    });
  }
});


const main = document.createElement("div");
main.style.height = "100vh";
main.style.display = "flex";
main.style.flexDirection = "column";
main.style.justifyContent = "center";
main.style.alignItems = "center";
main.style.gap = "20px";
document.body.appendChild(main);

// ---- Counter ----
let count = 0;
const counter = document.createElement("h1");
counter.textContent = count;
counter.style.fontSize = "60px";
main.appendChild(counter);

// ---- Buttons Container ----
const btnBox = document.createElement("div");
btnBox.style.display = "flex";
btnBox.style.gap = "15px";
main.appendChild(btnBox);

// ---- Buttons ----
const plusBtn = document.createElement("button");
plusBtn.textContent = "+";
styleBtn(plusBtn);
btnBox.appendChild(plusBtn);

const miunsBtn = document.createElement("button");
miunsBtn.textContent = "-";
styleBtn(miunsBtn);
btnBox.appendChild(miunsBtn);

const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";
styleBtn(resetBtn);
btnBox.appendChild(resetBtn);

// ---- All Styling function ----
function styleBtn(btn) {
  btn.style.padding = "12px 20px";
  btn.style.fontSize = "18px";
  btn.style.border = "none";
  btn.style.borderRadius = "8px";
  btn.style.cursor = "pointer";
}

// main event 
plusBtn.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

miunsBtn.addEventListener("click", () => {
  count--;
  counter.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
});
