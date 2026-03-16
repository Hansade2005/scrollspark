import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { NotFound } from './components/NotFound'
import { ThemeProvider } from './lib/theme-context'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App