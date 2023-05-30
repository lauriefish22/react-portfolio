import React from 'react';
import ReactDOM from 'react-dom/client';

import PortfolioContainer from "./components/PortfolioContainer.js";
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

function App() {
    return (
        <div className='portfolio'>
            <PortfolioContainer />
        </div>
    );
}

export default App;
