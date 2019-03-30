import axios from 'axios';

import config from '../../config';

/**
 * API Class for interacting with themoviedb
 *
 * @class API
 */
class API {
    constructor() {
        this.apiKey = config.apiKey;
        this.baseURL = config.baseURL;
    }

    /**
     * Generic method for sending requests
     *
     * @param {String} method
     * @param {String} endpoint
     * @param {Object} body
     * @returns {Promise}
     * @memberof API
     */
    makeRequest = (method, endpoint, body) => {
        let params = null;
        let data = null;
        const url = `${this.baseURL}${endpoint}?api_key=${this.apiKey}`;

        // for POST we send the data in `data` and for GET in `params`
        if (method === 'GET') {
            params = body;
        } else {
            data = body;
        }

        return axios.request({
            method,
            url,
            data,
            params,
        });
    };

    /**
     * Get the most popular movies
     *
     * @param {Object} params
     * @returns {Promise}
     * @memberof API
     */
    getMostPopularMovies = params => {
        return this.makeRequest('GET', 'movie/popular', params);
    };

    getMostPopularSeries = params => {
        return this.makeRequest('GET', 'tv/popular', params);
    };
}

export default new API();
