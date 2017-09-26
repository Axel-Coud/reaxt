Ext.define('Reaxt.view.helloReact', () => {

       class Hello2 extends React.Component {
        render() {
            return React.createElement('div', null, `Hello ${this.props.name}`)
        }
      }

    function afterRender(cpt) {
        ReactDOM.render(
            React.createElement(Hello2, cpt.config.props),
            document.getElementById(this.getEl().dom.id)
        );
    };

    function beforeDestroy() {
        ReactDOM.unmountComponentAtNode(this.container.dom)
    }

    return {
        extend: 'Ext.Component',

        alias: 'widget.hello-react',

        constructor: function (config) {
            this.callParent(arguments)
        },

        listeners: {
            afterrender: afterRender,
            beforedestroy: beforeDestroy
        }
    };
});
