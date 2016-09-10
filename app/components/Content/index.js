import './styles';
  
class Content extends React.Component {
  render() {
    return (
    	<main className="Content">{this.props.children}</main>
    );
  };
}

export default Content;