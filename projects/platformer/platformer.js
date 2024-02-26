$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);
 
 
  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);
 
 
   
 
 
    createPlatform(600, 200, 200, 20); // short but wide platform located 100 pixels from the left of the screen and 100 pixels from the bottom of the screen
    createPlatform(700, 200, 200, 20); // short but wide platform located 100 pixels from the left of the screen and 100 pixels from the bottom of the screen
    createPlatform(800, 200, 200, 20); // short but wide platform located 100 pixels from the left of the screen and 100 pixels from the bottom of the screen
    createPlatform(950, 400, 200, 20); // short but wide platform located 100 pixels from the left of the screen and 100 pixels from the bottom of the screen
    createPlatform(1000, 400, 200, 20); // short but wide platform located 100 pixels from the left of the screen and 100 pixels from the bottom of the screen
    createPlatform(400, 300, 200, 20); // short but wide platform located 100 pixels from the left of the screen and 100 pixels from the bottom of the screen
    createPlatform(1200, 300, 200, 20); // short but wide platform located 100 pixels from the left of the screen and 100 pixels from the bottom of the screen
    createPlatform(1200, 320, 200, 100); // short but wide platform located 100 pixels from the left of the screen and 100 pixels from the bottom of the screen
    createPlatform(300, 535, 200, 20); // short but wide platform located 100 pixels from the left of the screen and 100 pixels from the bottom of the screen
    createPlatform(100, 650, 200, 30); // short but wide platform located 100 pixels from the left of the screen and 100 pixels from the bottom of the screen
    createPlatform(700, 650, 100, 100); // short but wide platform located 100 pixels from the left of the screen and 100 pixels from the bottom of the screen
    createPlatform(800, 520, 600, 20); // short but wide platform located 100 pixels from the left of the screen and 100 pixels from the bottom of the screen
    createPlatform(100, 400, 200, 20); // short but wide platform located 100 pixels from the left of the screen and 100 pixels from the bottom of the screen
 
 
 createCollectable("steve", 750, 300, 20, 0.5); // creates a "steve" collectible at the coordinates (500, 300), falling with a high gravity and bouncing with 50% bounce
 createCollectable("grace", 850, 300); // creates a "grace" collectible at the coordinates (500, 300), falling with default gravity and bouncing with default bounce %
 createCollectable("diamond", 400, 200); // creates a "diamond" collectible at the coordinates (400, 200), falling with high gravity and bouncing with 75% bounce
 
 
 createCannon("left", 490, 1000); // cannon on right wall, 200px down, shooting twice per second
 createCannon("right", 400, 1000); // cannon on left wall, 400px down, shooting once per second
 createCannon("left", 100, 1000); // cannon on right wall, 500px down, shooting triple per second
 createCannon("right", 600, 1000); // cannon on left wall, 600px down, shooting once per second
 
 
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }
 
 
  registerSetup(setup);
 });
 
 