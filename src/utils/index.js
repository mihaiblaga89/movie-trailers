import config from '../config';

const generatePosterPath = path => {
    const baseURL = config.posterBaseURL;
    const imageSize = 'w500';
    return `${baseURL}${imageSize}/${path}`;
};

const dummy = () => true;

export { generatePosterPath, dummy };
