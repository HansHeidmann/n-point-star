# N Point Star

//////////////////////////////////////////////  
// N-Point Star  
// Hans Heidmann 2021  
// Draws a Star with N Points on a canvas element using javascript  
//  
// By drawing 5, 6, 7, and 8 point stars I determined:  
// - Angle difference (at origin) between points at radius R on a polar system of an n-point star must be 2*PI/n  
// - Every other/2nd vertice is connected on an ODD n-point star, ie: n=7 --> 0,2,4,6,8(same as 1),10(3),12(5),14(7)   
// - Every third vertice is connected on EVEN N-point star, ie: n=8 --> 0,3,6,9(same as 1),12(4),15(7),18(2),21(5)  
// - A "normal" 6 point star does NOT exist and therefore cannot be drawn  
// To Do:  
// - Move into function  
// - Move everything into 1 for loop and further condense the code  
// - Determine the most basic equation for the angle at a point of an n, n+1, n+2, ... -point star for other code art possibilites  
// - Deduce equations to do an n-length estimate of pi via integral/summation   
///////////////////////////////////////////////////////////////////////////   
// Variables (change these 2 to whatever)  
var n = 7;  
var radius = 200;  
var showCircle = true;  
var rotating = false;    
var drawFlower = false;  
var referenceAngle = 3*Math.PI/2;  
var centerX = canvas.width/2;  
var centerY = canvas.height/2;  
