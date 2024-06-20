// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 1000;
document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
  bgReady = true;
};
bgImage.src = "images/background.jpg"; // Image by <a href="https://www.freepik.com/free-vector/gradient-technology-futuristic-background_19335212.htm#query=cyborg%20background&position=0&from_view=keyword&track=ais_user&uuid=5813e04a-293a-46ce-97ea-6cfc157932b5">Freepik</a>

// Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
  heroReady = true;
};
heroImage.src = "images/hero.png"; // Image by <a href="https://www.freepik.com/free-ai-image/8-bits-characters-gaming-assets_133331035.htm#query=pixel%20art%20robot&position=0&from_view=keyword&track=ais_user&uuid=6fe5b30a-56cc-4106-92c0-35cd9f35a138">Freepik</a>

// Monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
  monsterReady = true;
};
monsterImage.src = "images/monster.png"; // Image by <a href="https://www.freepik.com/free-ai-image/8-bits-characters-gaming-assets_133331035.htm#query=pixel%20art%20robot&position=0&from_view=keyword&track=ais_user&uuid=6fe5b30a-56cc-4106-92c0-35cd9f35a138">Freepik</a>

// dinosaur 2 image
var dinosaurReady = false;
var dinosaurImage = new Image();
dinosaurImage.onload = function () {
  dinosaurReady = true;
};
dinosaurImage.src = "images/monster2.png"; // Image by <a href="https://www.freepik.com/free-vector/colorful-cartoon-set-cute-monster-alien-creatures-interplanetary-aircrafts-kid-games-isolated-illustration_7251991.htm#fromView=search&page=1&position=0&uuid=b5d20b00-91d4-4482-bb96-1460f28a612d">Freepik</a>

// Space Captain image
var captainReady = false;
var captainImage = new Image();
captainImage.onload = function () {
  captainReady = true;
};
captainImage.src = "images/SpaceCap.png"; // Image by <a href="https://www.freepik.com/free-vector/colorful-cartoon-set-cute-monster-alien-creatures-interplanetary-aircrafts-kid-games-isolated-illustration_7251991.htm#fromView=search&page=1&position=0&uuid=b5d20b00-91d4-4482-bb96-1460f28a612d">Freepik</a>

// Flowers image
var flowerReady = false;
var flowerImage = new Image();
flowerImage.onload = function () {
  flowerReady = true;
};
flowerImage.src = "images/flower.png"; // Image by <a href="https://www.freepik.com/free-vector/flat-design-colorful-geometric-pattern_44426011.htm#page=6&query=leaf%20pixel%20art&position=1&from_view=keyword&track=ais_user&uuid=00e62500-c3e4-4b9c-bad0-e4328f174f74">Freepik</a>

// Border right image
var bordersReady = false;
var bordersImage = new Image();
bordersImage.onload = function () {
  bordersReady = true;
};
bordersImage.src = "images/ufosides.jpg"; // Image by <a href="https://www.freepik.com/free-vector/ufo-light-beams-glowing-rays-from-alien-spaceships-night_11685615.htm#fromView=search&page=1&position=14&uuid=ecca7257-cb6e-4209-993b-48850b1bd1a4">Freepik</a>

// Border top image
var bordertopReady = false;
var bordertImage = new Image();
bordertImage.onload = function () {
  bordertopReady = true;
};
bordertImage.src = "images/ufotopbottom.jpg"; // Image by <a href="https://www.freepik.com/free-vector/ufo-light-beams-glowing-rays-from-alien-spaceships-night_11685615.htm#fromView=search&page=1&position=14&uuid=ecca7257-cb6e-4209-993b-48850b1bd1a4">Freepik</a>

// Images End here.

// Sounds
let soundWin = "sounds/Victory.mp3";
let soundLose = "sounds/Lost.wav";
var soundW = document.getElementById("winAudio");
var soundL = document.getElementById("loseAudio");

// Game objects
var hero = {
  speed: 256, // movement in pixels per second
  x: 0, // where on the canvas are they?
  y: 0, // where on the canvas are they?
};
var monster = {
  // for this version, the monster does not move, so just and x and y
  x: 0,
  y: 0,
};

var monster2 = {
  // for this version, the monster does not move, so just and x and y
  x: 0,
  y: 0,
};

var monster3 = {
  // for this version, the monster does not move, so just and x and y
  x: 0,
  y: 0,
};

var dinosaur = {
  // for this version, the monster does not move, so just and x and y
  x: 0,
  y: 0,
};

var captain = {
  x: 0,
  y: 0,
};

var flower = {
  x: 0,
  y: 0,
};

// Random Variables
var flowersCaught = 0;
let gameOver = false;
let Caught = "";
// End Random Variables

// Handle keyboard controls
var keysDown = {}; //object were we properties when keys go down
// and then delete them when the key goes up
// so the object tells us if any key is down when that keycode
// is down. In our game loop, we will move the hero image if when
// we go thru render, a key is down
addEventListener(
  "keydown",
  function (e) {
    keysDown[e.keyCode] = true;
  },
  false
);
addEventListener(
  "keyup",
  function (e) {
    delete keysDown[e.keyCode];
  },
  false
);
// End Keyboard controls

// Update game objects
var update = function (modifier) {
  if (38 in keysDown && hero.y > 32 + 4) {
    // holding up key
    hero.y -= hero.speed * modifier;
  }
  if (40 in keysDown && hero.y < canvas.height - (64 + 6)) {
    // holding down key
    hero.y += hero.speed * modifier;
  }
  if (37 in keysDown && hero.x > 32 + 4) {
    // holding left key
    hero.x -= hero.speed * modifier;
  }
  if (39 in keysDown && hero.x < canvas.width - (64 + 6)) {
    // holding right key
    hero.x += hero.speed * modifier;
  }
  // If Hero Touches Monster
  if (
    hero.x <= monster.x + 26 &&
    monster.x <= hero.x + 26 &&
    hero.y <= monster.y + 26 &&
    monster.y <= hero.y + 26
  ) {
    soundL.src = soundLose;
    soundL.play();
    gameOver = true;
    Caught = "Corrupt Astronaut";
    alert(
      `OH NO! You have been caught by a ${Caught}! Don't worry though, your ${flowersCaught} Crypto Flowers was not confiscated.`
    );
    reset(); // start a new cycle
  }
    // If Hero Touches Monster
    if (
        hero.x <= monster2.x + 26 &&
        monster2.x <= hero.x + 26 &&
        hero.y <= monster2.y + 26 &&
        monster2.y <= hero.y + 26
      ) {
        soundL.src = soundLose;
        soundL.play();
        gameOver = true;
        Caught = "Corrupt Astronaut";
        alert(
          `OH NO! You have been caught by a ${Caught}! Don't worry though, your ${flowersCaught} Crypto Flowers was not confiscated.`
        );
        reset(); // start a new cycle
      }
        // If Hero Touches Monster
  if (
    hero.x <= monster3.x + 26 &&
    monster3.x <= hero.x + 26 &&
    hero.y <= monster3.y + 26 &&
    monster3.y <= hero.y + 26
  ) {
    soundL.src = soundLose;
    soundL.play();
    gameOver = true;
    Caught = "Corrupt Astronaut";
    alert(
      `OH NO! You have been caught by a ${Caught}! Don't worry though, your ${flowersCaught} Crypto Flowers was not confiscated.`
    );
    reset(); // start a new cycle
  }

  if (
    hero.x <= dinosaur.x + 26 &&
    dinosaur.x <= hero.x + 26 &&
    hero.y <= dinosaur.y + 26 &&
    dinosaur.y <= hero.y + 26
  ) {
    soundL.src = soundLose;
    soundL.play();
    gameOver = true;
    Caught = "Space Dinosaur";
    alert(
      `OH NO! You have been caught by a ${Caught}! Don't worry though, your ${flowersCaught} Crypto Flowers was not confiscated.`
    );
    reset(); // start a new cycle
  }

  if (
    hero.x <= captain.x + 26 &&
    captain.x <= hero.x + 26 &&
    hero.y <= captain.y + 26 &&
    captain.y <= hero.y + 26
  ) {
    if (flowersCaught == 20) {
      gameOver = true;
      soundW.src = soundWin;
      soundW.play();
      alert("YOU WON!");
      reset(); // start a new cycle
    } else {
        alert(`You need ${20 - flowersCaught} More!`)
        gameOver = false;
        reset();
    }
  }

  // If Hero touches flower
  if (
    hero.x <= flower.x + 29 &&
    flower.x <= hero.x + 29 &&
    hero.y <= flower.y + 29 &&
    flower.y <= hero.y + 29
  ) {
    ++flowersCaught; // keep track of our “score”
    gameOver = false;
    reset(); // start a new cycle
  }
};

// The main game loop
var main = function () {
  if (gameOver == false) {
    var now = Date.now();
    var delta = now - then;
    update(delta / 1000);
    render();
    then = now;
    // Request to do this again ASAP
    requestAnimationFrame(main);
  }
};

// Render everything
var render = function () {
  if (bgReady) {
    ctx.drawImage(bgImage, 0, 0);
  }
  if (bordertopReady && bordersReady) {
    ctx.drawImage(bordersImage, 1000 - 32, 0);
    ctx.drawImage(bordersImage, 0, 0);
    ctx.drawImage(bordersImage, 0, 1000 - 32);
    ctx.drawImage(bordertImage, 0, 0);
    ctx.drawImage(bordertImage, 0, 1000 - 32);
  }

  if (heroReady) {
    ctx.drawImage(heroImage, hero.x, hero.y);
  }
  if (monsterReady) {
    ctx.drawImage(monsterImage, monster.x, monster.y);
    ctx.drawImage(monsterImage, monster2.x, monster2.y);
    ctx.drawImage(monsterImage, monster3.x, monster3.y);
  }
  if (dinosaurReady) {
    ctx.drawImage(dinosaurImage, dinosaur.x, dinosaur.y);
  }
  if (captainReady) {
    ctx.drawImage(captainImage, captain.x, captain.y);
  }
  if (flowerReady) {
    ctx.drawImage(flowerImage, flower.x, flower.y);
  }
  // Cyrpto Flowers Score
  ctx.fillStyle = "rgb(250, 250, 250)";
  ctx.font = "24px Helvetica";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText("Cyrpto Flowers Harvested: " + flowersCaught, 32, 32);
  if (flowersCaught < 20) {
    ctx.fillText(
      `Harvest ${
        20 - flowersCaught
      } More Cyrpto Flowers and deliver it to Space Captain to Win!`,
      32,
      55
    );
  } else {
    ctx.fillText(
      `Deliver the Cyrpto Flowers to Space Captain and Win!`,
      32,
      55
    );
  }
};

// Reset the game when the player catches a monster
var reset = function () {
  if (gameOver == false) {
    hero.x = canvas.width / 2 - 16;
    hero.y = canvas.height / 2 - 16;
    //Place the monster somewhere on the screen randomly
    // but not in the hedges, Article in wrong, the 64 needs to be
    // hedge 32 + hedge 32 + char 32 = 96
    monster.x = 32 + Math.random() * (canvas.width - 96);
    monster.y = 32 + Math.random() * (canvas.height - 96);
    monster2.x = 32 + Math.random() * (canvas.width - 96);
    monster2.y = 32 + Math.random() * (canvas.height - 96);
    monster3.x = 32 + Math.random() * (canvas.width - 96);
    monster3.y = 32 + Math.random() * (canvas.height - 96);
    dinosaur.x = 32 + Math.random() * (canvas.width - 96);
    dinosaur.y = 32 + Math.random() * (canvas.height - 96);
    captain.x = 32 + Math.random() * (canvas.width - 96);
    captain.y = 32 + Math.random() * (canvas.height - 96);
    flower.x = 32 + Math.random() * (canvas.width - 96);
    flower.y = 32 + Math.random() * (canvas.height - 96);
  } else {
  }
};

// Play game
var then = Date.now();
reset();
main();
