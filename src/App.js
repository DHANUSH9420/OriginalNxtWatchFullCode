import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import ThemeAndVideoContext from './context/ThemeAndVideoContext'
import SavedVideos from './components/SavedVideos'
import VideoDetailView from './components/VideoDetailView'
import TrendingVideos from './components/TrendingVideos'
import GamingVideos from './components/GamingVideos'

import './App.css'

// Replace your code here
class App extends Component {
  state = {isDarkTheme: false, savedVideos: [], activeTab: 'Home'}

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  onChangeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  addVideo = video => {
    const {savedVideos} = this.state
    const index = savedVideos.findIndex(eachVideo => eachVideo.id === video.id)
    if (index === -1) {
      this.setState({savedVideos: [...savedVideos, video]})
    } else {
      savedVideos.splice(index, 1)
      this.setState(savedVideos)
    }
  }

  removeVideo = id => {
    const {savedVideos} = this.state
    const updatedSavedVideos = savedVideos.filter(
      eachVideo => eachVideo.id !== id,
    )
    this.setState({savedVideos: updatedSavedVideos})
  }

  render() {
    const {isDarkTheme, activeTab, savedVideos} = this.state

    return (
      <ThemeAndVideoContext.Provider
        value={{
          savedVideos,
          activeTab,
          isDarkTheme,
          onChangeTheme: this.onChangeTheme,
          changeTab: this.changeTab,
          addVideo: this.addVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoDetailView}
          />
          <ProtectedRoute exact path="/trending" component={TrendingVideos} />
          <ProtectedRoute exact path="/gaming" component={GamingVideos} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/bad-path" component={NotFound} />
          <Redirect to="/bad-path" />
        </Switch>
      </ThemeAndVideoContext.Provider>
    )
  }
}
export default App
