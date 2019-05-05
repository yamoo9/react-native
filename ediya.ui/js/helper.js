/** ------------------------------------------------
 * ECMAScript 2015+
 * - ES6+ 문법을 사용해 API를 작성합니다.
 * ------------------------------------------------ */

/**
 * DOM 선택 헬퍼 함수
 */

const els = (selector, context=document) => context.querySelectorAll(selector);
const el = (selector, context) => els(selector, context)[0];

/**
 * 날짜,시간 헬퍼 함수
 */

const getYear = (format='') => new Date().getFullYear() + format;
const getMonth = (format='') => (new Date().getMonth() + 1) + format;
const getDate = (format='') => new Date().getDate() + format;

function getDay(format='') {
  let day = new Date().getDay();
  switch (day) {
    case 0: day = "일"; break;
    case 1: day = "월"; break;
    case 2: day = "화"; break;
    case 3: day = "수"; break;
    case 4: day = "목"; break;
    case 5: day = "금"; break;
    case 6: day = "토";
  }
  return day + format;
}

function getHours(format='', ampm='') {
  let hour = Number(new Date().getHours());
  if (ampm) { ampm = hour < 12 ? "AM " : "PM "; }
  hour = hour >= 12 ? hour - 12 : 12 - hour > 3 ? "0" + hour : hour;
  return ampm + hour + format;
}

const getMinutes = (format='') => new Date().getMinutes() + format;
const getSeconds = (format='') => new Date().getSeconds() + format;
const getMilliseconds = (format='') => new Date().getMilliseconds() + format;
const getISOString = (format='') => new Date().toISOString() + format;