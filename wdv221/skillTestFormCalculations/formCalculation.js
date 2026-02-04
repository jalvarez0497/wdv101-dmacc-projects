const form = document.getElementById('form1');
const product = document.getElementById('products');
const quantity = document.getElementById('textfield2');
const salePrice = document.getElementById('salePrice');
const totalSales = document.getElementById('totalSales');
const resetBtn = document.getElementById('button2');
const clearOrderBtn = document.getElementById('button3');

let totalSalesCounter = 0;

const currencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const productPrice = parseFloat(product.value);

  if (isNaN(productPrice)) {
    alert('Please select a product.');
    product.focus();
    return;
  }

  const qtyText = quantity.value.trim();

  if (qtyText === '') {
    alert('Please enter product quantity.');
    quantity.focus();
    return;
  }

  const integerNumberChecker = /^\d+$/;

  if (!integerNumberChecker.test(qtyText)) {
    alert('Please enter a valid whole number for quantity.');
    quantity.focus();
    return;
  }

  const qtyNumber = parseInt(qtyText, 10);

  if (qtyNumber <= 0) {
    alert('Quantity must be greater than zero.');
    quantity.focus();
    return;
  }

  const saleAmount = productPrice * qtyNumber;

  totalSalesCounter += saleAmount;

  salePrice.textContent = currencyFormat.format(saleAmount);
  totalSales.textContent = currencyFormat.format(totalSalesCounter);
});

resetBtn.addEventListener('click', function () {
  salePrice.textContent = '';
});

clearOrderBtn.addEventListener('click', function () {
  form.reset();
  salePrice.textContent = '';
  totalSales.textContent = '';
  totalSalesCounter = 0;
});
