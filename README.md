# autoscroll-react 

Autoscroll a react component

[live demo](https://codesandbox.io/s/0315qvkx20)

[![npm version](https://badge.fury.io/js/autoscroll-react.svg)](https://badge.fury.io/js/autoscroll-react)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)

## Install

`npm install --save autoscroll-react`

## What it does

This package exports a function that takes a `React.Component` <b>class</b> and returns a `React.PureComponent` that renders the passed component without any additional markup. It adds the following behaviours to the wrapped component:

- Whenever the list updates, it is scrolled to the bottom, unless the user has scrolled up.

Suppose the wrapped component is a chat. When a message is added, the chat should be scrolled to the bottom to show the lastest message. But if the user has scrolled up, and a new message is posted by another user, the list should *not* scroll down to show the new message, as the user is reading another message.

- If the list is scrolled all the way up and content is added, the current scroll position is preserved.

This feature was added to suport infinite scrolling lists where new content is fetched when the list is scrolled all the way up. Again, consider the case where the wrapped component is a chat. When the user scrolls all the way up, the app (somehow) gets older messages from the server and adds them to the list. By default, the current scroll position of the list is preserved, leading to the the list showing the first of the newly added messages instead of the previous last message. This means the list 'jumps' when content is added to the top of the list. A pragmatic solution to this issue is to scroll down the list by the correct amount when it updates and is scrolled all the way up. But this causes some issues when the list is scrolled all the way up and content is added to the bottom.

## Usage

```js
import React from 'react'
import autoscroll from 'autoscroll-react'

import Item from './Item'

class MyList extends React.Component {
    render(){
        const { items, ...props } = this.props
        return (
            <ul { ...props } >{ //  ⚠️ You MUST pass down props, otherwise the event listener will not be attached ⚠️
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

export default autoscroll(MyList)
```
Then, in another file:
```js
import React from 'react'
import MyList from './MyList'

export default ({ items, fetchMoreItems }) => <div>
    <MyList
        items={items} /* pass props directly to your component */
        onScrolledTop={e => fetchMoreItems()} /* add props to be intercepted by autoscroll */
        onScrolled={e => console.log('the list was scrolled')}
    />
    {/* ... */}
</div>
```

## ⚠️  caveats ⚠️ 

- You must Explicitly pass down props to the wrapped component. This is so an event listener can be attached. This means you can also pass down your own props to the wrapped component by passing them to the component returned by `Autoscroll`.
- The wrapped component must be a Class-based component, not a functional one, because `Autoscroll` uses a `ref`.
- This package is agnostic about any CSS you use. However, it assumes that you provide the adequate CSS to make the wrapped component have a scroll bar. (ie. `overflow-y:scroll;` and a set `height`)

## options

Optional props: 

- `onScrolled`: called whenever the list is scrolled. This is not an event listener.
- `onScrolledTop`: called when the list is scrolled to the top.
Pass these props when rendering the wrapped list component.

`autoscroll(Component, { isScrolledDownThreshold: 150 /*default*/})`

The `isScrolledDownThreshold` option is used when determining whether the user has scrolled back to the bottom. If the element's `scrollBottom` is within `isScrolledDownThreshold`px of the maximum scroll (`scrollHeight`), the component will scroll down on the next updates. 
This option exists because scrolling almost all the way down, but not entirely, can be interpreted as a sign that the user intends to see the bottom of the list.
Set it to 0 to enforce scrolling all the way down. 
