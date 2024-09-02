class CalltoactionTwo extends HTMLElement {
  static get observedAttributes() {
    return ["img", "alt", "title", "description", "txtbutton", "title2", "description2", "description3"];
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
        <link rel="stylesheet" href="./src/components/cta2/cta.css">
        <div class="call-to-action2">
        <div id="info">

            <h1 id="titulo" >${this.title}</h1>
            <p id="text">${this.description}</p>
            <button id="boton">${this.txtbutton}</button>
          
        </div>

        <div id="info2">
           <div id="title-box">
            <h1 id="titulo2" >${this.title2}</h1>
            </div>
            <div id="info-box">
              <p id="text2">${this.description2}</p>
              <p id="text2">${this.description3}</p>
            </div>
        </div>

        </div>
`;
  }
}

customElements.define("call-to-action2", CalltoactionTwo);
export default CalltoactionTwo;
