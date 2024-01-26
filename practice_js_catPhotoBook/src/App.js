import { request } from "./api.js";
import ImageViewer from "./ImageViewer.js";
import Nodes from "./Nodes.js";

export default function App({ $target }) {
  this.state = {
    isRoot: true,
    nodes: [],
    path: [],
  };

  const nodes = new Nodes({
    $target,
    initialState: {
      isRoot: this.state.isRoot,
      nodes: this.state.nodes,
      selectedImageURL: null,
    },
    onClick: async (node) => {
      if (node.type === "DIRECTORY") {
        await fetchNodes(node.id);
        this.setState({
          ...this.state,
          path: [...this.state.path, node],
        });
      }
      if (node.type === "FILE") {
        this.setState({
          ...this.state,
          selectedImageURL: `https://cat-photos-dev-serverlessdeploymentbucket-fdpz0swy5qxq.s3.ap-northeast-2.amazonaws.com/public${node.filePath}`,
        });
      }
    },
    onPrevClick: async () => {
      const nextPath = [...this.state.path];
      nextPath.pop();
      this.setState({
        ...this.state,
        path: nextPath,
      });
      if (nextPath.length === 0) {
        await fetchNodes();
      } else {
        await fetchNodes(nextPath[nextPath.length - 1].id);
      }
    },
  });

  const imageViwer = new ImageViewer({
    $target,
    onClose: () => {
      this.setState({
        ...this.state,
        selectedImageURL: null,
      });
    },
  });

  this.setState = (nextState) => {
    (this.state = nextState),
      nodes.setState({
        isRoot: this.state.isRoot,
        nodes: this.state.nodes,
      });
    imageViwer.setState({
      selectedImageURL: this.state.selectedImageURL,
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
