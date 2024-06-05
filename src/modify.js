// clicker Q1 
/** FEEDBACK: Great job getting all test cases to pass! You are a superstar! */
const clickButton = document.getElementById('click-button');

const clickCounterHandler = () => {
  let click = parseInt(clickButton.getAttribute('data-clicks'));
  click += 1;
  clickButton.setAttribute('data-clicks', click.toString());
  clickButton.textContent = `Clicked: ${click} time${click !== 1 ? 's' : ''}`;
};
clickButton.addEventListener('click', clickCounterHandler);

// Q3  cant do


// Q2
const handleKeydown = (event) => {
  const keydownTracker = document.getElementById('keydown-tracker');
  keydownTracker.textContent = `You pressed ${event.code}`;
};
document.body.addEventListener('keydown', handleKeydown);

// Q4
const handleDelegation = (event) => {
  const resultSpan = document.querySelector('#delegation-result');
  if (event.target.tagName === 'BUTTON') {
    resultSpan.textContent = event.target.textContent;
  }
};

// Q5
const addNewRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const listItem = document.createElement('li');
  listItem.textContent = randomNumber;
  document.getElementById('random-numbers').appendChild(listItem);
};
document.getElementById('add-random-num').addEventListener('click', addNewRandomNumber);

// Q6
const removeDelegationListener = () => {
  const dele = document.querySelector('#delegation');
  dele.removeEventListener('click', handleDelegation);
};

document.getElementById('remove').addEventListener('click', removeDelegationListener);


const main = () => {
  const delegationContainer = document.querySelector('#delegation');

  delegationContainer.addEventListener('click', handleDelegation);
};

main();
