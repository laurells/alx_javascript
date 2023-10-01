var cards = ['Jack', 8, 2, 6, 'King', 5, 3, 'Queen', 'Jack', 'Queen', 'King', 'King']
// <!-- Requried Output = [2,3,5,6,8,'Jack','Queen','King']
// Q: Sort the array as per the rules of card game using generic method.
// Choose language of your choice.
// Sample output is attached.
// This is the code test you are supposed to work on. You need to follow the rules of the deck card games that we play. You need to assign the lowest number to Jack and the Highest number to King and Queen comes in between.
// Make sure you write a generic solution and not hardcoded. In the end I will ask you to add more faces like Jack, Queen, and King. Your output should have the same number of Strings as much you add in the question.
// You need to make sure you write a solution with one loop only.
// a sorting function based on card values

function customSort(cards, cardNumbers) {
    let i = 0;
    while (i < cards.length - 1) {
        const cardA = cards[i];
        const cardB = cards[i + 1];
        const valueA = cardNumbers[cardA] || cardA;
        const valueB = cardNumbers[cardB] || cardB;

        if (valueA > valueB) {
            cards[i] = cardB;
            cards[i + 1] = cardA;
            i = 0;
        } else {
            i++
        }
    }
}
    const cardNumbers = {
        'Jack': 11,
        'Queen': 12,
        'King': 13,
    };

    customSort(cards, cardNumbers);
    console.log(cards);