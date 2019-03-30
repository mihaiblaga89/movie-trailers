import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CarouselComponent from '@brainhubeu/react-carousel';
import { Container, Card, Image, Placeholder, Header } from 'semantic-ui-react';
import { navigate } from '@reach/router';
import '@brainhubeu/react-carousel/lib/style.css';

import { generateSmallPosterURL } from '../../../utils';
import './carousel.scss';

class Carousel extends Component {
    state = { data: null };

    componentDidMount() {
        const { getDataFunction } = this.props;
        getDataFunction && getDataFunction().then(({ data }) => this.setState({ data }));
    }

    renderCarousel = () => {
        const { data } = this.state;

        if (data && Array.isArray(data.results)) {
            return (
                <CarouselComponent slidesPerPage={8} infinite arrows>
                    {data.results.map(result => {
                        const goTo = () => {
                            // movies have title, series have name, decide where to go based on that
                            return navigate(`/${result.title ? 'movies' : 'series'}/${result.id}`);
                        };
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
