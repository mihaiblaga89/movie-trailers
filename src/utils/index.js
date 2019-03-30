import config from '../config';

/**
 * Generates the image URL for the carousels
 *
 * @param {String} path
 * @returns {String}
 */
const generateSmallPosterURL = path => {
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
const generateBigPosterURL = path => {
    const baseURL = config.imageBaseURL;
    const imageSize = 'w500'; // best option for image uniformity
    return `${baseURL}${imageSize}/${path}`;
};

/**
 * Generates the image URL for logos
 *
 * @param {String} path
 * @returns {String}
 */
const generateLogoURL = path => {
    const baseURL = config.imageBaseURL;
    const imageSize = 'w45'; // best option for image uniformity
    return `${baseURL}${imageSize}/${path}`;
};

export { generateSmallPosterURL, generateBigPosterURL, generateLogoURL };
