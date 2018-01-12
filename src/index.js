import React from 'react'
import ReactDOM from 'react-dom'

const hasOverflow = el => el.clientHeight < el.scrollHeight

const isScrolledDown = el => {
    const bottom = el.scrollTop + el.clientHeight
    return bottom >= el.scrollHeight - 150
}

const scrollDown = el => el.scrollTop = el.scrollHeight - el.clientHeight

export default Component => class extends React.Component {
    constructor(props){
        super(props)
        this._hasScrolledUp = false /* whether the user has scrolled up */
        this._el = null
    }
    
    componentDidUpdate(){
        if(!this._hasScrolledUp && hasOverflow(this._el)){
            scrollDown(this._el)
        }
    }

    handleScroll(e){
        if(isScrolledDown(this._el)){
            this._hasScrolledUp = false
        } else {
            this._hasScrolledUp = true
        }
    }

    render(){
        return <Component
            {...this.props}
            ref={ el => this._el = ReactDOM.findDOMNode(el) }
            onScroll={ e => this.handleScroll(e) }
        />
    }
}