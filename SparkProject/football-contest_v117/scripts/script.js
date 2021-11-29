const Scene = require('Scene');
const Patches = require('Patches');

Patches.outputs.getScalar("shooterNumber").then((event) => {
	var shooterNumber = event.pinLastValue();
	Patches.inputs.setString("shooterText", shooterNumber.toString());
	
	//onChange Update GameScore Value
	event.monitor().subscribe(function (values) {
		shooterNumber = values.newValue;
		Patches.inputs.setString("shooterText", shooterNumber.toString());
	});
});

Patches.outputs.getScalar("keeperNumber").then((event) => {
	var keeperNumber = event.pinLastValue();
	Patches.inputs.setString("keeperText", keeperNumber.toString());
	
	//onChange Update GameScore Value
	event.monitor().subscribe(function (values) {
		keeperNumber = values.newValue;
		Patches.inputs.setString("keeperText", keeperNumber.toString());
	});
});
