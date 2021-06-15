import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import {ThemeProvider} from 'styled-components'

import Dashboard from './pages/Dashboard';

import Layout from './components/Layout';
import dark from './styles/themes/dark';

const App: React.FC = () => {
    return (
        
           <ThemeProvider theme={dark} >
                <GlobalStyles />
                <Layout>
                   <Dashboard /> 
                </Layout>
           </ThemeProvider>
        
    )
}

export default App;