const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");
const duration = require("dayjs/plugin/duration");

// Extend Day.js with UTC and timezone plugins
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(duration);
dayjs.tz.setDefault("America/Los_Angeles");
export const getTimeFromNow = (targetDate: string) => {
  const now = dayjs();

  // Calculate the difference between the PST date and now
  const diff = now.diff(targetDate);

  const duration = dayjs.duration(diff);

  // Get the number of years, months, weeks, days, hours, minutes, and seconds
  const years = duration.years();
  const months = duration.months();
  const weeks = duration.weeks();
  const days = duration.days();
  const hours = duration.hours();
  const minutes = duration.minutes();
  const seconds = duration.seconds();

  return {
    y: years,
    m: months,
    w: weeks,
    d: days,
    h: hours,
    min: minutes,
    sec: seconds,
  };
};
