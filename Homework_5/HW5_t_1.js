// 1. Внедрите в свой код с Кофе, как минимум 2 функции (на ваше усмотрение) и вызовите их в коде.

// let cupSize;
// let smallCup = `small cup`;
// let mediumCup = `medium cup`;
// let largeCup = `large cup`;
// let water = `water`;
// let hotWater = `hot water`;
// let coldWater = `cold water`;
// let totalPrice = 5;
// let priceToppingSugar = false;
// let coffeeType;
// let latte = `Latte`;
// let icedCoffee = `Iced Coffee`;
// let beansArabica = `Arabica ground beans`;
// let beansEthiopian = `Ethiopian ground beans`;

// // Welcome message
// // function showWelcomeMessage()
// function showWelcomeMessage() {
//   console.log(`Welcome to our self-service cafe!`);
//   console.log(`We have different cup sizes. Please choose one:\n`);
// }
// showWelcomeMessage();

// // Show cup sizes and their prices
// // function showCupOptions()
// function showCupOptions() {
//   let cupSizes = [smallCup, mediumCup, largeCup];
//   for (i in cupSizes) {
//     if (cupSizes[i] == smallCup) {
//       console.log(cupSizes[i] + ` - ` + totalPrice + `$`);
//     } else if (cupSizes[i] == mediumCup) {
//       totalPrice * 0.5;
//       console.log(cupSizes[i] + ` - ` + totalPrice + `$`);
//     } else if (cupSizes[i] == largeCup) {
//       totalPrice * 2;
//       console.log(cupSizes[i] + ` - ` + totalPrice + `$`);
//     }
//     if (i == cupSizes.length - 1) {
//       console.log(`\n`);
//     }
//   }
// }
// showCupOptions();

// // Show coffee types with ingredients
// let latteIngredients = `${latte}:\n 1 spoon of ${beansArabica} \n ${hotWater} \n milk \n`;
// let icedCoffeeIngredients = `${icedCoffee}: \n 1 spoon of ${beansEthiopian} \n ${coldWater} \n milk \n`;

// // Show coffee types
// // function showCoffeeTypes()
// function showCoffeeTypes() {
//   console.log(`We have following coffee types: \n`);
//   let menu = [latteIngredients, icedCoffeeIngredients];

//   for (let i = 0; i < menu.length; i++) {
//     console.log(menu[i]);
//   }
// }
// showCoffeeTypes();

// // Make a choice -> the choice is made

// // function makeChoiceCoffee()
// // function makeChoiceCoffee() {} ??? тут пока думаю
// coffeeType = latte;
// cupSize = mediumCup;

// if (coffeeType == icedCoffee) {
//   water = coldWater;
// } else {
//   water = hotWater;
// }

// if (cupSize == smallCup) {
//   // waterVolume = `150 ml`;
//   if (priceToppingSugar == true) {
//     totalPrice += 1;
//   }
// } else if (cupSize == mediumCup) {
//   // waterVolume = `200 ml`;
//   totalPrice *= 1.5;
//   if (priceToppingSugar == true) {
//     totalPrice += 1;
//   }
// } else if (cupSize == largeCup) {
//   // waterVolume = `300 ml`;
//   totalPrice *= 2;
//   if (priceToppingSugar == true) {
//     totalPrice += 1;
//   }
// }

// // Output for client
// let order = `You choosed a ${cupSize} of ${coffeeType}\n Follow the steps: `;
// let step1 = `1. Take a ${cupSize}`;
// let step2 = `2. Put 1 spoon of coffee in it`;
// let step3 = `3. Pour ${water} in a cup with coffee`;
// let step4 = `4. Pour milk in a cup of coffee`;
// let step5 = `5. Stir coffee in a cup with a spoon`;
// let orderPrice = `The order price is ${totalPrice}$`;
// let result = `Enjoy your coffee!`;

// // Add steps to recipe
// let recipe = [step1, step2, step3, step4, step5];
// let clientRecipe = "";
// let isLactoseFree = true;
// for (let i = 0; i < recipe.length; i++) {
//   if (isLactoseFree == true && recipe[i] == step4) {
//     continue;
//   }
//   clientRecipe += recipe[i] + `\n`;
// }
// console.log(order + `\n` + clientRecipe + `\n` + orderPrice + `\n` + result);

// ============================

// Nalya solution

// let cupSize;
// let smallCup = `small cup`;
// let mediumCup = `medium cup`;
// let largeCup = `large cup`;
// let water = `water`;
// let hotWater = `hot water`;
// let coldWater = `cold water`;
// let totalPrice = 5;
// let priceToppingSugar = false;
// let coffeeType;
// let latte = `Latte`;
// let icedCoffee = `Iced Coffee`;
// let beansArabica = `Arabica ground beans`;
// let beansEthiopian = `Ethiopian ground beans`;

// Welcome message
// function showWelcomeMessage() {
//   console.log(`Welcome to our self-service cafe!`);
//   console.log(`We have different cup sizes. Please choose one:\n`);
// }

// // Show cup sizes and their prices
// function showCupOptions() {
//   let smallCup = `small cup`;
//   let mediumCup = `medeium cup`;
//   let largeCup = `large cup`;
//   let price = 5;

//   let cupsOptions = [
//     [smallCup, price],
//     [mediumCup, price * 1.5],
//     [largeCup, price * 2],
//   ];

//   for (let i = 0; i < cupsOptions.length; i++) {
//     console.log(cupsOptions[i][0] + `- ` + cupsOptions[i][1] + `$`);

//     if (i == cupsOptions.length - 1) {
//       console.log(`\n`);
//     }
//   }
// }

// // Show coffee types with ingredients
// function showCoffeeTypesAndIngredients() {
//   let hotWater = `hot water`;
//   let coldWater = `cold water`;
//   let latte = `Latte`;
//   let icedCoffee = `Iced Coffee`;
//   let beansArabica = `Arabica ground beans`;
//   let beansEthiopian = `Ethiopian ground beans`;

//   let latteIngredients = `${latte}:\n 1 spoon of ${beansArabica} \n ${hotWater} \n milk \n`;
//   let icedCoffeeIngredients = `${icedCoffee}: \n 1 spoon of ${beansEthiopian} \n ${coldWater} \n milk \n`;

//   console.log(`We have following coffee types. Please, choose one: \n`);
//   let menu = [latteIngredients, icedCoffeeIngredients];

//   for (let i = 0; i < menu.length; i++) {
//     console.log(menu[i]);
//   }
// }

// // Set water for coffee
// function setWaterForCoffee(coffeeType) {
//   if (coffeeType.toLowerCase() == `iced coffee`) {
//     return (water = `cold water`);
//   } else {
//     return (water = `hot water`);
//   }
// }

// // Get cup price
// function getCupPrice(cupSize) {
//   let price = 5;
//   if (cupSize == `small`) {
//     return price;
//   } else if (cupSize == `medium`) {
//     return (price *= 1.5);
//   } else if (cupSize == `large`) {
//     return (price *= 2);
//   }
// }

// // Output for client
// function showRecipeToClient(
//   cupSize,
//   coffeeType,
//   isLactoseFree,
//   milk = `half&half`
// ) {
//   let water = setWaterForCoffee(coffeeType);
//   price = getCupPrice(cupSize);

//   let order = ` You choosed a ${cupSize} cup of ${coffeeType.toUpperCase()}\n Follow the steps: `;
//   let step1 = ` Take a ${cupSize} cup`;
//   let step2 = ` Put 1 spoon of coffee in it`;
//   let step3 = ` Pour ${water} in a cup with coffee`;
//   let step4 = ` Pour ${milk} in a cup of coffee`;
//   let step5 = ` Stir coffee in a cup with a spoon`;
//   let orderPrice = `The order price is ${price}$`;
//   let result = `Enjoy your coffee!`;

//   // Add steps to recipe
//   let recipe = [step1, step2, step3, step4, step5];
//   let stepNum = 1;
//   let clientRecipe = "";
//   for (let i = 0; i < recipe.length; i++) {
//     if (isLactoseFree == true && recipe[i] == step4) {
//       continue;
//     }
//     clientRecipe += stepNum++ + recipe[i] + `\n`;
//   }
//   console.log(order + `\n` + clientRecipe + `\n` + orderPrice + `\n` + result);
// }

// // =====================

// showWelcomeMessage();
// showCupOptions();
// showCoffeeTypesAndIngredients();

// showRecipeToClient(`small`, `latte`, true, `cocount milk`);

// // console.log(getCupPrice(`medium`));
