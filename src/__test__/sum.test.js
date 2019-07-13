import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {create} from 'react-test-renderer';


Enzyme.configure({adapter: new Adapter()});
