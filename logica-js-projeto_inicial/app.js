let secretNumber = 3;
console.log("o numero secreto é: " + secretNumber);

let chute;

console.log("seu chute foi: " + chute);

while (chute != secretNumber) {

    chute = prompt("escolha um numero de 1 a 10");
    
    if (chute == secretNumber) {
        alert(`parabens! você acertou o numero, o numero secreto é o ${secretNumber}`);
    } else {
        if (chute > secretNumber) {
            alert(`que pena, você errou o numero, ele é menor que ${chute} `);
        } else {
            alert(`que pena, você errou o numero :(, ele é maior que ${chute}`);
        }
    };
};