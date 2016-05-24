// This should be added inside the definition of the 'ui' object at the starting of ui.js.

    ,
    autoSelect: document.getElementById('autoSelect')

// End section



// Copy this portion of the code into the large switch statement in the onValueChanged function

        case '/SmartDashboard/Autonomous/options': // Load list of prewritten autonomous modes
            // Clear previous list
            while (ui.autoSelect.firstChild) {
                ui.autoSelect.removeChild(ui.autoSelect.firstChild);
            }
            // Make an option for each autonomous mode and put it in the selector
            for (i = 0; i < value.length; i++) {
                var option = document.createElement('option');
                option.innerHTML = value[i];
                ui.autoSelect.appendChild(option);
            }
            // Set value to the already-selected mode. If there is none, nothing will happen.
            ui.autoSelect.value = NetworkTables.getValue('/SmartDashboard/currentlySelectedMode');
            break;
        case '/SmartDashboard/Autonomous/selected':
            ui.autoSelect.value = value;
            break;

// End section



// Add this at the bottom of ui.js with the other listeners.

// Update NetworkTables when autonomous selector is changed
ui.autoSelect.onchange = function() {
	NetworkTables.setValue('/SmartDashboard/Autonomous Mode/selected', this.value);
};

// End section