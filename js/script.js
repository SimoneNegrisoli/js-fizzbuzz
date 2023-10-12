// Costanti

const fizz = 'Fizz';
const buzz = 'Buzz';

// dove lo voglio mettere
const boxEl = document.getElementById('boxcontainer');


// Ciclo da 1 a 100
for (let i = 1; i <= 100; i++) {

    let valore;
    let boxColor = 'box';

    if (i % 3 === 0 && i % 5 === 0) {
        valore = fizz + buzz;
        boxColor = 'box-purple'

    } else if (i % 3 === 0) {
        valore = 'Fizz';
        boxColor = 'box-green';

    } else if (i % 5 === 0) {
        valore = 'Buzz';
        boxColor = 'box-ywl';

    } else {
        valore = i;
        boxColor = 'box-blue'
    }

    const squareBox = document.createElement("div");
    squareBox.className = `box ${boxColor}`;
    squareBox.innerHTML = valore;

    boxEl.append(squareBox);

}






