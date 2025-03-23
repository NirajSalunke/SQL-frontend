import { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-github_dark";
import "ace-builds/src-noconflict/ext-language_tools";

const SQLeditor = () => {
  const [query, setQuery] = useState("");

  const handleQueryChange = (newQuery: string) => {
    setQuery(newQuery);
  };

  return (
    <AceEditor
      mode="sql"
      theme="github_dark"
      name="full-featured-sql-editor"
      fontSize={14}
      width="100%"
      height="100%"
      value={query}
      onChange={handleQueryChange}
      setOptions={{
        selectionStyle: "text",
        highlightActiveLine: true,
        highlightSelectedWord: true,
        readOnly: false,
        cursorStyle: "smooth",
        mergeUndoDeltas: "always",
        behavioursEnabled: true,
        wrapBehavioursEnabled: true,
        autoScrollEditorIntoView: true,
        hScrollBarAlwaysVisible: false,
        vScrollBarAlwaysVisible: false,
        highlightGutterLine: true,
        animatedScroll: true,
        showInvisibles: false,
        showPrintMargin: false,
        printMarginColumn: 80,
        fadeFoldWidgets: true,
        showFoldWidgets: true,
        showLineNumbers: true,
        showGutter: true,
        displayIndentGuides: true,
        fontFamily: "monospace",
        scrollSpeed: 2,
        dragDelay: 150,
        dragEnabled: true,
        tooltipFollowsMouse: true,
        firstLineNumber: 1,
        overwrite: false,
        newLineMode: "unix",
        useWorker: false,
        useSoftTabs: true,
        tabSize: 4,
        wrap: true,
        foldStyle: "markbegin",
        enableMultiselect: true,
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        spellcheck: false,
        useElasticTabstops: true,
      }}
    />
  );
};

export default SQLeditor;
