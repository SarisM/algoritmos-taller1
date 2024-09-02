class Nav extends HTMLElement {
  static get observedAttributes() {
    return ["img", "description", "description", "description", "description", "txtbutton", "txtbutton"];
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
        <link rel="stylesheet" href="./src/components/navBar/navBar.css">

    <nav class="nav-bar">

		<div id="one">
			<img id="img" src=${this.img} alt=${this.alt}>

		</div>
		<div id="two">
			<p class="titulos">JUEGOS</p>
			<p class="titulos">ACERCA DE</p>
			<p class="titulos">TRABAJO</p>
			<p class="titulos">SOPORTE</p>
		</div>

		<div id="three">
		    <button id="button1">REGISTRASE</button>
			<button id="button2">INICIAR SESION</button>
		</div>
	</nav>
        
`;
  }
}

customElements.define("nav-bar", Nav);
export default Nav;
