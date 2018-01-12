import Enzyme, { shallow, render, mount } from 'enzyme'
import React from 'react'

import Autoscroll from '../src'

class TestComponent extends React.Component {
    render(){
        const items = 'abcdefghijklmnopqrstuvwxyz'.split('')
        return <ul className='TestComponent' {...this.props}>{
            items.map(
                item => <li key={item}>{item}</li>
            )
        }</ul>
    }
}

describe('Autoscroll higher order component', () => {
    const ScrolledTestComponent = Autoscroll(TestComponent)

    it('should render the passed component', () => {
        const wrapper = mount(<ScrolledTestComponent />)
        expect(
            wrapper.find('ul.TestComponent').exists()
        ).toBe(true)
    })

    it('should call handleScroll when the child component is scrolled', () => {
        const wrapper = mount(<ScrolledTestComponent />)
        const spy = jest.spyOn(wrapper.instance(), 'handleScroll')
        wrapper.find('ul.TestComponent').simulate('scroll')
        
        expect(spy).toHaveBeenCalled()
    })
})