/**
 * Created by leaf on 25.04.16.
 */
import './styles'  
  
class Content extends React.Component {
  render() {
    return (
    	<main className="Content">{this.props.children}</main>
    )
  }
}

export default Content