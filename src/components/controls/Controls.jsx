import React from 'react';
import propTypes from 'prop-types';

const Controls = ( url, json, onChange, onClick) => (
    <section>
        <div>
            <label htmlFor='url'> Search</label>  
            <input type='text' name='url'  value={url} onChange={onChange}/>     
        </div>
        <div>
            <label htmlFor='method'>Method</label>
            <input type='radio' name='method' value='GET' onChange={onChange} /> GET
            <input type='radio' name='method' value='POST' onChange={onChange} /> POST
            <input type='radio' name='method' value='PUT' onChange={onChange} /> PUT
            <input type='radio' name='method' value='DELETE' onChange={onChange} /> DELETE
        </div>
        <div>
            <label htmlFor='json'>JSON POST/PUT</label>
            <input type='text' name='json' value={json} onChange={onChange} />
        </div>
        <button onClick={onClick}>Send!</button>
    </section>
);

Controls. propType = {};

export default Controls;




