import React from 'react';
import renderer from 'react-test-renderer';
import SearchBar from '../SearchBar';

test('SearchBar component', () => {
    const component = renderer.create(<SearchBar/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})