import { request } from "./api.js";
import Breadcrumb from "./Breadcrumb.js";
import ImageViewer from "./ImageViewer.js";
import Loading from "./Loading.js";
import Nodes from "./Nodes.js";

export default function App({ $target }) {
  this.state = {
    isRoot: true,
    nodes: [],
    path: [],
  };

  const loading = new Loading({
    $target,
  });

  const breadcrumb = new Breadcrumb({
    $target,
    initialState: this.state.path,
    onClick: async (id) => {
      if (id) {
        const nextPath = id ? [...this.state.path] : [];
        const pathIndex = nextPath.findIndex((path) => path.id === id);
        this.setState({
          ...this.state,
          path: nextPath.slice(0, pathIndex + 1),
        });
      } else {
        this.setState({
          ...this.state,
          path: [],
        });
      }
      await fetchNodes(id);
    },
  });

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
    loading.setState(this.state.isLoading);
    breadcrumb.setState(this.state.path);
  };

  const fetchNodes = async (id) => {
    this.setState({
      ...this.state,
      isLoading: true,
    });
    const nodes = await request(id ? `/${id}` : "/");
    this.setState({
      ...this.state,
      nodes,
      isRoot: id ? false : true,
      isLoading: false,
    });
  };

  fetchNodes();
}
