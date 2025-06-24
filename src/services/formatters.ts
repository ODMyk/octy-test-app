const timeOptions: Intl.DateTimeFormatOptions = {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
};

const dateTimeOptions: Intl.DateTimeFormatOptions = {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
};

export const formatTime = (ms: number) => {
  return new Date(ms).toLocaleTimeString(undefined, timeOptions);
};

export const formatDateTime = (ms: number) => {
  return new Date(ms).toLocaleString(undefined, dateTimeOptions);
};
