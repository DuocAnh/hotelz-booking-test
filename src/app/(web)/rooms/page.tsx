'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

import { getRooms } from '@/libs/apis';
import { Room } from '@/models/room';
import Search from '@/components/Search/Search';
import RoomCard from '@/components/RoomCard/RoomCard';

const Rooms = () => {
  const [roomTypeFilter, setRoomTypeFilter] = useState('');
  const [cityQuery, setCityQuery] = useState(''); 
  const [searchQuery, setSearchQuery] = useState('');
  const searchParams = useSearchParams();

  useEffect(() => {
    const searchQueryParam = searchParams.get('searchQuery');
    const cityQueryParam = searchParams.get('city'); 
    const roomTypeParam = searchParams.get('roomType');

    if (roomTypeParam) setRoomTypeFilter(roomTypeParam);
    if (searchQueryParam) setSearchQuery(searchQueryParam);
    if (cityQueryParam) setCityQuery(cityQueryParam); 
  }, [searchParams]);

  async function fetchData() {
    return getRooms();
  }

  const { data, error, isLoading } = useSWR('get/hotelRooms', fetchData);

  if (error) throw new Error('Cannot fetch data');
  if (typeof data === 'undefined' && !isLoading) throw new Error('Cannot fetch data');

  const filterRooms = (rooms: Room[]) => {
    return rooms.filter(room => {
      if (
        roomTypeFilter &&
        roomTypeFilter.toLowerCase() !== 'all' &&
        room.type.toLowerCase() !== roomTypeFilter.toLowerCase()
      ) {
        return false;
      }

      if (
        searchQuery &&
        !room.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      if (
        cityQuery &&
        !room.city.toLowerCase().includes(cityQuery.toLowerCase()) // Assuming the room has a `city` field
      ) {
        return false;
      }

      return true;
    });
  };

  const filteredRooms = filterRooms(data || []);

  return (
    <div className='container mx-auto pt-10'>
      <Search
        roomTypeFilter={roomTypeFilter}
        searchQuery={searchQuery}
        cityQuery={cityQuery} 
        setRoomTypeFilter={setRoomTypeFilter}
        setSearchQuery={setSearchQuery}
        setCityQuery={setCityQuery} 
      />

      <div className='flex mt-20 justify-between flex-wrap'>
        {filteredRooms.map(room => (
          <RoomCard key={room._id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
