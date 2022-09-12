export const objectToString = (json: object): string => {
  return JSON.stringify(json, null, 2)
    .replaceAll('\\n', ` `)
    .replaceAll('\\', '');
};

export const dateToString = (str: string): string => {
  const date = new Date(str);
  return [date.toLocaleDateString(), date.toLocaleTimeString()].join(' ');
};
