interface ToolbarElement {
  type: "component" | "element";
  tag: string;
  "props-config": {
    src: "String"; // Type is used to render Props Settings Form
    size: "Number";
    class: "List";
  };
  props: {
    // Used to render component on Page Editor when dropped
    src: "xyz.png";
    size: 80;
  };
  // Where the destination is. Eg: Some components can be put only in col and some can be put only in form class
  "draggable-class": "col";
}
