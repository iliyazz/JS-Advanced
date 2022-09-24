function editElement(elementRef, match, replacer) {
    let pattern = new RegExp(match, 'g');
    const content = elementRef.textContent;
    const editedElement = content.replace(pattern, replacer);
    elementRef.textContent = editedElement;
    // elementRef.textContent = elementRef.textContent.replace(pattern, replacer);
}