 // var elSpan = document.querySelector(`.span`);
  //var elText = document.querySelector(`.text`);
  //var number = +prompt(`son kiriting`);  

 // elText.textContent = number; 

//if (number % 2 == 0) {
  //elSpan.textContent = `juft`;
//} 
//else { 
  //elSpan.textContent = `toqga`;
//} 


//var elSpan1 = document.querySelector('.erkak');
 //var elSpan2 = document.querySelector('.name') ; 

 //var userName = prompt('Ismingizni kiriting') ;
 //var erkak = prompt('Gendiringizni kiriting'); 

// elSpan2.textContent = userName; 

 //if  (erkak == 'erkak')  {
   // elSpan1.textContent = 'Janob';
 //}else{ 
   //elSpan1.textContent = 'Xonim';

 //}
 


 

// var elTitle1 = document.querySelector('.title1'); 
 //var som = +prompt('Alisher aka pulni somda kiriting ',0);
 //var total = ((500+250)*11000) + (120*11800); 
    
 //if(total <= som){  

  //elTitle1.textContent = ('Alisher aka sizga oq yol')
 //}else{ 

  //elTitle1.textContent = ('Alisher aka mablag yetarli emas')
 //}
      

 var elText = document.querySelector('.text'); 
 var elForm = document.querySelector('.form'); 
var elInput1 = document.querySelector('.input1'); 
var elInput2 = document.querySelector('.input2'); 
var elSpan = document.querySelector('.span');
  

var tex = elText.textContent; 

elForm.addEventListener('submit', function (evt) { 
 
  evt.preventDefault(); 

  var input1 = tex.indexOf(elInput1.value);
  var input2 = tex.indexOf(elInput2.value); 

  elSpan.textContent = tex.substring(input1, input2);

})


    

    



  
