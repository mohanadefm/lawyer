import React from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';

function App() {
  return (
    <div dir="rtl" className="min-h-screen bg-white">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;