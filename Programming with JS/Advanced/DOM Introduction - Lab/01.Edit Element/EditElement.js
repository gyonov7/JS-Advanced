function editElement(element, match, replacer) {
    const text = element.textContent;
   const edited = text.split(match).join(replacer);
//    const edited = edite +replacer;
    element.textContent = edited;
}
