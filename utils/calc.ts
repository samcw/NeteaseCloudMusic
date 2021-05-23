export function calc(target: number): string {
  switch (Math.floor(Math.log(target) / Math.log(10000))) {
    case 0:
      return target.toString();
    case 1:
      return Math.round(target / 1000) + '万';
    case 2:
      return (target / Math.pow(10, 8)).toFixed(3) + '亿';
  }
  return target.toString();
}