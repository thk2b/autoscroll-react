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

`Autoscroll` returns the passed component without any additional markup.
It scrolls the root node rendered by the component to the bottom whenever it updates, but not if the user has scrolled up.

⚠️ You must Explicitly pass down props to the wrapped component. ⚠️
