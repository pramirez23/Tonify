const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

// convert units of time to milliseconds
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const week = day * 7;
const month = week * 4;

// convert milliseconds from renderDateAdded function back to correct units
const convertToSeconds = (ms) => {
  return Math.floor(ms/second);
}

const convertToMinutes = (ms) => {
  return Math.floor(ms/minute);
}

const convertToHours = (ms) => {
  return Math.floor(ms/hour);
}

const convertToDays = (ms) => {
  return Math.floor(ms/day);
}

const convertToWeeks = (ms) => {
  return Math.floor(ms/week);
}

const convertToMonths = (ms) => {
  return Math.floor(ms/month);
}

export const renderSongDuration = (duration) => {
  let minutes = Math.floor(duration / 60);
  let seconds = Math.floor(duration % 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return `${minutes}:${seconds}`
}

export const renderTotalDuration = (duration) => {
  let hours = Math.floor(duration / 3600);
  let minutes = Math.floor(duration / 60);
  let seconds = duration % 60;
  if (seconds < 10) { seconds = `0${seconds}` }
  
  return hours > 0 ? `${hours} hr ${minutes} min` : `${minutes} min ${seconds} sec`
}

export const renderDateAdded = (date) => {
  const currentTime = new Date();
  const dateAdded = new Date(date);
  const timeDiff = Math.abs(dateAdded - currentTime);

  if (convertToMonths(timeDiff) > 1) {
    
    return `${months[dateAdded.getMonth()]} ${dateAdded.getDate()}, ${dateAdded.getFullYear()}`;

  } else if (convertToWeeks(timeDiff) >= 1) {

    let numWeeks = convertToWeeks(timeDiff);
    if (numWeeks === 1) {
      return `${numWeeks} week ago`;
    } else {
      return `${numWeeks} weeks ago`;
    }

  } else if (convertToDays(timeDiff) >= 1) {

    let numDays = convertToDays(timeDiff);
    if (numDays === 1) {
      return `${numDays} day ago`;
    } else {
      return `${numDays} days ago`;
    }

  } else if (convertToHours(timeDiff) >= 1) {

    let numHours = convertToHours(timeDiff);
    if (numHours === 1) {
      return `${numHours} hour ago`;
    } else {
      return `${numHours} hours ago`;
    }

  } else if (convertToMinutes(timeDiff) >= 1) {

    let numMins = convertToMinutes(timeDiff);
    if (numMins === 1) {
      return `${numMins} minute ago`;
    } else {
      return `${numMins} minutes ago`;
    }

  } else if (convertToSeconds(timeDiff) >= 1) {

    let numSecs = convertToSeconds(timeDiff);
    if (numSecs === 1) {
      return `${numSecs} second ago`;
    } else {
      return `${numSecs} seconds ago`;
    }

  } else {
    return "Just now"
  }
}