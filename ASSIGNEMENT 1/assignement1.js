// ****************   TASK 1:

//Calculate the zakat value, first, create a variable named "zakatPercentage" and
// store the value of 2.5% in it (hint: 2.5% means 0.025). Next, create another variable
// named "userInput" and take the input from the user using the prompt. Make sure
// the input value is of a type number by converting the input string to a number
// using a suitable method. Then, create a variable named "result" and assign its value
// to the multiplication of the zakat percentage and user input. Finally, use an alert
// message to display the calculated zakat value. The message should look like this:
// "Your zakat value is xxx".

// var zakatPercentage = 0.025;
//  var userInput = prompt("Write your amount here");
//  var result = ( "your Zakat amount is " +userInput * zakatPercentage)
//  alert(result)

// *****************   TASK 2:

// calculate the fitrah amount, first, ask the user to enter the total number of family
// members using the prompt and store the value in a variable called
// "familyMembers". Next, ask the user to choose a fitrah method by providing them
// options using the prompt, and store the selected method and its price in variables.
// Then, use an if-else block to check the user's input and calculate the fitrah amount
// by multiplying the selected method's price with the number of family members.
// Finally, display the calculated fitrah amount using an alert message.

    //  var wheat = 250
    //  var barley = 450
    //  var dates = 2100
    //  var raisin = 2800
    //  var userinput1 = prompt(" Enter total numbers of family members");
    //  var userinput2 = prompt("Select your type:\n wheat \n barley \n dates \n raisin");
    //  if (userinput2=="wheat"){document.write("Your fitra amount is " + userinput1*wheat + "/=PKR")}
    //  if (userinput2=="barley"){document.write("Your fitra amount is " + userinput1*barley + "/=PKR")}
    //  if (userinput2=="dates"){document.write("Your fitra amount is " + userinput1*dates + "/=PKR")}
    //  if (userinput2=="raisin"){document.write("Your fitra amount is " + userinput1*raisin + "/=PKR")}

// ******************** TASK 3:

// Create a program that generates a random number between 1 and 10 and stores it
// in a variable called "secretNumber". Then, ask the user to enter a guess for the
// secret number using a prompt.
// Use an if-else statement to check if the user's guess matches the secret number. If
// the guess is correct, display a message using an alert saying "Congratulations! You
// guessed the secret number". Otherwise, if the guess is too high or too low, display
// an appropriate message informing the user to guess again.

    //   var userNumber = prompt("Guess the Number between 1 to 10")
    //   var secretNumber = 9
    //   if (userNumber==secretNumber) {alert("CONGRATULATIONS! YOU WON!");}

    //   else if (userNumber<secretNumber){alert("your number is low, Please guess again.");}
    //   else if (userNumber>secretNumber){alert("your number is heigh, Please guess again.");}


// **********************   TASK 4:

// Create a program that asks the user to enter a name, and then prints out the name
// with the first letter capitalized (Make your name in capitalized case).

  // var userName = prompt("What is your name?");
        // var result = userName.slice(0,1)
        // var rest = userName.slice(1)
        // var restL = rest.toLowerCase()
        // alert(result.toUpperCase() + restL)

//******************* */ TASK 5:

// In this task, you will be creating two empty arrays called "contactNumbers" and
// "contactNames". Using the prompt, you will ask the user to enter a contact number
// and contact name. You will then push these values into their respective arrays
// using the push method. After adding all the contacts, you will display the contact
// numbers and names in the console. To do this, you will need to use a for loop to
// iterate through both arrays and log each element to the console.
// Make sure to use descriptive variable names and comment on your code for clarity.

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

//************************ */ TASK 6:

// Create an Array that contains different products, and get input from the user in which you
// ask your user to give the position of that element he/she wants. Now remove that Item
// from your array and console the removed item, Also display the remaining items in the
// array and total number of items remaining.  

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

// *********************TASK 7:

// Create a program that asks the user for their nationality, gender, and age using the prompt
// function. The program should then use nested if-else statements to determine if the
// person is eligible to vote.
// First, the program should check if the person is Pakistani or Indian. If they are not, the
// program should display a message saying they are not eligible to vote.
// If they are Pakistani or Indian, the program should then check their gender. If the person is
// male and over the age of 18, they are eligible to vote. If the person is female and over the
// age of 18, the program should ask if they are married. If they are married, they are eligible
// to vote. If they are not married, they are not eligible to vote.
// If the person is under 18, the program should display a message saying they are not eligible
// to vot

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

// ***********************TASK 8:

// You have an array of that contains the name of Pakistani Teams Player selected for
// WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
// India, So make an array of final team players (11 Players) that will be playing in tomorrows
// match from the WorldCupSquad array.
// (Hint : Make sure it should not disturb the array that contains 15 players instead you have
// to make a copy of this array

//  var pakistaniSquad = ["Babar Azam", "Shadab Khan", "Asif Ali","Fakhar Zaman","Haider Ali","Haris Rauf","Hassan Ali","Imad Waseem","Muhammad Hafeez","Muhammad Nawaz","Muhammad Rizwan","Muhammad Waseem","Sarfaraz Ahmed","Shaheen Afridi","Shoaib Malik","Sohaib Maqsood"]
//  var final = pakistaniSquad.slice(2,13)
//  console.log(final)
// console.log(pakistaniSquad)

















