import * as pageInfo from "constants/pageInfo";
import React from "react";
import { Link } from "react-router-dom";

/** ホーム画面 */
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    document.title = pageInfo.HOME.title;
  }

  /** 入力ボックスの入力値をstateに格納 */
  handleChangeInputText = e => {
      this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <aside>
        <section>
          <h1>Add task</h1>
          <table>
            <tbody>
              <tr>
                <th>
                  <div>task name: </div>
                </th>
                <td>
                  <input type="text" placeholder="task name" name="taskName" value={this.state.taskName} onChange={this.handleChangeInputText} />
                </td>
              </tr>
              <tr>
                <th>
                  <div>task details: </div>
                </th>
                <td>
                  <textarea rows="3" cols="40" placeholder="task details" name="taskDetails" value={this.state.taskDetails} onChange={this.handleChangeInputText} />
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="" onClick={this.handleAddTask}>add</Link>
                  &nbsp;&nbsp;
                  <Link to="" onClick={this.handleClear}>clear</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </aside>
    )
  }
}
