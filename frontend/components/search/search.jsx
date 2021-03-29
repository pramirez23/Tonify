import React from 'react';
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const { searchResults, history } = this.props;
    return (
      <div className={!searchResults ? "browse-genres-container" : "hidden"}>
        <h1 className="search-title">Browse all</h1>

        <div className="search-index">
          <div
            id="hiphop"
            onClick={() => history.push('/genres/hiphop')}
            className="genre-button">Hip hop</div>
          <div
            id="pop"
            onClick={() => history.push('/genres/pop')}
            className="genre-button">Pop</div>
          <div
            id="rock"
            onClick={() => history.push('/genres/rock')}
            className="genre-button">Rock</div>
          <div
            id="rnb"
            onClick={() => history.push('/genres/rnb')}
            className="genre-button">R&B</div>
        </div>
      </div>
    );
  }
}
 
export default Search;