solution = (() => {
    let start = function call(post, token) {
        let cmd = commands[token](post);
        return cmd;
    }
    let obj = {
        call: start
    }
    const commands = {
        upvote: function upvote(post) { post.upvotes += 1; },
        downvote: function downvote(post) { post.downvotes += 1; },
        score: function score(post) {
            let upvotes = post.upvotes;
            let downvotes = post.downvotes;
            let obfuscationNumber = 0;
            let total = upvotes + downvotes;
            let balance = upvotes - downvotes;
            if (total > 50) {
                obfuscationNumber = Math.ceil(0.25 * Math.max(upvotes, downvotes));
            }
            let rating = 'new';
            if (total < 10) {
                rating = 'new';
            }
            else if (upvotes / total > 0.66) {
                rating = 'hot';
            }
            else if (downvotes / total <= 0.66 && balance >= 0 && (upvotes > 100 || downvotes > 100)) {
                rating = 'controversial';
            }
            else if (balance < 0 && total >= 10) {
                rating = 'unpopular';
            }
            return [upvotes + obfuscationNumber, downvotes + obfuscationNumber, balance, rating];
        },
    };
    return obj;
})();




let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
//debugger
for (let i = 0; i < 50; i++) {
    solution.call(post, 'downvote');         // (executed 50 times)
}
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']