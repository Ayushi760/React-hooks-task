import logo from './logo.svg';
import './App.css';
import Items from './pages/Items';
import { ItemProvider } from './context/ItemContext';

function App() {
  return (
    <ItemProvider>
      <Items />
    </ItemProvider>
  );
}

export default App;
