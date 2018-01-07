function dayOfTheMonth() {
    let date = new Date();
    return date.getDate();
}

function month() {
    let date = new Date();
    return date.getMonth();
}

function monthAbbreviaton() {
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    return monthNames[month()];
}

module.exports = {
    dayOfTheMonth: dayOfTheMonth,
    monthAbbreviaton: monthAbbreviaton
}