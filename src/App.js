import React from 'react';
import './App.css';

import AppBar from './components/appbar';
import PricingPlanList from './components/pricingPlanList';

function App() {
  return (
    <div className="container">
      <AppBar />
      <PricingPlanList />
    </div>
  );
}

export default App;
