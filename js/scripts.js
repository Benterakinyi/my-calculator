 /* the formula */
 var result=parseInt( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day) % 7 ;
 var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

if (document.getElementById("gender").checked)
{
  var gender='male';
}
else 
{
  var gender='female';
} 
if (month <1  || month>12 || month==2 && day>29) 
{
  alert("invalid month");
}
else if( day< 1 || day>31)
{
  alert("invalid date");
}
else if (Math.round(result)==1 && gender==='male')
{
 document.getElementById("display").innerHTML =("you were born on Monday ,your akan name is "+ maleNames[1]);
}
else if (Math.round(result)==2 && gender==='male')
{
 document.getElementById("display").innerHTML =("you were born on Tuesday ,your akan name is " +maleNames[2]);
}
else if (Math.round(result)==3 && gender==='male' )
{
 document.getElementById("display").innerHTML =("you were born on Wednesday ,your akan name is "+ maleNames[3]);
}
else if (Math.round(result)==4 && gender==='male')
{
 document.getElementById("display").innerHTML = ("you were born on Thursday,your akan name is "+ maleNames[4]);
}
else if (Math.round(result)==5 && gender==='male')
{
 document.getElementById("display").innerHTML = ("you were born on Friday,your akan name is "+ maleNames[5]);
}
else if (Math.round(result)==6 && gender==='male')
{
 document.getElementById("display").innerHTML = ("you were born on Saturday,your akan name is "+ maleNames[6]);
}
else if (Math.round(result)==0 && gender==='male')
{
 document.getElementById("display").innerHTML = ("you were born on Sunday,your akan name is "+ maleNames[0]);
}
else if (Math.round(result)==1 && gender==='female')
{
 document.getElementById("display").innerHTML = ("you were born on monday ,your akan name is "+ femaleNames[1]);
}
else if (Math.round(result)==2 && gender==='female')
{
 document.getElementById("display").innerHTML = ("you were born on Tuesday,your akan name is "+ femaleNames[2]);
}
else if (Math.round(result)==3 && gender==='female')
{
 document.getElementById("display").innerHTML =  ("you were born on Wednesday,your akan name is "+ femaleNames[3]);
}
else if (Math.round(result)==4 && gender==='female')
{
 document.getElementById("display").innerHTML =  ("you were born on Thursday,your akan name is "+ femaleNames[4]);
}
else if (Math.round(result)==5 && gender==='female')
{
 document.getElementById("display").innerHTML =  ("you were born on Friday,your akan name is "+ femaleNames[5]);
}
else if (Math.round(result)==6 && gender==='female')
{
 document.getElementById("display").innerHTML = ("you were born on Saturday,your akan name is "+ femaleNames[6]);
}
else if (Math.round(result)==0 && gender==='female')
{
 document.getElementById("display").innerHTML =  ("you were born on Sunday,your akan name is "+ femaleNames[0]);
}
else
{
alert("input data please");
}
function submition(){
    /* declaration  and initialisation */
     var month=document.getElementById("month").value;
     var month=parseInt(month);
     var day=document.getElementById("day").value;
     var day=parseInt(day);
     var year=document.getElementById("year").value;
     var year=parseInt(year);
     var century=(year-1)/100+1;
    }






