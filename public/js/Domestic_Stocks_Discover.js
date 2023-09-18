// let - used to declare JavaScript variables 


// setInterval() function - makes the current market price, current value, and returns up to date 
  // Basically, Math.random() function - generates a random value between 0 (inclusive) and 1 (exclusive)
  setInterval(function() {
    // Nifty 50 Market Index
    let nifty_50 = 17591.15; // nifty 50 index price at start of the trading day
    let nifty_50_percent_change = (Math.random() * 0.31 - 0.15) / 100; // generate a random percentage change between -0.15% (inclusive) and 0.16% (exclusive)
    let nifty_50_price_change = nifty_50 * nifty_50_percent_change; // value of nifty_50 changes according to nifty_50_percent_change
    let new_nifty_50 = nifty_50 + nifty_50_price_change; // new nifty_50 value
    let rounded_new_nifty_50 = new_nifty_50.toFixed(2); // round the new nifty_50 value to 2 decimals
    let color_nifty = nifty_50_percent_change >= 0 ? "green" : "red"; // green color if +ve percent change, and red color if -ve percent change
    let rounded_nifty_50 = rounded_new_nifty_50 + " " + (nifty_50_price_change >= 0 ? "+" : "-") + Math.abs(nifty_50_price_change).toFixed(2) + " (" + (nifty_50_percent_change * 100).toFixed(2) + "%)";
    document.getElementById("index1-price").style.color = color_nifty;
    document.getElementById("index1-price").innerHTML = rounded_nifty_50;

     // Sensex Market Index
     let sensex = 59832.97; // sensex index price at start of the trading day
     let sensex_percent_change = (Math.random() * 0.29 - 0.14) / 100; // generate a random percentage change between -0.14% (inclusive) and 0.15% (exclusive)
     let sensex_price_change = sensex * sensex_percent_change; // value of sensex changes according to sensex_percent_change
     let new_sensex = sensex + sensex_price_change; // new sensex value
     let rounded_new_sensex = new_sensex.toFixed(2); // round the new sensex value to 2 decimals
     let color_sensex = sensex_percent_change >= 0 ? "green" : "red"; // green color if +ve percent change, and red color if -ve percent change
     let rounded_sensex = rounded_new_sensex + " " + (sensex_price_change >= 0 ? "+" : "-") + Math.abs(sensex_price_change).toFixed(2) + " (" + (sensex_percent_change * 100).toFixed(2) + "%)";
     document.getElementById("index2-price").style.color = color_sensex;
     document.getElementById("index2-price").innerHTML = rounded_sensex;
 
     // Bank Nifty Market Index
     let bank_nifty = 41041.00; // sensex index price at start of the trading day
     let bank_nifty_percent_change = (Math.random() * 0.21 + 0.30) / 100; // generate a random percentage change between 0.30% (inclusive) and 0.51% (exclusive)
     let bank_nifty_price_change = bank_nifty * bank_nifty_percent_change; // value of bank_nifty changes according to bank_nifty_percent_change
     let new_bank_nifty = bank_nifty + bank_nifty_price_change; // new bank_nifty value
     let rounded_new_bank_nifty = new_bank_nifty.toFixed(2); // round the new bank_nifty value to 2 decimals
     let color_bank_nifty = bank_nifty_percent_change >= 0 ? "green" : "red"; // green color if +ve percent change, and red color if -ve percent change
     let rounded_bank_nifty = rounded_new_bank_nifty + " " + (bank_nifty_price_change >= 0 ? "+" : "-") + Math.abs(bank_nifty_price_change).toFixed(2) + " (" + (bank_nifty_percent_change * 100).toFixed(2) + "%)";
     document.getElementById("index3-price").style.color = color_bank_nifty;
     document.getElementById("index3-price").innerHTML = rounded_bank_nifty;

     // Market Cap = current market price of a share * number of shares outstanding
     let market_cap_1 = (Math.random() * 9.65) + 1584128.00;
     let rounded_market_cap_1 = market_cap_1.toFixed(2);
     let market_cap_2 = (Math.random() * 8.55) + 1319090.00;
     let rounded_market_cap_2 = market_cap_2.toFixed(2);
     let market_cap_3 = (Math.random() * 9.15) + 923530.00;
     let rounded_market_cap_3 = market_cap_3.toFixed(2);
     let market_cap_4 = (Math.random() * 8.75) + 665140.00;
     let rounded_market_cap_4 = market_cap_4.toFixed(2);
     let market_cap_5 = (Math.random() * 8.95) + 643744.00;
     let rounded_market_cap_5 = market_cap_5.toFixed(2);
     let market_cap_6 = (Math.random() * 9.35) + 597650.00;
     let rounded_market_cap_6 = market_cap_6.toFixed(2);
     let market_cap_7 = (Math.random() * 9.43) + 480180.00;
     let rounded_market_cap_7 = market_cap_7.toFixed(2);
     let market_cap_8 = (Math.random() * 8.88) + 527694.00;
     let rounded_market_cap_8 = market_cap_8.toFixed(2);
     let market_cap_9 = (Math.random() * 9.27) + 443580.00;
     let rounded_market_cap_9 = market_cap_9.toFixed(2);
     let market_cap_10 = (Math.random() * 9.65) + 387710.00;
     let rounded_market_cap_10 = market_cap_10.toFixed(2);
     //Market Cap = current market price of a share * number of shares outstanding
    //(Math.random() * 9.65) multiplies the random number by 9.65, which gives a random number between 0 and 9.65
    //(Math.random() * 9.65) + 1584128.00 adds the random number between 0 and 9.65 to 1584128.00, 
    //which gives a random number between 1584128.00 and 1584137.65.
    //let market_cap_11 = (Math.random() * 9.65) + 525060.00; 
    //rounds the value to 2 decimal places
    //let rounded_market_cap_11 = market_cap_11.toFixed(2);

    //let market_cap_12 = (Math.random() * 8.55) + 527694.00;
    //let rounded_market_cap_12 = market_cap_12.toFixed(2);
    
    //let market_cap_13 = (Math.random() * 9.15) + 76277.00;
    //let rounded_market_cap_13 = market_cap_13.toFixed(2);

    //let market_cap_14 = (Math.random() * 8.75) + 643744.00;
    //let rounded_market_cap_14 = market_cap_14.toFixed(2);

    //let market_cap_15 = (Math.random() * 8.95) + 266523.00;
    //let rounded_market_cap_15 = market_cap_15.toFixed(2);

    //let market_cap_16 = (Math.random() * 9.35) + 288820.00;
    //let rounded_market_cap_16 = market_cap_16.toFixed(2);

    //let market_cap_17 = (Math.random() * 9.43) + 146334.00;
    //let rounded_market_cap_17 = market_cap_17.toFixed(2);

    //let market_cap_18 = (Math.random() * 8.88) + 166609.00;
    //let rounded_market_cap_18 = market_cap_18.toFixed(2);

    //let market_cap_19 = (Math.random() * 9.27) + 50250.00;
    //let rounded_market_cap_19 = market_cap_19.toFixed(2);

    //let market_cap_20= (Math.random() * 9.65) + 13859.00;
    //let rounded_market_cap_20 = market_cap_20.toFixed(2);

     document.getElementById('market-cap-1').textContent = rounded_market_cap_1;
     document.getElementById('market-cap-2').textContent = rounded_market_cap_2;
     document.getElementById('market-cap-3').textContent = rounded_market_cap_3;
     document.getElementById('market-cap-4').textContent = rounded_market_cap_4;
     document.getElementById('market-cap-5').textContent = rounded_market_cap_5;
     document.getElementById('market-cap-6').textContent = rounded_market_cap_6;
     document.getElementById('market-cap-7').textContent = rounded_market_cap_7;
     document.getElementById('market-cap-8').textContent = rounded_market_cap_8;
     document.getElementById('market-cap-9').textContent = rounded_market_cap_9;
     document.getElementById('market-cap-10').textContent = rounded_market_cap_10;
     //document.getElementById('market-cap-11').textContent = rounded_market_cap_11;
     //document.getElementById('market-cap-12').textContent = rounded_market_cap_12;
     //document.getElementById('market-cap-13').textContent = rounded_market_cap_13;
     //document.getElementById('market-cap-14').textContent = rounded_market_cap_14;
     //document.getElementById('market-cap-15').textContent = rounded_market_cap_15;
     //document.getElementById('market-cap-16').textContent = rounded_market_cap_16;
     //document.getElementById('market-cap-17').textContent = rounded_market_cap_17;
     //document.getElementById('market-cap-18').textContent = rounded_market_cap_18;
     //document.getElementById('market-cap-19').textContent = rounded_market_cap_19;
     //document.getElementById('market-cap-20').textContent = rounded_market_cap_20;

     // Current Market Price of each share
    let price1 = (Math.random() * 2.50) + 2441.75; // generate a random price between 2441.75 (inclusive) and 2444.25 (exclusive)
    let rounded_price1 = price1.toFixed(2); // round the price 1 value to 2 decimals

    let price2 = (Math.random() * 2.25) + 3230.70; 
    let rounded_price2 = price2.toFixed(2) 

    let price3 = (Math.random() * 2.75) + 1625.65; 
    let rounded_price3 = price3.toFixed(2); 

    let price4 = (Math.random() * 2.05) + 1259.10; 
    let rounded_price4 = price4.toFixed(2); 

    let price5 = (Math.random() * 2.95) + 926.95;
    let rounded_price5 = price5.toFixed(2); 

    let price6 = (Math.random() * 2.15) + 2500.75; 
    let rounded_price6 = price6.toFixed(2);

    let price7 = (Math.random() * 2.35) + 576.50; 
    let rounded_price7 = price7.toFixed(2);

    let price8 = (Math.random() * 2.80) + 428.75; 
    let rounded_price8 = price8.toFixed(2);
    
    let price9 = (Math.random() * 2.45) + 787.30; 
    let rounded_price9 = price9.toFixed(2);

    let price10 = (Math.random() * 2.65) + 6389.85; 
    let rounded_price10 = price10.toFixed(2);

    // document.getElementbyID() - function that select and access an HTML element based on unique ID
    document.getElementById('price-1').textContent = rounded_price1;
    document.getElementById('price-2').textContent = rounded_price2;
    document.getElementById('price-3').textContent = rounded_price3;
    document.getElementById('price-4').textContent = rounded_price4;
    document.getElementById('price-5').textContent = rounded_price5;
    document.getElementById('price-6').textContent = rounded_price6;
    document.getElementById('price-7').textContent = rounded_price7;
    document.getElementById('price-8').textContent = rounded_price8;
    document.getElementById('price-9').textContent = rounded_price9;
    document.getElementById('price-10').textContent = rounded_price10;


     // stock 1 volume
    let volume_stock_1 = 273.20; 
    let volume_stock_1_percent_change = (Math.random() * 0.41 - 4.56) / 100; // generate a random percentage change between -4.56% (inclusive) and -4.15% (exclusive)
    let volume_stock_1_price_change = volume_stock_1 * volume_stock_1_percent_change; 
    let new_volume_stock_1 = volume_stock_1 + volume_stock_1_price_change; 
    let rounded_new_volume_stock_1 = new_volume_stock_1.toFixed(2); 
    let color_volume_stock_1 = volume_stock_1_percent_change >= 0 ? "green" : "red"; 
    let rounded_volume_stock_1 = rounded_new_volume_stock_1 + " " + (volume_stock_1_price_change >= 0 ? "+" : "-") + Math.abs(volume_stock_1_price_change).toFixed(2) + " (" + (volume_stock_1_percent_change * 100).toFixed(2) + "%)";
    document.getElementById("volume-1").style.color = color_volume_stock_1;
    document.getElementById("volume-1").innerHTML = rounded_volume_stock_1;

    // stock 2 volume
    let volume_stock_2 = 494.15; 
    let volume_stock_2_percent_change = (Math.random() * 0.45 + 2.38) / 100; // generate a random percentage change between 2.38% (inclusive) and 2.83% (exclusive)
    let volume_stock_2_price_change = volume_stock_2 * volume_stock_2_percent_change; 
    let new_volume_stock_2 = volume_stock_2 + volume_stock_2_price_change; 
    let rounded_new_volume_stock_2 = new_volume_stock_2.toFixed(2); 
    let color_volume_stock_2 = volume_stock_2_percent_change >= 0 ? "green" : "red"; 
    let rounded_volume_stock_2 = rounded_new_volume_stock_2 + " " + (volume_stock_2_price_change >= 0 ? "+" : "-") + Math.abs(volume_stock_2_price_change).toFixed(2) + " (" + (volume_stock_2_percent_change * 100).toFixed(2) + "%)";
    document.getElementById("volume-2").style.color = color_volume_stock_2;
    document.getElementById("volume-2").innerHTML = rounded_volume_stock_2;

    // stock 3 volume
    let volume_stock_3 = 104.35; 
    let volume_stock_3_percent_change = (Math.random() * 0.37 + 1.10) / 100; // generate a random percentage change between 1.10% (inclusive) and 1.47% (exclusive)
    let volume_stock_3_price_change = volume_stock_3 * volume_stock_3_percent_change; 
    let new_volume_stock_3 = volume_stock_3 + volume_stock_3_price_change; 
    let rounded_new_volume_stock_3 = new_volume_stock_3.toFixed(2); 
    let color_volume_stock_3 = volume_stock_3_percent_change >= 0 ? "green" : "red"; 
    let rounded_volume_stock_3 = rounded_new_volume_stock_3 + " " + (volume_stock_3_price_change >= 0 ? "+" : "-") + Math.abs(volume_stock_3_price_change).toFixed(2) + " (" + (volume_stock_3_percent_change * 100).toFixed(2) + "%)";
    document.getElementById("volume-3").style.color = color_volume_stock_3;
    document.getElementById("volume-3").innerHTML = rounded_volume_stock_3;

    // positive returns stock 1
    let positive_stock_1 = 1082.00; 
    let positive_stock_1_percent_change = (Math.random() * 0.10 + 7.51) / 100; // generate a random percentage change between 7.51% (inclusive) and 7.61% (exclusive)
    let positive_stock_1_price_change = positive_stock_1 * positive_stock_1_percent_change; 
    let new_positive_stock_1 = positive_stock_1 + positive_stock_1_price_change; 
    let rounded_new_positive_stock_1 = new_positive_stock_1.toFixed(2); 
    let color_positive_stock_1 = positive_stock_1_percent_change >= 0 ? "green" : "red"; 
    let rounded_positive_stock_1 = rounded_new_positive_stock_1 + " " + (positive_stock_1_price_change >= 0 ? "+" : "-") + Math.abs(positive_stock_1_price_change).toFixed(2) + " (" + (positive_stock_1_percent_change * 100).toFixed(2) + "%)";
    document.getElementById("positive-1").style.color = color_positive_stock_1;
    document.getElementById("positive-1").innerHTML = rounded_positive_stock_1;

    // positive returns stock 2
    let positive_stock_2 = 645.80; 
    let positive_stock_2_percent_change = (Math.random() * 0.12 + 5.00) / 100; // generate a random percentage change between 5.00% (inclusive) and 5.12% (exclusive)
    let positive_stock_2_price_change = positive_stock_2 * positive_stock_2_percent_change; 
    let new_positive_stock_2 = positive_stock_2 + positive_stock_2_price_change; 
    let rounded_new_positive_stock_2 = new_positive_stock_2.toFixed(2); 
    let color_positive_stock_2 = positive_stock_2_percent_change >= 0 ? "green" : "red"; 
    let rounded_positive_stock_2 = rounded_new_positive_stock_2 + " " + (positive_stock_2_price_change >= 0 ? "+" : "-") + Math.abs(positive_stock_2_price_change).toFixed(2) + " (" + (positive_stock_2_percent_change * 100).toFixed(2) + "%)";
    document.getElementById("positive-2").style.color = color_positive_stock_2;
    document.getElementById("positive-2").innerHTML = rounded_positive_stock_2;

    // positive returns stock 3
    let positive_stock_3 = 3496.10; 
    let positive_stock_3_percent_change = (Math.random() * 0.13 + 4.34) / 100; // generate a random percentage change between 4.34% (inclusive) and 4.47% (exclusive)
    let positive_stock_3_price_change = positive_stock_3 * positive_stock_3_percent_change; 
    let new_positive_stock_3 = positive_stock_3 + positive_stock_3_price_change; 
    let rounded_new_positive_stock_3 = new_positive_stock_3.toFixed(2); 
    let color_positive_stock_3 = positive_stock_3_percent_change >= 0 ? "green" : "red"; 
    let rounded_positive_stock_3 = rounded_new_positive_stock_3 + " " + (positive_stock_3_price_change >= 0 ? "+" : "-") + Math.abs(positive_stock_3_price_change).toFixed(2) + " (" + (positive_stock_3_percent_change * 100).toFixed(2) + "%)";
    document.getElementById("positive-3").style.color = color_positive_stock_3;
    document.getElementById("positive-3").innerHTML = rounded_positive_stock_3;

     // negative returns stock 1
     let negative_stock_1 = 856.35; 
     let negative_stock_1_percent_change = (Math.random() * 0.10 - 5.50) / 100; // generate a random percentage change between -5.50% (inclusive) and -5.60% (exclusive)
     let negative_stock_1_price_change = negative_stock_1 * negative_stock_1_percent_change; 
     let new_negative_stock_1 = negative_stock_1 + negative_stock_1_price_change; 
     let rounded_new_negative_stock_1 = new_negative_stock_1.toFixed(2); 
     let color_negative_stock_1 = negative_stock_1_percent_change >= 0 ? "green" : "red"; 
     let rounded_negative_stock_1 = rounded_new_negative_stock_1 + " " + (negative_stock_1_price_change >= 0 ? "+" : "-") + Math.abs(negative_stock_1_price_change).toFixed(2) + " (" + (negative_stock_1_percent_change * 100).toFixed(2) + "%)";
     document.getElementById("negative-1").style.color = color_negative_stock_1;
     document.getElementById("negative-1").innerHTML = rounded_negative_stock_1;

     // negative returns stock 2
     let negative_stock_2 = 409.20; 
     let negative_stock_2_percent_change = (Math.random() * 0.12 - 4.95) / 100; // generate a random percentage change between -4.95% (inclusive) and -4.83% (exclusive)
     let negative_stock_2_price_change = negative_stock_2 * negative_stock_2_percent_change; 
     let new_negative_stock_2 = negative_stock_2 + negative_stock_2_price_change; 
     let rounded_new_negative_stock_2 = new_negative_stock_2.toFixed(2); 
     let color_negative_stock_2 = negative_stock_2_percent_change >= 0 ? "green" : "red"; 
     let rounded_negative_stock_2 = rounded_new_negative_stock_2 + " " + (negative_stock_2_price_change >= 0 ? "+" : "-") + Math.abs(negative_stock_2_price_change).toFixed(2) + " (" + (negative_stock_2_percent_change * 100).toFixed(2) + "%)";
     document.getElementById("negative-2").style.color = color_negative_stock_2;
     document.getElementById("negative-2").innerHTML = rounded_negative_stock_2;

     // negative returns stock 3
     let negative_stock_3 = 366.65; 
     let negative_stock_3_percent_change = (Math.random() * 0.13 - 3.84) / 100; // generate a random percentage change between -3.84% (inclusive) and -3.71% (exclusive)
     let negative_stock_3_price_change = negative_stock_3 * negative_stock_3_percent_change; 
     let new_negative_stock_3 = negative_stock_3 + negative_stock_3_price_change; 
     let rounded_new_negative_stock_3 = new_negative_stock_3.toFixed(2); 
     let color_negative_stock_3 = negative_stock_3_percent_change >= 0 ? "green" : "red"; 
     let rounded_negative_stock_3 = rounded_new_negative_stock_3 + " " + (negative_stock_3_price_change >= 0 ? "+" : "-") + Math.abs(negative_stock_3_price_change).toFixed(2) + " (" + (negative_stock_3_percent_change * 100).toFixed(2) + "%)";
     document.getElementById("negative-3").style.color = color_negative_stock_3;
     document.getElementById("negative-3").innerHTML = rounded_negative_stock_3;

     // Stocks in News (The Stock Market News)
     let news_stock_1 = 750.65; 
     let news_stock_1_percent_change = (Math.random() * 0.15 + 1.43) / 100; // generate a random percentage change between 1.43% (inclusive) and 1.58% (exclusive)
     let news_stock_1_price_change = news_stock_1 * news_stock_1_percent_change; 
     let new_news_stock_1 = news_stock_1 + news_stock_1_price_change; 
     let rounded_new_news_stock_1 = new_news_stock_1.toFixed(2); 
     let color_news_stock_1 = news_stock_1_percent_change >= 0 ? "green" : "red"; 
     let rounded_news_stock_1 = rounded_new_news_stock_1 + " " + (news_stock_1_price_change >= 0 ? "+" : "-") + Math.abs(news_stock_1_price_change).toFixed(2) + " (" + (news_stock_1_percent_change * 100).toFixed(2) + "%)";
     document.getElementById("news-1").style.color = color_news_stock_1;
     document.getElementById("news-1").innerHTML = rounded_news_stock_1;

     let news_stock_2 = 2548.45; 
     let news_stock_2_percent_change = (Math.random() * 0.15 - 0.94) / 100; // generate a random percentage change between -0.94% (inclusive) and -0.79% (exclusive)
     let news_stock_2_price_change = news_stock_2 * news_stock_2_percent_change; 
     let new_news_stock_2 = news_stock_2 + news_stock_2_price_change; 
     let rounded_new_news_stock_2 = new_news_stock_2.toFixed(2); 
     let color_news_stock_2 = news_stock_2_percent_change >= 0 ? "green" : "red"; 
     let rounded_news_stock_2 = rounded_new_news_stock_2 + " " + (news_stock_2_price_change >= 0 ? "+" : "-") + Math.abs(news_stock_2_price_change).toFixed(2) + " (" + (news_stock_2_percent_change * 100).toFixed(2) + "%)";
     document.getElementById("news-2").style.color = color_news_stock_2;
     document.getElementById("news-2").innerHTML = rounded_news_stock_2;

     let news_stock_3 = 3433.85; 
     let news_stock_3_percent_change = (Math.random() * 0.17 + 2.81) / 100; // generate a random percentage change between 2.81% (inclusive) and 2.98% (exclusive)
     let news_stock_3_price_change = news_stock_3 * news_stock_3_percent_change; 
     let new_news_stock_3 = news_stock_3 + news_stock_3_price_change; 
     let rounded_new_news_stock_3 = new_news_stock_3.toFixed(2); 
     let color_news_stock_3 = news_stock_3_percent_change >= 0 ? "green" : "red"; 
     let rounded_news_stock_3 = rounded_new_news_stock_3 + " " + (news_stock_3_price_change >= 0 ? "+" : "-") + Math.abs(news_stock_3_price_change).toFixed(2) + " (" + (news_stock_3_percent_change * 100).toFixed(2) + "%)";
     document.getElementById("news-3").style.color = color_news_stock_3;
     document.getElementById("news-3").innerHTML = rounded_news_stock_3;


}, 1000); // function calling for every 1 second or 1000 milliseconds


// Buy / Sell Pop-Up Window
// retrieve the modal
var modal = document.querySelector(".modal");

// retrive <span> element that closes the modal
var closeBtn = document.querySelector(".close");

// retrieve the Buy and Sell buttons
var buyButton = document.querySelector(".buy-button");
var sellButton = document.querySelector(".sell-button");

// if user clicks on a stock row, display modal
var stockRows = document.querySelectorAll(".stock-row");
stockRows.forEach(function(stockRow) {
  stockRow.addEventListener("click", function() {
    var stockSymbol = this.getAttribute("data-stock");
    var stockName = stockSymbol;
    var modalHeader = document.querySelector(".stock-name");
    modalHeader.textContent = stockName;
    modalHeader.addEventListener("click", function() {
      window.location.href = "company-details-and-fundamentals.html?symbol=" + stockSymbol;
    });
    //const urlParams = new URLSearchParams(window.location.search);
    //const symbol = urlParams.get("symbol");
    //const company = companyDetails[symbol];
    modal.style.display = "block";
  });
});

// add event listeners for the Buy and Sell buttons
buyButton.addEventListener("click", function() {
  // get the order details
  var stockName = document.querySelector(".stock-name").textContent;
  var quantity = parseInt(document.querySelector("#quantity").value);
  var orderType = "Buy";
  
  // check if quantity is greater than zero
  if (quantity > 0) {
    // ask for confirmation before executing the buy order
    var confirmation = window.confirm("Are you sure you want to execute the buy order?");
    if (confirmation) {
      // redirect to the orders.ejs page with the order details as query parameters
      window.location.href = "/orders?stockName=" + stockName + "&quantity=" + quantity + "&orderType=" + orderType;
    }
  } else {
    // display an alert message if quantity is zero
    alert("Quantity should be more than zero.");
  }
});

sellButton.addEventListener("click", function() {
  // get the order details
  var stockName = document.querySelector(".stock-name").textContent;
  var quantity = parseInt(document.querySelector("#quantity").value);
  var orderType = "Sell";
  
  // check if quantity is greater than zero
  if (quantity > 0) {
    // ask for confirmation before executing the sell order
    var confirmation = window.confirm("Are you sure you want to execute the sell order?");
    if (confirmation) {
      // redirect to the orders.ejs page with the order details as query parameters
      window.location.href = "/orders?stockName=" + stockName + "&quantity=" + quantity + "&orderType=" + orderType;
    }
  } else {
    // display an alert message if quantity is zero
    alert("Quantity should be more than zero.");
  }
});

// if user clicks on <span> element (i.e. close symbol, X), close the modal
if (closeBtn) {
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});
}





