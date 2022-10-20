class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
    }
    #comments = [];
    #likes = [];
    get likes() {
        if (this.#likes.length === 0) {
            return `${this.title} has 0 likes`;
        }
        else if (this.#likes.length === 1) {
            return `${this.#likes[0]} likes this story!`;
        }
        return `${this.#likes[0]} and ${this.#likes.length - 1} others like this story!`;
    }
    like(username) {
        if (this.#likes.includes(username)) {
            throw new Error("You can't like the same story twice!");
        }
        if (username === this.creator) {
            throw new Error("You can't like your own story!");
        }
        this.#likes.push(username);
        return `${username} liked ${this.title}!`
    }
    dislike(username) {
        if (!this.#likes.includes(username)) {
            throw new Error("You can't dislike this story!");
        }
        this.#likes = this.#likes.filter(x => x !== username);
        return `${username} disliked ${this.title}`;
    }
    comment(username, content, id) {
        let currentComment = this.#comments.find(x => x.id === id);
        if (id === undefined || !currentComment) {
            if (this.#comments.length === 0) {
                id = 1;
            }
            else {
                id = this.#comments.length + 1;
            }
            this.#comments.push({
                id,
                username,
                content,
                replies: []
            });
            return `${username} commented on ${this.title}`;
        }
        let replyId = currentComment.replies.length + 1;
        currentComment.replies.push({
            replyId,
            username,
            content
        });
        return 'You replied successfully';
    }
    toString(sortingType) {
        let result = [`Title: ${this.title}`, `Creator: ${this.creator}`, `Likes: ${this.#likes.length}`, `Comments:`];
        if (this.#comments.length === 0) {
            return result.join('\n');
        }
        if (sortingType === 'desc') {
            this.#comments.forEach(x => x.replies.sort((a, b) => b.replyId - a.replyId));
            this.#comments.sort((a, b) => b.id - a.id);
        } else if (sortingType === 'asc') {
            this.#comments.forEach(x => x.replies.sort((a, b) => a.replyId - b.replyId));
            this.#comments.sort((a, b) => a.id - b.id);
        } else if (sortingType == 'username') {
            this.#comments.forEach(x => x.replies.sort((a, b) => a.username.localeCompare(b.username)));
            this.#comments.sort((a, b) => a.username.localeCompare(b.username));
        }
        this.#comments.forEach(x => {
            result.push(`-- ${x.id}. ${x.username}: ${x.content}`);
            x.replies.forEach(y => result.push(`--- ${x.id}.${y.replyId}. ${y.username}: ${y.content}`));
        });
        return result.join('\n');
    }
}



let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));