import { ThemeProvider } from 'styled-components'
import './App.css'
import theme from './assets/styles/theme'
import Dashboard from './page/Dashboard'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  )
}

export default App
