// clicker Q1 
const clickButton = document.getElementById('click-button');

const clickCounterHandler = () => {
  let click = clickButton.dataset.clicks;
  click ++
  clickButton.dataset.clicks = click
  // clickButton.setAttribute('data-clicks', click.toString());
  clickButton.textContent = (click !== 1) ? `I've been clicked ${click} times!` : `I've been clicked ${click} time.`;
};
clickButton.addEventListener('click', clickCounterHandler);

// Q3  cant do
const clickCounterHandler3 = () => {
  let click = clickButton.dataset.clicks;
  click ++
  clickButton.dataset.clicks = click
  // clickButton.setAttribute('data-clicks', click.toString());
  // clickButton.textContent = (click !== 1) ? `I've been clicked ${click} times!` : `I've been clicked 1 time.`;
  if(click === 1){
    
  }
};
clickButton.addEventListener('click', clickCounterHandler3);


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
