import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import './global.css'
import authRouter from './routes/authRoutes'
import { AuthLayout } from './components/layouts/authLayout';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthLayout>
        <RouterProvider router={authRouter} />
      </AuthLayout>
    </ThemeProvider>
  )
}

export default App;
