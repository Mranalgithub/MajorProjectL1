document.addEventListener('DOMContentLoaded', () => {
  const eventDate = new Date("2025-07-01T09:00:00").getTime();
  const timer = document.getElementById("countdown");

  setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    timer.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);

  const heroText = document.getElementById("hero-text");
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 12) {
    heroText.textContent = "Join Us This Morning!";
  } else if (hour >= 12 && hour < 18) {
    heroText.textContent = "Register for Today’s Exciting Sessions!";
  } else {
    heroText.textContent = "Only a Few Hours Left to Register!";
  }
});
