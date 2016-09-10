import './styles';
import debounce from 'lodash/debounce';


class Header extends React.Component {
  constructor(){
    super(...arguments);
    this.debouncedSearch = debounce(::this.debouncedSearch, 350);
  }
  debouncedSearch() {
    const {onClearSearchResults, onSearchVideo} = this.props;
    const searchStr = this.refs.searchStr.value.trim();
    if(searchStr.length) {
      onSearchVideo(searchStr);
    }
    else onClearSearchResults();
  }
  render(){
    return (
      <header className="Header">
        <input
          type="search"
          className="Header_search"
          placeholder="Search"
          onChange={this.debouncedSearch}
          ref="searchStr"
        />
      </header>
    )
  }
}

export default Header