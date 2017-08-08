console.log('Loaded!');

// change the text of the main-text div

var element= document.getElementById('main-text');

element.innerHTML= 'New Value';

//move image

 var img =document.getElementById('modi');
 img.onclick =function() {
     img.style.marginleft='100px';
 };