export default function ImageViewer({ $target, onClose }) {
  const $imageViewer = document.createElement("div");
  $imageViewer.className = "ImageViewer Modal";
  $target.appendChild($imageViewer);

  this.state = {
    selectedImageURL: null,
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $imageViewer.style.display = this.state.selectedImageURL ? "block" : "none";
    if (this.state.selectedImageURL) {
      $imageViewer.innerHTML = `
      <div class="content">
        <img src="${this.state.selectedImageURL}"/>
      </div>
        `;
    }
  };

  window.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  });

  $imageViewer.addEventListener("click", (e) => {
    if (Array.from(e.target.classList).includes("Modal")) {
      onClose();
    }
  });
  this.render();
}
