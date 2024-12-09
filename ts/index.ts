function init(): void {
  import(("./subscription.js"));
  import(("./global.header.js"));
  import(("./contact-us-name.js"));
  import(("./contact-us-submit.js"))
}

const totalPartials: number = document.querySelectorAll(
  '[data-hx-trigger="load"], [hx-trigger="load"]'
).length;

let loadedPartialsCount: number = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) {
    init();
  }
});
