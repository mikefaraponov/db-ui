/**
 * Created by leaf on 25.04.16.
 */
import './styles'
import classnames from 'classnames'
import list from './list'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import sidebarActions from '../../redux/actions/sidebar'

@connect(stateToProps, dispatchToProps)
class Sidebar extends React.Component {
  render() {
    const {active, onToggle} = this.props
    const SidebarContainer = classnames("Sidebar-Container", {active})
    const items = list.map(
      (name, i) => <li className="Sidebar_list-item" key={i}>{name}</li>
    )
    return (
      <aside className={SidebarContainer}>
        <div className="Sidebar">
          <span className="Sidebar_logo"><i className="fa fa-database"/> blanket</span>
          <div className="Sidebar_times" onClick={onToggle}>+</div>
          <ul className="Sidebar_list">
            {items}
          </ul>
        </div>
        <div
          className="Splash"
          onClick={onToggle}
        ></div>
      </aside>
    )
  }
}

function stateToProps({sidebar: {active}}){
  return {
    active
  }
}

function dispatchToProps(dispatch){
  return {
    ...bindActionCreators({
      onToggle: sidebarActions.toggle
    }, dispatch)
  }
}

export default Sidebar