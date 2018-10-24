import React from 'react';

const SearchBox = ({serchfield, searchChange}) => {
    return (
        <div className="pa2">
            <input className="pa3 ba bg-light-blue" 
                    type="search" 
                    placeholder="Search robot"
                    onChange={searchChange}
            />
        </div>
    );
};

export default SearchBox;