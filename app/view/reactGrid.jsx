const layout = [
    {i: 'a', x: 0, y: 0, w: 1, h: 2},
    {i: 'b', x: 1, y: 0, w: 3, h: 2},
    {i: 'c', x: 4, y: 0, w: 1, h: 2}
]
class MyGrid extends React.Component {
    render() {
        return (
            <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={800}>
                <div key="a">a</div>
                <div key="b">b</div>
                <div key="c">c</div>
            </ReactGridLayout>
        )
    }
}

Ext.define('Reaxt.view.reactGrid', {
    extend: 'Ext.Component',
    xtype: 'reactGrid',

    listeners: {
        render: function() {
            console.log(this);
            ReactDOM.render(
                < MyGrid />,
                document.getElementById(this.getId())
            )
        }
    }
})