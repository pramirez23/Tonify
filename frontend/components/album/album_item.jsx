import React from 'react';
import { withRouter } from 'react-router-dom';
import AlbumContent from './album_content';

class AlbumItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    }
  }

  // componentDidMount() {
  //   const { id } = this.props.match.params;
  //   this.props.fetchAlbum(id).then(() => {
  //     this.setState({
  //       isLoading: false
  //     })
  //   });
  // }

  // componentDidUpdate(prevProps) {
  //   if (this.props.match.params.id !== prevProps.match.params.id) {
  //     const content = document.getElementsByClassName('main-content-container')[0];
  //     const { id } = this.props.match.params;

  //     content.scrollTo({ top: 0, behavior: "auto" });

  //     this.props.fetchAlbum(id).then(() => {
  //       this.setState({
  //         isLoading: false
  //       })
  //     });
  //   }
  // }

  render() {
    if (this.state.loading) {
      return (
        <div className="spinner-container">
          <i className="fas fa-spinner"></i>
        </div>
      )
    }

    if (!this.props.album) {
      return null;
    }

    const { album, songs, currentUser } = this.props;
    const artistId = album.artist_id;

    return (
      <AlbumContent
        album={album}
        songs={songs}
        currentUser={currentUser}
        artistId={artistId}
      />
    )
  }
}

export default withRouter(AlbumItem);