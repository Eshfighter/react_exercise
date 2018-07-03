// import React from 'react';
// import expect from 'expect';
// import { mount,shallow } from 'enzyme';
// import DropdownMenu from '../DropdownMenu';

// const initializeComponent = (props) => shallow(<DropdownMenu {...props} />);

// const elementText = (__component, selector) => __component.find(`${selector}`).text();

// it(`drop down menu renders`, ()=> {
//   const currencies = [ "SGD","AUD","EUR","GBP","USD","VND"];

//   const toggleSelected = () => {};
//   const props = {
//     label: "testing",
//     currencies,
//     toggleSelected
//   };
//   const component = initializeComponent(props);

//   // Assertion
//   expect(elementText(component, 'div.DropdownMenu-ddHeaderTitle')).toEqual('testing');
// });