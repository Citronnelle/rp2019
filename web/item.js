var urlStr = window.location.href;
var queryStr = urlStr.split("?")[1];	// Will not get the first parameter without the split.

var searchParams = new URLSearchParams(queryStr);

var prodFileName = searchParams.get("image");
var prodName = searchParams.get("name");
var prodPrice = searchParams.get("price");

const image = document.createElement("img");
image.src = prodFileName;
image.height = 300;
image.className = "item__image";

const productName = document.createElement("span");
productName.innerText = prodName;
productName.className = "item__product_name";

const productPrice = document.createElement("span");
productPrice.innerText = prodPrice;
productPrice.className = "item__product_price";

const container = document.createElement("div");
container.append(image);
container.append(document.createElement("br"));
container.append(productName);
container.append(document.createElement("br"));
container.append(productPrice);

//window.onload = function () {
//alert(prodName + ", " + price + ", " + fileName);
//}

window.addEventListener("load", () => {
	const app = document.getElementById("item-body");
	app.append(container);
});