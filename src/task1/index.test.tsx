import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from "vitest";
import Task1 from '.';
import * as hooks from './hooks/useFetch';
import { mockUsers } from './services/userAPI';

// Mock the useFetch hook
// vi.mock('./hooks/useFetch', () => ({
//   useFetch: 
// }))


describe("Task1 Component", () => {
  it("renders users and filters them by search term", async () => {
    const testUsers = mockUsers.slice(0, 10);
    const mockHook = vi.spyOn(hooks, 'useFetch').mockReturnValue({
      data: testUsers,
      isLoading: false,
      error: undefined
    });
    render(<Task1 />);

    // Check that all users are rendered
    testUsers.forEach(user => {
      expect(screen.getByText(user.login)).toBeDefined();
    })

    const input = screen.getByTestId<HTMLInputElement>('search-input');
    fireEvent.change(input, { target: { value: 'test' } });
    
    expect(mockHook).toBeCalledWith(0, 'test');
  });

  it("shows no users found message when filter returns no results", async () => {
    const mockHook = vi.spyOn(hooks, 'useFetch').mockReturnValue({
      data: [],
      isLoading: false,
      error: 'No data'
    });
    render(<Task1 />);

    expect(screen.getByText('No data')).toBeDefined();
  });
});
