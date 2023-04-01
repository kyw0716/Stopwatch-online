export const getTime = () => {
  return Date.now();
};

export const getTimeDifference = (previousTime, currentTime) => {
  const timeDiff = (currentTime - previousTime) / 1000;
  const milliSeconds = (currentTime - previousTime) % 1000;

  return {
    hours: `${Math.floor(timeDiff / 3600)}`.padStart(2, '0'),
    minutes: `${Math.floor(timeDiff / 60)}`.padStart(2, '0'),
    seconds: `${Math.floor(timeDiff % 60)}`.padStart(2, '0'),
    milliSeconds: `${milliSeconds}`.slice(0, -1).padStart(2, '0'),
  };
};
