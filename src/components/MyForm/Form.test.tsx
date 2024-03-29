import { screen, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MyForm } from '.';
import userEvent from '@testing-library/user-event';

describe('Main renders', () => {
  test('Home page elements are rendered', () => {
    render(<MyForm />);

    expect(screen.getByRole('heading', { name: /welcome to focus!/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /register your account/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /username/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  test('Inputs are highlighted on click', async () => {
    render(<MyForm />);

    const usernameInput = screen.getByLabelText('Username');
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    await userEvent.click(usernameInput);
    await userEvent.click(emailInput);
    await userEvent.click(passwordInput);

    expect(usernameInput).toHaveStyle('border-color: custom-purple');
    expect(emailInput).toHaveStyle('border-color: custom-purple');
    expect(passwordInput).toHaveStyle('border-color: custom-purple');
  });
});

describe('Form submission', () => {
  test('Errors displaying when inputs are empty', async () => {
    render(<MyForm />);

    await userEvent.click(screen.getByText(/login/i));

    expect(screen.getByTestId('input-error-username')).toHaveTextContent(/username is required/i);
    expect(screen.getByTestId('input-error-email')).toHaveTextContent(/email is required/i);
    expect(screen.getByTestId('input-error-password')).toHaveTextContent(/password is required/i);
  });

  test('Username field validated based on input type', async () => {
    render(<MyForm />);

    const usernameInput = screen.getByLabelText(/username/i);
    const loginButton = screen.getByRole('button', { name: /login/i });

    await userEvent.type(usernameInput, 'sa');
    await userEvent.click(loginButton);

    const usernameError = screen.getByTestId('input-error-username');
    expect(usernameError).toHaveTextContent(/Minimum 3 characters required/i);

    await userEvent.clear(usernameInput);
    await userEvent.type(usernameInput, '1245664');
    await userEvent.click(loginButton);

    expect(usernameError).toHaveTextContent(/Only Letters are allowed/i);
  });

  test('Email field validated based on input type', async () => {
    render(<MyForm />);

    const emailInput = screen.getByLabelText(/email/i);
    const loginButton = screen.getByRole('button', { name: /login/i });

    await userEvent.type(emailInput, 'aimansaeed');
    await userEvent.click(loginButton);
    const emailError = screen.getByTestId('input-error-email');

    expect(emailError).toHaveTextContent(/Enter a valid email/);
  });

  test('Password field validated based on input type', async () => {
    render(<MyForm />);
    const passwordInput = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole('button', { name: /login/i });

    await userEvent.type(passwordInput, '12vg');
    await userEvent.click(loginButton);
    const passwordError = screen.getByTestId('input-error-password');

    expect(passwordError).toHaveTextContent(/Minimum 8 character required/i);
  });

  test('Show success message if form is correct', async () => {
    render(<MyForm />);

    const usernameInput = screen.getByLabelText(/username/i);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole('button', { name: /login/i });

    await userEvent.type(usernameInput, 'aimansaeed');
    await userEvent.type(emailInput, 'aiman@gmail.com');
    await userEvent.type(passwordInput, 'aimansaeed1234');
    await userEvent.click(loginButton);

    await waitFor(() => {
      expect(screen.getByText(/Account successfully created/i)).toBeInTheDocument();
      expect(screen.getByText('aimansaeed')).toBeInTheDocument();
      expect(screen.getByText('aiman@gmail.com')).toBeInTheDocument();
    });
  });
});
