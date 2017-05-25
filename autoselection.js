// Set a global alias for the select box.
ui.autoSelect = document.getElementById('auto-select');

NetworkTables.addKeyListener('/SmartDashboard/autonomous/options', (key, value) => {
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
});

NetworkTables.addKeyListener('/SmartDashboard/autonomous/selected', (key, value) => {
    ui.autoSelect.value = value;
});

// Update NetworkTables when autonomous selector is changed
ui.autoSelect.onchange = function() {
	NetworkTables.setValue('/SmartDashboard/autonomous/selected', this.value);
};
