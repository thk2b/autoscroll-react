import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

// import { JSDOM } from'jsdom'
// import React from 'react'

// // const jsdom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>')
// // const { window } = jsdom;

// // function copyProps(src, target) {
// //     const props = Object.getOwnPropertyNames(src)
// //     .filter(prop => typeof target[prop] === 'undefined')
// //     .reduce((result, prop) => ({
// //         ...result,
// //         [prop]: Object.getOwnPropertyDescriptor(src, prop),
// //     }), {})
// //     Object.defineProperties(target, props)
// // }

// // global.window = window
// // global.document = window.document
// // global.navigator = {
// //   userAgent: 'node.js',
// // }
// // copyProps(window, global);

// global.React = React
// global.shallow = shallow
// global.render = render
// global.mount = mount