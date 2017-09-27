Ext.define('Reaxt.ux.reactComponizer', {
    extend: 'Ext.Component',
    xtype: 'reactComponizer',

    constructor(...args) {
        this.callParent(args)

        const render = data => {
            console.log(this)
            ReactDOM.render(
            this.config.jsx(data),
            document.getElementById(this.getId())
        )}

        this.on('render', () => {
            console.log("render reactComponizer")
            render(this.config.data)
        })
        this.on('beforedestroy', () => ReactDOM.unmountComponentAtNode(this.el.dom))
    }
})
