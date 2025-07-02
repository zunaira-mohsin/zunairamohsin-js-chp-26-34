//CHAPETR NO 26-30;
//QUESTION NO 01;
let number=3.45214;
let positive=prompt("Enter a positive number")
let number1=parseFloat(positive)
if(number1>0) {
let round=Math.round(number1)
let floor=Math.floor(number1)
let ceil=Math.ceil(number1)
document.writeln("Number :"+number1+"<br>"+"Round value"+round+"<br>"+"Floor value :"+floor+"<br>"+"Ceil value :"+ceil)
}else{
    alert("Please enter a positive number")
}
//QUESTION NO 02;
let negative =prompt("Enter a negative number")
let number2 =parseFloat(negative)
if(number2<0){
let Floor=Math.floor(number2)
let Round=Math.round(number2)
let Ceil=Math.ceil(number2)
document.writeln("<h3>"+"Number"+number2+"<br>"+"Round value"+Round+"<br>"+"Floor value"+Floor+"ceil value"+Ceil+"</h3>")
}else{
    alert("Please enter a nagative number")
}
//QUESTION NO 03;
let absolute=(-4)
let abs=Math.abs(absolute)
document.writeln("<h3>Absolute value of -4 is</h3>"+abs)
let absolute2=(5)
let abs2=Math.abs(absolute2)
document.writeln("<h3>Absolute value of 5 is</h3>"+abs2)
//QUESTION NO 04;
let random=Math.floor(Math.random()*6)+1;
document.writeln("<h3>Random dice value :</h3>"+random+"<br>")
//QUESTON NO 05;
let coin =Math.floor(Math.random()*2)+1;
if(coin===1){
  document.writeln(coin+"<h4>Random coin value : Head"+"<br>"+"</h4>")
}else{
document.writeln(coin+"<h4>Random coin value : tail"+"<br>"+"</h4>")
}
// //QUESTION NO 06;
let Random=Math.floor(Math.random()*100)+1;
document.writeln("<h3>Random Number between 1 to 100 :</h3>"+Random)
// //QUESTION NO 07;
let userinput =prompt("Enter your weight in kilogram")
 let input=parseFloat(userinput);
document.writeln("<h4>The weight of user is "+input.toFixed(1) + " kilograms"+"</h4>")
//QUESTION NO 08;
let random1=Math.floor(Math.random()*10)+1;
let randomnum=prompt("Enter a number  between 1 to 10")
if (random1 >= 1 && random1 <= 10) {
for(let i=1;i<=10;i++){
    alert("congratulate the user.")
}
}else{
    alert("sorry! please just number between 1 to 10")
}
//CHAPETR NO 31-34;
//QUESTION NO 01;
var date= new Date();
document.writeln("<h4>"+date+"</h4>"+"<br>")
//QUESTION NO 02;
let month=[ "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"]
let currentmonth= date.getMonth();
  let getMonthname= month[currentmonth];
alert("Current month  " +getMonthname)
//QUESTION NO 03;
let day =["Sun","Mon","Tue","Wed","Thur","Fri","Sat",
]
let Currentday=date.getDay();
let Currentdayname=day[Currentday];
   alert(Currentdayname)
//QUESTION NO 04;
let day1 =["Sun","Mon","Tue","Wed","Thur","Fri","Sat",
]
let Currentday1=date.getDay();
let Currentdayname1=day[Currentday1];
if(Currentdayname1==="sat" && Currentdayname1==="sun"){
   document.writeln("<h4>Its fun day"+"</h4>"+"<br>")
   }else{
    document.writeln("<h4>Its a work day"+"</h4>"+"<br>")
   }
   //QUESTION NO 05;
   let date1=new Date();
   let current=date.getDate();
   if(current<16 ){
    document.writeln("<h4>First fifteen days of the month"+"</h4>"+"<br>")
  
   }else{
    document.writeln("Last days of the month")
   }
   //QUESTION NO 06;
   let date2=new Date();
   let millisecond=date.getTime()
minutes=millisecond/(1000*60);
document.writeln("<h4>Current date : " +date2+"<br>"+"Elapsed millisecond since january 1, 1970 : " +millisecond+"<br>"+"Elapsed minutes since january 1, 1970 : " +minutes+"</h4>")
 //QUESTION NO 07;
 let now=new Date()
 let hour=now.getHours()
 if(hour<12){
  alert("Its AM")
 }else{
  alert("Its PM")
 }
  //QUESTION NO 08;
  let laterdate=new Date(2020,11,31);
  document.writeln("<h4>Later  date : "+laterdate+"</h4>"+"<br>")
  //QUESTION NO 09;
  let passday=new Date();
  let date3=new Date("2015-06-18 ");
  let defference=passday-date3;
 let difference=Math.floor(defference/(1000*60*60*24));
  document.writeln("<h4>"+difference+ " days have passed since 1st Ramzan,2015"+"</h4>"+"<br>" )
  //QUESTION NO 10;
let Reference=new Date("January 1, 2015 00:00:00")
let diff=Math.floor(Reference.getTime()/1000)
document.writeln("<h4>On reference date "+Reference+"<br>"+diff+"Second had passed since beginning of 2015."+"</h4>"+"<br>")
    //QUESTION NO 11;
  let  currentdate =new Date()
  let currenthour=new Date()
currenthour.setHours(currenthour.getHours()+1)
  document.writeln("<h4>Current Date : "+currentdate+"<br>"+"1 Hour ago : "+currenthour+"</h4>"+"<br>")
    //QUESTION NO 12;
    let date5=new Date()
    let back = new Date()
    back.setFullYear(back.getFullYear()-100)
    document.writeln("<h4>Current Date : " +date5+"<br>"+"100 years Back : " +back+"</h4>"+"<br>")
 //QUESTION NO 13;
 let age=prompt("Enter your age")
 let year=new Date()
 year. setFullYear(year.getFullYear()-age)
 document.writeln("<h4>Your age is : "+age+"<br>"+"Your birth year is : "+year+"<br>"+"</h4>"+"<br>")
 //QUESTION NO 14;
let customername="Zunaira"
let Month="febuary"
let Numberunit=410
let chargesper=16
let latepyment=350
let netamount=Numberunit*chargesper
let grossamount=netamount+latepyment
netamount=netamount.toFixed(1)
grossamount=grossamount.toFixed(1)
document.writeln("<h2>K-Electric Bill</h2>")
document.writeln("<h4>Customer Name : "+customername+"</h4>")
document.writeln("<h4>Month : "+Month+"</h4>")
document.writeln("<h4>Number of units : "+Numberunit+"</h4>")
document.writeln("<h4>Charges per Unit : "+chargesper+"</h4>"+"<br>")
document.writeln("<h4>Net Amount  Payable(within  Due Date) : "+netamount+"</h4>")
document.writeln("<h4>Late payment surcharges : "+latepyment+"</h4>")
document.writeln("<h4>Gross Amount payable (after Due Date) : "+grossamount+"</h4>")

//END

