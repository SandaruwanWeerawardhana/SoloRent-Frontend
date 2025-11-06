import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AdminLogin from '../Pages/Dashboard/Admin/AdminLogin';
import axios from 'axios';
import Swal from 'sweetalert2';

// Mock axios
jest.mock('axios');

// Mock Swal
jest.mock('sweetalert2', () => ({
  fire: jest.fn(),
}));

// Mock useNavigate
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('AdminLogin', () => {
  beforeEach(() => {
    axios.post.mockClear();
    Swal.fire.mockClear();
    mockNavigate.mockClear();
    localStorage.clear();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const renderAdminLogin = () => {
    return render(
      <BrowserRouter>
        <AdminLogin />
      </BrowserRouter>
    );
  };

  describe('Component Rendering', () => {
    test('renders login form with title', () => {
      renderAdminLogin();
      expect(screen.getByText('Sign in for Admin Only')).toBeInTheDocument();
    });

    test('renders logo image', () => {
      renderAdminLogin();
      const logo = screen.getByAltText('logo');
      expect(logo).toBeInTheDocument();
    });

    test('renders email input field', () => {
      renderAdminLogin();
      expect(screen.getByPlaceholderText('name@gmail.com')).toBeInTheDocument();
    });

    test('renders password input field', () => {
      renderAdminLogin();
      expect(screen.getByPlaceholderText('••••••••')).toBeInTheDocument();
    });

    test('renders sign in button', () => {
      renderAdminLogin();
      expect(screen.getByText('Sign in')).toBeInTheDocument();
    });

    test('renders Email label', () => {
      renderAdminLogin();
      expect(screen.getByText('Email')).toBeInTheDocument();
    });

    test('renders Password label', () => {
      renderAdminLogin();
      expect(screen.getByText('Password')).toBeInTheDocument();
    });
  });

  describe('Form Input Handling', () => {
    test('updates email field on input', () => {
      renderAdminLogin();
      
      const emailInput = screen.getByPlaceholderText('name@gmail.com');
      fireEvent.change(emailInput, { target: { value: 'admin@example.com' } });
      
      expect(emailInput.value).toBe('admin@example.com');
    });

    test('updates password field on input', () => {
      renderAdminLogin();
      
      const passwordInput = screen.getByPlaceholderText('••••••••');
      fireEvent.change(passwordInput, { target: { value: 'password123' } });
      
      expect(passwordInput.value).toBe('password123');
    });

    test('email input has correct type', () => {
      renderAdminLogin();
      const emailInput = screen.getByPlaceholderText('name@gmail.com');
      expect(emailInput).toHaveAttribute('type', 'email');
    });

    test('password input has correct type', () => {
      renderAdminLogin();
      const passwordInput = screen.getByPlaceholderText('••••••••');
      expect(passwordInput).toHaveAttribute('type', 'password');
    });
  });

  describe('Form Submission - Success', () => {
    test('submits form successfully and navigates to dashboard', async () => {
      const mockToken = 'mock-jwt-token-12345';
      axios.post.mockResolvedValueOnce({
        data: { access_token: mockToken },
      });

      renderAdminLogin();
      
      fireEvent.change(screen.getByPlaceholderText('name@gmail.com'), {
        target: { value: 'admin@example.com' }
      });
      fireEvent.change(screen.getByPlaceholderText('••••••••'), {
        target: { value: 'password123' }
      });
      
      const submitButton = screen.getByText('Sign in');
      fireEvent.click(submitButton);
      
      await waitFor(() => {
        expect(axios.post).toHaveBeenCalledWith(
          'http://localhost:8081/login',
          expect.objectContaining({
            username: 'admin@example.com',
            password: 'password123',
          })
        );
      });
      
      await waitFor(() => {
        expect(localStorage.getItem('token')).toBe(mockToken);
      });
      
      await waitFor(() => {
        expect(mockNavigate).toHaveBeenCalledWith('/dashboard');
      });
    });

    test('stores token in localStorage on successful login', async () => {
      const mockToken = 'test-token-abc';
      axios.post.mockResolvedValueOnce({
        data: { access_token: mockToken },
      });

      renderAdminLogin();
      
      fireEvent.change(screen.getByPlaceholderText('name@gmail.com'), {
        target: { value: 'admin@test.com' }
      });
      fireEvent.change(screen.getByPlaceholderText('••••••••'), {
        target: { value: 'pass' }
      });
      
      fireEvent.click(screen.getByText('Sign in'));
      
      await waitFor(() => {
        expect(localStorage.getItem('token')).toBe(mockToken);
      });
    });
  });

  describe('Form Submission - Failure', () => {
    test('shows error message when login fails', async () => {
      axios.post.mockRejectedValueOnce(new Error('Invalid credentials'));

      renderAdminLogin();
      
      fireEvent.change(screen.getByPlaceholderText('name@gmail.com'), {
        target: { value: 'wrong@example.com' }
      });
      fireEvent.change(screen.getByPlaceholderText('••••••••'), {
        target: { value: 'wrongpassword' }
      });
      
      const submitButton = screen.getByText('Sign in');
      fireEvent.click(submitButton);
      
      await waitFor(() => {
        expect(Swal.fire).toHaveBeenCalledWith({
          title: 'Admin Login Fail!',
          text: 'Required Correct Username And Password',
          icon: 'error',
        });
      });
    });

    test('does not navigate when login fails', async () => {
      axios.post.mockRejectedValueOnce(new Error('Network error'));

      renderAdminLogin();
      
      fireEvent.change(screen.getByPlaceholderText('name@gmail.com'), {
        target: { value: 'admin@example.com' }
      });
      fireEvent.change(screen.getByPlaceholderText('••••••••'), {
        target: { value: 'password' }
      });
      
      fireEvent.click(screen.getByText('Sign in'));
      
      await waitFor(() => {
        expect(Swal.fire).toHaveBeenCalled();
      });
      
      expect(mockNavigate).not.toHaveBeenCalled();
    });

    test('does not store token when login fails', async () => {
      axios.post.mockRejectedValueOnce(new Error('Auth error'));

      renderAdminLogin();
      
      fireEvent.change(screen.getByPlaceholderText('name@gmail.com'), {
        target: { value: 'admin@example.com' }
      });
      fireEvent.change(screen.getByPlaceholderText('••••••••'), {
        target: { value: 'wrong' }
      });
      
      fireEvent.click(screen.getByText('Sign in'));
      
      await waitFor(() => {
        expect(Swal.fire).toHaveBeenCalled();
      });
      
      expect(localStorage.getItem('token')).toBeNull();
    });

    test('handles response without token', async () => {
      axios.post.mockResolvedValueOnce({
        data: { message: 'No token' },
      });

      renderAdminLogin();
      
      fireEvent.change(screen.getByPlaceholderText('name@gmail.com'), {
        target: { value: 'admin@example.com' }
      });
      fireEvent.change(screen.getByPlaceholderText('••••••••'), {
        target: { value: 'password' }
      });
      
      fireEvent.click(screen.getByText('Sign in'));
      
      await waitFor(() => {
        expect(Swal.fire).toHaveBeenCalledWith({
          title: 'Admin Login Fail!',
          text: 'Required Correct Username And Password',
          icon: 'error',
        });
      });
    });
  });

  describe('Form Data Structure', () => {
    test('sends correct data structure to API', async () => {
      axios.post.mockResolvedValueOnce({
        data: { access_token: 'token' },
      });

      renderAdminLogin();
      
      fireEvent.change(screen.getByPlaceholderText('name@gmail.com'), {
        target: { value: 'test@example.com' }
      });
      fireEvent.change(screen.getByPlaceholderText('••••••••'), {
        target: { value: 'testpass' }
      });
      
      fireEvent.click(screen.getByText('Sign in'));
      
      await waitFor(() => {
        expect(axios.post).toHaveBeenCalledWith(
          'http://localhost:8081/login',
          expect.objectContaining({
            username: 'test@example.com',
            password: 'testpass',
          })
        );
      });
    });
  });
});
