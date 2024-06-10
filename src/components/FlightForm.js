import React, { useState } from 'react';

function FlightForm({ onAddFlight }) {
    const [formData, setFormData] = useState({ from_place: '', to_place: '', time: '' });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        onAddFlight(formData);
        setFormData({ from_place: '', to_place: '', time: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="from_place"
                placeholder="From"
                value={formData.from_place}
                onChange={handleChange}
            />
            <input
                type="text"
                name="to_place"
                placeholder="To"
                value={formData.to_place}
                onChange={handleChange}
            />
            <input
                type="text"
                name="time"
                placeholder="Time"
                value={formData.time}
                onChange={handleChange}
            />
            <button type="submit">Add Flight</button>
        </form>
    );
}

export default FlightForm;
