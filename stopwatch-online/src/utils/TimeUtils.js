export const getTime = () => {
  return Date.now();
};

export const getTimeDifference = (previousTime, currentTime) => {
  const timeDiff = (currentTime - previousTime) / 1000;

  const hours = `${Math.floor(timeDiff / 3600)}`.padStart(2, '0');
  const minutes = `${Math.floor((timeDiff - hours * 3600) / 60)}`.padStart(
    2,
    '0'
  );
  const seconds = `${Math.floor(timeDiff % 60)}`.padStart(2, '0');
  const milliSeconds = `${(currentTime - previousTime) % 1000}`
    .slice(0, -1)
    .padStart(2, '0');

  return {
    hours,
    minutes,
    seconds,
    milliSeconds,
  };
};
