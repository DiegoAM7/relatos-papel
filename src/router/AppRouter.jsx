import { Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from '../components/user/ProtectedRoute';
import MainLayout from '../layouts/MainLayout';
import BookPage from '../pages/BookPage';
import CheckoutPage from '../pages/CheckoutPage';
import HomePage from '../pages/HomePage';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/book/:id" element={<BookPage />} />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
