//Product data:
			
	const productNames = ['digital camera','headset with microphone','wireless mouse'];
	const productNumbers = ['dc-25W','h-24 WFSD','wm-js-usb'];
	const productManPrices = [14.90,32.87,6.54];


	class Product {
	constructor(name, number, manufacturePrice) {
		this.prod_name = name;
		this.prod_number = number;
		this.prod_manufacture_price = manufacturePrice;

		this.prod_suggestedRetailPrice = function () {
			return this.prod_manufacture_price * 1.67;
		};
	}
}

const productList = [];

for (let i = 0; i < productNames.length; i++) {
    productList.push(
        new Product(
            productNames[i],
            productNumbers[i],
            productManPrices[i]
        )
    );
}

function formatUSDCurrency(amount) {
    return amount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
}

// Display product count
document.getElementById("count").textContent =
    `Number of Products in Product List: ${productList.length}`;

// Display product details
const outputProduct = document.getElementById("productDisplay");

productList.forEach(product => {
    const p = document.createElement("p");
    p.innerHTML =
        `Product: ${product.prod_name}<br>` +
        `Product Number: ${product.prod_number}<br>` +
        `Product Wholesale Price: ${formatUSDCurrency(product.prod_manufacture_price)}<br>` +
        `Product Suggested Retail Price: ${formatUSDCurrency(product.prod_suggestedRetailPrice())}`;

    outputProduct.appendChild(p);
});

console.log(JSON.stringify(productList[0]));
















