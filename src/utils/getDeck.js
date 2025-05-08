
const typeList = ["clubs", "diamonds", "hearts", "spades"];


const numberList = [
  "2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k", "a"
];


export const buildDeck = () => {
  return typeList.flatMap((suit) =>
    numberList.map((rank) => ({
      image: `/assets/deck/${suit}_${rank}.png`
    }))
  );
};

export const shuffle = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const dealCards = (deck, numPlayers = 9) => {
  const playerHands = Array.from({ length: numPlayers }, (_, i) =>
    deck.slice(i * 2, i * 2 + 2) 
  );
  const tableCards = deck.slice(numPlayers * 2, numPlayers * 2 + 5); 
  return { playerHands, tableCards };
};