import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';

const DetailsLabel = memo(({ label, children }) => (
    <List.Item>
        <List.Header>{label}</List.Header>
        {Array.isArray(children) ? children.join(', ') : children}
    </List.Item>
));

DetailsLabel.propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
};

export default DetailsLabel;
