import { elements, addToElements } from './base.js';

const reportCard = () => {
  const markup = `  
  <div class='report-card'>
    <div class='report-card__content'>
      <img src='../src/images/image-jeremy.png' alt='img-jeremy' />
      <article class='report'>
        <p>Report for</p>
        <section class='name'>
          <span>Jeremy</span>
          <span>Robson</span>
        </section>
      </article>
    </div>
    <article>
        <p id='dailyBtn'>Daily</p>
        <p id='weeklyBtn'>Weekly</p>
        <p id='monthlyBtn'>Monthly</p>
    </article>
  </div>
`;

  elements.container.insertAdjacentHTML('beforeend', markup);

  const timeFrame = {
    daily: {
      frame: document.querySelector('dailyBtn'),
    },

    weekly: {
      frame: document.querySelector('weeklyBtn'),
    },

    monthly: {
      frame: document.querySelector('monthlyBtn'),
    }
  }

  addToElements(timeFrame);

}

export default reportCard;
