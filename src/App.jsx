import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import './global.css'
import router from './routes'
import { AuthLayout } from './components/layouts/authLayout';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthLayout>
        <RouterProvider router={router} />
      </AuthLayout>
    </ThemeProvider>
  )
}

export default App;
