const messages = {
    theofficeQuotes1: ["Guess what, I have flaws. What are they? Oh, I don't know. I sing in the shower. ", "An office is not for dying ", "Do I need to be liked? Absolutely not. ", "Now, you may look around and see two groups here. White-collar, blue-collar. ", "I fell in love with these kids. And I didn't want to see them fall victim to the system. "],
    theofficeQuotes2: ["Sometimes I spend too much time volunteering. ","An office is a place for living life to the fullest, to the max ", "I like to be liked. I enjoy being liked. ", "But I don't see it that way. And you know why not? ", "So I made 'em a promise. I told them if they graduated from high school, I would pay for their college education. "],
    theofficeQuotes3: ["Occasionally I'll hit somebody with my car. So sue me.","to… an office is a place where dreams come true.", "I have to be liked, but it's not like this compulsive need to be liked, like my need to be praised.", "Because I am collar-blind.", "I have made some empty promises in my life but, hands down, that was the most generous."],
    messageGenerator() {
        const getRandomPart = (array) => {
            return array[Math.floor(Math.random() * array.length)]; 
        }
        const randomPart1 = getRandomPart(this.theofficeQuotes1);
        const randomPart2 = getRandomPart(this.theofficeQuotes2);
        const randomPart3 = getRandomPart(this.theofficeQuotes3);
        return (randomPart1 + '\n' + randomPart2 + '\n' + randomPart3);
    }
};

console.log(messages.messageGenerator());
