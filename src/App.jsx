import { QuoterProvider } from './context/QuoterProvider'
import AppInsurance from "./components/AppInsurance"

function App() {
  return (
    <QuoterProvider>
      <AppInsurance />
    </QuoterProvider>
  )
}

export default App
