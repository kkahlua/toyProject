export default function Nodes({ $target, initialState, onClick }) {
  const $nodes = document.createElement("div");
  $target.appendChild($nodes);
  $nodes.classList.add("Nodes");

  this.state = initialState;
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };
  this.render = () => {
    const { isRoot, nodes } = this.state;
    $nodes.innerHTML = `
        ${
          isRoot
            ? ""
            : `
            <div class="Node">
                <img src="../images/prev.png">
            </div>
        `
        }
        ${nodes
          .map(
            (node) => `
            <div class="Node">
                <img src="${
                  node.type === "DIRECTORY"
                    ? "../images/directory.png"
                    : "../images/file.png"
                }">
                ${node.name}
            </div>
        `
          )
          .join("")}
    `;
  };
  this.render();
}
