# react-autoscroll

Autoscroll a react component

##install

`npm install react-autoscroll`

## usage

```js
import React from 'react'
import Autoscroll from 'react-autoscroll'

class MyList extends React.Component {
    render(){
        const { items, ...props } = this.props
        return (
            <ul { ...props } >{ // You MUST pass down props
                items.map(
                    item => <Item 
                        key={ item.id } 
                        {...item}
                    />
                )
            }</ul>
        )
    }
}

export default Autoscroll(MyList)
```

You must Explicitly pass down props in the wrapped component.

`Autoscroll` returns the passed component without any additional markup. It attaches a signle event listener.
It scrolls the component to the bottom whenever it updates, except if the user has scrolled up. 
