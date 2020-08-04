// import 文を使ってstyle.cssファイルを読み込む。
import "../assets/styles/style.scss";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SubComponent } from './sub-component';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello React!</h1>
        <SubComponent name="My Counter for TypeScript" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
