const layout = [{ i: 'a', x: 0, y: 0, w: 1, h: 2 }, { i: 'b', x: 1, y: 0, w: 3, h: 2 }, { i: 'c', x: 4, y: 0, w: 1, h: 2 }];
class MyGrid extends React.Component {
    render() {
        return React.createElement(
            ReactGridLayout,
            { className: 'layout', layout: layout, cols: 12, rowHeight: 30, width: 800 },
            React.createElement(
                'div',
                { key: 'a' },
                'a'
            ),
            React.createElement(
                'div',
                { key: 'b' },
                'b'
            ),
            React.createElement(
                'div',
                { key: 'c' },
                'c'
            )
        );
    }
}

Ext.define('Reaxt.view.reactGrid', {
    extend: 'Ext.Component',
    xtype: 'reactGrid',

    listeners: {
        render: function () {
            console.log(this);
            ReactDOM.render(React.createElement(MyGrid, null), document.getElementById(this.getId()));
        }
    }
});

