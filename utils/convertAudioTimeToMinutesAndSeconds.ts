const convertAudioTimeToMinutesAndSeconds = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time - minutes * 60);
  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

export default convertAudioTimeToMinutesAndSeconds;
