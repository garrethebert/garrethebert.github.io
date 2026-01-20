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

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(200, 650, 130, 20, "blue")
createPlatform(450, 550, 120, 20, "red")
createPlatform(650, 450, 120, 20, "green")
createPlatform(850, 350, 120, 20, "purple")
createPlatform(1050, 250, 120, 20, "yellow")
createPlatform(1200, 150, 130, 30, "blue")


    // TODO 3 - Create Collectables
createCollectable("diamond", 1250, 140);
createCollectable("max", 250, 630)
createCollectable("kennedi", 650, 430)
    
    // TODO 4 - Create Cannons

createCannon("right", 750, 2000)
createCannon("right", 740, 2000)
createCannon("right", 690, 1000)
createCannon("right", 680, 1000)    
createCannon("right", 550, 1500)
createCannon("right", 540, 1500)
createCannon("right", 560, 1500)
createCannon("right", 460, 2300)
createCannon("right", 470, 2300)
createCannon("right", 370, 2700)
createCannon("right", 360, 2700)
createCannon("right", 260, 1400)  
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
