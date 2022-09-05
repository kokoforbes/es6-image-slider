const template = document.createElement("template");
template.innerHTML = `
<style>
.slide {
  min-width: 240px;
  width: 100%;
  max-width: 600px;
  display: grid;
  position: relative;
  background: #ffffff;
  padding: 3rem;
  place-content: center;
}

p {
  text-align: center;
}

.potrait {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: 2rem auto;
}

.view-btn {
  padding: 0.5rem 0.7rem;
  margin: 2rem auto 1rem auto;
  background: #1b89fa;
  color: #ffffff;
  border-radius: 4px;
  border: none;
}

.name {
  font-weight: 700;
}

.buttons {
  position: relative;
  top: -20px;
  margin: 0 auto;
}
.buttons a {
  display: inline-block;
  height: 15px;
  width: 15px;
  border-radius: 50px;
  background-color: #d3d3d3;
}

.next, .prev {
  cursor: pointer;
  position: absolute;
  top: 48%;
  width: auto;
  margin-top: -23px;
  padding: 17px;
  transition: 0.4s ease;
  user-select: none;
}

.prev {
  left: 0;
}

.next {
  right: 0;
}

@media (max-width: 767px) {
  .hidden-mobile {
    display: none;
  }
}
</style>


<div class="slide">
<p>
  "What a terrfic job you have done on my CV...I nearly cried when I
  saw it and read it... Many many thanks for the professional and
  fantastic work you have done so far on my CV."
</p>

<img src="./images/potrait.jpg" alt="potrait" class="potrait">

<p class="name">Katrina Kenny
  <p />
<p class="title">Sector Specialist at Ministry of Education
  <p />

  <button class="view-btn">View CV Sample</button>

<div class="btns hidden-mobile">
  <div class="prev">
    <svg width="100" height="100" class="ionicon" viewBox="0 0 512 512">
      <title>Chevron Back</title>
      <path fill="none" stroke="#D3D3D3" stroke-linecap="round" stroke-linejoin="round" stroke-width="48"
        d="M328 112L184 256l144 144" />
    </svg>
  </div>
  <div class="next">
    <svg width="100" height="100" class="ionicon" viewBox="0 0 512 512">
      <title>Chevron Forward</title>
      <path fill="none" stroke="#D3D3D3" stroke-linecap="round" stroke-linejoin="round" stroke-width="48"
        d="M184 112l144 144-144 144" />
    </svg>
  </div>
</div>

<div class="buttons">
<a href="#slide-1"></a>
<a href="#slide-2"></a>
<a href="#slide-3"></a>
</div>
</div>
`;

class Slider extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectCallback() {}
}

window.customElements.define("slide-component", Slider);
