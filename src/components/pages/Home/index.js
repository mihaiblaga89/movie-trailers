import React, { Fragment } from 'react';
import { Header } from 'semantic-ui-react';

import Carousel from '../../generic/Carousel';
import API from '../../../services/api';
import SearchField from '../../generic/SearchField';

const Home = () => {
    return (
        <Fragment>
            <Header as="h1">Movie Trailers</Header>
            <SearchField />
            <Carousel title="Popular movies" getDataFunction={API.getMostPopularMovies} />
            <Carousel title="Popular series" getDataFunction={API.getMostPopularSeries} />
            <Carousel title="Family" getDataFunction={API.getFamilyGenre} />
            <Carousel title="Documentary" getDataFunction={API.getDocumentaryGenre} />
        </Fragment>
    );
};

export default Home;
