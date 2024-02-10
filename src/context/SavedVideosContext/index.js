import {createContext} from 'react'

const SavedVideosContext = createContext({
  savedVideos: [],
  saveVideo: () => {},
  removeSavedVideo: () => {},
})

export default SavedVideosContext
