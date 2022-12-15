export default class Timeblock {
  constructor(hour, militaryTime, timePeriod) {
    this.hour = hour;
    this.militaryTime = militaryTime;
    this.currentHour = moment().format('H');
    this.timeOfDay = timePeriod;
    this.hourBlockEl = $('<div>').addClass('row time-block');
    this.hourEl = $('<div>').addClass('col-md-1 hour');
    this.textareaEl = $('<textarea>').addClass('col-md-10 description');
    this.saveBtnEl = $('<button>').addClass('col-md-1 btn saveBtn');
    this.saveIconEl = $('<i>').addClass('fas fa-save');
  }

  createHourBlock() {
    this.hourEl
      .attr('id', `hour-${this.militaryTime}`)
      .append(`${this.hour} ${this.timeOfDay}`);
    this.saveBtnEl.append(this.saveIconEl);
    return this.hourBlockEl.append(
      this.hourEl,
      this.getFromLocalStorage(),
      this.showPastPresentFuture(),
      this.saveBtnEl,
    );
  }

  saveToLocalStorage(time, value) {
    localStorage.setItem(time, value);
  }

  getFromLocalStorage() {
    let value = localStorage.getItem(`hour-${this.militaryTime}`);
    return this.textareaEl.append(value);
  }

  showPastPresentFuture() {
    if (this.militaryTime < this.currentHour) {
      return (
        this.textareaEl.addClass('past') && this.saveBtnEl.addClass('disabled')
      );
    }
    if (this.militaryTime === this.currentHour) {
      return this.textareaEl.addClass('present');
    }
    if (this.militaryTime > this.currentHour) {
      return this.textareaEl.addClass('future');
    }
  }
}
