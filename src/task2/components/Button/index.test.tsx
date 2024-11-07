import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from "vitest";
import Button from '.';
import { ThemeProvider } from '@emotion/react';
import { lightTheme } from 'src/task2/theme';

describe("Button Component", () => {
  it('should call onClick when clicked', () => {
    const clickHandler = vi.fn();
    render(
      <ThemeProvider theme={lightTheme}>
        <Button onClick={clickHandler}>Test</Button>
      </ThemeProvider>
    );

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(clickHandler).toHaveBeenCalled();
  });

  it('should not call onClick when disabled', () => {
    const clickHandler = vi.fn();
    render(
      <ThemeProvider theme={lightTheme}>
        <Button onClick={clickHandler} disabled>Test</Button>
      </ThemeProvider>
    );

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(clickHandler).not.toHaveBeenCalled();
  });

  it('should render the button text', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Button>Test button</Button>
      </ThemeProvider>
    );

    expect(screen.getByText('Test button')).toBeDefined();
  });
});