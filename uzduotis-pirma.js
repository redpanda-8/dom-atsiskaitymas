(function() {
    const body = document.getElementById("body");
    const container = document.createElement("div");
    body.appendChild(container);

    let skaicius = 0;

     // uzduotis 1 - apsirasau buttons ir p taga
     const buttonOne = document.createElement("button");
     const buttonTwo = document.createElement("button");
     const paragraph = document.createElement("p");
     // uzduotis 1 end


    function uzduotisPirma () {

        //duodu p tagui pradini skaiciu (kintamasis kuris yra priskirtas anskciau skaicius)
        paragraph.textContent = skaicius;


        // uzduotis 2 - stilizuoju mygtukus ir p taga
        const buttonStyle = 'background-color: #ff3333;color: #ffffff;border: none;border-radius: 10px;padding: 10px 5px;margin: 5px; min-width: 150px; cursor:pointer;'
        const paragraphStyle = 'display: block; width: 300px; min-height: 150px;border: 2px solid #00ff00;padding: 20px;margin: 0 0 15px 0;'

        //uzdedu html elementui atributa ir jam priskiriu reiksme
        buttonOne.setAttribute('style', buttonStyle);
        buttonOne.textContent = "Padidinti";

        buttonTwo.setAttribute('style', buttonStyle);
        buttonTwo.textContent = "Sumazinti"

        paragraph.setAttribute('style', paragraphStyle);
        // uzduotis 1 end

        // uzduotis 3-4 buttons funkcionalumas
        buttonOne.addEventListener('click', function(){didinamSkaiciu(buttonOne)});
        buttonTwo.addEventListener('click', function(){mazinamSkaiciu(buttonTwo)});
        // uzduotis 3-4 end

        //uzduotis 1 - sukurami buttons ir p tagas
        container.appendChild(paragraph);
        container.appendChild(buttonOne);
        container.appendChild(buttonTwo);

    }
    // uzduotis 3 - padidinsim skaiciu
    function didinamSkaiciu(button){
        //padidinu skaiciu
        skaicius++
        //priskiriu p padidinta skaiciu
        paragraph.textContent = skaicius;
        //kita funkcija (apacioj) kuri lygina ar lyginis ir keicia buttons spalvas
        arLyginis(button);
    }
    // uzduotis 3 - pamazinsim skaiciu - viskas tas pats tik mazinamas skaicius
    function mazinamSkaiciu(button){
        skaicius--
        paragraph.textContent = skaicius;
        arLyginis(button);

    }
    //uzdutis 3 end

    // uzduotis 4 - tikrinu ar paspaudus pasidare lyginis ir ar keisis mygtuko spalva
    function arLyginis(button){
        if (skaicius % 2 === 0) {
            button.style.backgroundColor = '#00ff00';
        } else {
            button.style.backgroundColor = '#ff3333';
        }
    }
    //uzdutis 4 end

    uzduotisPirma();

})();