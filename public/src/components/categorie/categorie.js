class Categorie extends HTMLElement {
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
        <link rel="stylesheet" href="./src/components/categorie/categorie.css">

        <div class="categorie-logo">
			<div id="logo1"></div>
 			<img class="img" src="">
			<img class="img" src="https://tl.vhv.rs/dpng/s/17-175721_call-of-duty-logo-png-transparent-png.png">
			<img class="img" src="https://tl.vhv.rs/dpng/s/17-175721_call-of-duty-logo-png-transparent-png.png">
			<img class="img" src="https://w7.pngwing.com/pngs/472/24/png-transparent-crash-bandicoot-n-sane-trilogy-crash-bandicoot-warped-playstation-4-video-game-crash-bandicoot-crash-bandicoot-n-sane-trilogy-text-logo.png">           
		</div>
`;
}
}


customElements.define('categorie-logo', Categorie);
export default Categorie;