import React from 'react';
import { Container } from 'semantic-ui-react';
import { Router } from '@reach/router';

import Home from './pages/Home';
import Detail from './pages/Detail';

const NotFound = () => <div>Page not found</div>;

const App = () => (
    <Container style={{ marginTop: '50px' }}>
        <Router>
            <Home path="/" />
            <Detail path="movies/:movieId" />
            <Detail path="series/:seriesId" />
            <NotFound path="*" />
        </Router>
    </Container>
);

export default App;
