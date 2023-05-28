function CurrenciesAPI() {

    this.getValue = function (curr) {

        console.log('Calling external API ...');
        switch (curr.toUpperCase()) {
            case 'USD': return 1.786;
            case 'EUR': return 1.950;
            case 'GBP': return 2.223;
            default: return 'Nothing found';
        }
    }
}

function CurrenciesProxy() {
    this.api = new CurrenciesAPI();
    this.cache = {};

    this.getValue = function (curr) {
        console.log('Calling proxy ...');
        if (this.cache[curr.toUpperCase()] == null) {
            this.cache[curr.toUpperCase()] = this.api.getValue(curr.toUpperCase());
        }

        return `${curr.toUpperCase()} price: $${this.cache[curr.toUpperCase()]}`;
    }
}

const currencyApiWithProxy = new CurrenciesProxy();

console.log(currencyApiWithProxy.getValue('usd'));
console.log(currencyApiWithProxy.getValue('Usd'));
console.log(currencyApiWithProxy.getValue('uSd'));
console.log(currencyApiWithProxy.getValue('EUR'));
console.log(currencyApiWithProxy.getValue('eur'));
console.log(currencyApiWithProxy.getValue('Eur'));
console.log(currencyApiWithProxy.getValue('GBP'));
console.log(currencyApiWithProxy.getValue('GBP'));
console.log(currencyApiWithProxy.cache);
