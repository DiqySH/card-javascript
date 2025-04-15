let basicInput = document.getElementById("basicInput")
let standardInput = document.getElementById("standardInput")
let premiumInput = document.getElementById("premiumInput")
let basicLabel = document.getElementById("basic")
let standardLabel = document.getElementById("standard")
let premiumLabel = document.getElementById("premium")
let penjelasan = document.getElementById("penjelasan")

basicLabel.addEventListener("click", function() {
    if(basicInput.checked = true) {
        penjelasan.innerHTML = `<div id="harga">
                    <h5 style="color: #5B5B5E; font-family: Roboto;
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 100%;
                    letter-spacing: 6%;
                    ">BASIC</h5>
                    <div>
                        <p style="font-family: Roboto;
                        font-weight: 700;
                        font-size: 24px;
                        line-height: 100%;
                        letter-spacing: 0%;
                        ">Icon Sets</p>
                        <p style="font-family: Roboto;
                        font-weight: 700;
                        font-size: 24px;
                        line-height: 100%;
                        letter-spacing: 0%;
                        ">$60</p>
                    </div>
                </div>
                <p style="font-family: Roboto;
                font-weight: 700;
                font-size: 16px;
                line-height: 25px;
                letter-spacing: 2%;
                color: #000000CC;">Up to 50 creative & professional  icons + two 
                    color versions/themes per month</p>
                <p style="display: flex; gap: 14px; font-family: Roboto;
                font-weight: 500;
                font-size: 16px;
                line-height: 100%;
                letter-spacing: 0%;
                color: #000000CC;
                justify-content: center;
                align-items: center;
                width: fit-content;
"><img src="./img/check.svg" alt="">Included  source files</p>
                <p style="display: flex; gap: 14px; font-family: Roboto;
                font-weight: 500;
                font-size: 16px;
                line-height: 100%;
                letter-spacing: 0%;
                color: #000000CC;
                justify-content: center;
                align-items: center;
                width: fit-content;
"><img src="./img/false.svg" alt="">Converted to responsive components</p>
                <button>Add to cart</button>`
    }
})

standardLabel.addEventListener("click", function() {
    if(standardInput.checked = true) {
        penjelasan.innerHTML = `<div id="harga">
                    <h5 style="color: #5B5B5E; font-family: Roboto;
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 100%;
                    letter-spacing: 6%;
                    ">STANDARD</h5>
                    <div>
                        <p style="font-family: Roboto;
                        font-weight: 700;
                        font-size: 24px;
                        line-height: 100%;
                        letter-spacing: 0%;
                        ">Icon Sets</p>
                        <p style="font-family: Roboto;
                        font-weight: 700;
                        font-size: 24px;
                        line-height: 100%;
                        letter-spacing: 0%;
                        ">$120</p>
                    </div>
                </div>
                <p style="font-family: Roboto;
                font-weight: 700;
                font-size: 16px;
                line-height: 25px;
                letter-spacing: 2%;
                color: #000000CC;">Up to 100 creative & professional  icons + two 
                    color versions/themes per month</p>
                <p style="display: flex; gap: 14px; font-family: Roboto;
                font-weight: 500;
                font-size: 16px;
                line-height: 100%;
                letter-spacing: 0%;
                color: #000000CC;
                justify-content: center;
                align-items: center;
                width: fit-content;
"><img src="./img/check.svg" alt="">Included  source files</p>
                <p style="display: flex; gap: 14px; font-family: Roboto;
                font-weight: 500;
                font-size: 16px;
                line-height: 100%;
                letter-spacing: 0%;
                color: #000000CC;
                justify-content: center;
                align-items: center;
                width: fit-content;
"><img src="./img/check.svg" alt="">Converted to responsive components</p>
                <button>Add to cart</button>`
    }
})

premiumLabel.addEventListener("click", function() {
    if(premiumInput.checked = true) {
        penjelasan.innerHTML = `<div id="harga">
                    <h5 style="color: #A4B000; font-family: Roboto;
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 100%;
                    letter-spacing: 6%;
                    ">PREMIUM</h5>
                    <div>
                        <p style="font-family: Roboto;
                        font-weight: 700;
                        font-size: 24px;
                        line-height: 100%;
                        letter-spacing: 0%;
                        ">Icon Sets</p>
                        <p style="font-family: Roboto;
                        font-weight: 700;
                        font-size: 24px;
                        line-height: 100%;
                        letter-spacing: 0%;
                        ">$180</p>
                    </div>
                </div>
                <p style="font-family: Roboto;
                font-weight: 700;
                font-size: 16px;
                line-height: 25px;
                letter-spacing: 2%;
                color: #000000CC;">Up to 200 creative & professional  icons + two 
                    color versions/themes per month</p>
                <p style="display: flex; gap: 14px; font-family: Roboto;
                font-weight: 500;
                font-size: 16px;
                line-height: 100%;
                letter-spacing: 0%;
                color: #000000CC;
                justify-content: center;
                align-items: center;
                width: fit-content;
"><img src="./img/check.svg" alt="">Included  source files</p>
                <p style="display: flex; gap: 14px; font-family: Roboto;
                font-weight: 500;
                font-size: 16px;
                line-height: 100%;
                letter-spacing: 0%;
                color: #000000CC;
                justify-content: center;
                align-items: center;
                width: fit-content;
"><img src="./img/check.svg" alt="">Converted to responsive components</p>
                <button>Add to cart</button>`
    }
})