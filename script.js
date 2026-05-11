const openMenuButton = document.querySelector("#open-menu-button");
const closeMenuButton = document.querySelector("#close-menu-button");
const menu = document.querySelector(".menu");
const anchors = document.querySelectorAll(".anchor");
const navBtn = document.querySelector(".nav-btn");

//   HAMBURGER MENU
openMenuButton.addEventListener('click', () => {
    document.body.classList.toggle("show-mobile-menu");
});
//   CLOSE MENU
closeMenuButton.addEventListener('click', () => openMenuButton.click());

//  CLOSE MENU WHEN CLICK ON LINK
anchors.forEach(anchor => {
    anchor.addEventListener('click', () => {
        document.body.classList.remove("show-mobile-menu");
    });
});

//  CLOSE MENU WHEN CLICK ON NAV BUTTON
navBtn.addEventListener('click', () => {
    document.body.classList.remove("show-mobile-menu");
})



//   CLOSE MENU WHEN CLICK OUTSIDE
document.addEventListener('click', e => {
    if (!menu.contains(e.target) && !openMenuButton.contains(e.target)) {
        document.body.classList.remove("show-mobile-menu");
        }
})

// SECTION 4 — team list: horizontal touch slider at max-width 900px (no arrows)
(function initSection4TeamSlider() {
    const mq = window.matchMedia("(max-width: 900px)");
    const slider = document.getElementById("section4-slider");
    const list = document.querySelector(".section4-team-list");
    if (!list || !slider) return;

    function getSnapTargets() {
        const items = [...list.querySelectorAll(".member-list")];
        if (!items.length) return [];
        const pad = parseFloat(getComputedStyle(list).paddingLeft) || 0;
        return items.map((el) => Math.max(0, el.offsetLeft - pad));
    }

    function snapNearestMemberSlide() {
        if (!mq.matches) return;
        const targets = getSnapTargets();
        if (!targets.length) return;
        const x = list.scrollLeft;
        let bestIdx = 0;
        let bestDist = Infinity;
        targets.forEach((t, i) => {
            const d = Math.abs(x - t);
            if (d < bestDist) {
                bestDist = d;
                bestIdx = i;
            }
        });
        list.scrollTo({ left: targets[bestIdx], behavior: "smooth" });
    }

    function updateEdgeFades() {
        if (!mq.matches) {
            slider.classList.remove("is-at-start", "is-at-end");
            return;
        }
        const { scrollLeft, scrollWidth, clientWidth } = list;
        const epsilon = 3;
        const atStart = scrollLeft <= epsilon;
        const atEnd = scrollLeft >= scrollWidth - clientWidth - epsilon;
        slider.classList.toggle("is-at-start", atStart);
        slider.classList.toggle("is-at-end", atEnd);
    }

    function onTouchEnd() {
        if (!mq.matches) return;
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                snapNearestMemberSlide();
                updateEdgeFades();
            });
        });
    }

    function onMqChange() {
        if (!mq.matches) {
            list.scrollLeft = 0;
            slider.classList.remove("is-at-start", "is-at-end");
        } else {
            updateEdgeFades();
        }
    }

    list.addEventListener("touchend", onTouchEnd, { passive: true });
    list.addEventListener("touchcancel", onTouchEnd, { passive: true });
    list.addEventListener("scroll", updateEdgeFades, { passive: true });
    mq.addEventListener("change", onMqChange);
    window.addEventListener("resize", updateEdgeFades, { passive: true });
    updateEdgeFades();
})();