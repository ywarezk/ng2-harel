"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("zone.js");
var child = Zone.current.fork({
    name: 'child',
    properties: {
        message: 'hello world'
    },
    onHasTask: function (parentZoneDelegate, currentZone, targetZone, hasTaskState) {
        if (!hasTaskState.microTask && !hasTaskState.macroTask && !hasTaskState.eventTask) {
            console.log('there is nothing in the event loop');
            console.log('need to run digest');
        }
    }
});
function b() {
    console.log('set timeout entered');
    console.log(Zone.current.name);
    console.log(Zone.current.get('message'));
}
function a() {
    setTimeout(b);
}
child.run(a);
