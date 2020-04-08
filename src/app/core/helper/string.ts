import { LoremIpsum } from 'lorem-ipsum';

export const loremRandomWords = (min = 4, max = 16, words = 1): string => {
    const lorem = new LoremIpsum({
        wordsPerSentence: { max, min }
    });

    return lorem.generateWords(words);
};
