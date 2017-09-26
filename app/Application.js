Ext.define('Reaxt.Application', {
    extend: 'Ext.app.Application',
    name: 'Reaxt',

    requires : [
        'Reaxt.view.main'
    ],
    
    mainView: 'Reaxt.view.main'
})
