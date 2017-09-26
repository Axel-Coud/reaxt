Ext.define('Reaxt.Application', {
    extend: 'Ext.app.Application',
    name: 'Reaxt',

    require: [
        'Reaxt.view.main'
    ],

    mainView: 'Reaxt.view.main'
})