import "@fortawesome/fontawesome-free/js/all.js";
import "../style/index.scss";
import { initCurrentAsset } from "./current-asset";

const initApp = async () => {
  initCurrentAsset();
};

initApp();
