import { API } from "aws-amplify";
import { TableSection } from "components/common/frames/tableSection";
import { InputTextareaRecord, InputTextRecord } from "components/common/parts/inputRecord";
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

  handleAddTask = async e => {
    e.preventDefault()
    await API.post("simple-task-manager-api", "prd/tasks", {
      headers: { "content-type": "application/json" },
      body: {
        name: this.state.name,
        date: this.state.date,
        task: {
          name: this.state.taskName,
          detail: this.state.taskDetails
        }
      }
    })

  }

  render() {
    // inputRecordの属性情報
    const inputSetting = { onChange: this.handleChangeInputText }

    return (
      <aside>
        <TableSection header="Add task">
          <InputTextRecord titleName="task name: "
            inputData={{ name: "taskName", value: this.state.taskName }}
            inputSetting={{ placeholder: "task name", ...inputSetting }} />

          <InputTextareaRecord titleName="task details: "
            inputData={{ name: "taskDetails", value: this.state.taskDetails }}
            inputSetting={{ placeholder: "ask details", rows: "3", cols: "40", ...inputSetting }} />

          <tr><td><Link to="" onClick={this.handleAddTask}>add</Link></td></tr>
        </TableSection>
      </aside>
    )
  }
}
