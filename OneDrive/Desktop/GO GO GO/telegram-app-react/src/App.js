import { useEffect } from 'react';
import './App.css';
const WebApp = window.Telegram.WebApp;

function App() {

  useEffect( () => {
    WebApp.ready();
  }, [])
  const onClose = () => {
    WebApp.close()
  }
  return (
    <div className="App">
      <button>Закрити</button>
    </div>
  );
}

export default App;
