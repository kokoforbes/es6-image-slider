class Slider extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div>            
       {*Header code goes here *}         
      </div>
    `;
  }
}