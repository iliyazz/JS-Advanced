function getArticleGenerator(articles) {
    let articlesArr = articles
    let contentId = document.getElementById('content');
    let counter = 0;
    function showNext(){
        if(counter >= articlesArr.length){
            return;
        }
        let article = document.createElement('article');
        article.textContent = articlesArr[counter++];
        contentId.appendChild(article)
    }
    return showNext;
}
