import React from 'react'
import {configure as configureEnzyme, shallow, render, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {createSerializer} from "enzyme-to-json";
import sinon from 'sinon'

// Default serializer for Jest is enzyme-to-json
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

// React 16 Enzyme adapter
configureEnzyme({adapter: new Adapter()});

// Make function available in all tests files without import
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.sinon = sinon;

