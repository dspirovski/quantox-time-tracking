import reportCard from './views/reportCard.js';
import cardElement from './views/cardElement.js';

let cardList = [];
const periods = ['daily', 'weekly', 'monthly'];
let period = periods[0];

const getCardData = (value) => {
  period = value;
  const classToRemove = document.getElementsByClassName('report-card-active');
  for (let i = 0; i < classToRemove.length; i++) {
    classToRemove[i].classList = [];
  };
  document.getElementById(`${value}Btn`).classList = ['report-card-active'];
  renderCards();
};

const renderCards = async () => {
  const elementsToRemove = document.getElementsByClassName('card-item');
  for (let i = elementsToRemove.length - 1; i >= 0; i--) {
    elementsToRemove[i].remove();
  };
  cardList.map((item) => {
    return cardElement(item, period);
  })
};

const getData = async () => {
  await fetch('../../data.json')
    .then(response => {
      return response.json();
    })
    .then(result => {
      cardList = result;
      renderCards();
    });
};

window.addEventListener('load', async () => {
  await getData();
  reportCard();

  document.getElementById('dailyBtn').addEventListener('click', () => getCardData('daily'));
  document.getElementById('weeklyBtn').addEventListener('click', () => getCardData('weekly'));
  document.getElementById('monthlyBtn').addEventListener('click', () => getCardData('monthly'));
  document.getElementById(`${period}Btn`).classList = ['report-card-active'];
});
