

document.querySelector(".USDinput").addEventListener("input", updatePrice);

function updatePrice() {
    let valueOfUSD = document.querySelector(".USDinput");
    let valueOfEGP = document.querySelector(".amount");

    fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=be5e23bfebb24328b035f57ed205ce9e")
        .then(response => response.json())
        .then(data => {
            valueOfEGP.innerHTML = (valueOfUSD.value * data.rates.EGP).toFixed(2);
        })
        .catch(err => {
            console.error('Error:', err);
        });
}


