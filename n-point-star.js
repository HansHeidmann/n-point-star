function draw() {
    canvas = document.getElementById('myCanvas');
    if(canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        //////////////////////////////////////////////
        // N-Point Star
        // Hans Heidmann 2021
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
        var nPoints = document.getElementById('nPoints');
        var n = nPoints.value;
        var radius = 200;
        var showCircle = true;
        var rotating = false;
        var drawFlower = false;
        var referenceAngle = 3*Math.PI/2;
        var centerX = canvas.width/2;
        var centerY = canvas.height/2;
        /////////////////////////////
        var polarAngle;
        const polarAngles = [0];
        var angle;
        const xCoords = [0];
        const yCoords =[0];
        //////////////////////////////
        // Determine Polar Coordinates
        for (let i=0; i<n; i++) {
            if(n%2 != 0){
                // is odd
                polarAngle = (i*2)*(2*Math.PI/n); // every other
            } else {
                // is even
                polarAngle = (i*3)*(2*Math.PI/n); // every third
            }
            polarAngle += referenceAngle;
            polarAngles[i] = polarAngle;
        }
        ////////////////////////////////////
        // Convert Coordinates to Cartesian
        // use radius and polarAngles[i] to determine each coordinate
        for(let i=0; i<n; i++) {
            angle = polarAngles[i];
            if(drawFlower) {
                radius = Math.sin(angle*i%2)*300;
            }
            let x = radius*Math.cos(angle);
            let y = radius*Math.sin(angle);
            xCoords[i] = x+canvas.width/2;
            yCoords[i] = y+canvas.height/2;
        }
        ////////////////////////////////////
        // Draw the Lines
        // total points n
        ctx.beginPath();
        if(showCircle) {
            ctx.arc(centerX, centerY, radius, 0, 2*Math.PI, 1);
            ctx.stroke();
        }
        ctx.moveTo(xCoords[0], yCoords[0]);
        for(let i=0; i<n; i++) {
            ctx.lineTo(xCoords[i], yCoords[i]);
        }
        ctx.closePath();
        ctx.stroke();


    } else {
        // code that isn't supported by canvas could run here
    }

}
