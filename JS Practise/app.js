
    //       4th Aprail 
    // var yourName = "Write your name here";
    // alert(yourName);
    
    //       5th Aprail
    // var yourNumber = 03210000000;
    // console.log(yourNumber);

    //       6th Aprail CONCATENATION
//   var data1 = "Bano Qabil "
//   var data2 = "Circle Foundation"
//   var data3 = data1 + data2 //strings concatenation
//   console.log(data3);

// var data1 = "5"
// var data2 = 5
// var data3 = data1 + data2 //string and number concatenation
// console.log(data3);

// var data4 = data1.includes("5"); the result is true
// console.log(data4);
// console.log(+data1 + data2); whenever we add +sign or pareseInt() 0r Number  to string it becomes a number
//    console.log(data1 - data2); result is 0

//    var data1 = 10
//    var data2 = 3
//    console.log(data1 % data2); % tells us reminder
//  var userName = prompt("What is your name?");
// //  console.log(userName); //shows whatever user will write 
//  document.write("welcome " + userName); the result is welcome saba

//       //JS ZAKAT PERCENTAGE TASK
//  var zakatPercentage = 0.025;
//  var userInput = prompt("Write your amount here");
//  var result = ( "your Zakat amount is " +userInput * zakatPercentage)
//  alert(result)

                  // 9th Aprail 2023
    // ARTHEMATIC OPERATORS
    // var a = 6;
    // var b = 3;
    //Increment
    //    a++;
      // document.write(a);// the result will be 7
    //DECREMENT
    // a--; the result will be 6
    // // COMPOUND OPERATOR
    // a += b;
    // document.write(a); in real it is a= a+b, the result will be T


    //COMPARISON OPERATORS
    // var x=5
    // var y=6
    // console.log(x==y); it shows false
    // console.log(x!=y); true

    // var x=5
    // var y="5"
    // console.log(x===y); it will show false bcz === means check value as well as data type and here data type is not 
    // console.log(x!==y)

    //  var x=5;
    //  var y=5;
    // console.log(x>=y); result=true
  
             // 11th Aprail ******CONDITIONS****
      // var x = 5
      // var y = 6
      // if(x!=y){document.write("this is true")}

    //  ***** */ FITRA CALCULATOR* **********
    //  var wheat = 170
    //  var barley = 560
    //  var dates = 1600
    //  var raisin = 2800
    //  var userinput1 = prompt(" Enter total numbers of family members");
    //  var userinput2 = prompt("Select your type:\n wheat \n barley \n dates \n raisin");
    //  if (userinput2=="wheat"){document.write("Your fitra amount is " + userinput1*wheat + "/=PKR")}
    //  if (userinput2=="barley"){document.write("Your fitra amount is " + userinput1*barley + "/=PKR")}
    //  if (userinput2=="dates"){document.write("Your fitra amount is " + userinput1*dates + "/=PKR")}
    //  if (userinput2=="raisin"){document.write("Your fitra amount is " + userinput1*raisin + "/=PKR")}


     
         //******** 11th Aprail** LOGICAL OPERATORS********

            //loginal && (And)
        //  var age = prompt("What ia your age?")
        //  if (age>=18 && age<=40){document.write("You are eligeble for NIC");} else{document.write("You are not eligeble")}
        

        //   Logical  "Or" ||
        // var x = 5
        // var y = 10
        // if (x==5 || y==8){document.write("You Won");}

       //   Logical   "not"
        // var x = 6
        // if (x!=5){document.write("You lose")}

             //HOW TO GENERATE A NUMBER
      //   var randomNumber = Math.random();
      //  var WValue = randomNumber * 10
      //  var WValue1 = Math.round(WValue);
      //  document.write(WValue1)

      // var randomNumber = Math.round( Math.random() *10 )
      // document.write(randomNumber)
         
      //************* TASK 3 ***************** */
      // var userNumber = prompt("Guess the Number between 1 to 10")
      // var secretNumber = Math.round( Math.random() *10 )
      // if (userNumber==secretNumber) {alert("CONGRATULATIONS! YOU WON!");}
      //    else{alert("    YOU LOSE! \n The number was: " + secretNumber);}

      
    //   var username = "Usama"
    // console.log(username.toUpperCase())

//********************* 13th APRAIL  TASK # 4 ********************** */
        // var userName = prompt("What is your name?");
        // var result = userName.slice(0,1)
        // var rest = userName.slice(1)
        // var restL = rest.toLowerCase()
        // alert(result.toUpperCase() + restL)
        
//**********************  TASK # 5 *********************************** */
      //  var persons = []
      //  var contactNumbers=[]

      //   var p1 = prompt("Write your name:")
      //   persons.push(p1)
      //   var c1 = prompt("Write your contact number:")
      //   contactNumbers.push(c1)

        // var p2 = prompt("Write your name:")
        // persons.push(p2)
        // var c2 = prompt("Write your contact number:")
        // contactNumbers.push(c2)

        // var p3 = prompt("Write your name:")
        // persons.push(p3)
        // var c3 = prompt("Write your contact number:")
        // contactNumbers.push(c3)

        // var p4 = prompt("Write your name:")
        // persons.push(p4)
        // var c4 = prompt("Write your contact number:")
        // contactNumbers.push(c4)

// document.write(p1+"<br>" + c1 + "<br>" + p2+"<br>" + c2 + "<br>" + p3+"<br>" + c3 + "<br>" + p4+"<br>"+ c4 + "<br>" )
     

      
      //***********/14th APRAIL  TASK 6  ***************** 
    
// var products = ["Pizza", "Salid", "Pasta", "Chicken Roll", "Burger"];


// // User input to remove items
// var input = prompt("1.Pizza \n 2.Salid \n 3.Pasta \n 4.Chicken Roll \n 5.Burger \n Please enter the position of the product you want to remove (1-" + products.length + "):");

// // Convert the user input to a zero-indexed array index
// var index = parseInt(input) - 1;

// // Remove the item at the specified index and store it in a variable
// var removedItem = products.splice(index, 1)[0];

// // alert the removed item
// alert("Removed item: " + removedItem);

// // Showing the remaining items and their total count in alert
// alert("Remaining items: " + products.join(", "));
// alert("Total items remaining: " + products.length);

// ******************** 15th APRAIL TASK 7 *******************************************

//  var nationality = alert("What is your nationalty?")
// if (nationality="pakistani"){alert("you are eligable to vote")}

// var 
// else if (("you ar are not eliagle to vote"))


// var nationality = prompt("Your Nationality Please")
// var age = +prompt("Your age Please")
// var gender = prompt("Your Gender Please")
// var mStatus = prompt("your marital status please")

// if(nationality == "Pakistani" || nationality == "pakistani"  && age>=18 && gender =="male"){
//     alert('you are eligable to vote')
// }
// if (gender=="female" && mStatus=="married"){
//   alert("you are eligable for vote")}
// else{
//     alert("You are not eligeble for vote")
// }

//******************16th APRAIL*** TASK 8 *************************/
//  var pakistaniSquad = ["Babar Azam", "Shadab Khan", "Asif Ali","Fakhar Zaman","Haider Ali","Haris Rauf","Hassan Ali","Imad Waseem","Muhammad Hafeez","Muhammad Nawaz","Muhammad Rizwan","Muhammad Waseem","Sarfaraz Ahmed","Shaheen Afridi","Shoaib Malik","Sohaib Maqsood"]
//  var final = pakistaniSquad.slice(2,13)
//  console.log(final)
// console.log(pakistaniSquad)
 
// function sum(x,y) {var a=(x+y + "<br>")
// return a;
// }
// var b = sum(10,200);
// document.write(b)
  
// *********** LEAP YEAR 1ST METHOD*********************
// var a = prompt("Please input year")
// if (a%4==0){document.write(a," Is a leap year ")}
// else {document.write(a," Is not a leap year")
// }

// *********** LEAP YEAR 2ND METHOD *********************
 
// function leapYear(year) {
//   if (year%4==0 && year%100!=0){
//   return true;}

// else if(year%400 ==0)
//   {return true;}
//   else {return false;}
//   }
// var year = prompt("Please input year");
// if (leapYear(year) == true){document.write(year," is a Leap year")}
// else {document.write(year," is not a Leap Year")}

//************* SWITCH **************************
//**************** WHILE LOOP ******************
//**************/ DO WHILE LOOP ****************
//*****************EVENTS *Click me* on heading* on mouse over*/leave/out*Bulb ON/Off image*/On key down & Down**********
//***************** *FORM**/Input Type**/Text Area***********Added Events on 
// DESIGN LOG IN FORM 
// INPUT TYPE STORE IN ARRAY 
// LEAP YEAR
// CLICK ON Function BULB
//CONTACT FORM












     
       




       

     

      
      