const throttleFunction=(func, delay)=>{
	let prev = 0;
	return (...args) => {
		let now = new Date().getTime();
	
		if(now - prev> delay){
		prev = now;
		return func(...args);
		}
	}
}
var add = document.querySelector("#add");
var head = document.querySelector("h1");
let sflag = 0;
var flag = 0;
document.querySelector("#chu")
.addEventListener("mousemove",throttleFunction(function(dets){
   if(sflag==1){
    var div = document.createElement("div");
    var img = document.createElement("img");
      div.classList.add("newdivg");
      document.body.appendChild(div);
      div.style.top = dets.clientY+'px';
      div.style.left = dets.clientX+'px';
      if(flag==0){
      img.setAttribute("src","https://www.freeiconspng.com/thumbs/emoji-png/heart-emoji-png-2.png");
       flag = 1;
      }
      else if(flag==1){
         img.setAttribute("src","https://toppng.com/uploads/preview/emoji-transparent-laughing-emoji-11550234631y6jwxckdn1.png");
          flag = 2;
      }
      else{
         img.setAttribute("src","https://e7.pngegg.com/pngimages/190/601/png-clipart-heart-eye-emoji-emoji-heart-eye-smiley-emoticon-emoji-love-face-thumbnail.png");
         flag = 0;
      }

      div.appendChild(img);
       gsap.to(img,{
           yPercent:-100,
           ease:Power3,
       })

       setTimeout(function(){
           div.remove();
       },1000)

   }
},400))

add.addEventListener("click",function(){
      if(sflag==0){
        add.innerHTML = "Remove";
        head.style.color = "green";
        head.innerHTML ="Friend";
       sflag = 1;
      }
      else{
        add.innerHTML = "Add friend";
        head.style.color = "red";
        head.innerHTML ="Stranger";
        sflag = 0;
     }
})
