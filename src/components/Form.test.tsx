import { screen, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from './Form';
import userEvent from '@testing-library/user-event';

describe('Main renders', () => {
  test('Home page elements are rendered', () => {
    render(<Form />);

    expect(screen.getByRole('heading', { name: /welcome to focus!/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /register your account/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /username/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  test('Inputs are heighlighted on click', async () => {
    render(<Form />);

    const usernameInput = screen.getByLabelText('Username');
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    await userEvent.click(usernameInput);
    await userEvent.click(emailInput);
    await userEvent.click(passwordInput);

    expect(usernameInput).toHaveClass('focus:border-[#7433FF]');
    expect(emailInput).toHaveClass('focus:border-[#7433FF]');
    expect(passwordInput).toHaveClass('focus:border-[#7433FF]');
  });
});

describe('Form submission', () => {
  test('Errors displaying when inputs are empty', async () => {
    render(<Form />);

    await userEvent.click(screen.getByText(/login/i));

    expect(screen.getByTestId('username-error')).toHaveTextContent(/name is required/i);
    expect(screen.getByTestId('email-error')).toHaveTextContent(/email is required/i);
    expect(screen.getByTestId('password-error')).toHaveTextContent(/password is required/i);
  });

  test('Username field validated based on input type', async () => {
    render(<Form />);

    const usernameInput = screen.getByLabelText(/username/i);
    const loginButton = screen.getByRole('button', { name: /login/i });
    const usernameError = screen.getByTestId('username-error');

    await userEvent.type(usernameInput, 'sa');
    await userEvent.click(loginButton);
    expect(usernameError).toHaveTextContent(/Minimum 3 characters required/i);

    await userEvent.clear(usernameInput);
    await userEvent.type(usernameInput, '1245664');
    await userEvent.click(loginButton);
    expect(usernameError).toHaveTextContent(/Only Letters are allowed/i);
  });

  test('Email field validated based on input type', async () => {
    render(<Form />);

    const emailInput = screen.getByLabelText(/email/i);
    const emailError = screen.getByTestId('email-error');
    const loginButton = screen.getByRole('button', { name: /login/i });

    await userEvent.type(emailInput, 'aimansaeed');
    await userEvent.click(loginButton);
    expect(emailError).toHaveTextContent(/Enter a valid email/);
  });

  test('Email field validated based on input type', async () => {
    render(<Form />);
    const passwordInput = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole('button', { name: /login/i });
    const passwordError = screen.getByTestId('password-error');

    await userEvent.type(passwordInput, '12vg');
    await userEvent.click(loginButton);
    expect(passwordError).toHaveTextContent(/Minimum 8 character required/i);
  });

  test('Show success message if form is correct', async () => {
    render(<Form />);

    const usernameInput = screen.getByLabelText(/username/i);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole('button', { name: /login/i });

    await userEvent.type(usernameInput, 'aimansaeed');
    await userEvent.type(emailInput, 'aiman@gmail.com');
    await userEvent.type(passwordInput, 'aimansaeed1234');
    await userEvent.click(loginButton);

    await waitFor(() => {
      expect(screen.getByText('Account successfully Created!')).toBeInTheDocument();
      expect(screen.getByText('aimansaeed')).toBeInTheDocument();
      expect(screen.getByText('aiman@gmail.com')).toBeInTheDocument();
    });
  });
});
