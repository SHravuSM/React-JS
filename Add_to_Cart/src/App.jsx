import './App.css'
import Home from './component/Home';
import StoreProvider from './context/Store';

function App() {

  return (
    <StoreProvider>

      <Home />

    </StoreProvider>
  )
}

export default App
