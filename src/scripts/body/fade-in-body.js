export function fadeInBody(body) {
  body.style.opacity = 0;
  setTimeout(() => {
    body.style.opacity = 1;
  }, 300);
}
