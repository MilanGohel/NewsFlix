
import React, { useState} from 'react'
// import LoadingBar from 'react-top-loading-bar'
import scroll from './App.css'
import { Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import News from './components/News'
import { BrowserRouter as Router,Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
 
function App(){
  const [mode,setMode] = useState('light');
  const [progress,setProgress] = useState(0);
  const toggleMode = ()=>{
    // if(mode==='dark'){
    //   setMode('light')
    // }
    // else{
    //   setMode('dark')
    // }
    mode==='dark'?setMode('light'):setMode('dark');
  }
  return <>
    <div>
          <LoadingBar
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
          height={4}
          shadow={true}
          />
        <Router>
        <NavBar mode={mode} toggleMode={toggleMode}/>
          <Routes>
          <Route exact key='general' path='/' style={scroll} element={<News setProgress={setProgress} key='home' country='in' pageSize={12} category='general' mode={mode}/>}/>
          <Route exact path='/entertainment' element={<News setProgress={setProgress} key='entertainment' country='in' pageSize={12} category='entertainment' mode={mode}/>}/>
          <Route exact path='/health' element={<News setProgress={setProgress} key='health' country='in' pageSize={12} category='health' mode={mode}/>}/>
          <Route exact path='/business' element={<News setProgress={setProgress} key='business' country='in' pageSize={12} category='business' mode={mode}/>}/>
          <Route exact path='/business' element={<News setProgress={setProgress} key='business' country='in' pageSize={12} category='business' mode={mode}/>}/>
          <Route exact path='/science' element={<News setProgress={setProgress} key='science' country='in' pageSize={12} category='science' mode={mode}/>}/>
          <Route exact path='/sports' element={<News setProgress={setProgress} key='sports' country='in' pageSize={12} category='sports' mode={mode}/>}/>
          <Route exact path='/technology' element={<News setProgress={setProgress} key='technology' country='in' pageSize={12} category='technology' mode={mode}/>}/>
          </Routes>
        </Router>   
      </div> 
      </>
}

export default App


