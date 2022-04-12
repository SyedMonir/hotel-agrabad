import React, { useEffect, useState } from 'react';
import Room from './Room';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    fetch('rooms.json')
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);
  return (
    <section className="w-11/12 mx-auto">
      <h1 className="text-center my-5 text-2xl uppercase from-teal-400">
        Welcome to Hotel Agrabad Where every stay is unique
      </h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-6">
        {rooms.map((room) => (
          <Room key={room._id} room={room}></Room>
        ))}
      </section>
    </section>
  );
};

export default Rooms;
