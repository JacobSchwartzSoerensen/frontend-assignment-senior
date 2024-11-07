import { FC, useState } from "react";
import Button from './components/Button';
import { ThemeProvider } from '@emotion/react'
import { lightTheme } from './theme';
import Card from './components/Card';

const Task2: FC = () => {
  const [buttonClicks, setButtonClicks] = useState<number>(0);

  return (
    <div>
      <p>Button clicks: {buttonClicks}</p>
      <ThemeProvider theme={lightTheme}>
        <Button onClick={() => setButtonClicks(buttonClicks + 1)} ariaLabel='Test button'>Test button</Button>
        <Card>Test card</Card>
      </ThemeProvider>
    </div>
  );
};

export default Task2;