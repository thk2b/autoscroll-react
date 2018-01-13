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
            <ul { ...props } >{ //  ⚠️ You MUST pass down props ⚠️
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
Then, in another file:
```js
import React from 'react'
import MyList from './MyList'

export default ({ items }) => <div>
    <MyList items={items} /> /* pass props directly */
    {/* ... */}
</div>
```

`Autoscroll(Component)`: returns a React `PureComponent` that renders the passed component without any additional markup. Whenever the wrapped component updates, it is scrolled to the bottom, unless the user has scrolled up.

## ⚠️  caveats ⚠️ 

- You must Explicitly pass down props to the wrapped component. This is so an event listener can be attached. This means you can also pass down your own props to the wrapped component by passing them to the component returned by `Autoscroll`.
- The wrapped component must be a Class-based component, not a functional one, because `Autoscroll` uses a `ref`.
- This package is agnostic about any CSS you use. However, it assumes that you provide the adequate CSS to make the wrapped component have a scroll bar. (ie. `overflow-y:scroll;` and a set `height`)

## options

`Autoscroll(Component, { isScrolledDownThreshold: 150 /*default*/})`

The `isScrolledDownThreshold` option is used when determining whether the user has scrolled back to the bottom. If the element's `scrollBottom` is within `isScrolledDownThreshold`px of the maximum scroll (`scrollHeight`), the component will scroll down on the next updates. 
This option exists because scrolling almost all the way down, but not entirely, can be interpreted as a sign that the user intends to see the bottom of the list.
Set it to 0 to enforce scrolling all the way down. 
