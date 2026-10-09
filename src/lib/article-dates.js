export function dateKey(value) {
  if (typeof value !== 'string') return '';
  const match = value.match(/^(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?$/);
  if (!match) return '';
  const [, year, month, day] = match;
  if (month && (Number(month) < 1 || Number(month) > 12)) return '';
  if (day) {
    const lastDay = new Date(Date.UTC(Number(year), Number(month), 0)).getUTCDate();
    if (Number(day) < 1 || Number(day) > lastDay) return '';
  }
  return year + (month || '00') + (day || '00');
}

export function contextDate(entry) {
  if (entry.dateBasis === 'context') return dateKey(entry.date) ? entry.date : '';
  const period = String(entry.period || '');
  const parts = period.match(/\d{4}(?:[.-](?:0[1-9]|1[0-2])(?:[.-]\d{2})?)?/g);
  if (parts?.length) {
    const shortEnd = period.match(/[~–]\s*(0[1-9]|1[0-2])$/);
    const last = shortEnd ? `${parts.at(-1).slice(0, 4)}-${shortEnd[1]}` : parts.at(-1).replaceAll('.', '-');
    if (dateKey(last)) return last;
  }
  return dateKey(entry.date) ? entry.date : '';
}

export function compareContextDates(a, b) {
  return dateKey(contextDate(b)).localeCompare(dateKey(contextDate(a)));
}

export function displayContextDate(entry) {
  return contextDate(entry).replaceAll('-', '.') || '시기 미확인';
}

export function displayWorkPeriod(entry) {
  const period = entry.period?.trim();
  const date = contextDate(entry);
  if (period === date.slice(0, 4) && date.length > 4) return displayContextDate(entry);
  return period?.replaceAll('~', '–') || displayContextDate(entry);
}
