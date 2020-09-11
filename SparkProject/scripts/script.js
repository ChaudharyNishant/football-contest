const Scene = require('Scene');
const Patches = require('Patches');

const textFormat = '{0}';
const shooterNumber = Patches.getScalarValue('shooterNumber');
const keeperNumber = Patches.getScalarValue('keeperNumber');

Patches.setStringValue('shooterText', shooterNumber.format(textFormat));
Patches.setStringValue('keeperText', keeperNumber.format(textFormat));
