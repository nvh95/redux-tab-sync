import preact from 'preact';

import Map from './Map';
import Slider from './Slider';
import Text from './Text';

const article = "https://medium.com/@Scarysize/syncing-redux-stores-across-browser-tabs-fff04f975423#.ipvddmb73";

export default class App extends preact.Component {
  render() {
    return (
      <div>
        <h1>Redux Tab Sync</h1>
        <p>
          This is a example built for&nbsp;
          <a href={article}target="_blank">
            "Syncing Redux Stores across Browser Tabs"
          </a> (Medium)
        </p>
        <hr/>
        <div className="parts">
          <section>
            <h2>Drag this</h2>
            <Slider />
          </section>
          <section>
            <h2>Type something</h2>
            <Text />
          </section>
          <section>
            <h2>Pan & Zoom</h2>
            <Map />
          </section>
        </div>
      </div>
    );
  }
}
