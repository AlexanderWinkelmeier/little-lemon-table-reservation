import React from 'react';

function BookingForm({
  availableTimes,
  dispatch,
  date,
  time,
  guests,
  occasion,
  handleDateChange,
  handleTimeChange,
  handleGuestsChange,
  handleOccasionChange,
  handleSubmit,
}) {
  return (
    <>
      <h1>Reserve a table</h1>
      <form
        style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
        />

        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} onChange={handleTimeChange}>
          {Array.isArray(availableTimes) &&
            availableTimes.map((availableTime, index) => (
              <option key={index} value={availableTime}>
                {availableTime}
              </option>
            ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={handleGuestsChange}
        />

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={handleOccasionChange}>
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        <input type="submit" value="Make Your reservation" />
      </form>
    </>
  );
}

export default BookingForm;
