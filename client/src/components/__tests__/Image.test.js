import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 
import Image from '/Users/TinaLe/Documents/gallery/client/src/components/Image.jsx';
import ImageGallery from '/Users/TinaLe/Documents/gallery/client/src/components/ImageGallery.jsx';
import App from '/Users/TinaLe/Documents/gallery/client/src/components/App.jsx';

Enzyme.configure({ adapter: new Adapter() }); 

describe('Image', ()=>{
    it('should render', done =>{
        const wrapper = mount(<Image />);
        expect(wrapper.exists()).toBe(true);
        done(); 
    });

  });

