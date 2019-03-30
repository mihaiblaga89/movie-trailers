/* eslint-disable camelcase */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Header, Button, Image, Divider } from 'semantic-ui-react';

import API from '../../../services/api';
import { generateBigPosterURL } from '../../../utils';
import DetailsList from '../../generic/DetailsList';
import DetailsPlaceholder from '../../generic/DetailsPlaceholder';

class Details extends Component {
    constructor(props) {
        super();

        this.state = {
            data: null,
        };

        this.isMovie = !!props.movieId;
        this.id = props.movieId || props.seriesId;
    }

    componentDidMount() {
        const { id, isMovie } = this;
        const getData = isMovie ? API.getMovie : API.getSeries;
        getData(id).then(({ data }) => this.setState({ data }));
    }

    renderData = () => {
        const { isMovie } = this;
        const { data } = this.state;
        const { original_title, overview, poster_path, tagline, name } = data;
        return (
            <Grid stackable>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <Header as="h2">{original_title || name}</Header>
                        {tagline && <Header as="h4">{tagline}</Header>}
                        <span>{overview}</span>
                        <Divider />
                        <Header as="h3" />
                        <DetailsList data={data} isMovie={isMovie} />
                        <Divider />
                        <Button primary>Play video</Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={generateBigPosterURL(poster_path)} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    };

    render() {
        const { data } = this.state;
        return (
            <Container>
                {!data && <DetailsPlaceholder />}
                {data && this.renderData()}
            </Container>
        );
    }
}

Details.propTypes = {
    movieId: PropTypes.string,
    seriesId: PropTypes.string,
};

export default Details;
