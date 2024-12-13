(function() {
    const body = document.getElementById("body");
    const container = document.createElement("div");
    const tableContainer = document.createElement("div");
    body.appendChild(container);
    

    // uzduotis 1 - apsirasau inputs ir button tagus
    const input = document.createElement("input");
    const select = document.createElement("select");
    const optionLow = document.createElement("option");
    const optionMedium = document.createElement("option");
    const optionHigh = document.createElement("option");


    optionHigh.value = 'high'
    optionHigh.textContent = 'high';
    select.appendChild(optionHigh);
    optionMedium.value = 'medium'
    optionMedium.textContent = 'medium';
    select.appendChild(optionMedium);
    optionLow.value = 'low'
    optionLow.textContent = 'low';
    select.appendChild(optionLow);
    
    const button = document.createElement("button");
    // uzduotis 1 end


    const inputStyle = 'display: block;width: 300px;margin-bottom: 20px;font-size: 16px;min-height:24px;padding: 5px 10px;box-sizing: border-box;'
    input.setAttribute('style', inputStyle);
    input.type = 'text';
    input.placeholder = 'enter task';
    select.setAttribute('style', inputStyle);
    select.placeholder = 'select prority'

    const buttonStyle = 'background-color: #ff3333;color: #ffffff;border: none;border-radius: 10px;padding: 10px 5px;margin: 5px; min-width: 150px; cursor:pointer;'
    button.setAttribute('style', buttonStyle);
    button.textContent = "sukurti lentele";


    function uzduotisTrecia () {

        body.appendChild(container);
        container.appendChild(input);
        container.appendChild(select);
        container.appendChild(button);

        container.appendChild(tableContainer);

        button.addEventListener('click', function(){saveData()});

        displayData();
    }

    function saveData() {
        //paimu reiksmes inputuose
        const task = input.value;
        const priority = select.value;

        if (!task || !priority){
            alert('prasome ivesti uzduoti ir pasirinkti prioriteta');
        } else {
             // paimu id
            const id = Date.now();

            // Store them in localStorage (we store as a JSON string to handle multiple entries)
            let storedData = JSON.parse(localStorage.getItem('data')) || [];
            storedData.push({ id: id, task: task, priority: priority, completed: false });
            localStorage.setItem('data', JSON.stringify(storedData));

            // po issaugojimo, istrinu reiksmes inputuose
            input.value = '';
            select.value = '';
        }       
        // atnaujinu su nauja info
        displayData();
    }

    // Function to create the table dynamically and display data
    function displayData() {
        // istrinu table conteinery reiksmes
        tableContainer.innerHTML = '';

        // Retrieve the data from localStorage
        const storedData = JSON.parse(localStorage.getItem('data')) || [];

        // sukurtas table elementas
        const table = document.createElement('table');
        table.border = '1';

        // table headeris
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        const th1 = document.createElement('th');
        th1.textContent = 'Task';
        const th2 = document.createElement('th');
        th2.textContent = 'Priority';
        const th3 = document.createElement('th');
        th3.textContent = 'Completed';
        const th4 = document.createElement('th');
        th4.textContent = 'Actions';
        headerRow.appendChild(th3);
        headerRow.appendChild(th1);
        headerRow.appendChild(th2);        
        headerRow.appendChild(th4);
        thead.appendChild(headerRow);
        table.appendChild(thead);

        // table body
        const tbody = document.createElement('tbody');
        storedData.forEach(function(item) {
            const row = document.createElement('tr');
            
            // prideti names ir variable 1
            const cell1 = document.createElement('td');
            const label = document.createElement('label');
            label.setAttribute('for', item.id);  // Set label for attribute
            label.textContent = item.task;
            cell1.appendChild(label);

            // pridetas variable 2
            const cell2 = document.createElement('td');
            cell2.textContent = item.priority;

            // padarytas checkbox
            const cell3 = document.createElement('td');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = item.id;  // unique ID for checkbox
            checkbox.checked = item.completed;  // Set checked state
            checkbox.addEventListener('change', function() {
                toggleCompletion(item.id);
            });
            cell3.appendChild(checkbox);

            // pridetas remove mygtukas
            const cell4 = document.createElement('td');
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', function() {
                removeEntry(item.id);
            });
            cell4.appendChild(removeButton);

            // Append cells to row
            row.appendChild(cell3);
            row.appendChild(cell1);
            row.appendChild(cell2);
            
            row.appendChild(cell4);
            
            // Apply 'completed' class if marked
            if (item.completed) {
                label.setAttribute('style', 'text-decoration-line: line-through;');;
            }

            tbody.appendChild(row);
        });

        table.appendChild(tbody);

        // Append the table to the table container
        tableContainer.appendChild(table);
    }

    // Function to toggle the completion status of a task
    function toggleCompletion(id) {
        let storedData = JSON.parse(localStorage.getItem('data')) || [];
        const task = storedData.find(item => item.id === id);
        if (task) {
            task.completed = !task.completed;
            localStorage.setItem('data', JSON.stringify(storedData));
            displayData();  // Refresh the table
        }
    }

    // Function to remove an entry from localStorage and the table
    function removeEntry(id) {
        let storedData = JSON.parse(localStorage.getItem('data')) || [];
        storedData = storedData.filter(item => item.id !== id);  // Remove the entry
        localStorage.setItem('data', JSON.stringify(storedData));
        displayData();  // Refresh the table
    }

   

    uzduotisTrecia();

})();