Ext.define('Reaxt.view.main', {
    extend: 'Ext.container.Container',
    alias : 'widget.main',

    requires: [
        'Ext.plugin.Viewport',
        // 'Reaxt.view.testComponent'
        // 'Reaxt.view.helloReact',
        'Reaxt.view.reactGrid'
    ],

    layout: 'vbox',
    
    items: [{
        xtype : 'component',
        html: 'Foo'
    },{
       
            xtype: 'reactGrid',
            width : '100%',
            style : {
                background:'silver'
            },
            flex:1
    }]
})

