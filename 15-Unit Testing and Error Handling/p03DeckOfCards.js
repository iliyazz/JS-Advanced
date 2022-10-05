function printDeckOfCards(cards) {
    function cardFactory(face, suit) {
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuits = ['S', 'H', 'D', 'C'];
        if (validFaces.indexOf(face.toString()) === -1) {
            throw new Error('Error');
        }
        if (validSuits.indexOf(suit.toString()) === -1) {
            throw new Error('Error');
        }
        switch (suit) {
            case 'S': suit = '\u2660'; break;
            case 'H': suit = '\u2665'; break;
            case 'D': suit = '\u2666'; break;
            case 'C': suit = '\u2663'; break;
        }
        return {
            face: face,
            suit: suit,
            toString() {
                return this.face + this.suit;
            }
        }
    }

    let deckOfCards = [];
    for (let card of cards) {
        let face = card.substring(0, card.length - 1);
        let suit = card[card.length - 1];
        try {
            let currentCard = cardFactory(face, suit);
            deckOfCards.push(currentCard);
        } catch (error) {
            console.log(`Invalid card: ${face + suit}`);
            return;
        }
    }
    console.log(deckOfCards.join(' '));
}
printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);
