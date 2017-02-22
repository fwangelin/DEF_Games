var gameScene = document.getElementById("gameScene");
var gfx = gameScene.getContext("2d");

// The x and y defines the position the ball is drawn on
var x = gameScene.width/2;
var y = gameScene.height - 80;
// The variables to move the position by 1 and - 1 depending on 
// the movement direction. 
var updatedX = 3;
var updatedY = -3;

// The size of the ball
var ballRadius = 18;

// The size of the racket
var racketHeight = 10;
var racketWidth = 100;
var racketY = (gameScene.height - 80);
var racketX = (gameScene.width - racketWidth)/2;

// Variables for key inputs
var leftInput = false;
var rightInput = false;

// Variables to set enemy properties
var enemyRowCount = 5;
var enemyColumnCount = 6;
var enemyWidth = 60;
var enemyHeight = 20;
var enemyPadding = 12;
var enemyOffsetTop = 30;
var enemyOffsetLeft = 30;


var score = 0;
var lives = 5;

// Variables to store sounds
var explosionSound = document.getElementById("explosion");
var boing = document.getElementById("boing");
var win = document.getElementById("win");
var lose = document.getElementById("lose");
var liquid = document.getElementById("liquid");

// Array containing enemies
var enemies = [];
for(i = 0; i < enemyColumnCount; i++)
{
	enemies[i] = [];
	
	for(j = 0; j < enemyRowCount; j++)
	{
		enemies[i][j] = { x: 0, y :0, status: 1};
	}
}


// Main function
function Draw()
{
	
	gfx.clearRect(0,0, gameScene.width, gameScene.height);
	DrawEnemies();
	DrawBall();
	DrawRacket();
	CollisionDetection();
	DrawScore();
	DrawLives();

	
	// Moves the opposite direction when hitting the top
	// of the y axis
	if(y + updatedY < ballRadius )
	{
		updatedY = -updatedY;
	}
	
	// Checks if the ball hits the racket, and if so then reverts the
	// direction of the ball to the opposite
    else if(x > racketX && x < racketX + racketWidth && y > racketY && y < racketY  + racketHeight)
	{
		updatedY = -updatedY;
		boing.play();
	}
	
	// If the ball hits the ground(bottom) you lose a life
	// when you reach 0 lives you lose the game.
	else if(y + updatedY > gameScene.height - ballRadius)
	{
        liquid.play();
		lives--;
		if(!lives)
		{
			lose.play();
			alert("YOU LOSE, LIKE USUAL");
			document.location.reload();
		}
		// If you still are alive, position where the ball spawns
		else
		{
			x = gameScene.width/2;
			y = gameScene.height-80;
			updatedX = 3;
			updatedY = -3;
			
			
	    }
	}
	
	// If hitting the edge either of the x axis edges makes the ball
	// move the opposite direction
	if(x + updatedX < ballRadius || x + updatedX > gameScene.width-ballRadius)
	{
		updatedX = -updatedX;
	}
	
	// Move the racket, with a speed of 8px per frame udate
	if (rightInput && racketX < gameScene.width - racketWidth)
	{
		racketX += 8;
	}
	
	else if(leftInput && racketX > 0)
	{
		racketX -= 8;
	}
	
	x += updatedX;
	y += updatedY;
	
	// This is so the draw is updating smoothly across
	// more browsers
	requestAnimationFrame(Draw);
	
}

// Events that listens to keypresses so we can register them for use
// to move around the racket
document.addEventListener("keyup", KeyUpHandler, false);
document.addEventListener("keydown", KeyDownHandler, false);


function KeyDownHandler(e)
{
	if (e.keyCode == 68)
	{
		rightInput = true;
	}
	if (e.keyCode == 65)
	{
		leftInput = true;
	}
}

function KeyUpHandler(e)
{
	if(e.keyCode == 68)
	{
		rightInput = false;
	}
	if (e.keyCode == 65)
	{
		leftInput = false;
	}
}


Draw();

// This just draws a circle which we use in the draw function
function DrawBall()
{

    
	gfx.beginPath();
	//gfx.arc(x,y, ballRadius, 0, Math.PI*2);
	var nuke = document.getElementById('nuke');
	gfx.drawImage(nuke, x, y, 25,25);
	//gfx.fillStyle = "#AAF478";
	//gfx.fill();
	gfx.closePath();
}

function DrawRacket()
{
	gfx.beginPath();
	// First parameter in rect sets the X position on canvas, and second sets the Y
	// position on canvas. The last 2 variables set the size of the racket
	//gfx.rect(racketX, gameScene.height - (racketHeight * 7), racketWidth, racketHeight);
	//gfx.fillStyle = "#FF0000";
	//gfx.fill();
	var barrell = document.getElementById('barrell');
	gfx.drawImage(barrell, racketX, gameScene.height - (racketHeight * 7), racketWidth, 80);
	gfx.closePath();
}

// Draw enemies and place them on canvas depending on how many rows
// and columns you want.
function DrawEnemies()
{
	for(i = 0; i < enemyColumnCount; i++)
	{
		for(j = 0; j < enemyRowCount; j++)
		{
			
			if(enemies[i][j].status == 1)
			{
				// When placing enemies want to have some padding 
				// between them so they don't melt together.
			var enemyX = (i*(enemyWidth+enemyPadding)) + enemyOffsetLeft;
			var enemyY = (j*(enemyHeight+enemyPadding)) + enemyOffsetTop;
			enemies[i][j].x = enemyX;
			enemies[i][j].y = enemyY;
			gfx.beginPath();
			//gfx.rect(enemyX,enemyY, enemyWidth, enemyHeight);
			//gfx.fillStyle = "#FF33FF";
			//gfx.fill();
		    var glow = document.getElementById('glow');
	        gfx.drawImage(glow, enemyX, enemyY, enemyWidth, enemyHeight);
			gfx.closePath();
			}
		}
	}
}

// Basic collision detection pretty much to register when an enemy is hits
// and what to do in that case
function CollisionDetection()
{
	
	// Boolean to register true if the ball hits an enemy
 var collisionFound = false;

 // Loop to keep checking for collision
 for(i = 0; i < enemyColumnCount; i++)
 {
  for (j = 0; j < enemyRowCount; j++)
  {
   
   // Objects that you can collide with
   var collisionObjects = enemies[i][j];
   
   // Checks if the status is 1 of the enemy, becasue if it is 0
   // The enemy is not there and not collidable
   if(collisionObjects.status == 1)
   {
	   
	   // Basic checkin where the ball hits the target, either on it's Y or X side
    if(x + ballRadius * 2 >= collisionObjects.x && x + ballRadius <= collisionObjects.x + enemyWidth &&
          y + ballRadius*2 >= collisionObjects.y && y - ballRadius <= collisionObjects.y + enemyHeight)
       {
      
	    // If ball collides set the enemy status to 1 to remove it
       collisionObjects.status = 0;
	   // Set that the collision is found
       collisionFound = true;
	   // Add score
	   score++;
	   
	   // If score maxes out which is killing all enemies then win the game
	   if(score == enemyRowCount * enemyColumnCount)
	     {
			win.play();
			alert("YOU STILL LOSE NO MATTER WHAT, CONGRATS!")
            document.location.reload();			
	     }
       }

   }
   // If collision is found exit loop and continue the function
   if (collisionFound) break;
  }
  if (collisionFound) break;
 }

 // When collision is found, change moving direction of the ball to
 // the opposite, and play an explosion sound
 if (collisionFound)
 {
  updatedY = -updatedY;
  explosionSound.play();
 }
}

// Show a visible score
function DrawScore()
{
	gfx.font = "16px Arial";
	gfx.fillStyle = "#FFFFFF";
	gfx.fillText("Score: " + score, 8, 20);
}

// Show visible lives
function DrawLives()
{
	gfx.font = "16px Arial";
	gfx.fillStyle = "#FFFFFF";
	gfx.fillText("Lives: " + lives, gameScene.width - 65, 20);
}


