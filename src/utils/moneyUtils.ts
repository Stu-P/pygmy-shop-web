export const centsToDollars = (price: number): string =>
    (price / 100).toLocaleString('en-AU', { style: 'currency', currency: 'AUD', minimumFractionDigits: 2 });
