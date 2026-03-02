var editor = CodeMirror.fromTextArea(
    document.getElementById("editor"),
    {
        mode: "javascript",
        theme: "neo",
        lineWrapping: true,
        lineNumbers: true,
        readOnly: true,
    }
);