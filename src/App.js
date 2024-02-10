import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import ThemeContext from './context/ThemeContext'
import SavedVideosContext from './context/SavedVideosContext'
import './App.css'

class App extends Component {
  state = {
    isDark: false,
    savedVideos: [],
  }

  setTheme = () => this.setState(prevState => ({isDark: !prevState.isDark}))

  saveVideo = video =>
    this.setState(prevState => {
      const savedVideo = prevState.savedVideos.find(
        videoItem => videoItem.id === video.id,
      )
      return {
        savedVideos: savedVideo
          ? prevState.savedVideos
          : [...prevState.savedVideos, video],
      }
    })

  removeSavedVideo = videoId =>
    this.setState(prevState => ({
      savedVideos: prevState.savedVideos.filter(video => video.id !== videoId),
    }))

  render() {
    const {isDark, savedVideos} = this.state
    return (
      <SavedVideosContext.Provider
        value={{
          savedVideos,
          removeSavedVideo: this.removeSavedVideo,
          saveVideo: this.saveVideo,
        }}
      >
        <ThemeContext.Provider value={{isDark, setTheme: this.setTheme}}>
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <ProtectedRoute
              exact
              path="/:route/:id"
              component={VideoItemDetails}
            />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </ThemeContext.Provider>
      </SavedVideosContext.Provider>
    )
  }
}

export default App
