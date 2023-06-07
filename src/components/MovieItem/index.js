// Write your code here

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {data} = props
  const {thumbnailUrl, videoUrl} = data

  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button type="button" className="trigger-button">
            <img src={thumbnailUrl} alt="thumbnail" />
          </button>
        }
      >
        {close => (
          <>
            <div className="video-container">
              <ReactPlayer url={videoUrl} />
            </div>
            <button
              type="button"
              data-testid="closeButton"
              className="close-button"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
