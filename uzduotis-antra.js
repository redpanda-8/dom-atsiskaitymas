// Immediately Invoked Function Expression (IIFE) nustatyti scope'ui nes norejau kiekviena uzduoti izuoliuoti atskirame faile (del vienodu kintamuju perdeklaravimo)
(function() {
    const body = document.getElementById("body");
    const container = document.createElement("div");
    body.appendChild(container);

    // uzduotis 1 - apsirasau inputs ir button tagus
    const inputOne = document.createElement("input");
    const inputTwo = document.createElement("input");
    const button = document.createElement("button");
    // uzduotis 1 end

    const inputStyle = 'display: block;width: 300px;margin-bottom: 20px;font-size: 16px;min-height:24px;padding: 5px 10px;box-sizing: border-box;'

    inputOne.setAttribute('style', inputStyle);
    inputOne.type = 'number';
    inputOne.placeholder = 'Iveskite skiciu';
    inputTwo.setAttribute('style', inputStyle);
    inputTwo.type = 'number';
    inputTwo.placeholder = 'Iveskite skiciu';

    const buttonStyle = 'background-color: #ff3333;color: #ffffff;border: none;border-radius: 10px;padding: 10px 5px;margin: 5px; min-width: 150px; cursor:pointer;'
    button.setAttribute('style', buttonStyle);
    button.textContent = "sukurti sarasa";


    function uzduotisAntra () {

        body.appendChild(container);
        container.appendChild(inputOne);
        container.appendChild(inputTwo);
        container.appendChild(button);

        
        button.addEventListener('click', function(){sukurtiSarasa()});

    }
    // pagamina sarasa
    function sukurtiSarasa() {
        const unorderly = inputOne.value;
        const orderly = inputTwo.value;
        const ulId = 'examleTable';
       
        const exampleList = document.getElementById(ulId);
        if (exampleList) {
            exampleList.remove();
        }
        // Create the outer <ul> element
        const ul = document.createElement('ul');
        ul.setAttribute('id', ulId)
        

        // Loop to create <li> for "unorderly" items
        for (let i = 0; i < unorderly; i++) {
            // Create the <li> for "unorderly"
            let liUnorderly = document.createElement('li');
            liUnorderly.textContent = 'unorderly';

            // Create the <ol> inside each "unorderly" <li>
            let ol = document.createElement('ol');

            // Loop to create <li> for "orderly" items inside the <ol>
            for (let j = 0; j < orderly; j++) {
                let liOrderly = document.createElement('li');
                liOrderly.textContent = 'orderly';
                ol.appendChild(liOrderly);
            }

            // Append the <ol> to the "unorderly" <li>
            liUnorderly.appendChild(ol);

            // Append the "unorderly" <li> to the <ul>
            ul.appendChild(liUnorderly);
        }

        // Append the <ul> to the body (or to any container)
        container.appendChild(ul);
    }


    uzduotisAntra();

})();
