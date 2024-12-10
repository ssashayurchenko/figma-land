"use strict";
function init() {
    import(("./global.header.js"));
    import(("./subscription.js"));
    import(("./contact-us-name.js"));
    import(("./contact-us-phone.js"));
    import(("./contact-us-text.js"));
    import(("./contact-us-submit.js"));
    import(("./input-status.js"));
}
const totalPartials = document.querySelectorAll('[data-hx-trigger="load"], [hx-trigger="load"]').length;
let loadedPartialsCount = 0;
document.body.addEventListener("htmx:afterOnLoad", () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) {
        init();
    }
});
