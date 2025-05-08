export const getCardImage = (fileName) => {
    return new URL(`../assets/deck/${fileName}`, import.meta.url).href;
  };