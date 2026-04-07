export const capitalizeFirst = (label:string) => label.charAt(0).toUpperCase() + label.slice(1, label.length)

export const isSame = (a: string[], b: string[]) => {
  return a.length === b.length && a.every((valx, valy) => valx === b[valy]);
};

export const isSimilar = (a: string[], b: string[]) => {
  return a.some((pip) => b.includes(pip));
};