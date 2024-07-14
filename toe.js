let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#Reset");
let newBtn = document.querySelector("#New");
let msgContaint = document.querySelector(".msg-containt");
let msg = document.querySelector("#msg");
let count = 0;

let turnO = true;
let turnX = false;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
      turnX = true;
    } else if (turnX) {
      box.innerText = "X";
      turnX = false;
      turnO = true;
    }
    count ++;
    console.log(count);
    box.disabled = true;
    checkWinner();
  });
});

const resetGame = () => {
  turnO = true;
  turnX = false;
  boxes.innerText = "";
  enableBoxes();
  msgContaint.classList.add("hide");
  count =0;
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulation, Winner is ${winner}`;
  msgContaint.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
  if(count===9){
    showDraw();
  }
};

const showDraw = () => {
  msg.innerText = `Draw`;
  msgContaint.classList.remove("hide");
  disableBoxes();
  count = 0;
};

newBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
