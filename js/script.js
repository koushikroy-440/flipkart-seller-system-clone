function tabs(){
 
 	var header = document.getElementById("header");
 	var anker = header.getElementsByTagName('A');
 	var i,j;

 		
 		for(i=0;i<anker.length;i++)
 		{	
 			
 			anker[i].onclick = function(){
 			
 			for(j=0;j<anker.length;j++)
 			{
 			anker[j].style.color = "white";
 			}
 			this.style.color = "#FF5829";
 			}
 		}

 		document.getElementById("home").style.color = "#FF5829";
}
tabs();