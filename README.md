🚧 At this stage, this project is not unit-tested but works as expected. Minor optimizations are planned. Use with caution. 🚧

# autoscroll-react 

Autoscroll a react component

[![npm version](https://badge.fury.io/js/autoscroll-react.svg)](https://badge.fury.io/js/autoscroll-react)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)

## Install

`npm install --save autoscroll-react`

## Usage

```js
import React from 'react'
import Autoscroll from 'autoscroll-react'

import Item from './Item'

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

`Autoscroll(Component)`: returns the passed component without any additional markup.
It scrolls the root node rendered by the component to the bottom whenever it updates, but not if the user has scrolled up.

⚠️ You must Explicitly pass down props to the wrapped component. ⚠️

## Build

Build by running `npm install` followed by `npm run build`
