import { elements } from './base.js';

const cardElement = (item, period) => {
  const choosenTimeflow = item.timeframes[period];
  const cardMarkUp =
    `<div class='card-item card-item--${item.title.toLowerCase().replaceAll(' ', '-')}'>
        <img src='../src/images/icon-${item.title.toLowerCase().replaceAll(' ', '-')}.svg' alt='img-${item.title.toLowerCase().replaceAll(' ', '-')}' class='card-item__image' />
        <div class='card-item--body'>             
          <article>
            <p>${item.title}<img src='../src/images/icon-ellipsis.svg' alt='allipsis-icon' class='ellipsis-img' /></p>
            <section class='card-details'>
             <p>${choosenTimeflow.current}Hrs</p >
             <p>Last week ${choosenTimeflow.previous}hrs</p>        
            </section >
          </article >
        </div>
      </div> 
    `;

  elements.cards.insertAdjacentHTML('beforeEnd', cardMarkUp);
};

export default cardElement;

