function generateHtmlElement(type, className, id) {
    const elementType = document.createElement(type);
    if (className) {
        elementType.classList.add(className);
    }
    if (id) {
        elementType.id = id;
    }
    return elementType;
}

export default generateHtmlElement;