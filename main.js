const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia ("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation () {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const tagList = scroller.querySelector('.tag-list');
        const scrollerContent = Array.from(tagList.children);

        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            tagList.appendChild(duplicatedItem);
        });
    });
}