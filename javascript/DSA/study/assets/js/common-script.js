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

var editors = document.querySelectorAll(".code-editor");

editors.forEach(function (textarea) {
  CodeMirror.fromTextArea(textarea, {
    mode: "javascript",
    theme: "neo",
    lineWrapping: true,
    lineNumbers: true,
    readOnly: true,
  });
});

/*
<textarea class="code-editor">
test
</textarea>
*/