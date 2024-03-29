import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CarouselComponent from '@brainhubeu/react-carousel';
import { Container, Card, Image, Placeholder, Header } from 'semantic-ui-react';
import { navigate } from '@reach/router';
import swal from 'sweetalert';
import { isMobile } from 'react-device-detect';
import '@brainhubeu/react-carousel/lib/style.css';

import { generateSmallPosterURL } from '../../../utils';
import './carousel.scss';

class Carousel extends Component {
    constructor() {
        super();

        this.state = { data: null };
        // prevent setting the state if the component unmounted
        this.mounted = false;
    }

    componentDidMount() {
        this.mounted = true;
        const { getDataFunction } = this.props;
        getDataFunction &&
            getDataFunction()
                .then(({ data }) => this.mounted && this.setState({ data }))
                .catch(() => {
                    if (this.mounted) this.setState({ data: null });
                    swal('Oops', 'We encountered an error while getting data from TMDB', 'error');
                });
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    renderCarousel = () => {
        const { data } = this.state;

        if (data && Array.isArray(data.results)) {
            return (
                <CarouselComponent slidesPerPage={isMobile ? 3 : 8} infinite arrows>
                    {data.results.map((result) => {
                        const goTo = () =>
                            // movies have title, series have name, decide where to go based on that
                            navigate(`/${result.title ? 'movies' : 'series'}/${result.id}`);
                        return (
                            <Card onClick={goTo} key={result.id}>
                                <Image src={generateSmallPosterURL(result.poster_path)} />
                            </Card>
                        );
                    })}
                </CarouselComponent>
            );
        }
        return (
            <Placeholder fluid style={{ height: '200px' }}>
                <Placeholder.Image rectangular />
            </Placeholder>
        );
    };

    render() {
        const { title } = this.props;
        return (
            <Container style={{ marginTop: '20px' }}>
                <Header as="h2">{title}</Header>
                {this.renderCarousel()}
            </Container>
        );
    }
}

Carousel.propTypes = {
    getDataFunction: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
};

export default Carousel;
