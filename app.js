'use strict';
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

function activityData(e) {
  for (const period of activityPeriod) {
    period.classList.remove('active');
  }
  if (e.currentTarget.classList.contains('daily')) {
    e.currentTarget.classList.add('active');
    new ChangeData(getElement('.work'), '5hrs', 'Last Day - 7hrs');
    new ChangeData(getElement('.play'), '1hrs', 'Last Day - 2hr');
    new ChangeData(getElement('.study'), '0hrs', 'Last Day - 1hrs');
    new ChangeData(getElement('.exercise'), '1hrs', 'Last Day - 1hrs');
    new ChangeData(getElement('.social'), '1hrs', 'Last Day - 3hrs');
    new ChangeData(getElement('.self-care'), '0hrs', 'Last Day - 1hrs');
  }
  if (e.currentTarget.classList.contains('weekly')) {
    e.currentTarget.classList.add('active');
    new ChangeData(getElement('.work'), '32hrs', 'Last Week - 36hrs');
    new ChangeData(getElement('.play'), '10hrs', 'Last Week - 8hr');
    new ChangeData(getElement('.study'), '4hrs', 'Last Week - 7hrs');
    new ChangeData(getElement('.exercise'), '4hrs', 'Last Week - 5hrs');
    new ChangeData(getElement('.social'), '5hrs', 'Last Week - 10hrs');
    new ChangeData(getElement('.self-care'), '2hrs', 'Last Week - 2hrs');
  }
  if (e.currentTarget.classList.contains('monhtly')) {
    e.currentTarget.classList.add('active');
    new ChangeData(getElement('.work'), '103hrs', 'Last Month - 128hrs');
    new ChangeData(getElement('.play'), '23hrs', 'Last Month - 29hr');
    new ChangeData(getElement('.study'), '13hrs', 'Last Month - 19hrs');
    new ChangeData(getElement('.exercise'), '11hrs', 'Last Month - 18hrs');
    new ChangeData(getElement('.social'), '21hrs', 'Last Month - 23hrs');
    new ChangeData(getElement('.self-care'), '7hrs', 'Last Month - 11hrs');
  }
}

function ChangeData(element, hours, raport) {
  this.card = element;
  this.hours = element.querySelector('.large-font');
  this.raport = element.querySelector('.prev-raport');
  this.hours.textContent = `${hours}`;
  this.raport.textContent = `${raport}`;
}

const activityPeriod = document.querySelectorAll('.period-item');
activityPeriod.forEach(period => {
  period.addEventListener('click', activityData);
});
