export function addSignal(number: number): string {
  if (number > 0) {
    return `+${number}`;
  }
  return `${number}`;
}
