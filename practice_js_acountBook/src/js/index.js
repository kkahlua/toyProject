import "@fortawesome/fontawesome-free/js/all.js";
import "../style/index.scss";
import { initConsumptionDetails } from "./consumption-details";
import { initCurrentAsset } from "./current-asset";

const initApp = async () => {
  initCurrentAsset();
  initConsumptionDetails();
};

initApp();
