const diagram = new dhx.Diagram("diagram", {
  scale:0.8
});

const editor = new dhx.DiagramEditor("editor", {
  controls: { autoLayout: false },
  scale: 0.8
});

const editorCont = document.querySelector("#editor");
const diagramCont = document.querySelector("#diagram");
const control = document.querySelector("#control");
const container = document.querySelector("#container");

const withEditor = "dhx_sample-container__with-editor";
const withoutEditor = "dhx_sample-container__without-editor";

function expand() {
  diagramCont.style.display = "none";
  control.style.display = "none";
  editorCont.style.display = "block";
  container.classList.remove(withoutEditor);
  container.classList.add(withEditor);
}

function collapse() {
  diagramCont.style.display = "block";
  control.style.display = "flex";
  editorCont.style.display = "none";
  container.classList.remove(withEditor);
  container.classList.add(withoutEditor);
}

function runEditor() {
  expand();
  editor.import(diagram);
}

editor.events.on("ApplyButton", function () {
  collapse();
  diagram.data.parse(editor.serialize());
});

editor.events.on("ResetButton", function () {
  collapse();
});

// loading data into the diagram
diagram.data.parse(verticalTree);