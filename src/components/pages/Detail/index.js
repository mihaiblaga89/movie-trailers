/* eslint-disable camelcase */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Header, Button, Image, Divider, Modal } from 'semantic-ui-react';
import swal from 'sweetalert';

import API from '../../../services/api';
import { generateBigPosterURL } from '../../../utils';
import DetailsList from '../../generic/DetailsList';
import DetailsPlaceholder from '../../generic/DetailsPlaceholder';
import VideoModal from '../../generic/VideoModal';

/* global window */

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
        getData(id)
            .then(({ data }) => this.setState({ data }))
            .catch((err) => {
                if (err.response && err.response.status === 404) {
                    swal('Oops!', 'Show/movie not found', 'error').then(() => {
                        if (window) {
                            window.history.back();
                        }
                    });
                }
            });
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
                        <Modal
                            className="video-modal-container"
                            trigger={<Button primary>Play video</Button>}
                            basic
                            size="fullscreen"
                        >
                            <VideoModal />
                        </Modal>
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
