import { formatDate } from './date.utils';

describe('formatData', () => {
  it('should format date correctly', () => {
    const date = '2023-10-05T14:48:00.000Z';
    const formattedDate = formatDate(date, 'DD/MM/YYYY, HH:mm[h]');
    expect(formattedDate).toBe('05/10/2023, 14:48h');
  });

  it('should handle invalid date', () => {
    const date = 'invalid-date';
    const formattedDate = formatDate(date, 'DD/MM/YYYY, HH:mm[h]');
    expect(formattedDate).toBe('Invalid Date');
  });

  it('should handle empty date string', () => {
    const date = '';
    const formattedDate = formatDate(date, 'DD/MM/YYYY, HH:mm[h]');
    expect(formattedDate).toBe('Invalid Date');
  });
});
