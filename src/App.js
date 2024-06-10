import React, { useState, useEffect } from 'react';
import FlightForm from './components/FlightForm';
import FlightList from './components/FlightList';

function App() {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        fetchFlights();
    }, []); // Fetch flights only once when the component mounts

    const fetchFlights = async () => {
        try {
            const response = await fetch('http://localhost:8000/flights');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setFlights(data.flights);
        } catch (error) {
            console.error('Error fetching flights:', error);
        }
    };

    const handleAddFlight = async formData => {
        try {
            const response = await fetch('http://localhost:8000/flights/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('Flight added:', data);
            fetchFlights(); // Fetch flights again after adding a new flight
        } catch (error) {
            console.error('Error adding flight:', error);
        }
    };

    return (
        <div>
            <h1>Flight Booking App</h1>
            <FlightForm onAddFlight={handleAddFlight} />
            <FlightList flights={flights} />
        </div>
    );
}

export default App;
