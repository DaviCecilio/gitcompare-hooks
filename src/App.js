import React from 'react'
import ReposContextProvider from './services/repoContext'
import GlobalStyles from './assets/styles/globalStyles'
import Home from './pages/Home'

function App() {
  return (
    <>
      <GlobalStyles />

      <div className="mainApp">
        <ReposContextProvider>
          <Home />
        </ReposContextProvider>
      </div>
      
    </>
  )
}

export default App
