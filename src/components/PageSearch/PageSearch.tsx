'use client';

import { useState } from 'react';

import Search from '../Search/Search';

const PageSearch = () => {
  const [roomTypeFilter, setRoomTypeFilter] = useState('');
  const [cityQuery, setCityQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Search
      roomTypeFilter={roomTypeFilter}
      cityQuery={cityQuery}
      searchQuery={searchQuery}
      setRoomTypeFilter={setRoomTypeFilter}
      setSearchQuery={setSearchQuery}
      setCityQuery={setCityQuery}
    />
  );
};

export default PageSearch;
