Ext.define('Reaxt.view.helloReact', () => {

    class Hello2 extends React.Component {
        render() {
            return `<h1>Hello ${this.props.name}</h1>`; //jsx non babelisÃ©
        }
    }

    function afterRender(cpt) {
        const test = cpt.config.props;
        ReactDOM.render(React.createElement(Hello2, null), document.getElementById(this.getEl().dom.id));
    };

    function beforeDestroy() {
        ReactDOM.unmountComponentAtNode(this.container.dom);
    }

    return {
        extend: 'Ext.Component',

        alias: 'widget.hello-react',

        constructor: function (config) {
            this.callParent(arguments);
        },

        listeners: {
            afterrender: afterRender,
            beforedestroy: beforeDestroy
        }
    };
});

