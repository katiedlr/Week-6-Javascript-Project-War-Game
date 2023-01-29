var expect = chai.expect;

describe('Dividing cards by half', () => {
    it('should split the cards array into two equal hands', () => {
        var cards = ['a', 'a', 'a', 'a', 'k', 'k', 'k', 'k', 'q', 'q', 'q', 'q', 'j', 'j', 'j', 'j', 10, 10, 10, 10, 9, 9, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 3, 2, 2, 2, 2];
        let halfCards = cards.length/2;
        let player1Cards = cards.slice(0, halfCards);
        let player2Cards = cards.slice(halfCards);

        expect(player1Cards.length).to.equal(halfCards);
        expect(player2Cards.length).to.equal(halfCards);
    });
});
