import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingInformation = () => {
  const [bookings, setBookings] = useState([]);

  const pakistaniCities = [
    'Karachi', 'Lahore', 'Islamabad', 'Murree', 'Swat Valley',
    'Quetta', 'Multan', 'Hyderabad', 'Hunza Valley', 'Skardu',
    'Sukkur', 'Peshawar', 'Punjab'
  ];

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get('http://localhost:5011/bookings');
        setBookings(res.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  const handleCancel = (id) => {
    const toastId = toast.info(
      <div>
        <p>Are you sure you want to cancel this booking?</p>
        <div className="flex justify-center gap-4 mt-2">
          <button
            onClick={() => {
              toast.dismiss(toastId);
              performCancel(id);
            }}
            className="bg-red-600 text-white px-3 py-1 rounded"
          >
            Yes
          </button>
          <button
            onClick={() => toast.dismiss(toastId)}
            className="bg-green-600 text-white px-3 py-1 rounded"
          >
            No
          </button>
        </div>
      </div>,
      {
        autoClose: false,
        closeButton: false,
      }
    );
  };

  const performCancel = async (id) => {
    try {
      await axios.delete(`http://localhost:5011/booking/${id}`);
      setBookings(prev => prev.filter(b => b._id !== id));
      toast.success('Booking canceled successfully!', { autoClose: 3000 });
    } catch (error) {
      console.error('Error cancelling booking:', error);
      toast.error('Failed to cancel booking', { autoClose: 3000 });
    }
  };

  if (!bookings.length) {
    return (
      <div className="pt-28 text-center text-red-600 font-semibold">
        No booking information found.
      </div>
    );
  }

  return (
    <div className="pt-28 pb-10 max-w-4xl mx-auto px-6 space-y-6">
      <h2 className="text-3xl font-bold text-center text-blue-700">Your Bookings</h2>
      {bookings.map(booking => {
        const isPakistaniCity = pakistaniCities.includes(booking.destination);
        const ticketTypeDisplay = isPakistaniCity ? 'Bus' : 'Airplane';

        return (
          <div
            key={booking._id}
            className="bg-white shadow-md p-5 rounded-lg border border-gray-300"
          >
            <div className="space-y-2 text-gray-800">
              <p><strong>Name:</strong> {booking.userName}</p>
              <p><strong>Age:</strong> {booking.userAge}</p>
              <p><strong>Phone:</strong> {booking.userNumber}</p>
              <p><strong>Destination:</strong> {booking.destination}</p>
              <p><strong>Ticket Type:</strong> {ticketTypeDisplay}</p>
              <p><strong>Travel Date:</strong> {booking.travelDate}</p>
              {booking.isRoundTrip && (
                <p><strong>Return Date:</strong> {booking.returnDate}</p>
              )}
              <p><strong>Quantity:</strong> {booking.ticketQuantity}</p>
              <p><strong>Total Price:</strong> Rs. {booking.totalPrice}</p>
            </div>
            <div className="mt-4 text-right">
              <button
                onClick={() => handleCancel(booking._id)}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Cancel Booking
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookingInformation;
