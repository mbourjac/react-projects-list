import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { Home } from './pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Home />} />),
);

export const App = () => {
  return <RouterProvider router={router} />;
};
