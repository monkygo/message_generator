const quoteContainer = document.getElementById("quote");
// quoteContainer.innerHTML = "";

const quotesFromConfucius = [
  "Everything has beauty, but not everyone sees it.",
  "We have two lives, and the second begins when we realize we only have one.",
  "Respect yourself and others will respect you.",
  "Roads were made for journeys, not destinations.",
  "He who knows all the answers has not been asked all the questions.",
  "If you make a mistake and do not correct it, this is called a mistake.",
  "Without feelings of respect, what is there to distinguish men from beasts?",
  "Wherever you go, go with all your heart.",
  "Humility is the solid foundation of all the virtues.",
  "Wisdom, compassion, and courage are the three universally recognized moral qualities of men.",
];

const quotesFromTzu = [
  "The greatest victory is that which requires no battle.",
  "He will win who knows when to fight and when not to fight.",
  "One may know how to conquer without being able to do it.",
  "Supreme excellence consists of breaking the enemy’s resistance without fighting.",
  "Appear weak when you are strong, and strong when you are weak.",
  "In the midst of chaos, there is also opportunity.",
  "Keep your friends close, your enemies even closer.",
  "Victory comes from finding opportunities in problems.",
  "Let your plans be dark and as impenetrable as night, and when you move, fall like a thunderbolt.",
  "Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win.",
];

const quotesFromBuddha = [
  "The past is already gone. The future is not yet here. There’s only one moment for you to live.",
  "Radiate boundless love towards the entire world.",
  "If anything is worth doing, do it with all your heart.",
  "It is better to conquer yourself than to win a thousand battles, then the victory is yours. It cannot be taken from you, not by angels or by demons, heaven or hell.",
  "The secret of health for both mind and body is not to mourn for the past, nor to worry about the future, but to live the present moment wisely and earnestly.",
  "Be where you are. Otherwise, you will miss your life.",
  "Conquer anger with non-anger. Conquer badness with goodness. Conquer meanness with generosity. Conquer dishonesty with truth.",
  "One who conquers himself is greater than another who conquers a thousand times a thousand men on the battlefield. Be victorious over yourself and not over others.",
  "The way is not in the sky. The way is in the heart.",
  "Every morning, we are born again. What we do today is what matters most.",
  "No one saves us but ourselves. No one can, and no one may. We ourselves must walk the path.",
  "A disciplined mind brings happiness.",
  "To live a pure unselfish life, one must count nothing as one’s own in the midst of abundance.",
  "An idea that is developed and put into action is more important than an idea that exists only as an idea.",
  "You must love yourself before you love another. By accepting yourself and fully being what you are, your simple presence can make others happy.",
];

totalQuotes =
  quotesFromConfucius.length + quotesFromTzu.length + quotesFromBuddha.length;

const getRandNum = () => {
  return Math.floor(Math.random() * totalQuotes);
};

const mergeQuotes = () => {
  const quotes = quotesFromConfucius
    .concat(quotesFromTzu)
    .concat(quotesFromBuddha);
  return quotes;
};

const selectRandomQuote = () => {
  const randNum = getRandNum();
  const quotes = mergeQuotes();
  return `${quotes[randNum]} -- ${getAuthorFromQuoteIndex(randNum)}`;
};

const getAuthorFromQuoteIndex = (index) => {
  console.log(`index is ${index}`);
  if (index >= 0 && index <= quotesFromConfucius.length - 1) {
    return "Confucius";
  } else if (
    index >= quotesFromConfucius.length &&
    index <= quotesFromConfucius.length + quotesFromTzu.length - 1
  ) {
    return "Sun Tzu";
  } else if (
    index >= quotesFromConfucius.length + quotesFromTzu.length &&
    index <=
      quotesFromConfucius.length +
        quotesFromTzu.length +
        quotesFromBuddha.length -
        1
  ) {
    return "Buddha";
  }
};

quoteContainer.innerHTML = selectRandomQuote();
