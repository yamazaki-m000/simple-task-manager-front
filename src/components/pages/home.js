import React from "react"
import * as pageInfo from "constants/pageInfo";

/** ホーム画面 */
export default class Home extends React.Component {
  constructor(props) {
      super(props);
      this.state = {};
  }

  componentDidMount() {
    document.title = pageInfo.HOME.title;
}

  render() {
    return (
      <div>
        home
      </div>
    )
  }
}
