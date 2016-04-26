/**
 * Created by leaf on 24.04.16.
 */
import './styles'
import Sidebar from '../../components/Sidebar'
import Content from '../../components/Content'
import Header from '../../components/Header'
import {connect} from 'react-redux'



class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header/>
        <Sidebar/>
        <Content>
        	
        </Content>
      </div>
    )
  }
}

export default App