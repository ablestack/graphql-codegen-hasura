/* double digits for Date */
function yymmdd(date: Date) {
  const mm = (date.getMonth() + 1).toString(); // getMonth() based on 0
  const dd = date.getDate().toString();
  return [date.getFullYear(), mm.length === 2 ? '' : '0', mm, dd.length === 2 ? '' : '0', dd].join(''); // padding
}

/* double digits for time */
function checkTime(i: number) {
  return i < 10 ? '0' + i : i;
}

function getTSWTZ() {
  /* get padded date */
  const today = new Date();
  const todayString = yymmdd(today);
  const yyyy = todayString.slice(0, 4);
  const mm = todayString.slice(4, 6);
  const dd = todayString.slice(6, 8);
  const paddedDateString = `${yyyy}-${mm}-${dd}`;
  /* get padded time */
  const h = checkTime(today.getHours());
  const m = checkTime(today.getMinutes());
  const s = checkTime(today.getSeconds());
  const paddedTimeString = `T${h}:${m}:${s}`;
  /* get offset of timezone */
  const tzStr = new Date().toString();
  const pos1 = tzStr.indexOf('GMT') + 3;
  const pos2 = pos1 + 3;
  const pos3 = pos2 + 2;
  const offSetTimeZone = `${tzStr.slice(pos1, pos2)}:${tzStr.slice(pos2, pos3)}`;
  const tswtz = `${paddedDateString}${paddedTimeString}${offSetTimeZone}`;

  return tswtz;
}

export const PostGresUtils = { getTSWTZ };
