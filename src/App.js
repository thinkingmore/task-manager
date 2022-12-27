import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'next-themes';
import { RouterProvider } from 'react-router-dom';
import { router } from './components/Routes/Routes';
import { useTheme } from 'next-themes';

function App() {

   return (
    <div className="App">
        <ThemeProvider defaultTheme='light'>
          <RouterProvider router={router}></RouterProvider>
        </ThemeProvider>   
    </div>
  );
}

export default App;
