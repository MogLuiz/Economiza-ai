import React from 'react';
import GlobalStyles from './styles/GlobalStyles';

import Dashboard from './pages/Dashboard';

import Layout from './components/Layout';

const App: React.FC = () => {
    return (
        <>
            <GlobalStyles />
            <Layout />
        </>
    )
}

export default App;