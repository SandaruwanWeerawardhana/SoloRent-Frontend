import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import BookingForm from '../Pages/Booking/BookingForm';
import Swal from 'sweetalert2';

// Mock Swal
jest.mock('sweetalert2', () => ({
  fire: jest.fn(),
}));

// Mock useLocation
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
}));

// Mock fetch
global.fetch = jest.fn();

describe('BookingForm', () => {
  const mockVehicle = {
    id: 1,
    brand: 'Toyota Camry',
    imageURl: 'https://example.com/car.jpg',
    pricePerDay: 5000,
  };

  beforeEach(() => {
    jest.clearAllMocks();
    useLocation.mockReturnValue({
      state: { vehicle: mockVehicle },
    });
  });

  const renderBookingForm = () => {
    return render(
      <BrowserRouter>
        <BookingForm />
      </BrowserRouter>
    );
  };

  describe('Component Rendering', () => {
    test('renders booking form with vehicle data', () => {
      renderBookingForm();
      expect(screen.getByText('Toyota Camry')).toBeInTheDocument();
      expect(screen.getByAltText('Toyota Camry')).toBeInTheDocument();
    });

    test('displays vehicle image', () => {
      renderBookingForm();
      const image = screen.getByAltText('Toyota Camry');
      expect(image).toHaveAttribute('src', 'https://example.com/car.jpg');
    });

    test('renders all form fields', () => {
      renderBookingForm();
      
      expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Your Contact Number')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Pickup Time')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Pickup Location')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Drop Off Location')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Vehicle Pickup Date')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Vehicle Drop Off Date')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Special Requirement')).toBeInTheDocument();
    });

    test('renders submit and clear buttons', () => {
      renderBookingForm();
      
      expect(screen.getByText('Make A Reservation')).toBeInTheDocument();
      expect(screen.getByText('Clear')).toBeInTheDocument();
    });

    test('shows error message when no vehicle data', () => {
      useLocation.mockReturnValue({
        state: null,
      });

      renderBookingForm();
      expect(screen.getByText('No vehicle data received.')).toBeInTheDocument();
    });
  });

  describe('Form Input Handling', () => {
    test('updates customer name field', () => {
      renderBookingForm();
      
      const nameInput = screen.getByPlaceholderText('Your Name');
      fireEvent.change(nameInput, { target: { value: 'John Doe' } });
      
      expect(nameInput.value).toBe('John Doe');
    });

    test('updates email field', () => {
      renderBookingForm();
      
      const emailInput = screen.getByPlaceholderText('Your Email');
      fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
      
      expect(emailInput.value).toBe('john@example.com');
    });

    test('updates contact field', () => {
      renderBookingForm();
      
      const contactInput = screen.getByPlaceholderText('Your Contact Number');
      fireEvent.change(contactInput, { target: { value: '1234567890' } });
      
      expect(contactInput.value).toBe('1234567890');
    });

    test('updates pickup time field', () => {
      renderBookingForm();
      
      const pickupTimeInput = screen.getByPlaceholderText('Pickup Time');
      fireEvent.change(pickupTimeInput, { target: { value: '10:00 AM' } });
      
      expect(pickupTimeInput.value).toBe('10:00 AM');
    });

    test('updates pickup location field', () => {
      renderBookingForm();
      
      const pickupLocationInput = screen.getByPlaceholderText('Pickup Location');
      fireEvent.change(pickupLocationInput, { target: { value: 'Airport' } });
      
      expect(pickupLocationInput.value).toBe('Airport');
    });

    test('updates return location field', () => {
      renderBookingForm();
      
      const returnLocationInput = screen.getByPlaceholderText('Drop Off Location');
      fireEvent.change(returnLocationInput, { target: { value: 'Hotel' } });
      
      expect(returnLocationInput.value).toBe('Hotel');
    });

    test('updates start date field', () => {
      renderBookingForm();
      
      const startDateInput = screen.getByPlaceholderText('Vehicle Pickup Date');
      fireEvent.change(startDateInput, { target: { value: '2025-01-01' } });
      
      expect(startDateInput.value).toBe('2025-01-01');
    });

    test('updates end date field', () => {
      renderBookingForm();
      
      const endDateInput = screen.getByPlaceholderText('Vehicle Drop Off Date');
      fireEvent.change(endDateInput, { target: { value: '2025-01-05' } });
      
      expect(endDateInput.value).toBe('2025-01-05');
    });

    test('updates description field', () => {
      renderBookingForm();
      
      const descriptionInput = screen.getByPlaceholderText('Special Requirement');
      fireEvent.change(descriptionInput, { target: { value: 'Need GPS' } });
      
      expect(descriptionInput.value).toBe('Need GPS');
    });
  });

  describe('Clear Button', () => {
    test('clears all form fields when clear button is clicked', () => {
      renderBookingForm();
      
      // Fill form fields
      fireEvent.change(screen.getByPlaceholderText('Your Name'), {
        target: { value: 'John Doe' }
      });
      fireEvent.change(screen.getByPlaceholderText('Your Email'), {
        target: { value: 'john@example.com' }
      });
      
      // Click clear button
      const clearButton = screen.getByText('Clear');
      fireEvent.click(clearButton);
      
      // Verify fields are cleared
      expect(screen.getByPlaceholderText('Your Name').value).toBe('');
      expect(screen.getByPlaceholderText('Your Email').value).toBe('');
    });
  });

  describe('Form Submission - Success', () => {
    test('submits form successfully with all data', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ message: 'Success' }),
      });

      renderBookingForm();
      
      // Fill form
      fireEvent.change(screen.getByPlaceholderText('Your Name'), {
        target: { value: 'John Doe' }
      });
      fireEvent.change(screen.getByPlaceholderText('Your Email'), {
        target: { value: 'john@example.com' }
      });
      fireEvent.change(screen.getByPlaceholderText('Your Contact Number'), {
        target: { value: '1234567890' }
      });
      fireEvent.change(screen.getByPlaceholderText('Pickup Time'), {
        target: { value: '10:00 AM' }
      });
      fireEvent.change(screen.getByPlaceholderText('Pickup Location'), {
        target: { value: 'Airport' }
      });
      fireEvent.change(screen.getByPlaceholderText('Drop Off Location'), {
        target: { value: 'Hotel' }
      });
      fireEvent.change(screen.getByPlaceholderText('Vehicle Pickup Date'), {
        target: { value: '2025-01-01' }
      });
      fireEvent.change(screen.getByPlaceholderText('Vehicle Drop Off Date'), {
        target: { value: '2025-01-05' }
      });
      
      // Submit form
      const submitButton = screen.getByText('Make A Reservation');
      fireEvent.click(submitButton);
      
      await waitFor(() => {
        expect(global.fetch).toHaveBeenCalledWith(
          'http://localhost:8081/api/solorent/booking/add',
          expect.objectContaining({
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: expect.any(String),
          })
        );
      });
      
      await waitFor(() => {
        expect(Swal.fire).toHaveBeenCalledWith({
          title: 'Booking added successfully!',
          icon: 'success',
        });
      });
    });

    test('includes vehicle ID in submission data', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ message: 'Success' }),
      });

      renderBookingForm();
      
      fireEvent.change(screen.getByPlaceholderText('Your Name'), {
        target: { value: 'John Doe' }
      });
      
      const submitButton = screen.getByText('Make A Reservation');
      fireEvent.click(submitButton);
      
      await waitFor(() => {
        expect(global.fetch).toHaveBeenCalled();
      });
      
      const callArgs = global.fetch.mock.calls[0];
      const body = JSON.parse(callArgs[1].body);
      expect(body.vehicleID).toBe(1);
    });

    test('includes booking status as PENDING in submission', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ message: 'Success' }),
      });

      renderBookingForm();
      
      fireEvent.change(screen.getByPlaceholderText('Your Name'), {
        target: { value: 'John Doe' }
      });
      
      const submitButton = screen.getByText('Make A Reservation');
      fireEvent.click(submitButton);
      
      await waitFor(() => {
        expect(global.fetch).toHaveBeenCalled();
      });
      
      const callArgs = global.fetch.mock.calls[0];
      const body = JSON.parse(callArgs[1].body);
      expect(body.bookingStatus).toBe('PENDING');
    });

    test('resets form after successful submission', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ message: 'Success' }),
      });

      renderBookingForm();
      
      const nameInput = screen.getByPlaceholderText('Your Name');
      fireEvent.change(nameInput, { target: { value: 'John Doe' } });
      
      const submitButton = screen.getByText('Make A Reservation');
      fireEvent.click(submitButton);
      
      await waitFor(() => {
        expect(Swal.fire).toHaveBeenCalledWith({
          title: 'Booking added successfully!',
          icon: 'success',
        });
      });
      
      await waitFor(() => {
        expect(nameInput.value).toBe('');
      });
    });
  });

  describe('Form Submission - Failure', () => {
    test('shows error message when submission fails', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: false,
        status: 400,
        text: async () => 'Bad request',
      });

      renderBookingForm();
      
      fireEvent.change(screen.getByPlaceholderText('Your Name'), {
        target: { value: 'John Doe' }
      });
      
      const submitButton = screen.getByText('Make A Reservation');
      fireEvent.click(submitButton);
      
      await waitFor(() => {
        expect(Swal.fire).toHaveBeenCalledWith({
          title: 'Booking added fail!',
          icon: 'error',
        });
      });
    });

    test('handles network error', async () => {
      global.fetch.mockRejectedValueOnce(new Error('Network error'));

      renderBookingForm();
      
      fireEvent.change(screen.getByPlaceholderText('Your Name'), {
        target: { value: 'John Doe' }
      });
      
      const submitButton = screen.getByText('Make A Reservation');
      fireEvent.click(submitButton);
      
      await waitFor(() => {
        expect(Swal.fire).toHaveBeenCalledWith({
          title: 'Booking added fail!',
          icon: 'error',
        });
      });
    });

    test('logs error message to console on failure', async () => {
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
      
      global.fetch.mockResolvedValueOnce({
        ok: false,
        text: async () => 'Server error',
      });

      renderBookingForm();
      
      fireEvent.change(screen.getByPlaceholderText('Your Name'), {
        target: { value: 'John Doe' }
      });
      
      const submitButton = screen.getByText('Make A Reservation');
      fireEvent.click(submitButton);
      
      await waitFor(() => {
        expect(consoleErrorSpy).toHaveBeenCalledWith('Server error:', 'Server error');
      });
      
      consoleErrorSpy.mockRestore();
    });
  });

  describe('Form Data Structure', () => {
    test('sends correct data structure to API', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ message: 'Success' }),
      });

      renderBookingForm();
      
      fireEvent.change(screen.getByPlaceholderText('Your Name'), {
        target: { value: 'John Doe' }
      });
      fireEvent.change(screen.getByPlaceholderText('Your Email'), {
        target: { value: 'john@example.com' }
      });
      
      const submitButton = screen.getByText('Make A Reservation');
      fireEvent.click(submitButton);
      
      await waitFor(() => {
        expect(global.fetch).toHaveBeenCalled();
      });
      
      const callArgs = global.fetch.mock.calls[0];
      const body = JSON.parse(callArgs[1].body);
      
      expect(body).toHaveProperty('customerName');
      expect(body).toHaveProperty('email');
      expect(body).toHaveProperty('contact');
      expect(body).toHaveProperty('vehicleID');
      expect(body).toHaveProperty('startDate');
      expect(body).toHaveProperty('endDate');
      expect(body).toHaveProperty('pickupTime');
      expect(body).toHaveProperty('pickupLocation');
      expect(body).toHaveProperty('returnLocation');
      expect(body).toHaveProperty('description');
      expect(body).toHaveProperty('bookingStatus');
    });
  });

  describe('Vehicle ID Handling', () => {
    test('sets vehicleID to null when no vehicle provided', () => {
      useLocation.mockReturnValue({
        state: null,
      });

      renderBookingForm();
      
      expect(screen.getByText('No vehicle data received.')).toBeInTheDocument();
    });

    test('correctly uses vehicle ID from location state', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ message: 'Success' }),
      });

      renderBookingForm();
      
      fireEvent.change(screen.getByPlaceholderText('Your Name'), {
        target: { value: 'Test' }
      });
      
      fireEvent.click(screen.getByText('Make A Reservation'));
      
      await waitFor(() => {
        expect(global.fetch).toHaveBeenCalled();
      });
      
      const body = JSON.parse(global.fetch.mock.calls[0][1].body);
      expect(body.vehicleID).toBe(1);
    });
  });

  describe('Console Logging', () => {
    test('logs submission data to console', () => {
      const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
      
      renderBookingForm();
      
      expect(consoleLogSpy).toHaveBeenCalledWith(
        'Submitting data:',
        expect.objectContaining({
          customerName: '',
          email: '',
          contact: '',
          vehicleID: 1,
          bookingStatus: 'PENDING',
        })
      );
      
      consoleLogSpy.mockRestore();
    });
  });
});
