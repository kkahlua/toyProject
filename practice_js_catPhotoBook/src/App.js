import { request } from "./api.js";
import Nodes from "./Nodes.js";
const DUMMY_DATA = [
  {
    id: "1",
    name: "노란고양이",
    type: "DIRECTORY",
    filePath: null,
    parent: null,
  },
];
export default function App({ $target }) {
  this.state = {
    isRoot: true,
    nodes: [],
  };
  const nodes = new Nodes({
    $target,
    initialState: {
      isRoot: this.state.isRoot,
      nodes: this.state.nodes,
    },
    onClick: {},
  });

  this.setState = (nextState) => {
    (this.state = nextState),
      nodes.setState({
        isRoot: this.state.isRoot,
        nodes: this.state.nodes,
      });
  };
  const fetchNodes = async (id) => {
    const nodes = await request(id ? `/${id}` : "/");
    this.setState({
      ...this.state,
      nodes,
      isRoot: id ? false : true,
    });
    console.log(this.state);
  };
  fetchNodes();
}
