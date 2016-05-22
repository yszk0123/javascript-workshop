// $ npm i -S react-codemirror codemirror
import React from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/markdown/markdown';

class TextEditor extends React.Component {
  render() {
    return (
      <CodeMirror
        options={{
          mode: 'javascript'
        }}
      />
    );
  }
}

export default TextEditor;
