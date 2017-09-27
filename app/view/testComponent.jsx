import {Hello} from './hello.js'

class Flatpickr extends React.Component {
    render() {
        return (
            <div> 
                <input id="flat"></input>
                <script type="text/javascript">
                    flatpickr("#flat", {})
                </script>
            </div>
        )
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
            console.log("data", data)
            return (
                <div>
                <Hello>
                </Hello>
                    {data.map((val, index) => <p key={index} >bar: {val.foo}</p>)}
                    <Flatpickr data-enable-time
                    onChange={v => console.info(v)} />
                </div>
            )
        }
    }
})
