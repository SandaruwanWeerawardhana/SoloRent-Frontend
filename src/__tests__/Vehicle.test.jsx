import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Vehicle from '../Pages/Dashboard/Vehicle/Vehicle';
import axios from 'axios';
import Swal from 'sweetalert2';

// Mock axios
jest.mock('axios');

// Mock Swal
jest.mock('sweetalert2', () => ({
  fire: jest.fn(),
}));

describe('Vehicle', () => {
  beforeEach(() => {
    axios.post.mockClear();
    Swal.fire.mockClear();
    localStorage.clear();
    localStorage.setItem('token', 'mock-token-123');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const renderVehicle = () => {
    return render(
      <BrowserRouter>
        <Vehicle />
      </BrowserRouter>
    );
  };

  describe('Component Rendering', () => {
    test('renders vehicle registration form with title', () => {
      renderVehicle();
      expect(screen.getByText('Vehicle Register')).toBeInTheDocument();
    });

    test('renders brand input field', () => {
      renderVehicle();
      expect(screen.getByPlaceholderText('Vehicle brand')).toBeInTheDocument();
    });

    test('renders fuel type select dropdown', () => {
      renderVehicle();
      expect(screen.getByText('Select Fuel Type')).toBeInTheDocument();
    });

    test('renders register number input field', () => {
      renderVehicle();
      expect(screen.getByPlaceholderText('Register Number')).toBeInTheDocument();
    });

    test('renders price per date input field', () => {
      renderVehicle();
      expect(screen.getByPlaceholderText('Price Per Date')).toBeInTheDocument();
    });

    test('renders image URL input field', () => {
      renderVehicle();
      expect(screen.getByPlaceholderText('Image link')).toBeInTheDocument();
    });

    test('renders description textarea', () => {
      renderVehicle();
      expect(screen.getByPlaceholderText('Description')).toBeInTheDocument();
    });

    test('renders submit button', () => {
      renderVehicle();
      expect(screen.getByText('Add Vehicle')).toBeInTheDocument();
    });

    test('renders all labels correctly', () => {
      renderVehicle();
      
      expect(screen.getByText('Brand')).toBeInTheDocument();
      expect(screen.getByText('Fuel')).toBeInTheDocument();
      expect(screen.getByText('Vehicle Register Number')).toBeInTheDocument();
      expect(screen.getByText('Price Per Date')).toBeInTheDocument();
      expect(screen.getByText('Image')).toBeInTheDocument();
      expect(screen.getByText('Description')).toBeInTheDocument();
    });
  });

  describe('Fuel Type Dropdown', () => {
    test('displays fuel type options', () => {
      renderVehicle();
      
      expect(screen.getByText('Select Fuel Type')).toBeInTheDocument();
      expect(screen.getByText('Petrol')).toBeInTheDocument();
      expect(screen.getByText('Diesel')).toBeInTheDocument();
    });

    test('updates fuel type selection', () => {
      renderVehicle();
      
      const fuelSelect = screen.getByDisplayValue('Select Fuel Type');
      fireEvent.change(fuelSelect, { target: { value: 'Petrol' } });
      
      expect(fuelSelect.value).toBe('Petrol');
    });
  });

  describe('Form Input Handling', () => {
    test('updates brand field on input', () => {
      renderVehicle();
      
      const brandInput = screen.getByPlaceholderText('Vehicle brand');
      fireEvent.change(brandInput, { target: { value: 'Toyota Camry' } });
      
      expect(brandInput.value).toBe('Toyota Camry');
    });

    test('updates register number field on input', () => {
      renderVehicle();
      
      const registerInput = screen.getByPlaceholderText('Register Number');
      fireEvent.change(registerInput, { target: { value: 'ABC-1234' } });
      
      expect(registerInput.value).toBe('ABC-1234');
    });

    test('updates price per day field on input', () => {
      renderVehicle();
      
      const priceInput = screen.getByPlaceholderText('Price Per Date');
      fireEvent.change(priceInput, { target: { value: '5000' } });
      
      expect(priceInput.value).toBe('5000');
    });

    test('updates image URL field on input', () => {
      renderVehicle();
      
      const imageInput = screen.getByPlaceholderText('Image link');
      fireEvent.change(imageInput, { target: { value: 'https://example.com/car.jpg' } });
      
      expect(imageInput.value).toBe('https://example.com/car.jpg');
    });

    test('updates description field on input', () => {
      renderVehicle();
      
      const descriptionInput = screen.getByPlaceholderText('Description');
      fireEvent.change(descriptionInput, { target: { value: 'Luxury sedan' } });
      
      expect(descriptionInput.value).toBe('Luxury sedan');
    });
  });

  describe('Form Submission - Success', () => {
    test('submits form successfully with all data', async () => {
      axios.post.mockResolvedValueOnce({
        data: { message: 'Vehicle added successfully' },
      });

      renderVehicle();
      
      fireEvent.change(screen.getByPlaceholderText('Vehicle brand'), {
        target: { value: 'Toyota Camry' }
      });
      
      const fuelSelect = screen.getByDisplayValue('Select Fuel Type');
      fireEvent.change(fuelSelect, { target: { value: 'Petrol' } });
      
      fireEvent.change(screen.getByPlaceholderText('Register Number'), {
        target: { value: 'ABC-1234' }
      });
      fireEvent.change(screen.getByPlaceholderText('Price Per Date'), {
        target: { value: '5000' }
      });
      fireEvent.change(screen.getByPlaceholderText('Image link'), {
        target: { value: 'https://example.com/car.jpg' }
      });
      fireEvent.change(screen.getByPlaceholderText('Description'), {
        target: { value: 'Luxury sedan' }
      });
      
      const submitButton = screen.getByText('Add Vehicle');
      fireEvent.click(submitButton);
      
      await waitFor(() => {
        expect(axios.post).toHaveBeenCalledWith(
          'http://localhost:8081/api/solorent/vehicle/add',
          expect.objectContaining({
            brand: 'Toyota Camry',
            fuelType: 'Petrol',
            registerNumber: 'ABC-1234',
            pricePerDay: '5000',
            imageURl: 'https://example.com/car.jpg',
            description: 'Luxury sedan',
          }),
          expect.objectContaining({
            headers: expect.objectContaining({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer mock-token-123',
            }),
          })
        );
      });
      
      await waitFor(() => {
        expect(Swal.fire).toHaveBeenCalledWith({
          title: 'Vehicle registered successfully!',
          icon: 'success',
        });
      });
    });

    test('includes authorization token in request headers', async () => {
      axios.post.mockResolvedValueOnce({
        data: { message: 'Success' },
      });

      renderVehicle();
      
      fireEvent.change(screen.getByPlaceholderText('Vehicle brand'), {
        target: { value: 'Honda' }
      });
      
      fireEvent.click(screen.getByText('Add Vehicle'));
      
      await waitFor(() => {
        expect(axios.post).toHaveBeenCalled();
      });
      
      const callArgs = axios.post.mock.calls[0];
      expect(callArgs[2].headers.Authorization).toBe('Bearer mock-token-123');
    });
  });

  describe('Form Submission - Failure', () => {
    test('shows error message when registration fails', async () => {
      axios.post.mockRejectedValueOnce(new Error('Network error'));

      renderVehicle();
      
      fireEvent.change(screen.getByPlaceholderText('Vehicle brand'), {
        target: { value: 'Toyota' }
      });
      
      const form = screen.getByText('Add Vehicle').closest('form');
      fireEvent.submit(form);
      
      await waitFor(() => {
        expect(Swal.fire).toHaveBeenCalledWith({
          title: 'Error registering Vehicle!',
          icon: 'error',
        });
      });
    });

    test('handles API error response', async () => {
      axios.post.mockRejectedValueOnce({
        response: { status: 400, data: { message: 'Bad request' } }
      });

      renderVehicle();
      
      fireEvent.change(screen.getByPlaceholderText('Vehicle brand'), {
        target: { value: 'Test Brand' }
      });
      
      fireEvent.click(screen.getByText('Add Vehicle'));
      
      await waitFor(() => {
        expect(Swal.fire).toHaveBeenCalledWith({
          title: 'Error registering Vehicle!',
          icon: 'error',
        });
      });
    });
  });

  describe('Form Data Structure', () => {
    test('sends correct data structure to API', async () => {
      axios.post.mockResolvedValueOnce({
        data: { message: 'Success' },
      });

      renderVehicle();
      
      fireEvent.change(screen.getByPlaceholderText('Vehicle brand'), {
        target: { value: 'BMW X5' }
      });
      
      const fuelSelect = screen.getByDisplayValue('Select Fuel Type');
      fireEvent.change(fuelSelect, { target: { value: 'Diesel' } });
      
      fireEvent.change(screen.getByPlaceholderText('Register Number'), {
        target: { value: 'XYZ-5678' }
      });
      
      fireEvent.click(screen.getByText('Add Vehicle'));
      
      await waitFor(() => {
        expect(axios.post).toHaveBeenCalled();
      });
      
      const callArgs = axios.post.mock.calls[0];
      expect(callArgs[1]).toHaveProperty('brand');
      expect(callArgs[1]).toHaveProperty('fuelType');
      expect(callArgs[1]).toHaveProperty('registerNumber');
      expect(callArgs[1]).toHaveProperty('pricePerDay');
      expect(callArgs[1]).toHaveProperty('imageURl');
      expect(callArgs[1]).toHaveProperty('description');
    });
  });

  describe('Token Handling', () => {
    test('retrieves token from localStorage', async () => {
      const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
      axios.post.mockResolvedValueOnce({ data: { message: 'Success' } });

      renderVehicle();
      
      fireEvent.click(screen.getByText('Add Vehicle'));
      
      await waitFor(() => {
        expect(consoleLogSpy).toHaveBeenCalledWith('accessTokenmock-token-123');
      });
      
      consoleLogSpy.mockRestore();
    });
  });
});
