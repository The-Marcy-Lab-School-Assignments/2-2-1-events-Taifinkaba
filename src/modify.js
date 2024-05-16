// clicker Q1 
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


const addNewRandomNumber = () => {
};

const main = () => {
  const delegationContainer = document.querySelector('#delegation');

  delegationContainer.addEventListener('click', handleDelegation);
};

main();
