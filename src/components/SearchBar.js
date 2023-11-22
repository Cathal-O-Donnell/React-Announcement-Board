import React from "react";

import { TextInput } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = (props) => {
    const icon = <FontAwesomeIcon icon={faMagnifyingGlass} />;
    const searchTermChangeHandler = (event) => {
        props.onChangeSearchTerm(event.target.value);
    };

    return (
        <div>
            <TextInput className='search' placeholder='search' rightSection={icon} onChange={searchTermChangeHandler} />
        </div>
    );
};

export default SearchBar;