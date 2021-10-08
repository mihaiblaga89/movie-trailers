import config from '../config';

/**
 * Generates the image URL for the carousels
 *
 * @param {String} path
 * @returns {String}
 */
const generateSmallPosterURL = (path) => {
    const baseURL = config.imageBaseURL;
    const imageSize = 'w185_and_h278_bestv2'; // best option for image uniformity
    return `${baseURL}${imageSize}/${path}`;
};

/**
 * Generates the image URL for the carousels
 *
 * @param {String} path
 * @returns {String}
 */
const generateBigPosterURL = (path) => {
    const baseURL = config.imageBaseURL;
    const imageSize = 'w500';
    return `${baseURL}${imageSize}/${path}`;
};

/**
 * Generates the image URL for the search results
 *
 * @param {String} path
 * @returns {String}
 */
const generateThumbnailPosterURL = (path) => {
    const baseURL = config.imageBaseURL;
    const imageSize = 'w92';
    return `${baseURL}${imageSize}/${path}`;
};

export { generateSmallPosterURL, generateBigPosterURL, generateThumbnailPosterURL };
