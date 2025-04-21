function generateImgElement(src, alt, className) {
    const imgElement = document.createElement('img');
    imgElement.src = src;
    imgElement.alt = alt;

    if (className) {
        imgElement.classList.add(className);
    }
    return imgElement;
}

export default generateImgElement;