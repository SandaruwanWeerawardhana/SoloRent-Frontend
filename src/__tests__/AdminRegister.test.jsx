import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AdminRegister from '../Pages/Dashboard/Admin/AdminRegister';
import Swal from 'sweetalert2';

// Mock Swal
jest.mock('sweetalert2', () => ({
  fire: jest.fn(),
}));

// Mock fetch
global.fetch = jest.fn();

describe('AdminRegister', () => {
  beforeEach(() => {
    fetch.mockClear();
    Swal.fire.mockClear();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const renderAdminRegister = () => {
    return render(
      <BrowserRouter>
        <AdminRegister />
      </BrowserRouter>
    );
  };

  describe('Component Rendering', () => {
    test('renders registration form with title', () => {
      renderAdminRegister();
      expect(screen.getByText('Register New Admin')).toBeInTheDocument();
    });

    test('renders all input fields', () => {
      renderAdminRegister();
      
      expect(screen.getByPlaceholderText('Enter Your Email')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('password')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Confirm password')).toBeInTheDocument();
    });

    test('renders ADD button', () => {
      renderAdminRegister();
      expect(screen.getByText('ADD')).toBeInTheDocument();
    });

    test('renders all labels correctly', () => {
      renderAdminRegister();
      
      expect(screen.getByText('Email')).toBeInTheDocument();
      expect(screen.getByText('Name')).toBeInTheDocument();
      expect(screen.getAllByText('Password')[0]).toBeInTheDocument();
      expect(screen.getByText('Confirm password')).toBeInTheDocument();
    });
  });

  describe('Form Input Handling', () => {
    test('updates email field on input', () => {
      renderAdminRegister();
      
      const emailInput = screen.getByPlaceholderText('Enter Your Email');
      fireEvent.change(emailInput, { target: { value: 'admin@example.com' } });
      
      expect(emailInput.value).toBe('admin@example.com');
    });

    test('updates name field on input', () => {
      renderAdminRegister();
      
      const nameInput = screen.getByPlaceholderText('Name');
      fireEvent.change(nameInput, { target: { value: 'John Admin' } });
      
      expect(nameInput.value).toBe('John Admin');
    });

    test('updates password field on input', () => {
      renderAdminRegister();
      
      const passwordInput = screen.getByPlaceholderText('password');
      fireEvent.change(passwordInput, { target: { value: 'password123' } });
      
      expect(passwordInput.value).toBe('password123');
    });

    test('updates confirm password field on input', () => {
      renderAdminRegister();
      
      const confirmInput = screen.getByPlaceholderText('Confirm password');
      fireEvent.change(confirmInput, { target: { value: 'password123' } });
      
      expect(confirmInput.value).toBe('password123');
    });
  });

  describe('Form Validation', () => {
    test('shows alert when passwords do not match', async () => {
      const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
      renderAdminRegister();
      
      fireEvent.change(screen.getByPlaceholderText('Enter Your Email'), {
        target: { value: 'admin@example.com' }
      });
      fireEvent.change(screen.getByPlaceholderText('Name'), {
        target: { value: 'John Admin' }
      });
      fireEvent.change(screen.getByPlaceholderText('password'), {
        target: { value: 'password123' }
      });
      fireEvent.change(screen.getByPlaceholderText('Confirm password'), {
        target: { value: 'differentpassword' }
      });
      
      const submitButton = screen.getByText('ADD');
      fireEvent.click(submitButton);
      
      expect(alertMock).toHaveBeenCalledWith('Passwords do not match!');
      alertMock.mockRestore();
    });

    test('does not submit when passwords do not match', async () => {
      jest.spyOn(window, 'alert').mockImplementation(() => {});
      renderAdminRegister();
      
      fireEvent.change(screen.getByPlaceholderText('password'), {
        target: { value: 'password123' }
      });
      fireEvent.change(screen.getByPlaceholderText('Confirm password'), {
        target: { value: 'different' }
      });
      
      const submitButton = screen.getByText('ADD');
      fireEvent.click(submitButton);
      
      expect(fetch).not.toHaveBeenCalled();
    });
  });

  describe('Form Submission', () => {
    test('submits form successfully with matching passwords', async () => {
      fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ message: 'Success' }),
      });

      renderAdminRegister();
      
      fireEvent.change(screen.getByPlaceholderText('Enter Your Email'), {
        target: { value: 'admin@example.com' }
      });
      fireEvent.change(screen.getByPlaceholderText('Name'), {
        target: { value: 'John Admin' }
      });
      fireEvent.change(screen.getByPlaceholderText('password'), {
        target: { value: 'password123' }
      });
      fireEvent.change(screen.getByPlaceholderText('Confirm password'), {
        target: { value: 'password123' }
      });
      
      const submitButton = screen.getByText('ADD');
      fireEvent.click(submitButton);
      
      await waitFor(() => {
        expect(fetch).toHaveBeenCalledWith(
          'http://localhost:8081/register',
          expect.objectContaining({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
          })
        );
      });
      
      await waitFor(() => {
        expect(Swal.fire).toHaveBeenCalledWith({
          title: 'Admin Register Success',
          icon: 'success',
        });
      });
    });

    test('handles registration failure', async () => {
      fetch.mockResolvedValueOnce({
        ok: false,
        status: 400,
      });

      renderAdminRegister();
      
      fireEvent.change(screen.getByPlaceholderText('Enter Your Email'), {
        target: { value: 'admin@example.com' }
      });
      fireEvent.change(screen.getByPlaceholderText('password'), {
        target: { value: 'pass123' }
      });
      fireEvent.change(screen.getByPlaceholderText('Confirm password'), {
        target: { value: 'pass123' }
      });
      
      const submitButton = screen.getByText('ADD');
      fireEvent.click(submitButton);
      
      await waitFor(() => {
        expect(Swal.fire).toHaveBeenCalledWith({
          title: 'Admin Register Fail!',
          text: 'Required fill all text field',
          icon: 'error',
        });
      });
    });

    test('handles network error during submission', async () => {
      fetch.mockRejectedValueOnce(new Error('Network error'));

      renderAdminRegister();
      
      fireEvent.change(screen.getByPlaceholderText('password'), {
        target: { value: 'pass123' }
      });
      fireEvent.change(screen.getByPlaceholderText('Confirm password'), {
        target: { value: 'pass123' }
      });
      
      const submitButton = screen.getByText('ADD');
      fireEvent.click(submitButton);
      
      await waitFor(() => {
        expect(Swal.fire).toHaveBeenCalledWith({
          title: 'Admin Register Fail!',
          text: 'Required fill all text field',
          icon: 'error',
        });
      });
    });

    test('includes role as ADMIN in submission data', async () => {
      fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ message: 'Success' }),
      });

      renderAdminRegister();
      
      fireEvent.change(screen.getByPlaceholderText('Enter Your Email'), {
        target: { value: 'admin@example.com' }
      });
      fireEvent.change(screen.getByPlaceholderText('Name'), {
        target: { value: 'John' }
      });
      fireEvent.change(screen.getByPlaceholderText('password'), {
        target: { value: 'pass123' }
      });
      fireEvent.change(screen.getByPlaceholderText('Confirm password'), {
        target: { value: 'pass123' }
      });
      
      const submitButton = screen.getByText('ADD');
      fireEvent.click(submitButton);
      
      await waitFor(() => {
        expect(fetch).toHaveBeenCalled();
      });
      
      const callArgs = fetch.mock.calls[0];
      const body = JSON.parse(callArgs[1].body);
      expect(body.role).toBe('ADMIN');
    });
  });

  describe('Form Reset After Success', () => {
    test('clears form after successful registration', async () => {
      fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ message: 'Success' }),
      });

      renderAdminRegister();
      
      const emailInput = screen.getByPlaceholderText('Enter Your Email');
      const nameInput = screen.getByPlaceholderText('Name');
      
      fireEvent.change(emailInput, { target: { value: 'admin@example.com' } });
      fireEvent.change(nameInput, { target: { value: 'John' } });
      fireEvent.change(screen.getByPlaceholderText('password'), {
        target: { value: 'pass123' }
      });
      fireEvent.change(screen.getByPlaceholderText('Confirm password'), {
        target: { value: 'pass123' }
      });
      
      const submitButton = screen.getByText('ADD');
      fireEvent.click(submitButton);
      
      await waitFor(() => {
        expect(Swal.fire).toHaveBeenCalledWith({
          title: 'Admin Register Success',
          icon: 'success',
        });
      });
    });
  });
});
