class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }
    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();
        let currentArticle = this.possibleArticles.hasOwnProperty(articleModel);
        if (!currentArticle) {
            throw new Error('This article model is not included in this gallery!')
        }
        let currentArticleByName = this.listOfArticles.find(x => x.articleName === articleName && x.articleModel === articleModel);
        if (currentArticleByName) {
            currentArticleByName.quantity += quantity;
        }
        else {
            this.listOfArticles.push({ articleModel, articleName, quantity });
            return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
        };
    }
    inviteGuest(guestName, personality) {
        let currentGuest = this.guests.find(x => x.guestName === guestName);
        if (currentGuest) {
            throw new Error(`${guestName} has already been invited.`)
        }
        let currentPoint = 0;
        if (personality === 'Vip') {
            currentPoint = 500;
        }
        else if (personality === 'Middle') {
            currentPoint = 2500;
        }
        else {
            currentPoint = 50;
            personality = 'Normal';
        }
        this.guests.push({ guestName, points: currentPoint, purchaseArticle: 0 });
        return `You have successfully invited ${guestName}!`;
    }
    buyArticle(articleModel, articleName, guestName) {
        debugger
        let currentArticle = this.listOfArticles.find(x => x.articleName === articleName);
        if (!currentArticle || currentArticle.articleModel !== articleModel) {
            throw new Error('This article is not found.');
        }
        if (currentArticle.quantity === 0) {
            return `The ${articleName} is not available.`;
        }
        let currentGuest = this.guests.find(x => x.guestName === guestName)
        if (!currentGuest) {
            return 'This guest is not invited.';
        }
        let currentArticlePoint = this.possibleArticles[articleModel];
        if (currentGuest.points < currentArticlePoint) {
            return 'You need to more points to purchase the article.';
        }
        currentGuest.points -= currentArticlePoint;
        currentArticle.quantity--;
        currentGuest.purchaseArticle++;
        return `${guestName} successfully purchased the article worth ${currentArticlePoint} points.`
    }
    showGalleryInfo(criteria) {
        let buffer = [];
        if (criteria === 'article') {
            buffer.push('Articles information:');
            this.listOfArticles.forEach(el => {
                buffer.push(`${el.articleModel} - ${el.articleName} - ${el.quantity}`)
            })
        }
        else if (criteria === 'guest') {
            buffer.push('Guests information:');
            this.guests.forEach(el => {
                buffer.push(`${el.guestName} - ${el.purchaseArticle}`)
            })
        }
        return buffer.join('\n');
    }
}




// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));
//-----------------------------------------------
// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));
//-----------------------------------------------
// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));
//-----------------------------------------------
// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// artGallery.buyArticle('picture', 'Mona Liza', 'John');
// artGallery.buyArticle('item', 'Ancient vase', 'Peter');
// console.log(artGallery.showGalleryInfo('article'));
// console.log(artGallery.showGalleryInfo('guest'));



