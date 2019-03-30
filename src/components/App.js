import React from 'react';
import { Container } from 'semantic-ui-react';
import { Router } from '@reach/router';

import Home from './pages/Home';

const Detail = () => <div>Dash</div>;
const NotFound = () => <div>404</div>;

const App = () => (
    <Container>
        <Router>
            <Home path="/" />
            <Detail path="movies/:movieId" />
            <Detail path="series/:seriesId" />
            <NotFound path="*" />
        </Router>
    </Container>
);

export default App;
