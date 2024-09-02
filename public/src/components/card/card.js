class Card extends HTMLElement {
	static get observedAttributes() {
		return ['img', 'description', 'txtbutton'];
	}

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
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
        <link rel="stylesheet" href="./src/components/card/card.css">
        <div class="product-card">
       	 <div id="info">
		    <img id="card-logo" src=${this.img} alt=${this.alt}>
            <p id = "text-card">${this.description}</p>
            <button id="boton1">RESERVA B6</button>
			<button id="boton2">VISITAR SITIO</button>
            </div>
            
        </div>
`;
}
}


customElements.define('product-card', Card);
export default Card;