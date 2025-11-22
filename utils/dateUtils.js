const two = (n) => String(n).padStart(2, '0');

export function getTodayDate() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = two(d.getMonth() + 1);
  const dd = two(d.getDate());
  return `${yyyy}-${mm}-${dd}`; // yyyy-mm-dd
}

export function getTodayDateTime() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = two(d.getMonth() + 1);
  const dd = two(d.getDate());
  const hh = two(d.getHours());
  const min = two(d.getMinutes());
  return `${yyyy}-${mm}-${dd}T${hh}:${min}`; // yyyy-mm-ddTHH:MM
}
