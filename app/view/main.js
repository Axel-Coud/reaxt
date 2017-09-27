Ext.define('Reaxt.view.main', {
    extend: 'Ext.container.Container',
    alias : 'widget.main',

    requires: [
        'Ext.plugin.Viewport',
        // 'Reaxt.view.testComponent'
        // 'Reaxt.view.helloReact',
    ],

    layout: 'center',
    
    items: [{
        xtype: 'panel',
        closable:true,
        resizable: true,
        draggable: true,
    
        title: 'Reaxt is here',
        layout: 'center',
        width: 300,
        height: 200,
        items: [{
            // xtype: 'testComponent'
        }]
    }]
})

