$(document).ready(function () {

    setInterval(block);

    function block() {
        $('#block').animate({ //Animation chained effect for aesthetic purposes
            right: '-=100%'
        }, 5000).animate({
            right: '+=100%'
        }, 5000);
    }

    $("#cartpanel").hide();

    //Accordion    
    $(".box").click(function () {
        $(this).fadeOut(1000); //This function fades out the box whn it is clicked on
    })

    $(".box-header").hover(function () {
        if ($(this).next(".box-body").hasClass("active")) {
            $(this).next(".box-body").removeClass("active").slideUp()

        } else {
            $(".box .box-body").removeClass("active").slideUp()
            $(this).next(".box-body").addClass("active").slideDown()
        };
    }); //By using if statements, I was able to switch between classes, showing the boxes when hovered over


});

//Generates a random reference number 
function confirm() {
    let ref = Math.floor((Math.random() * 1000000) + 1)
    alert("We have recieved your order. Your reference number is: " + "REF-" + ref);
};

let cartTotalMap = new Map(); //Map to store the new updated cart totals
cartTotalMap.set('cart', 0);


function catalogueItems(name, price, shortDesc, image, pageLink, div, cartId) { //here i created my products
    this.name = name;
    this.price = price;
    this.shortDesc = shortDesc;
    this.image = image;
    this.pageLink = pageLink;
    this.div = div;
    this.cartId = cartId;

};

var item1 = new catalogueItems(
    "Logitech G PRO X SUPERLIGHT Wireless Gaming Mouse",
    "1999",
    "White with hero 25K Optical Sensor / Weighs Less Than 63 Grams / Precise And Efficient Control / USB report rate: 1000 Hz (1ms) / Up to 70 Hours Battery Life / 910-005943",
    "images/logitech-mouse.jpg",
    "product_1.html",
    "div1",
    "cartId1");
var item2 = new catalogueItems(
    "Logitech G PRO SteelSeries Apex Pro Mini Mechanical Gaming KeyboardX SUPERLIGHT Wireless Gaming Mouse",
    "3599",
    "World's Fastest Keyboard - Adjustable Actuation - Compact 60% Form Factor - RGB - PBT Keycaps - USB-C / 64820-SN",
    "images/keyboard.jpg",
    "product_2.html",
    "div2",
    "cartId2");
var item3 = new catalogueItems(
    "CORSAIR iCUE H150i Elite Capellix Liquid CPU Cooler",
    "799",
    "White with 360 mm Radiator / ML120 RGB PWM Fans / Zero RPM Cooling Profiles / Magnetic Levitation Fans / CW-9060051-WW",
    "images/cooler.jpg",
    "product_3.html",
    "div3",
    "cartId3");
var item4 = new catalogueItems(
    "Intel Core 12th Gen i5 SUPER Budget Gaming PC",
    "14500",
    "Intel 12th Gen Core i5 12600 4.8GHz GTX 1660 SUPER Budget Gaming PC",
    "images/budget-pc.jpg",
    "product_4.html",
    "div4",
    "cartId4");
var item5 = new catalogueItems(
    "WD 1TB My Passport Solid State Drive Portable",
    "3500",
    "Portable External Solid State Drive, Blue, Sturdy, and Blazing Fast, Password Protection with Hardware Encryption / WDBAGF0010BBL-WESN",
    "images/passport-ssd.jpg",
    "product_5.html",
    "div5",
    "cartId5");
var item6 = new catalogueItems(
    "Corsair SP140 RGB PRO 140mm Dual Fan Kit",
    "1200",
    "Efficient And Aesthetic / Keep Your System Cool / Intelligent Control / Eight Individually Addressable RGB LEDs / 140x140x25mm / CO-9050096-WW",
    "images/fan-kit.jpg",
    "product_6.html",
    "div6",
    "cartId6");
var item7 = new catalogueItems(
    "Intel NUC Intel 10th Gen Core i5 Mini PC Kit",
    "16000",
    "10th Generation Core i5-10210U Turbo up to 4.20GHz Processor / Intel® UHD Graphics / Wi-Fi 6 AX201 Wireless LAN / Bluetooth / 1x HDMI / Intel Gigabit LAN / 3 x USB Type-A / 2 x USB Type-C / SDXC Card Slot/ 32GB DDR4 Memory / 512GB Ultra-fast SSD",
    "images/mini-pc.jpg",
    "product_7.html",
    "div7",
    "cartId7");
var item8 = new catalogueItems(
    "Corsair Dominator Platinum DDR5 Desktop Memory",
    "799",
    "White / Speed Rating PC5-44800 / Onboard Voltage Regilation / Intel® XMP 3.0 Support / 12 Ultra-Bright Capellix RGB LEDS / CMT32GX5M2B5600C36W",
    "images/memory.jpg",
    "product_8.html",
    "div8",
    "cartId8");


let arrayOfItems = [item1, item2, item3, item4, item5, item6, item7, item8]; //Array of products
array = []; //Array to store the amount of items in the cart
cartArray = []; //Array to store the items added to cart

var loaded = {};

loaded.addItem = function () {
    arrayOfItems.forEach(function (item) {

        let div3 = document.createElement("div"); //div for items
        div3.setAttribute('class', 'col');

        let div = document.createElement("div"); //div where all item info will be stored
        div.setAttribute('class', 'col');

        let div2 = document.createElement("div"); //div where buttons will be stored
        div2.setAttribute('class', 'col');

        let buttonLink = document.createElement("a"); //link to product page
        buttonLink.href = item.pageLink;

        let imglink = document.createElement("a"); //link to product page
        imglink.href = item.pageLink;

        let itemImg = document.createElement("img"); //product image
        itemImg.src = item.image;
        itemImg.setAttribute('class', 'item');
        itemImg.style.height = "200px";
        itemImg.style.width = "250px";

        let itemName = document.createElement("h3"); //product name
        let name = item.name;
        itemName.innerHTML = name;
        sessionStorage.setItem("name", name)
        itemName.setAttribute('class', 'product-headings');

        let itemPrice = document.createElement("p"); //product price
        let price = "R" + item.price + " excluding VAT";
        itemPrice.innerHTML = price;
        sessionStorage.setItem("price", price)
        itemPrice.setAttribute('class', 'product-prices'); // Last work

        let itemDesc = document.createElement("p"); //product short decription
        itemDesc.innerHTML = item.shortDesc;

        let infoButton = document.createElement("button"); //info button
        infoButton.innerHTML = "More info";

        let cartButton = document.createElement("button"); //add to cart button
        cartButton.innerHTML = "Add to cart";

        cartButton.addEventListener("click", function (e) { //function which ads the selected item price to the cartTotalMap map
            for (let [key, value] of cartTotalMap) {
                let x = parseInt(value);
                let y = parseInt(item.price);
                let newTotal = Number((x + y) * 1.15).toFixed(2);

                cartTotalMap.set('cart', newTotal);
                alert("Your new subtotal is: R" + newTotal + " including VAT");

                sessionStorage.setItem("newTotal", newTotal);



            };
        });

        cartButton.addEventListener("click", function (e) { //Function which records the amount of items added to the cart
            array.push(1);
            amountOfItems = array.length;
            document.getElementById("cartItemQty").innerHTML = amountOfItems + " items in cart";
            sessionStorage.setItem("amountOfItems", amountOfItems);
            document.getElementById("cartTotal").innerHTML = "Total: R" + Number(sessionStorage.getItem("newTotal") * 1.15).toFixed(2); //15% VAT added & I learned that .toFixed() limits the decimal places
            
        });

        cartButton.addEventListener("click", function (e) { //Function which shows the item in cart
            cartArray.push(item.name + " - R" + item.price + " excluding VAT <br> ---------- <br>"); /*in the previous submission you were confused by my use of the VAT,
                                                                                                        I did NOT include VAT in the cart subtotal, or the product prices, but VAT IS INCLUDED 
                                                                                                        in the cart total and the alert*/
            cart = cartArray.join("");
            sessionStorage.setItem("cart", cart);
            document.getElementById("cartItem").innerHTML = sessionStorage.getItem("cart");
            
            
        });


        //Here i added all the info and elements to the HTML page
        document.getElementById("details").appendChild(div3);
        div3.appendChild(div);
        div3.appendChild(div2);
        div.appendChild(imglink);
        div.appendChild(itemName);
        div.appendChild(itemPrice);
        div.appendChild(itemDesc);
        div2.appendChild(buttonLink);
        buttonLink.appendChild(infoButton);
        imglink.appendChild(itemImg);
        div2.appendChild(cartButton);
        sessionStorage.setItem("div", div);
    });
};

loaded.addItem();



function freeDelivery() {

    document.getElementById("incl").innerHTML = "Incl VAT + Free Delivery";
    let free = (Number(sessionStorage.getItem("newTotal")) + 0); 
    document.getElementById("cartTotal").innerHTML = "Total: R" + free;
    sessionStorage.removeItem("total");
    sessionStorage.setItem("total", free); //creates a new stored variable for the updated amount
}

function quickDelivery() {
    let incl = (Number(sessionStorage.getItem("newTotal")) + 150); 
    document.getElementById("cartTotal").innerHTML = "Total: R" + incl;
    document.getElementById("incl").innerHTML = "Incl VAT + Quick Delivery";
    sessionStorage.removeItem("total");
    sessionStorage.setItem("total", incl); //updates the old stored amount to the new one


}

function expressDelivery() {
    let incl2 = (Number(sessionStorage.getItem("newTotal")) + 300); 
    document.getElementById("cartTotal").innerHTML = "Total: R" + incl2;
    document.getElementById("incl").innerHTML = "Incl VAT + Express Delivery";
    sessionStorage.removeItem("total");
    sessionStorage.setItem("total", incl2); //updates the old stored amount to the new one

}

//Coupon calculations 

function addCoupon(){
    let a = document.getElementById("coupon").value;

    if (a == "50-OFF"){
    document.getElementById("cartTotal").innerHTML = "Total: R" + Number(sessionStorage.getItem("total")) *0.5; //50% discount
} else if (a == "20-OFF") {
    document.getElementById("cartTotal").innerHTML = "Total: R" + Number(sessionStorage.getItem("total")) * 0.8; //20% discount
} else if (a == "LESS-150") {
    document.getElementById("cartTotal").innerHTML = "Total: R" + Number(sessionStorage.getItem("total") - 150); //Less R150
} else {
    document.getElementById("cartTotal").innerHTML = "Total: R" + Number(sessionStorage.getItem("total")); //No change
}
};



function onload(){
    document.getElementById("cartItemQty").innerHTML = Number(sessionStorage.getItem("amountOfItems")) + " items in cart";
    document.getElementById("cartItem").innerHTML = sessionStorage.getItem("cart");
    document.getElementById("cartTotal").innerHTML = "Total: R" + sessionStorage.getItem("newTotal");
} //The above function ensures the data stays on the page even after the page reloads