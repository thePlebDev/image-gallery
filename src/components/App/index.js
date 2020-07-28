import React from 'react'
import {ThemeProvider} from 'styled-components';
import {Switch,Route} from 'react-router-dom';

import ImageScroller from '../ImageScroller';
import Profile from '../Profile';
import NavBar from '../NavBar';

const App = ()=>{
  const theme={
    main:'#242582'
  }

  return(
    <div>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path='/'>
            <ImageScroller />
          </Route>
          <Route exact path='/profile/:username' component={Profile}/>
          <Route exact path='/navbar' component={NavBar}/>
        </Switch>
      </ThemeProvider>
    </div>
  )
}


export default App
