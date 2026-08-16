const toggle = document.getElementById("theme-toggle");
const root = document.documentElement;
const saved = localStorage.getItem("theme");

if (saved === "dark") root.setAttribute("data-theme", "dark");
updateToggle();

toggle?.addEventListener("click", () => {
  const dark = root.getAttribute("data-theme") === "dark";
  if (dark) {
    root.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
  } else {
    root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
  updateToggle();
});

function updateToggle() {
  if (!toggle) return;
  const dark = root.getAttribute("data-theme") === "dark";
  toggle.textContent = dark ? "lights on" : "lights out";
}

const form = document.getElementById("subscribe-form");
const ok = document.getElementById("subscribe-ok");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = new FormData(form).get("email");
  if (!email) return;

  const subscribers = JSON.parse(localStorage.getItem("portfolio_subscribers") || "[]");
  if (!subscribers.includes(String(email))) subscribers.push(String(email));
  localStorage.setItem("portfolio_subscribers", JSON.stringify(subscribers));

  const subject = encodeURIComponent("Portfolio note list");
  const body = encodeURIComponent(`Please add this address to the notes list:\n\n${email}`);
  window.location.href = `mailto:lexuanhoang2402@gmail.com?subject=${subject}&body=${body}`;

  if (ok) ok.classList.add("show");
  form.reset();
});
