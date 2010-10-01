darwin = {}

darwin.radians = function(degrees) {
    // convert degrees to radians
    return (Math.PI/180) * degrees
}

$(document).ready(function() {
	var canvas = document.getElementById('tutorial');  

	if (canvas.getContext) {  
        var ctx = canvas.getContext("2d");  
  
        ctx.beginPath();  
        ctx.arc(75,75,50,0,Math.PI*2,true); // Outer circle  
        ctx.moveTo(110,75);  
        ctx.arc(75,75,35,0,Math.PI,false);   // Mouth (clockwise)  
        ctx.moveTo(65,65);  
        ctx.arc(60,65,5,0,Math.PI*2,true);  // Left eye  
        ctx.moveTo(95,65);  
        ctx.arc(90,65,5,0,Math.PI*2,true);  // Right eye  
        ctx.stroke();

	    // ctx.fillRect(25,25,100,100);  
        // ctx.clearRect(45,45,60,60);  
        // ctx.strokeRect(50,50,50,50);  
    }
});
