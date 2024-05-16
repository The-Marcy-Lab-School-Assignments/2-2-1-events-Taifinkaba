// clicker Q1 
const clickButton = document.getElementById('click-button');

const clickCounterHandler = () => {
  let click = parseInt(clickButton.getAttribute('data-clicks'));
  click += 1;
  clickButton.setAttribute('data-clicks', click.toString());
  clickButton.textContent = `Clicked: ${click} time${click !== 1 ? 's' : ''}`;
};

clickButton.addEventListener('click', clickCounterHandler);


const handleKeydown = () => {
};

const handleDelegation = (event) => {
  const resultSpan = document.querySelector('#delegation-result');
  resultSpan.textContent = event.target.textContent;
};

const addNewRandomNumber = () => {
};

const main = () => {
  const delegationContainer = document.querySelector('#delegation');

  delegationContainer.addEventListener('click', handleDelegation);
};

main();
