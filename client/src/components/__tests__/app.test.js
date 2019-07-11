import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 
import App from '/Users/TinaLe/Documents/gallery/client/src/components/App.jsx'

Enzyme.configure({ adapter: new Adapter() }); 

describe('App', ()=>{
    it('should have state', done =>{
        const wrapper = shallow(<App />);
        expect(wrapper.state()).toExist;
        done(); 
    });

    it('should have three starter items in its current state', done => {
        const wrapper = shallow(<App />);
        expect(wrapper.state('current')).toHaveLength(3);
        done();
    });

    it('should have a hover method that toggles hover state to true', done => {
        const wrapper = shallow(<App/>); 
        const instance = wrapper.instance();
        expect(wrapper.state('hover')).toBeFalsy(); 
        instance.hover()
        expect(wrapper.state('hover')).toBeTruthy();  
        done();
    });

    it('should have a hoverOut method that toggles hover state to false', done => {
        const wrapper = shallow(<App/>); 
        const instance = wrapper.instance(); 
        instance.hover();
        expect(wrapper.state('hover')).toBe(true); 
        instance.hoverOut();
        expect(wrapper.state('hover')).toBe(false);
        done();
    });

    it('should have open and close modal methods that change toggle modal state', done => {
        const wrapper = shallow(<App/>); 
        const instance = wrapper.instance(); 
        expect(wrapper.state('modalIsOpen')).toBe(false);
        instance.openModal(null, 'sampleImgURL.jpg'); 
        expect(wrapper.state('modalIsOpen')).toBe(true);
        expect(wrapper.state('modalURL')).toBe('sampleImgURL.jpg');
        instance.closeModal();
        expect(wrapper.state('modalIsOpen')).toBe(false); 
        done();
    })
  });



