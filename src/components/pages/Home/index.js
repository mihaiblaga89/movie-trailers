import React, { Fragment } from 'react';
import { Header } from 'semantic-ui-react';

import Carousel from '../../generic/Carousel';
import API from '../../../services/api';

const Home = () => {
    return (
        <Fragment>
            <Header as="h1">Movie Trailers</Header>
            <Carousel title="Popular movies" getDataFunction={API.getMostPopularMovies} />
            <Carousel title="Popular series" getDataFunction={API.getMostPopularSeries} />
            <Carousel title="Family" getDataFunction={API.getMostPopularMovies} />
            <Carousel title="Documentary" getDataFunction={API.getMostPopularMovies} />
        </Fragment>
    );
};

export default Home;
