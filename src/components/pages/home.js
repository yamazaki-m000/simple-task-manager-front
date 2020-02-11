import { TableSection } from "components/common/frames/tableSection";
import { InputTextareaRecord, InputTextRecord } from "components/common/parts/inputRecord";
import * as pageInfo from "constants/pageInfo";
import React from "react";

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
    // inputRecordの属性情報
    const inputSetting = { onChange: this.handleChangeInputText }

    return (
      <aside>
        <TableSection header="Add task">
          <InputTextRecord titleName="task name: "
            inputData={{ name: "taskName", value: this.state.taskName }}
            inputSetting={{ placeholder: "task name", ...inputSetting }} />

          <InputTextareaRecord titleName="task details: "
            inputData={{ name: "taskName", value: this.state.taskName }}
            inputSetting={{ placeholder: "ask details", rows: "3", cols: "40", ...inputSetting }} />
        </TableSection>
      </aside>
    )
  }
}
