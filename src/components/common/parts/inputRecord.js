import React from "react";

/**
 * テキストボックスのレコード
 * props.titleName: 入力ボックスのタイトル
 * props.inputData: 入力値データ。key: stateの名前、value: 入力値
 */
export function InputTextRecord(props) {
  return (
    <tr>
      <th>{props.titleName}</th>
      <td>
        <input type="text" {...props.inputData} {...props.inputSetting} />
      </td>
    </tr>
  );
}

/**
 * テキストエリアボックスのレコード
 * props.titleName: 入力ボックスのタイトル
 * props.inputData: 入力値データ。key: stateの名前、value: 入力値
 */
export function InputTextareaRecord(props) {
  return (
    <tr>
      <th>{props.titleName}</th>
      <td>
        <textarea {...props.inputData} {...props.inputSetting} />
      </td>
    </tr>
  );
}
