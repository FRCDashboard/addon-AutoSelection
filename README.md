# Autonomous Selection addon for FRC Dashboard
Simple select box for choosing which autonomous to run.

## Installation
1. Copy the contents of `autoselection.html` to wherever in the dashboard you desire.
2. Copy `autoselection.js` into the `components` directory of your FRCDashboard system.
3. Link the script from `index.html`, for example:

```js
<script src="components/autoselection.js"></script>
```

4. If necessary, change the keys of the NetworkTables values used in `autoselection.js` to the keys your robot code uses.

Alternatively, you could just copy all the code into `ui.js` or other JavaScript script, but that's a bit tougher to keep organized.
