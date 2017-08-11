console.log('Loaded!');

// change the text of the main-text div

var element= document.getElementById('main-text');

element.innerHTML= 'New Value';

//move image

 var img =document.getElementById('modi');
 img.onclick = function() {
     img.style.marginleft='100px';
 };

 //counter code
 var button=document.getElemntById('counter');
 var counter=0;
 //creat request objetc
 var request=new HMLHttpRequest();
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
 request.open('GET' , 'http//srajivece.imad.hasura-app.io/counter',true);
 request.send(null);
 };