/* eslint-disable camelcase */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { List, Rating } from 'semantic-ui-react';

import DetailsLabel from '../DetailsLabel';

const DetailsList = ({ data, isMovie }) => {
    const {
        genres,
        production_companies,
        budget,
        production_countries,
        release_date,
        runtime,
        status,
        vote_average,
        vote_count,
        first_air_date,
        created_by,
        episode_run_time,
        networks,
        seasons,
        last_episode_to_air,
        next_episode_to_air,
        number_of_episodes,
    } = data;

    // generate an episode string like S01E08 based on the episode object
    const composeEpisodeInfo = episode => {
        const { air_date, episode_number, name, season_number } = episode;
        const pad = toPad => toPad.toString().padStart(2, '0');
        return `${name} - S${pad(season_number)}E${pad(episode_number)} - ${moment(air_date).format('MMMM Do YYYY')}`;
    };

    const renderMovieSpecificData = () => (
        <Fragment>
            {budget ? <DetailsLabel label="Budget">{`$${Number(budget).toLocaleString()}`}</DetailsLabel> : null}
            {production_countries && (
                <DetailsLabel label="Production countries">{production_countries.map(country => country.name)}</DetailsLabel>
            )}
            {release_date && <DetailsLabel label="Release date">{moment(release_date).format('MMMM Do YYYY')}</DetailsLabel>}
            {runtime ? <DetailsLabel label="Runtime">{`${runtime} minutes`}</DetailsLabel> : null}
        </Fragment>
    );

    const renderSeriesSpecificData = () => (
        <Fragment>
            {created_by && <DetailsLabel label="Created by">{created_by.map(creator => creator.name)}</DetailsLabel>}
            {first_air_date && (
                <DetailsLabel label="First air date">{moment(first_air_date).format('MMMM Do YYYY')}</DetailsLabel>
            )}
            {episode_run_time && <DetailsLabel label="Episode run time">{`${episode_run_time[0]} minutes`}</DetailsLabel>}
            {networks && (
                <DetailsLabel label="Networks">
                    {networks.map(network => `${network.name} (${network.origin_country})`)}
                </DetailsLabel>
            )}
            {seasons && (
                <DetailsLabel label="Number of seasons">
                    {seasons.filter(season => season.name.includes('Season')).length.toString()}
                </DetailsLabel>
            )}
            {number_of_episodes ? <DetailsLabel label="Number of episodes">{number_of_episodes.toString()}</DetailsLabel> : null}
            {last_episode_to_air && <DetailsLabel label="Latest episode">{composeEpisodeInfo(last_episode_to_air)}</DetailsLabel>}
            {next_episode_to_air && <DetailsLabel label="Next episode">{composeEpisodeInfo(next_episode_to_air)}</DetailsLabel>}
        </Fragment>
    );

    return (
        <List>
            {vote_average ? (
                <Fragment>
                    <Rating
                        disabled
                        style={{ marginBottom: '25px' }}
                        icon="heart"
                        rating={(vote_average * 5) / 10}
                        maxRating={5}
                    />
                    {vote_count && <span>{`(${vote_count} votes)`}</span>}
                </Fragment>
            ) : null}
            {status && <DetailsLabel label="Status">{status}</DetailsLabel>}
            {genres && <DetailsLabel label="Genres">{genres.map(genre => genre.name)}</DetailsLabel>}
            {production_companies && (
                <DetailsLabel label="Production companies">{production_companies.map(company => company.name)}</DetailsLabel>
            )}
            {isMovie ? renderMovieSpecificData() : renderSeriesSpecificData()}
        </List>
    );
};

DetailsList.propTypes = {
    data: PropTypes.shape({
        genres: PropTypes.array,
        production_companies: PropTypes.array,
        budget: PropTypes.number,
        production_countries: PropTypes.array,
        release_date: PropTypes.string,
        runtime: PropTypes.number,
        status: PropTypes.string,
        vote_average: PropTypes.number,
        vote_count: PropTypes.number,
        first_air_date: PropTypes.string,
        created_by: PropTypes.array,
        episode_run_time: PropTypes.array,
        networks: PropTypes.array,
        seasons: PropTypes.array,
        last_episode_to_air: PropTypes.object,
        next_episode_to_air: PropTypes.object,
        number_of_episodes: PropTypes.number,
    }),
    isMovie: PropTypes.bool.isRequired,
};

export default DetailsList;
