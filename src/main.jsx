import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import App from './components/App';
import GlobalState from './components/context';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalState>
        <App/>
      </GlobalState> 
    </BrowserRouter>
  </StrictMode>
);