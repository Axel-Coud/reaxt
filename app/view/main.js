Ext.define('Reaxt.view.main', {
    extend: 'Ext.container.Container',

    requires: [
        'Ext.plugin.Viewport',
        'Reaxt.view.helloReact'
    ],

    layout: 'center',
    
    items: [{
        xtype: 'panel',
        closable:true,
        title: 'Reaxt is here',
        layout: 'center',
        width: 300,
        height: 200,
        items: [{
            xtype: 'hello-react',
            props : {
                name : 'coucou'
            }
        }]
    }]
})
