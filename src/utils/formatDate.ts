export default function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", { year: 'numeric', month: 'long' }).format(date);
}
