let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector("#reset-btn");
let message = document.querySelector(".hide");
let ggm = document.querySelector("#whole-game");
let newnode = document.createElement("h1");
let winnerBox = document.querySelector(".winner");
let drn = document.querySelector(".drawn");
let playagain = document.querySelectorAll(".play-again");
let turnx = true;
let mthdrawn = document.querySelector(".drawn");

let winning_pattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let matchdrawn = () => {
  cnt = 0;
  drn.classList.remove("hide");
  let main = document.querySelector("body").children[2];
  console.log(main);
  main.remove();
  playagain[1].addEventListener("click", () => {
    document
      .querySelector("body")
      .children[1].insertAdjacentElement("afterend", main);
    newone();
    drn.classList.add("hide");
  });
};

let checkwinner = () => {
  for (let x of winning_pattern) {
    let f1 = boxes[x[0]].innerText;
    let f2 = boxes[x[1]].innerText;
    let f3 = boxes[x[2]].innerText;
    if (f1 !== "" && f1 === f2 && f2 === f3) {
      cnt = 0;
      message.classList.remove("hide");
      newnode.textContent = f1;
      newnode.style.fontSize = "15vh";
      winnerBox.insertBefore(newnode, winnerBox.children[1]);
      let main = document.querySelector("body").children[2];
      main.remove();
      playagain[0].addEventListener("click", () => {
        document
          .querySelector("body")
          .children[1].insertAdjacentElement("afterend", main);
        newone();
        message.classList.add("hide");
      });
    }
  }
};

let cnt = 0;
boxes.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (turnx) btn.innerText = "X";
    else btn.innerText = "O";
    turnx = !turnx;
    btn.disable = true;
    checkwinner();
    cnt++;
    console.log(cnt);
    if (cnt === 9) {
      matchdrawn();
    }
  });
});

let newone = () => {
  for (ele of boxes) {
    ele.textContent = "";
    ele.disable = false;
    turnx = true;
    cnt = 0;
  }
};

resetbutton.addEventListener("click", newone);
