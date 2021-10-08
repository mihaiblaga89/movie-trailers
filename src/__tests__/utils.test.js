import { generateBigPosterURL, generateSmallPosterURL, generateThumbnailPosterURL } from '../utils';

// keeping the code dry
const tests = [
    { name: 'big', function: generateBigPosterURL, argument: 'test', expect: 'http://image.tmdb.org/t/p/w500/test' },
    {
        name: 'small',
        function: generateSmallPosterURL,
        argument: 'test',
        expect: 'http://image.tmdb.org/t/p/w185_and_h278_bestv2/test',
    },
    { name: 'thumbnail', function: generateThumbnailPosterURL, argument: 'test', expect: 'http://image.tmdb.org/t/p/w92/test' },
];

tests.forEach((test) =>
    it(`generates correct ${test.name} URL`, () => {
        const returned = test.function(test.argument);
        expect(returned).toBe(test.expect);
    })
);
