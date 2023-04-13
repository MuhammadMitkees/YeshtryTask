import ProductDetails from "./pages/ProductDetails";
import cssVariables from "./constants/cssVariables.css";
import "./App.css";
import "../src/fonts/montserrat/Montserrat-Regular.ttf";
import { UserProvider } from "./Context/UserContext";
function App() {
  const user = { quantity: 0 };
  return (
    <UserProvider>
      <ProductDetails />
    </UserProvider>
  );
}

export default App;
