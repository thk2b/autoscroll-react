import React from 'react'
import autoscroll from 'autoscroll-react'

class List extends React.Component {
    render(){
        const { items } = this.props
        
        return <ul 
            className="List"
            {...this.props }
        >{ items.map(
            item => <li >{item}</li>
        ) }</ul>
    }
}

export default autoscroll(List, {isScrolledDownThreshold: 100})