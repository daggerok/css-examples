render(`
  <div class="sans-serif pa3 w-100">
    <h1 class="f1 pv2">Hello!</h1>
  </div>`,
  '#app'
);

function render(innerHTML, cssSelector) {
  document.querySelector(cssSelector).innerHTML = innerHTML;
}
