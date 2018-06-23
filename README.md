# Classic Arcade Game!
You are the fearless boy and you want to go to the sea! 
But there are some bad bugs in your way you have to avoid first...

The game includes 5 levels. 
When you reach the water you win each level and every time more bugs are added.

[Enjoy the game!](https://efatsea.github.io/arcade-game)

# Download game and make changes
You can clone and download the game.
After that you can simply open the index.html file and play the game. 

If you want to make changes you will find the proper comments in the files. 

In file js:
app.js : is the file that creates the enemies and the player and how the will behave. 

resources.js : This is simply an image loading utility. It eases the process of loading image files so that they can be used within your game. It also includes a simple "caching" layer so it will reuse cached images if you attempt to load the same image multiple times.

engine.js : This file provides the game loop functionality (update entities and render),draws the initial game board on the screen, and then calls the update and render methods on your player and enemy objects (defined in the app.js).
 