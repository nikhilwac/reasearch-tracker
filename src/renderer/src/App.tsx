import Button from './components/Button'
import Sidebar from './components/Sidebar'

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <div className="app">
      <Sidebar />
      {/* <Main /> */}
    </div>
  )
}

export default App
