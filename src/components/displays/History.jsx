import React from 'react';
import propTypes from 'prop-types';

const History = ({ url, method }) => (
    <section>
        <div>
            <p>{url}</p>
            <p>{method}</p>
        </div>
    </section>
);

History.protoType = {
    url: propTypes.string.isRequired,
    method: propTypes.string.isRequired
};

export default History;


