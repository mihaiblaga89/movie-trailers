import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Carousel from '../components/generic/Carousel';
import DetailsLabel from '../components/generic/DetailsLabel';
import DetailsList from '../components/generic/DetailsList';
import DetailsPlaceholder from '../components/generic/DetailsPlaceholder';
import SearchField from '../components/generic/SearchField';
import VideoModal from '../components/generic/VideoModal';
import mockData from '../utils/mockData';

/* global document */

// keeping the code dry
const tests = [
    { name: 'Carousel', component: <Carousel title="test" getDataFunction={() => Promise.resolve()} /> },
    { name: 'DetailsLabel', component: <DetailsLabel label="test">Label</DetailsLabel> },
    { name: 'DetailsList', component: <DetailsList isMovie data={mockData.detailsList} /> },
    { name: 'DetailsPlaceholder', component: <DetailsPlaceholder /> },
    { name: 'SearchField', component: <SearchField /> },
    { name: 'VideoModal', component: <VideoModal /> },
];

tests.forEach(test =>
    it(`${test.name} renders without crashing and matches snapshot`, () => {
        const div = document.createElement('div');
        ReactDOM.render(test.component, div);
        ReactDOM.unmountComponentAtNode(div);
        const tree = renderer.create(test.component).toJSON();
        expect(tree).toMatchSnapshot();
    })
);
