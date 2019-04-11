export function draggable(item, container) {
    var active = false;
    var currentX;
    var currentY;
    var initialX;
    var initialY;
    var xOffset = 0;
    var yOffset = 0;
    window.addEventListener("resize", maybeReset, false);
    container.addEventListener("touchstart", dragStart, false);
    container.addEventListener("touchend", dragEnd, false);
    container.addEventListener("touchmove", drag, false);
    container.addEventListener("mousedown", dragStart, false);
    container.addEventListener("mouseup", dragEnd, false);
    container.addEventListener("mousemove", drag, false);
    function dragStart(e) {
        if (e.type === "touchstart") {
            initialX = e.touches[0].clientX - xOffset;
            initialY = e.touches[0].clientY - yOffset;
        }
        else {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
        }
        if (e.target === item) {
            active = true;
        }
    }
    function dragEnd() {
        initialX = currentX;
        initialY = currentY;
        active = false;
    }
    function drag(e) {
        if (active) {
            e.preventDefault();
            if (e.type === "touchmove") {
                currentX = e.touches[0].clientX - initialX;
                currentY = e.touches[0].clientY - initialY;
            }
            else {
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
            }
            xOffset = currentX;
            yOffset = currentY;
            let rect = item.getBoundingClientRect();
            if ((rect.x < 0 && currentX < item.dataset.currentX) ||
                (rect.x + rect.width > window.innerWidth &&
                    currentX > item.dataset.currentX)) {
                currentX = item.dataset.currentX;
            }
            if ((rect.y < 0 && currentY < item.dataset.currentY) ||
                (rect.y + rect.height > window.innerHeight &&
                    currentY > item.dataset.currentY)) {
                currentY = item.dataset.currentY;
            }
            item.style.transform =
                "translate3d(" + currentX + "px, " + currentY + "px, 0)";
            item.dataset.currentX = currentX;
            item.dataset.currentY = currentY;
        }
    }
    function isOffScreen() {
        let rect = item.getBoundingClientRect();
        return (rect.x < 0 ||
            rect.y < 0 ||
            (rect.x + rect.width > window.innerWidth ||
                rect.y + rect.height > window.innerHeight));
    }
    function maybeReset() {
        if (isOffScreen()) {
            reset();
        }
    }
    function reset() {
        item.style.transform = "translate3d(0px, 0px, 0)";
        item.dataset.currentX = "0";
        item.dataset.currentY = "0";
        xOffset = 0;
        yOffset = 0;
        return false;
    }
}
