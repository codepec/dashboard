let cpu = 0;
let player = 0;
let points = 0;
let rounds = 0;
let level = 1;
let playerName = "unknown";

//const monitor = document.querySelector('.monitor');
//const firebutton = document.getElementById("firebutton");
//const scorePlayer = document.getElementById("scorePlayer");
//const scoreCPU = document.getElementById("scoreCPU");
//const txtPlayer = document.getElementById("txtPlayer");
//const txtCPU = document.getElementById("txtCPU");
//const box = document.querySelector('.box');

window.onload = function () {
  monitor = document.querySelector(".monitor");
  box = document.querySelector(".box");
};

playerButton.addEventListener("click", inputPlayerName);

function inputPlayerName() {
  playerName = prompt("Please enter your name", "Player One");

  if (playerName != null) {
    monitor.innerHTML = "Hello " + playerName + "<br>Don't f*ck it up.";
  }
}

function showFire() {
  monitor.innerHTML = "You will burn";

  winLooseFire();

  gameFinished();
}

function startCoundown() {
  monitor.style.transition = "5s";
  monitor.innerHTML = "You will burn";
}

function winLooseFire() {
  // 0 = Fire
  // 1 = Water
  // 2 = Nature
  let y = cpuRandom();
  if (y === 0) {
    monitor.innerHTML = "Fire beats Fire<br>Draw";
    monitor.style.color = "black";
    txtPlayer.innerHTML = "Fire";
    txtCPU.innerHTML = "Fire";

    box.style.background =
      "linear-gradient(90deg, rgba(219,75,75,1) 0%, rgba(233,194,110,1) 30%, rgba(233,194,110,1) 70%, rgba(219,75,75,1) 100%)";
  } else if (y === 1) {
    monitor.innerHTML = "Water beats Fire<br>Computer wins";
    monitor.style.color = "red";
    cpu = cpu + 1;
    scoreCPU.innerHTML = cpu;
    txtPlayer.innerHTML = "Fire";
    txtCPU.innerHTML = "Water";

    box.style.background =
      "linear-gradient(90deg, rgba(219,75,75,1) 0%, rgba(233,194,110,1) 30%, rgba(110,188,233,1) 70%, rgba(49,67,165,1) 100%)";
  } else {
    monitor.innerHTML = "Fire beats Nature<br>You win";
    monitor.style.color = "green";
    player = player + 1;
    scorePlayer.innerHTML = player;
    txtPlayer.innerHTML = "Fire";
    txtCPU.innerHTML = "Nature";

    box.style.background =
      "linear-gradient(90deg, rgba(219,75,75,1) 0%, rgba(233,194,110,1) 30%, rgba(141,221,67,1) 70%, rgba(43,121,24,1) 100%)";
  }
}

function winLooseWater() {
  // 0 = Fire
  // 1 = Water
  // 2 = Nature
  let y = cpuRandom();
  if (y === 0) {
    monitor.innerHTML = "Water beats Fire<br>You win";
    monitor.style.cssText = "color:green; box-shadow: 0px;";
    player = player + 1;
    scorePlayer.innerHTML = player;
    txtPlayer.innerHTML = "Water";
    txtCPU.innerHTML = "Fire";
    box.style.background =
      "linear-gradient(90deg, rgba(49,67,165,1) 0%, rgba(110,188,233,1) 30%, rgba(233,194,110,1) 70%, rgba(219,75,75,1) 100%)";
  } else if (y === 1) {
    monitor.innerHTML = "Water beats Water<br>Draw";
    monitor.style.cssText = "color:black; box-shadow: 0px;";
    txtPlayer.innerHTML = "Water";
    txtCPU.innerHTML = "Water";

    box.style.background =
      "linear-gradient(90deg, rgba(49,67,165,1) 0%, rgba(110,188,233,1) 30%, rgba(110,188,233,1) 70%, rgba(49,67,165,1) 100%)";
  } else {
    monitor.innerHTML = "Nature beats Water<br>Computer wins";
    monitor.style.cssText = "color:red; box-shadow: 0px;";
    cpu = cpu + 1;
    scoreCPU.innerHTML = cpu;
    txtPlayer.innerHTML = "Water";
    txtCPU.innerHTML = "Nature";

    box.style.background =
      "linear-gradient(90deg, rgba(49,67,165,1) 0%, rgba(110,188,233,1) 30%, rgba(141,221,67,1) 70%, rgba(43,121,24,1) 100%)";
  }
}

function winLooseNature() {
  // 0 = Fire
  // 1 = Water
  // 2 = Nature
  let y = cpuRandom();
  if (y === 0) {
    monitor.innerHTML = "Fire beats Nature<br>Computer wins";
    monitor.style.cssText = "color:red; box-shadow: 0px;";
    cpu = cpu + 1;
    scoreCPU.innerHTML = cpu;
    txtPlayer.innerHTML = "Nature";
    txtCPU.innerHTML = "Fire";
    box.style.background =
      "linear-gradient(90deg, rgba(43,121,24,1) 0%, rgba(141,221,67,1) 30%, rgba(233,194,110,1) 70%, rgba(219,75,75,1) 100%)";
  } else if (y === 1) {
    monitor.innerHTML = "Nature beats Water<br>You win";
    monitor.style.cssText = "color:green; box-shadow: 0px;";
    player = player + 1;
    scorePlayer.innerHTML = player;
    txtPlayer.innerHTML = "Nature";
    txtCPU.innerHTML = "Water";

    box.style.background =
      "linear-gradient(90deg, rgba(43,121,24,1) 0%, rgba(141,221,67,1) 30%, rgba(110,188,233,1) 70%, rgba(49,67,165,1) 100%)";
  } else {
    monitor.innerHTML = "Nature beats Nature<br>Draw";
    monitor.style.cssText = "color:black; box-shadow: 0px;";
    txtPlayer.innerHTML = "Nature";
    txtCPU.innerHTML = "Nature";
    box.style.background =
      "linear-gradient(90deg, rgba(43,121,24,1) 0%, rgba(141,221,67,1) 30%, rgba(141,221,67,1) 70%, rgba(43,121,24,1) 100%)";
  }
}

function gameFinished() {
  if (cpu === 5) {
    monitor.innerHTML = "GAME OVER<br>" + "Try again";

    firebutton.disabled = true;
    waterbutton.disabled = true;
    naturebutton.disabled = true;
    randombutton.disabled = true;
    points = 0;
    rounds++;
    monitor.addEventListener("click", setZero);
    monitor.style.cssText = "color:red; box-shadow:inset 0px 0px 15px 5px;";
  } else if (player === 5) {
    monitor.innerHTML = "WINNER<br>" + "Try again";

    firebutton.disabled = true;
    waterbutton.disabled = true;
    naturebutton.disabled = true;
    randombutton.disabled = true;
    points++;
    rounds++;
    monitor.addEventListener("click", setZero);
    monitor.style.cssText = "color:green; box-shadow:inset 0px 0px 15px 5px;";
  } else {
  }
  saveScore();
}

function showWater() {
  monitor.innerHTML = "The wave is coming";
  winLooseWater();
  gameFinished();
}

naturebutton.addEventListener("click", showNature);

function showNature() {
  monitor.innerHTML = "Accept the force of nature";
  winLooseNature();
  gameFinished();
}

randombutton.addEventListener("click", showRandom);

gameFinished();

function showRandom() {
  let x = Math.floor(Math.random() * 3);
  if (x < 1) {
    showFire();
  } else if (x > 1) {
    showWater();
  } else {
    showNature();
  }
}

function cpuRandom() {
  let y = Math.floor(Math.random() * 3);
  if (y < 1) {
    return y;
  } else if (y > 1) {
    return y;
  } else {
    return y;
  }
}

reset.addEventListener("click", setZero);

function setZero() {
  monitor.innerHTML = "Round: " + rounds;
  monitor.style.cssText = "color:black; box-shadow: 0px;";
  txtPlayer.innerHTML = "-";
  txtCPU.innerHTML = "-";
  box.style.background = "rgb(202, 202, 202)";
  cpu = 0;
  player = 0;
  scoreCPU.innerHTML = cpu;
  scorePlayer.innerHTML = player;
  firebutton.disabled = false;
  waterbutton.disabled = false;
  naturebutton.disabled = false;
  randombutton.disabled = false;

  return;
}

//Highscore - localStorage

function saveScore() {
  localStorage.setItem("points", points);
  localStorage.setItem("rounds", rounds);
  localStorage.setItem("level", level);
}

function getScore() {
  if (localStorage.getItem("rounds") != null) {
    points = parseInt(localStorage.getItem("points"));
    rounds = parseInt(localStorage.getItem("rounds"));
    level = parseInt(localStorage.getItem("level"));
  }
}

highscore.addEventListener("click", showHighscore);

function showHighscore() {
  monitor.innerHTML = playerName + ": " + points + " points";
}

var xValues = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114,
  115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129,
  130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144,
  145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159,
  160, 161, 162, 163,
];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        data: [
          41, 31, 30, 43, 65, 50, 43, 47, 36, 56, 25, 37, 33, 21, 30, 24, 30,
          18, 24, 17, 25, 25, 34, 25, 25, 28, 24, 27, 17, 21, 17, 15, 18, 24,
          21, 14, 14, 15, 11, 18, 18, 17, 21, 27, 17, 12, 75, 81, 47, 39, 27,
          31, 33, 47, 55, 43, 46, 47, 50, 39, 33, 30, 46, 36, 36, 41, 21, 30,
          31, 52, 39, 34, 46, 60, 52, 56, 62, 71, 71, 71, 79, 81, 56, 69, 69,
          46, 28, 33, 47, 36, 28, 14, 30, 25, 39, 27, 21, 47, 46, 52, 52, 47,
          75, 60, 52, 50, 55, 69, 55, 46, 44, 63, 63, 91, 76, 65, 47, 39, 41,
          30, 52, 53, 49, 66, 41, 46, 47, 44, 50, 52, 41, 47, 53, 56, 41, 56,
          47, 49, 50, 47, 47, 43,
        ],
        borderColor: "black",
        fill: true,
      },
      {
        data: [
          297, 389, 510, 545, 680, 701, 657, 626, 563, 698, 754, 833, 812, 717,
          695, 762, 642, 622, 660, 652, 545, 680, 701, 657, 626, 563, 698, 754,
          833, 812, 717, 695, 762, 642, 622, 660, 652, 701, 657, 626, 698, 754,
          833, 812, 717, 695, 762, 642, 622, 660, 652, 833, 812, 717, 695, 762,
          642, 622, 660, 652, 833, 812, 717, 695, 762, 642, 622, 660, 652,
        ],
        borderColor: "violet",
        fill: true,
      },
    ],
  },
  options: {
    legend: { display: false },
  },
});

firstRegister.style.cssText = "display:block;";
secondRegister.style.cssText = "display:none;";
thirdRegister.style.cssText = "display:none;";
fourthRegister.style.cssText = "display:none;";

firstRegisterNavbar.addEventListener("click", hideSecondThirdFourthRegister);

function hideSecondThirdFourthRegister() {
  firstRegister.style.cssText = "display:block;";
  secondRegister.style.cssText = "display:none;";
  thirdRegister.style.cssText = "display:none;";
  fourthRegister.style.cssText = "display:none;";
}

secondRegisterNavbar.addEventListener("click", hideFirstThirdFourthRegister);

function hideFirstThirdFourthRegister() {
  firstRegister.style.cssText = "display:none;";
  secondRegister.style.cssText = "display:block;";
  thirdRegister.style.cssText = "display:none;";
  fourthRegister.style.cssText = "display:none;";
}

thirdRegisterNavbar.addEventListener("click", hideFirstSecondFourthRegister);

function hideFirstSecondFourthRegister() {
  firstRegister.style.cssText = "display:none;";
  secondRegister.style.cssText = "display:none;";
  thirdRegister.style.cssText = "display:block;";
  fourthRegister.style.cssText = "display:none;";
}

fourthRegisterNavbar.addEventListener("click", hideFirstSecondThirdRegister);

function hideFirstSecondThirdRegister() {
  firstRegister.style.cssText = "display:none;";
  secondRegister.style.cssText = "display:none;";
  thirdRegister.style.cssText = "display:none;";
  fourthRegister.style.cssText = "display:block;";
}
