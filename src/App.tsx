import { useState } from 'react'
import explorer from './data/folderData.js'
import Folder from './components/Folder.jsx'

function App() {
  const [explorerData, setExplorerData] = useState(explorer)
    console.log('explorerData',explorerData)
    console.log('setExplorerData',setExplorerData)

  return (
    <>
        <div>
            <Folder explorer={explorerData}/>
        </div>
    </>
  )
}

export default App
