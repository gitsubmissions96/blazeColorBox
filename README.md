# BlazeClan Assignment Project

This project was created as a part of an assignment for BlazeClan

## Simplified Logic

The logic behind this is fairly simple. It is consists of 3 nested for loops each looping 32 times
Thus giving us a total loops of 32X32X32 = 32,768, which happens to be the number of colors required to generate the box
These loops are interpreted as R,G and B values.
In every loop an object - {r,g,b} is pushed into an colors array which stores all possible color variations

The rendering code is also simple. It renders 256X128 colors on the screen.

The code for all of this has been added in the ColorViewer.js file in the components folder.

I must say this was a fun project. I did not expect to see the patterns that were generated and was pleasantly surprised. Thank you for the opportunity.
