
var product = {
    image: "http://ak1.ostkcdn.com/images/products/6539995/SonicWALL-TZ-215-Appliance-Only-L14122074.jpg",
    name: "SonicWALL TZ 215 Appliance Only",
    price: "$668",
    description: "SonicWALL TZ 215 Appliance Only - 7 Port Gigabit Ethernet - USB - Manageable - Desktop",
  }

function Product(image, name, price, description) {
  this.image = image;
  this.name = name;
  this.price = price;
  this.description = description;
}

var products = []
products.push(product)
products.push(new Product("http://ak1.ostkcdn.com/images/products/9781890/L16948363.jpg", "Dell PowerConnect 2808 Ethernet Switch", "$174", "Dell PowerConnect 2808 Ethernet Switch - 8 Ports - Manageable - 10/100/1000Base-T - 8 x Network - 2 Layer Supported - 1U High - Rack-mountableLifetime Limited Warranty"));
products.push(new Product("http://ak1.ostkcdn.com/images/products/etilize/images/900/1031088895.jpg", "TRENDnet TEW-824DRU IEEE 802.11ac Ethernet Wireless Router", "$97", "TRENDnet TEW-824DRU IEEE 802.11ac Ethernet Wireless Router - 2.47 GHz ISM Band - 5.83 GHz UNII Band - 6 x Antenna(6 x Internal - 1750 Mbit/s Wireless Speed - 4 x Network Port - 1 x Broadband Port - US... "));
products.push(new Product("http://ak1.ostkcdn.com/images/products/etilize/images/1500/1030260278.jpg", "Amped Wireless TAP-EX2 IEEE 802.11ac 750 Mbit/s Wireless Range Extend", "$138.99", "Amped Wireless TAP-EX2 IEEE 802.11ac 750 Mbit/s Wireless Range Extender"));
products.push(new Product("http://ak1.ostkcdn.com/images/products/6286450/L13919457.jpg", "Asus RT-N53 IEEE 802.11n Wireless Router", "$62.99", "Asus RT-N53 IEEE 802.11n Wireless Router - 2.48 GHz ISM Band - 5.80 GHz UNII Band - 2 x Antenna - 300 Mbit/s Wireless Speed - 4 x Network Port - 1 x Broadband Port - Fast Ethernet Wall Mountable"));
products.push(new Product("http://ak1.ostkcdn.com/images/products/8338690/Zhone-6718-W1-Modem-Wireless-Router-IEEE-802.11n-cbbfd43a-24ad-4f46-86c6-74df23c3bb0b_600.jpg", "Zhone 6718-W1 IEEE 802.11n Modem/Wireless Router", "$86.99", "Zhone 6718-W1 IEEE 802.11n Modem/Wireless Router - 2.40 GHz ISM Band - 2 x Antenna - 54 Mbit/s Wireless Speed - 4 x Network Port - 1 x Broadband Port - USB - Fast Ethernet Desktop"));


var row = document.getElementById("row");
var holder = " ";

for (var count = 0; count < products.length; ++count) {

  holder += '<div id="thumbNail">';
  holder += '<img src=' + products[count].image + '>';
  holder += "<h3>" + products[count].name + "</h3>";
  holder += "<strong>" + products[count].price + "</strong>";
  holder += "<p>" + products[count].description + "</p>";
  holder += '<button type="button" onclick="addToCart()">' + "Add to Cart" + '</button>'
  holder += "<hr>";
  holder += '</div>';


row.innerHTML = holder;

var cart = [];

function addToCart(){
   var thumbNail = document.getElementsByClassName("thumbNail");
   var button = document.getElementsByTagName("button");
   //console.log(thumbNail[0]);
   if(button.parentNode !== thumbNail[products[count]]){
    // cart.push("SonicWALL TZ 215 Appliance Only price:$668");
    console.log("true");
  }else{
    console.log("false");
  }

  //  console.log(thumbNail[1]);
// var contentImage = document.getElementsByTagName("img");
// var contentName = document.getElementsByTagName("h3");
// var contentPrice = document.getElementsByTagName("strong");
// var contentDescription = document.getElementsByTagName("p");
// cart.push(contentImage, contentName, contentPrice, contentDescription);

// console.log(cart[1]);

// var table = document.getElementById("table");
// var displayHolder = " ";
// cart.push(products[count]);
//
// for (var counter = 0; counter < cart.length; ++counter) {
//
//   displayHolder += "<tr>";
//   displayHolder += "<td>" + cart[counter].image + "</td>";
//   displayHolder += "<td>" + cart[counter].name + "</td>";
//   displayHolder += "<td>" + cart[counter].price + "</td>";
//   displayHolder += "<td>" + cart[counter].description + "</td>";
//   displayHolder += "</tr>";
//
// }
// table.innerHTML = displayHolder;
 }
}
