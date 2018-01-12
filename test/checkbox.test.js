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

// describe('checkbox component', () => {    
//     it('should render a checkbox input', () => {
//         const wrapper = shallow(
//             <Checkbox />
//         )
//         expect(
//             wrapper.find('input[type="radio"]').exists()
//         ).toBe(true) 
//     })

//     it('should display the correct text based on state', () => {
//         const wrapper = shallow(
//             <Checkbox />
//         )
//         wrapper.setState({ checked: false})
//         expect(
//             wrapper.find('p').text()
//         ).toBe('not checked')

//         wrapper.setState({ checked: true})
//         expect(
//             wrapper.find('p').text()
//         ).toBe('checked')
//     })

//     it('should change the radio state on click', () => {
//         const wrapper = shallow(
//             <Checkbox />
//         )
//         wrapper.setState({ checked: false})
//         wrapper.find('input[type="radio"]').simulate('click')
        
//         expect(
//             wrapper.state('checked')
//         ).toBe(true)
//     })

//     // it('should mount the component to the DOM', () => {
//     //     const wrapper = mount(
//     //         <Checkbox />
//     //     )
//     //     expect(
//     //         wrapper.find('p').getDOMNode().clientHeight
//     //     ).toBe()
//     // })
// })