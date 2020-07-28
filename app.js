const fetch = require("node-fetch");
// const _ = require('lodash');

async function fetchTest(responses) {
    let response = await


    fetch('http://norvig.com/big.txt')
        .then(response => response.text())
        .then((response) => {
            console.log(response); // ------------------> read text  from doc

            var words = response.split(/[ \.\?!,\*'"]+/);
            console.log(words);
                
               var array = Object.keys(words).map(function(key) {
                return { text: words[key], size: key };
                });

                console.log(array); //-----------------------> occurence count of words

                   var sortedKeys =  array.sort(function (a, b) {
                    return  b.size - a.size ;
                    });
                    var newarr = sortedKeys.slice(0, 10);
                    console.log(newarr); // --------------> top 10 text and occurence

                    var permittedValues = newarr.map(value => value.text);
                    console.log(permittedValues); //---------------> sorted key in array
                      
                      fetch('https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20170610T055246Z.0f11bdc42e7b693a.eefbde961e10106a4efa7d852287caa49ecc68cf&lang=en-en&text=print')
                        .then(function (res) {
                        return res.json();
                        })
                        .then(console.log);


                        fetch('https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20170610T055246Z.0f11bdc42e7b693a.eefbde961e10106a4efa7d852287caa49ecc68cf&lang=en-en&text=for')
                        .then(function (res) {
                        return res.json();
                        })
                        .then(console.log);

                        fetch('https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20170610T055246Z.0f11bdc42e7b693a.eefbde961e10106a4efa7d852287caa49ecc68cf&lang=en-en&text=in')
                        .then(function (res) {
                        return res.json();
                        })
                        .then(console.log);

                        fetch('https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20170610T055246Z.0f11bdc42e7b693a.eefbde961e10106a4efa7d852287caa49ecc68cf&lang=en-en&text=add')
                        .then(function (res) {
                        return res.json();
                        })
                        .then(console.log);
                      
                       
         })
        .catch(err => console.log(err));

}

(async() => {
    await fetchTest();
})();
