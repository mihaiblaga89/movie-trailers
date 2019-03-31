// eslint keeps wanting me to sort components in a way that will break functionality
/* eslint-disable react/sort-comp */
import React, { Component } from 'react';
import { Search } from 'semantic-ui-react';
import { navigate } from '@reach/router';
import debounce from 'lodash/debounce';

import './searchField.scss';
import API from '../../../services/api';
import { generateSmallPosterURL } from '../../../utils';

class SearchField extends Component {
    state = {
        isLoading: false,
        results: [],
    };

    computeResults = results => {
        return results
            .filter(result => result.media_type !== 'person') // take out persons since we don't support them
            .map(result => ({
                key: result.id,
                title: result.title || result.name,
                image: result.poster_path ? generateSmallPosterURL(result.poster_path) : null,
                description: result.vote_average ? `${result.vote_average} / 10` : null,
                type: result.media_type,
            }));
    };

    reset = () => this.setState({ isLoading: false, results: [] });

    handleSearch = (e, { value }) => {
        this.setState({ isLoading: true });
        if (value.length > 1) {
            API.search(value)
                .then(({ data: { results } }) => this.setState({ results: this.computeResults(results), isLoading: false }))
                .catch(this.reset);
        } else {
            this.reset();
        }
    };

    debouncedSearch = debounce(this.handleSearch, 500, { trailing: true });

    handleResultSelect = (e, { result }) => {
        navigate(`/${result.type === 'tv' ? 'series' : 'movies'}/${result.key}`);
    };

    render() {
        const { isLoading, results } = this.state;
        return (
            <Search
                className="search-field"
                fluid
                loading={isLoading}
                onResultSelect={this.handleResultSelect}
                onSearchChange={this.debouncedSearch}
                results={results}
            />
        );
    }
}

export default SearchField;
