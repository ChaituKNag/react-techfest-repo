import React from 'react';
import './index.scss';

const ListComponent = ({ listData }) => (
    <ul className="custom-list">
    {
        listData.map((list, index) => (
                <li key={index}>{list}</li>
            )
        )
    }
    </ul>
);

export default ListComponent;
