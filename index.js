const prices = document.querySelector(".tz__prices");
let num = 0;

setInterval(() => {
  fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,binancecoin&vs_currencies=usd`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      if (num > 0) {
        if (before1 >= data.binancecoin.usd) {
          before1.style.cssText = "color: green;";
          console.log(before1);
        } else {
          before1.style.cssText = "color: red;";
        }
        if (before2 >= data.bitcoin.usd) {
          before2.style.cssText = "color: green;";
          console.log(before2);
        } else {
          before2.style.cssText = "color: red;";
        }
        if (before3 >= data.ethereum.usd) {
          before3.style.cssText = "color: green;";
          console.log(before3);
        } else {
          before3.style.cssText = "color: red;";
        }
        if (before4 >= data.tether.usd) {
          before4.style.cssText = "color: green;";
          console.log(before4);
        } else {
          before4.style.cssText = "color: red;";
        }
      }

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
                data.tether.usd
              )}</span></p>
    `;
    });
  const before1 = (document.querySelector(".tz__span1").value = 0);
  const before2 = (document.querySelector(".tz__span2").value = 0);
  const before3 = (document.querySelector(".tz__span3").value = 0);
  const before4 = (document.querySelector(".tz__span4").value = 0);
}, 10000);
num++;
