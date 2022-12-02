// //Functions
// //1.En funktion som tar två nummer som argument, dividerar dom och returnerar resultatet.
// function divideAndConquer(tal1, tal2) {
//   let divide = tal1 / tal2;
//   console.log(divide);
// }
// divideAndConquer(10, 2);

// //2.En funktion som tar ett argument: en array med strings, och returnerar det tredje elementet i arrayen.
// function getThirdElement(arr) {
//   console.log(arr[2]);
// }
// getThirdElement(["Hej", "Hola", "Hello"]);

// //3. En funktion som tar grader i celsius som argument och returnerar grader i Fahrenheit.
// //Fahrenheit (°F) = (Celsius x 1.8) + 32
// function celsiusToFahrenheit(celsius) {
//   let fahrenheit = celsius * 1.8 + 32;
//   console.log(fahrenheit);
// }
// celsiusToFahrenheit(1);

// //4.En funktion som tar grader i fahrenheit som argument och returnerar grader i Celsius. Celsius (°C) = (Fahrenheit - 32) / 1.8
// function fahrenheitToCelsius(fahrenheit) {
//   let celsius = (fahrenheit - 32) / 1.8;
//   console.log(celsius);
// }
// fahrenheitToCelsius(5);

// //5.En funktion som returnerar summan av alla argument.  Funktionen har inga parametrar.
// function sum() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   console.log(sum);
// }
// sum(5, 5);

// //6. En funktion som returnerar det minsta numret av alla argument. Funktionen har inga parametrar.
// function sumTwo() {
//   console.log(Math.min(...arguments));
// }
// sumTwo(3, 5, 7);

// //7. En funktion som returnerar medelvärdet av alla argument. Funktionen har inga parametrar.
// function meanValue() {
//   let totalSum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     totalSum += arguments[i];
//     let result = totalSum / arguments.length;
//     console.log(result);
//   }
// }
// meanValue(5, 10, 15);

// //DOM
// //KVADRAT
// //a,b,c) En funktion som har två parametrar: size och color.
// //Funktionen skapar en kvadratisk div där bredd och höjd sätts till size: bakgrundsfärgen sätts till color.
// function aRandomOne(size, color) {
//   let createDiv = document.createElement("div");
//   createDiv.style.width = `${size}px`;
//   createDiv.style.height = `${size}px`;
//   createDiv.style.backgroundColor = `${color}`;
//   document.body.appendChild(createDiv);
// }
// aRandomOne(300, "orange");

// //TEMPERATUR
// //a: En funktion som tar emot ett argument: temperaturen
// //b: Funktionen ska skapa ett text element där det står “KALLT” om temperaturen är under 15 grader och “VARMT” om den är över eller lika med 15.
// //c: Ändra även färgen på texten beroende på om det är varmt eller kallt.

// function temp(temperaturen) {
//   let createDiv = document.createElement("h1");
//   document.body.appendChild(createDiv);

//   if (temperaturen < 15) {
//     createDiv.innerText = "KALLT!";
//     createDiv.style.color = "blue";
//   } else if (temperaturen >= 15) {
//     createDiv.innerText = "VARMT";
//     createDiv.style.color = "red";
//   }
// }
// temp(20);

// //PRIORITERING
// //a:En funktion som skapar ett valfritt text-element.
// //b:Funktionen har två parametrar: ett för text-innehållet och ett för prioritering.
// //c: Prioritering kan ha värdet 1, 2 eller 3 där 1 är viktigast och 3 är minst viktigt.
// //d: Ändra utseendet på elementet så att det passar prioriteringsgraden.
// function prio(text, prio) {
//   let createPara = document.createElement("p");
//   createPara.innerHTML = `${text}`;
//   document.body.appendChild(createPara);

//   if (prio === 1) {
//     createPara.style.color = "red";
//   } else if (prio === 2) {
//     createPara.style.color = "orange";
//   } else if (prio === 3) {
//     createPara.style.color = "yellow";
//   }
// }
// prio("parameter1", 1);

// //LISTA
// //a:En funktion som skapar en lista med en rubrik.
// //b:Funktionen har två parametrar: items och headline
// //c:Items är en array med strings
// //d:Headline är en String med rubriken för listan
// //e:Skapa ett h-element med textinnehållet från headline
// //f:Skapa en ol med lika många li som det finns element i items-arrayen.
// function listList(items, headline) {
//   let createDiv = document.createElement("div");
//   let createHeader = document.createElement("h1");
//   let createList = document.createElement("li");

//   items.forEach((list) => {
//     createDiv.appendChild(createHeader, createList);
//     createDiv.innerHTML = `<h1>${headline}</h1>`;
//     createList.innerHTML += `<ol>${list}</ol>`;
//   });
//   document.body.appendChild(createDiv);
//   document.body.appendChild(createList);
// }
// listList(["string1", "string2", "string3", "string4"], "LISTA!");
//5. RAD AV KVADRATER
//a:En funktion som tar två argument: amount och color.
//b:Funktionen ska skapa lika många kvadrater som amount med bakgrundsfärgen color.
//c:Kvadraterna ska ligga bredvid varandra i en rad.
//d:Glöm inte att lägga till en margin eller border så att man kan urskilja varje kvadrat.
// function kvadrat() {
//   let createDiv = document.createElement("div");
//   createDiv.style.margin = "50px";
//   createDiv.style.width = "100px";
//   createDiv.style.height = "100px";
//   createDiv.style.backgroundColor = "orange";
//   createDiv.style.border = "5px solid red";
//   const parentDiv = document.getElementById("parentDiv");
//   parentDiv.appendChild(createDiv);
// }

// function parentContainer() {
//   let parentDiv = document.createElement("div");
//   parentDiv.setAttribute("id", "parentDiv");
//   parentDiv.style.display = "flex";
//   parentDiv.style.backgroundColor = "yellow";
//   parentDiv.style.width = "100%";
//   document.body.appendChild(parentDiv);
// }
// parentContainer();
// kvadrat();
// kvadrat();

function theList(ols, lis) {
  let singleDiv = document.createElement("div");

  for (let i = 0; i < lis; i++) {
    let li = document.createElement("li");
    singleDiv.appendChild(li);
    console.log(li);
  }
  for (let i = 0; i < ols; i++) {
    let ol = document.createElement("ol");
    singleDiv.appendChild(ol);
    document.body.appendChild(ol);
    console.log(ol);
  }
  console.log(singleDiv);
}
theList(3, 3);
