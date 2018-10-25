import React from 'react';

const Card = ({id, name ,email}) => {
    return (
        <div className='tc bg-lightest-blue dib br3 pa3 ma3 bw2 shadow-5 grow'>
            <img src={`https://robohash.org/${id}`} alt="robots"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;
