import { Theme } from '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      primaryDarker: string;
    },
    borders: {
      radius: string;
    },
    shadows: {
      default: string;
    }
  }
}

// Create a lightTheme object
export const lightTheme: Theme = {
  colors: {
    primary: '#e3f2fd',
    primaryDarker: '#747b81'
  },
  borders: {
    radius: '4px'
  },
  shadows: {
    default: '0 0 10px 4px #d9d8d8'
  }
};

// Create a darkTheme object
export const darkTheme: Theme = {
  colors: {
    primary: '#42a5f5',
    primaryDarker: '#28608d'
  },
  borders: {
    radius: '4px'
  },
  shadows: {
    default: '0 0 10px 4px #d9d8d8'
  }
};