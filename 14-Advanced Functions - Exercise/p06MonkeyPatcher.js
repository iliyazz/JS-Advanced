solution = (() => {
    const commands = {
        upvote: (object) => (object.upvotes += 1),
        downvote: (object) => (object.downvotes += 1),
        score: (object) => {
            const { upvotes, downvotes } = object;
            let obfuscationNumber = 0;

            const [total, balance] = [upvotes + downvotes, upvotes - downvotes];

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
    debugger
    return { call: (object, argument) => commands[argument](object) };
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
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote'); //1
solution.call(post, 'downvote'); //2
solution.call(post, 'downvote'); //3
solution.call(post, 'downvote'); //4
solution.call(post, 'downvote'); //5
solution.call(post, 'downvote'); //6
solution.call(post, 'downvote'); //7
solution.call(post, 'downvote'); //8
solution.call(post, 'downvote'); //9
solution.call(post, 'downvote'); //10
solution.call(post, 'downvote'); //1
solution.call(post, 'downvote'); //2
solution.call(post, 'downvote'); //3
solution.call(post, 'downvote'); //4
solution.call(post, 'downvote'); //5
solution.call(post, 'downvote'); //6
solution.call(post, 'downvote'); //7
solution.call(post, 'downvote'); //8
solution.call(post, 'downvote'); //9
solution.call(post, 'downvote'); //10
solution.call(post, 'downvote'); //1
solution.call(post, 'downvote'); //2
solution.call(post, 'downvote'); //3
solution.call(post, 'downvote'); //4
solution.call(post, 'downvote'); //5
solution.call(post, 'downvote'); //6
solution.call(post, 'downvote'); //7
solution.call(post, 'downvote'); //8
solution.call(post, 'downvote'); //9
solution.call(post, 'downvote'); //10
solution.call(post, 'downvote'); //1
solution.call(post, 'downvote'); //2
solution.call(post, 'downvote'); //3
solution.call(post, 'downvote'); //4
solution.call(post, 'downvote'); //5
solution.call(post, 'downvote'); //6
solution.call(post, 'downvote'); //7
solution.call(post, 'downvote'); //8
solution.call(post, 'downvote'); //9
solution.call(post, 'downvote'); //10
solution.call(post, 'downvote'); //1
solution.call(post, 'downvote'); //2
solution.call(post, 'downvote'); //3
solution.call(post, 'downvote'); //4
solution.call(post, 'downvote'); //5
solution.call(post, 'downvote'); //6
solution.call(post, 'downvote'); //7
solution.call(post, 'downvote'); //8
solution.call(post, 'downvote'); //9
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']