import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 
import App from '/Users/TinaLe/Documents/gallery/client/src/components/App.jsx'

Enzyme.configure({ adapter: new Adapter() }); 


describe('App', ()=>{

  it('should check state', done =>{
      const wrapper = mount(<App />);
      expect(wrapper.state('current')).toHaveLength(3);
      done();
  })

});


