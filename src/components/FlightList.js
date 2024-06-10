import React from 'react';

function FlightList({ flights }) {
    return (
        <div>
            <h2>Flight List</h2>
            { flights &&
            <ul>
                {flights.map(flight => (
                    <li key={flight.id}>
                        {flight.from_place} to {flight.to_place} at {flight.time}
                    </li>
                ))}
            </ul>
            }
            {!flights && <p>There are no flights at the moment</p>}
        </div>
    );
}

export default FlightList;
