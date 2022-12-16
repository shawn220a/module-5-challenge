import Timeblock from './timeblock.js';

let timeblocks = $('.container');

const hour9 = new Timeblock(9, 9, 'AM');
const hour10 = new Timeblock(10, 10, 'AM');
const hour11 = new Timeblock(11, 11, 'AM');
const hour12 = new Timeblock(12, 12, 'PM');
const hour13 = new Timeblock(1, 13, 'PM');
const hour14 = new Timeblock(2, 14, 'PM');
const hour15 = new Timeblock(3, 15, 'PM');
const hour16 = new Timeblock(4, 16, 'PM');
const hour17 = new Timeblock(5, 17, 'PM');

timeblocks.append(
  hour9.createHourBlock(),
  hour10.createHourBlock(),
  hour11.createHourBlock(),
  hour12.createHourBlock(),
  hour13.createHourBlock(),
  hour14.createHourBlock(),
  hour15.createHourBlock(),
  hour16.createHourBlock(),
  hour17.createHourBlock(),
);

$('#currentDay').append(moment().format('MMMM Do, YYYY'));

$('.saveBtn').on('click', function () {
  if ($(this).attr('class').split(' ')[3] !== 'disabled') {
    let time = $(this).siblings().attr('id');
    let newTime = time.replace('-', '');
    let value = $(this).siblings('.description').val();
    eval(newTime).saveToLocalStorage(time, value);
  }
});
