import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit("reactjs");
  }

  onTermSubmit = async term => {
    // console.log(term);
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    // Check the output from the axios
    // console.log(response);
    // response.data.items to get the array
    this.setState({
      videos: response.data.items,

      // Show first video result as the default video
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              {/* Passing the single video that clicked */}
              <VideoDetail video={this.state.selectedVideo} />
            </div>

            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
