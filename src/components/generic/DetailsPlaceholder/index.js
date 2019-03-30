import React from 'react';
import { Placeholder, Grid } from 'semantic-ui-react';

const DetailsPlaceholder = () => {
    return (
        <Grid stackable>
            <Grid.Row columns={2}>
                <Grid.Column>
                    <Placeholder fluid>
                        <Placeholder.Header>
                            <Placeholder.Line />
                        </Placeholder.Header>
                        <Placeholder.Paragraph>
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                        </Placeholder.Paragraph>
                        <Placeholder.Paragraph>
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                        </Placeholder.Paragraph>
                        <Placeholder.Paragraph>
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                        </Placeholder.Paragraph>
                        <Placeholder.Paragraph>
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                        </Placeholder.Paragraph>
                    </Placeholder>
                </Grid.Column>
                <Grid.Column>
                    <Placeholder fluid>
                        <Placeholder.Image rectangular />
                    </Placeholder>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default DetailsPlaceholder;
