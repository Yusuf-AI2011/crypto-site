const prices = document.querySelector(".tz__prices");
const sumPrice = document.querySelector(".tz__balans");
let before1 = 0;
let before2 = 0;
let before3 = 0;
let before4 = 0;
let sum = 0;

setInterval(() => {
  fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,binancecoin&vs_currencies=usd`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      prices.innerHTML = `
              <p class="tz__price">
                BINANCICOIN<span class="tz__span1">$${Number(
                  data.binancecoin.usd
                )}</span>
              </p>
              <p class="tz__price">
                BITCOIN<span class="tz__span2">$${Number(
                  data.bitcoin.usd
                )}</span>
              </p>
              <p class="tz__price">
                ETHEREUM<span class="tz__span3">$${Number(
                  data.ethereum.usd
                )}</span>
              </p>
              <p class="tz__price">TETHER<span class="tz__span4">$${Number(
                data.tether.usd.toFixed(2)
              )}</span></p>
    `;

      if (data.binancecoin.usd >= before1) {
        console.log("more");
        document.querySelector(".tz__span1").style.cssText = "color: #0ecb81;";
      } else {
        console.log("less");
        document.querySelector(".tz__span1").style.cssText = "color: red;";
      }
      if (data.bitcoin.usd >= before1) {
        console.log("more");
        document.querySelector(".tz__span2").style.cssText = "color: #0ecb81;";
      } else {
        console.log("less");
        document.querySelector(".tz__span2").style.cssText = "color: red;";
      }
      if (data.ethereum.usd >= before1) {
        console.log("more");
        document.querySelector(".tz__span3").style.cssText = "color: #0ecb81;";
      } else {
        console.log("less");
        document.querySelector(".tz__span3").style.cssText = "color: red;";
      }
      if (data.tether.usd >= before1) {
        console.log("more");
        document.querySelector(".tz__span4").style.cssText = "color: #0ecb81;";
      } else {
        console.log("less");
        document.querySelector(".tz__span4").style.cssText = "color: red;";
      }

      before1 = data.binancecoin.usd;
      before2 = data.bitcoin.usd;
      before3 = data.ethereum.usd;
      before4 = data.tether.usd;

      sum +=
        data.binancecoin.usd +
        data.bitcoin.usd +
        data.ethereum.usd +
        data.tether.usd;

      sumPrice.innerHTML = `$${sum.toFixed(2)}`;
    });
}, 10000);
