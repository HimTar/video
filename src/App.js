import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";
import "./App.css";

function App() {
  const videoSrc = {
    type: "video",
    sources: [
      {
        src:
          "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
      },
    ],
  };

  return (
    <div className="App">
      <h1>Video Player</h1>

      <track
        kind="captions"
        label="English"
        srclang="en"
        src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt"
        default
      />
      <track
        kind="captions"
        label="Français"
        srclang="fr"
        src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt"
      />

      <Plyr
        source={videoSrc}
        options={{
          captions: {
            active: true,
          },
        }}
      />
    </div>
  );
}

export default App;
