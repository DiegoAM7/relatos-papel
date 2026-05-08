import { AuthProvider } from './components/context/AuthContext';
import { CartProvider } from './components/context/CartContext';
import AppRouter from './router/AppRouter';

const App = () => {
    return (
        <AuthProvider>
            <CartProvider>
                <AppRouter />
            </CartProvider>
        </AuthProvider>
    );
};

export default App;