/**
 * Created by leaf on 24.04.16.
 */
import './styles'
import Content from '../../components/Content'
import Header from '../../components/Header'
import VideoList from '../../components/VideoList'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {searchVideos, clearSearchResults} from '../../redux/actions/videos'

@connect(mapStateToProps, mapDispatchToProps)
class App extends React.Component {
  render() {
    const {
      videos, wait, errMsg,
      onClearSearchResults, onSearchVideo
    } = this.props;
    return (
      <div className="App">
        <Header 
          onSearchVideo={onSearchVideo} 
          onClearSearchResults={onClearSearchResults}
        />
        <Content>
        	<VideoList 
            videos={videos} 
            wait={wait} 
            errMsg={errMsg}
          />
        </Content>
      </div>
    )
  }
}

function mapStateToProps({youTubeApi}) {
  return {
    ...youTubeApi
  }
}

function mapDispatchToProps(dispatch) {
  return {...bindActionCreators({
      onSearchVideo: searchVideos,
      onClearSearchResults: clearSearchResults
  }, dispatch)
  }
}

export default App