import React from 'react';

const Link = ({route}) => {
    return (
        <div>
            <li className='px-4 hover:bg-amber-500 lg:mr-10'>
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

export default Link;