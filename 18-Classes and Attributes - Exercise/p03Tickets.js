function tickets(inputArr, sortingCriterion) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
    let ticketDataBase = [];
    for (let el of inputArr) {
        [currentDestination, currentPrice, currentStatus] = el.split('|');
        currentTicket = new Ticket(currentDestination, currentPrice, currentStatus);
        ticketDataBase.push(currentTicket);
    }

    let sortedDatabase = sortingCriterion !== 'price' ? ticketDataBase.sort((a, b) => a[sortingCriterion].localeCompare(b[sortingCriterion])) : ticketDataBase.sort((a, b) => a[sortingCriterion] - (b[sortingCriterion]));
    return sortedDatabase;
}

console.table(tickets(
    [
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'destination'));
console.log('---------------------');
console.table(tickets(
    [
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'status'))
console.log('---------------------');
console.table(tickets(
    [
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'price'))