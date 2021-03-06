import React from 'react';
import Card from './Card';

const CarrList = ({robots}) => {
    if(false) {
        throw new Error('Noooo!');
    }
    const cardComponent = robots.map((robot, i) => {
        return <Card key={i} id = {robot.id} name = {robot.name} email = {robot.email} />

    })

    return (
        <div>
            {cardComponent}
        </div>
    );
};

export default CarrList;