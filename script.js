const buyPrice = 62.5;
const sellPrice = 60.0;
const goldGramsInput = document.getElementById('gold-grams');
const goldResult = document.getElementById('gold-result');
const buyPriceEl = document.getElementById('buy-price');
const sellPriceEl = document.getElementById('sell-price');
const calculateBuyBtn = document.getElementById('calculate-buy');
const calculateSellBtn = document.getElementById('calculate-sell');

buyPriceEl.textContent = `$${buyPrice.toFixed(2)}`;
sellPriceEl.textContent = `$${sellPrice.toFixed(2)}`;

function updateResult(type) {
  const grams = parseFloat(goldGramsInput.value) || 0;
  const basePrice = type === 'buy' ? buyPrice : sellPrice;
  const total = grams * basePrice;
  goldResult.innerHTML = `Estimated total (${type === 'buy' ? 'buy' : 'sell'}): <strong>$${total.toFixed(2)}</strong>`;
}

calculateBuyBtn.addEventListener('click', () => updateResult('buy'));
calculateSellBtn.addEventListener('click', () => updateResult('sell'));

goldGramsInput.addEventListener('input', () => {
  if (goldResult.textContent.includes('venta')) {
    updateResult('sell');
  } else {
    updateResult('buy');
  }
});

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle?.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});
