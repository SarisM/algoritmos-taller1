class Calltoaction extends HTMLElement {
  static get observedAttributes() {
    return ["img", "alt", "title", "description", "txtbutton"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(propName, oldValue, newValue) {
    if (oldValue !== newValue) {
      this[propName] = newValue;
      this.render();
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/cta/cta.css">
        <div class="call-to-action">
        <div id="info">

            <h1 id="titulo" >${this.title}</h1>
            <p id="text">${this.description}</p>
            <button id="boton">${this.txtbutton}</button>
          
        </div>

        <div id="img">
            <img id="foto" src=${this.img} alt=${this.alt}>
        </div>

        </div>
`;
  }
}

customElements.define("call-to-action", Calltoaction);
export default Calltoaction;
