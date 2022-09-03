import React from 'react';

const cryptoTile = ({data, selectedTile, onClick}) => {

    const {name,rate, icon} = data;

    const handleClick = () => onClick(data)

    return(
        <div
            className={'card ${selectedTile} &&'selected'}'
            onClick={handleClick}>
        </div>
    )

    }