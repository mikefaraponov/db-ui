/**
 * Created by leaf on 25.04.16.
 */
import './styles'

class Header extends React.Component {
  render(){
    return (
      <header className="Header">
        <input
          type="text"
          className="Header_search"
          placeholder="Search"
        />
      </header>
    )
  }
}

export default Header