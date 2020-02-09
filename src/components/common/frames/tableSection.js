import React from "react";

/**
 * テキストボックスのレコード
 * props.titleName: 入力ボックスのタイトル
 * props.inputData: 入力値データ。key: stateの名前、value: 入力値
 */
export function TableSection(props) {
  return (
    <section>
      <h1>{props.header}</h1>
      <table>
        <tbody>
          {props.children}
        </tbody>
      </table>
    </section>
  );
}
