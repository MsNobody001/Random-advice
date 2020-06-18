const btnAdd = document.querySelector('.add');
const btnClean = document.querySelector('.clean');
const btnShowAdvice = document.querySelector('.showAdvice');
const btnShowOptions = document.querySelector('.showOptions');
const input = document.querySelector('input');
const h1 = document.querySelector('h1');

const options = ['Walcz!', ' Odpuść'];

const addOption = (e) => {
    e.preventDefault();
    const newOption = " " + input.value;
    options.push(newOption);
    input.value = '';
    alert('Dodałeś możliwość: ' + newOption);
}

const cleanOptions = (e) => {
    e.preventDefault();
    options.length = 0;
}

const showAdvice = (e) => {
    const optionIndex = Math.floor(Math.random() * options.length);
    h1.textContent = options[optionIndex];
}

const showOptions = (e) => {
    if (options.length) {
        alert('Twoje możliwości to: ' + options);
    } else {
        alert('Nie masz żadnych możliwości!');
    }
}

btnAdd.addEventListener('click', addOption);
btnClean.addEventListener('click', cleanOptions);
btnShowAdvice.addEventListener('click', showAdvice);
btnShowOptions.addEventListener('click', showOptions);