const textarea = document.querySelector("#my-text");
const textarea2 = document.querySelector("textarea");

textarea.addEventListener("input", () => {
  textarea2.style.height = "auto";
  textarea2.style.height = `${textarea.scrollHeight}px`; // this codes === textarea.scrollHeight + 'px'
});
