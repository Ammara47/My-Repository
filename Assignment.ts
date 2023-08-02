// Name: [Ammara Ismail Khan]
// Date: [1-August-2023]

//Task 1: Install Node.js, TypeScript and VS Code on your computer.


/*Task 2: Personal Message: Store a person’s name in a variable,
 and print a message to that person. Your message should be simple, 
 such as, “Hello Eric, would you like to learn some Python today?” */

//This Program will print a message to person.
 let Name:string;
 Name = "Ammara";
 console.log(`Hello ${Name}, would you like to learn some Python today?`);

 /*Task 3: Name Cases: Store a person’s name in a variable, 
 and then print that person’s name in lowercase, uppercase, and titlecase. */

Name_lower_case:String;
let Name_lower_case = Name.toLowerCase();
console.log(`Name in lower case is ${Name_lower_case}`);


Name_upper_case:String;
let Name_upper_case = Name.toUpperCase();
console.log(`Name in upper case is ${Name_upper_case}`);

/*Task 4: Famous Quote: Find a quote from a famous person you admire.
Print the quote and the name of its author.
Your output should look something like the following,
including the quotation marks:
Albert Einstein once said, “A person who never made a mistake never tried anything new.” */


console.log(`George Elliot once said, "It is never to late to be who you might have been."`);

/*Task 5: Famous Quote 2: Repeat Exercise 4,
but this time store the famous person’s name in a variable called famous_person.
Then compose your message and store it in a new variable called message. Print your message. */

let famous_person:string ="George Elliot"
let message:string= `${famous_person} once said, "It is never to late to be who you might have been."`;
console.log(message);

/*Task 6: Stripping Names: Store a person’s name,
and include some whitespace characters at the beginning and end of the name. 
Make sure you use each character combination, "\t" and "\n", at least once. 
Print the name once, so the whitespace around the name is displayed. 
Then print the name after striping the white spaces. */

console.log("Name With WhiteSpace");
let NameWithWhitespace=`\n \t Ammara Ismail \t \n `;
console.log(NameWithWhitespace);

console.log("Name Without WhiteSpace");
let NameWithoutWhitespace=NameWithWhitespace .trim();
console.log(NameWithoutWhitespace);

/*Task 7:Number Eight: Write addition, subtraction,
multiplication, and division operationsthat each result in the number 8. 
Be sure to enclose your operations in print statements to see the results.*/

console.log("Addition= " + (4+4));
console.log("Substraction= " + (10-2));
console.log("Multiplication= " + (4*2));
console.log("Division=" + (16/2));


/*Task 8: You should create four lines that look like this:
console.log(5 + 3)
Your output should simply be four lines with the number 8 appearing once on each line.*/

console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

/* Task 9: Favorite Number: Store your favorite number in a variable.
Then, using that variable, create a message that reveals your favorite number.
Print that message.*/

let FavoriteNumber=8;
let message2=(`This is my Favorite Number ${FavoriteNumber}`);
console.log(message2);

/*Task 10: Adding Comments: Choose two of the programs you’ve written, 
and add at least one comment to each. If you don’t have 
anything specific to write because your programs are too simple
at this point, just add your name and the current date at the top of each program file. 
Then write one sentence describing what the program does.*/