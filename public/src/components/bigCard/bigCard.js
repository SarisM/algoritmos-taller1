class Bigcard extends HTMLElement {
	static get observedAttributes() {
		return ['img', 'date','title', 'txtbutton'];
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
        <link rel="stylesheet" href="./src/components/bigCard/bigCard.css">
        <div class="big-card">

        <div id="img">
		    <img id="card-logo" src=${this.img} alt=${this.alt}>
        </div>


       	 <div id="info">
            <p id = "date">${this.date}</p>
			<div id="raya"></div>
            <h1 id ="title">${this.title}</h1>
            <button id="boton1">LEER MÁS</button>
        </div>
            
        </div>
`;
}
}


customElements.define('big-card', Bigcard);
export default Bigcard;