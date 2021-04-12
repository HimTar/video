import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";
import "./App.css";

function App() {
  const videoSrc = {
    type: "video",
    sources: [
      {
        src: "https://youtu.be/BHACKCNDMW8",
        provider: "youtube",
      },
    ],
  };

  return (
    <div className="App">
      <h1>Video Player</h1>

      <Plyr source={videoSrc} />
    </div>
  );
}

export default App;
