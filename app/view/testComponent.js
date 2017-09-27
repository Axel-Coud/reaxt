import { Hello } from './hello.js';

class Flatpickr extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            React.createElement("input", { id: "flat" }),
            React.createElement(
                "script",
                { type: "text/javascript" },
                "flatpickr(\"#flat\", ",
                ")"
            )
        );
    }
}

Ext.define('Reaxt.view.testComponent', {
    extend: 'Reaxt.ux.reactComponizer',
    xtype: 'testComponent',

    listeners: {
        render: () => flatpickr('#flat', {})
    },

    config: {
        data: [{
            foo: 1
        }, {
            foo: 2
        }],
        jsx: data => {
            console.log("data", data);
            return React.createElement(
                "div",
                null,
                React.createElement(Hello, null),
                data.map((val, index) => React.createElement(
                    "p",
                    { key: index },
                    "bar: ",
                    val.foo
                )),
                React.createElement(Flatpickr, { "data-enable-time": true,
                    onChange: v => console.info(v) })
            );
        }
    }
});

