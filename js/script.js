function welcome() {
    console.log("Witam, mój pierwszy kalkulator:)")
}

welcome();

{
    const calculateResult = (amount, currency) => {
        const rateEURO = 4.69;
        const rateUSD = 4.52;
        const rateGBP = 5.34;
        const rateCHF = 4.80;
        switch (currency) {
    
            case "EURO":
                return amount / rateEURO;
    
            case "USD":
                return amount / rateUSD;
    
            case "GBP":
                return amount / rateGBP;
    
            case "CHF":
                return amount / rateCHF;
        }
    }
    
    const updateResultText = (result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${result.toFixed(2)} ${currency}`;
    }
    
    const onFormSubmit = (event) => {
        event.preventDefault();
    
        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
    
        const amount = +amountElement.value;
        const currency = currencyElement.value;
    
        const result = calculateResult(amount, currency);
    
        updateResultText(result, currency);
    };
    
    const init = () => {
        const formElement = document.querySelector(".js-form")
    
        formElement.addEventListener("submit", onFormSubmit);
    };
    
        init();
}


