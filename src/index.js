import React from 'react'
import ReactDOM from 'react-dom'

const hasOverflow = el => el.clientHeight < el.scrollHeight

const isScrolledDown = (el, threshold) => {
    const bottom = el.scrollTop + el.clientHeight
    return bottom >= el.scrollHeight - threshold
}

const isScrolledUp = el => el.scrollTop === 0

const scrollDown = el => el.scrollTop = el.scrollHeight - el.clientHeight

const scrollDownBy = (amount, el) => el.scrollTop += amount
const scrollUpBy = (amount, el) => el.scrollTop -= amount

export default (Component, { isScrolledDownThreshold = 150 } = { }) => class extends React.PureComponent {
    constructor(props){
        super(props)
        this._isScrolledDown = true /* whether the user has scrolled down */
        this._el = null
        this._scrollHeight = null
        this._isScrolledUp = null
    }
    scrollDownIfNeeded(){
        if(this._isScrolledDown && hasOverflow(this._el)){
            scrollDown(this._el)
        }
    }
    handleScroll(e){
        this._isScrolledDown = isScrolledDown(this._el, isScrolledDownThreshold)
        if(isScrolledUp(this._el)){
            this.props.onScrolledTop && this.props.onScrolledTop(e)
        }
        this.props.onScrolled && this.props.onScrolled(e)
    }
    componentDidMount(){ 
        this.scrollDownIfNeeded()
    }
    componentWillUpdate(nextProps, nextState){
        this._scrollHeight = this._el.scrollHeight
        this._isScrolledUp = isScrolledUp(this._el)
    }
    componentDidUpdate(){ 
        /* if the list is scrolled all the way up and new items are added, preserve the current scroll position */
        if(this._isScrolledUp && this._scrollHeight !== null){
            /* the scroll height increased by this much during the update */
            const difference = this._el.scrollHeight - this._scrollHeight
            this._scrollHeight = null
            scrollDownBy(difference, this._el)
        }
        else this.scrollDownIfNeeded()
    }
    render(){
        const { onScrolled, onScrolledTop, ...rest } = this.props
        return <Component
            {...rest}
            ref={ el => this._el = ReactDOM.findDOMNode(el) }
            onScroll={ e => this.handleScroll(e) }
        />
    }
}