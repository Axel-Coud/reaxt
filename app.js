/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Reaxt.Application',

    name: 'Reaxt',

    requires: [
        // This will automatically load all classes in the Demo namespace
        // so that application classes do not need to require each other.
        'Reaxt.*'
    ],

    // The name of the initial view to create.
    mainView: 'Reaxt.view.main'
});
