var rec = document.querySelector("#rec");


window.addEventListener("mousemove",function(dets){
        var a = gsap.utils.mapRange(0,window.innerWidth,200,window.innerWidth-400,dets.clientX);
        gsap.to("#rec",{
                left:a,
                ease:Power4,
             }) 
        if(dets.clientX<(window.innerWidth/2)){
           console.log("left");
           rec.innerHTML = "left meh aah gaya";
           var clr = gsap.utils.mapRange(200,window.innerWidth/2,255,0,a);
           gsap.to("#rec",{
                backgroundColor:`rgb(${clr},0,0)`,         
                color:"white",
           })
        }
        else{
            console.log("right");
            rec.innerHTML = "right meh aah gaya";
            var clr = gsap.utils.mapRange(window.innerWidth/2,window.innerWidth-400,0,255,a);
            gsap.to("#rec",{
              backgroundColor:`rgb(0,0,${clr})`,   
              color:"white",      
                })
        }
        
})
