function extract(content) {
    let text = document.getElementById("content").textContent;
    let matchTextArr = text.match(/[^()]+(?=\))/g);
    let result = matchTextArr.join('; ');
    return result;
}
