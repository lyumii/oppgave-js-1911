let userName = "John";

let userAge = 20;

let userCity = "Bergen";

if (userName === "John" && userCity === "Bergen") {
    console.log("Vilkommen inn, John fra Bergen!");
} else if (userAge >=18) {
    console.log("Du er over 18, vilkommen inn.");
} else if (userAge <18 || userCity === "Oslo") {
    console.log("Du er ikkje gammel nok og du er fra feil by");
} else {
    console.log("Error.")
}

const calculator = (num1, num2, operator) => {
    switch (operator) {
        case "+":
            return num1+num2;
        case "-":
            return num1-num2;
        case "*":
            return num1*num2;
        case "/":
            return num1/num2;
    }
}

console.log(calculator(23, 7, "+"));

console.log(calculator(23, 7, "-"));

console.log(calculator(23, 7, "*"));

console.log(calculator(23, 7, "/"));