export function kFormatter(num: any) {
  let number = new Intl.NumberFormat("en", { notation: "compact" }).format(num);
  return number;
}
