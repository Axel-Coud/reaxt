Ext.define('Reaxt.view.helloReact', () => {

    class Hello2 extends React.Component {
        render() {
            console.log(this.props.name, this);
            return <h1>
                Hello { this.props.name }
                </h1>
        }
    }

    function afterRender(cpt) {
        const test = cpt.config.props
        console.log(test);
        ReactDOM.render(
            < Hello2 {...test} />,
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
