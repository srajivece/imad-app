console.log('Loaded!');

// change the text of the main-text div

/*var element= document.getElementById('main-text');

element.innerHTML= 'New Value';*/

//move image

 var img =document.getElementById('madi');
 var marginLeft = 0;
 function moveRight(){
     marginLeft= marginLeft + 10;
     img.style.marginLeft=marginLeft + 'px';
 }
     img.onclick=function (){
         var interval=setInterval(moveRight, 100);
         
     };

 //counter code
 var button = document.getElementById('counter');
 button.onclick = function(){
 //creat request objetc
 var request=new XMLHttpRequest();
 //capture the request and store it on variable
 request.onreadystatechange = function(){
     if(request.readystate === XMLHttpRequest.DONE){
         //take some action
         if(request.status === 200){
             var counter=request.responceText;
             span.innerHTML=counter.tostring();
             
         }
     }
 //not yet done
 };
 
 //makethe request
 request.open('GET','http://srajivece.imad.hasura-app.io/counter',true);
 request.send(null);

 };
 
 
 var nameInput = document.getElementById('name');
 var name = nameInput.value:
 var submit=document.getElementById('submit-btn');
 submit.onclick=function(){
 var mnames =['name1','nmae2','name3','name4'];
 var list ='';
 for (var i=0;i<names.length;i++){
     list +='<li>'+names[i] +'<li>';
 }
 
 var ul =document.getElementById('names');
 ul.innerHTML=list;
 };
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 