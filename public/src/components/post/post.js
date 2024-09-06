class Post extends HTMLElement {
  static get observedAttributes() {
    return ["img", "logo"];
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
        <link rel="stylesheet" href="./src/components/post/post.css">
       
		<div class="post-card">
			<img id="background-image" src=${this.img} alt=${this.alt}>
    		<div class="overlay">
        		<h1 class="title">callofdutyendwment</h1>
        		 <img class="logo" src=${this.logo} alt=${this.alt}>
    		</div>
		</div>

`;
  }
}

customElements.define("post-card", Post);
export default Post;
