import { render, screen } from '@testing-library/react';
import { describe, expect, it } from "vitest";
import { ThemeProvider } from '@emotion/react';
import { lightTheme } from 'src/task2/theme';
import Card from '.';

describe("Card Component", () => {
  it('should render the content text', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Card>Test card</Card>
      </ThemeProvider>
    );

    expect(screen.getByText('Test card')).toBeDefined();
  });

  it('should render the title text', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Card title='Test title'>Test card</Card>
      </ThemeProvider>
    );

    expect(screen.getByText('Test title')).toBeDefined();
  });
});