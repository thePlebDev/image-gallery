import React from 'react'
import {ThemeProvider} from 'styled-components';
import {Switch,Route} from 'react-router-dom';

import ImageScroller from '../ImageScroller';
import Profile from '../Profile';
import NavBar from '../NavBar';
import Search from '../Search';
import NoMatch from '../NoMatch'

const App = ()=>{
  const theme={
    main:'#242582'
  }

  return(
    <div>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <ImageScroller />
          </Route>
          <Route exact path='/search/:query' component={Search}/>
          <Route exact path='/search/profile/:username' component={Profile}/>
          <Route component={NoMatch} />
        </Switch>
      </ThemeProvider>
    </div>
  )
}


export default App
