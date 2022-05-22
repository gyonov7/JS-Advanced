function daysInMonth(month, year) {

    let date = new Date (year,month,0);
    console.log(date.getDate());
}

daysInMonth(2, 2012);
console.log('---');
daysInMonth(1, 2012);
console.log('---');

daysInMonth(4, 2012);
console.log('---');
daysInMonth(13, 2012);

