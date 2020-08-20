class AppBar extends HTMLElement {


    constructor() {
        super();
        this._shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this._shadowDOM.innerHTML = `
           <style>
               * {
                   margin: 0;
                   padding: 0;
                   box-sizing: border-box;
               }
               :host {
                   display: block;
                   width: 100%;
                   background-color: cornflowerblue;
                   color: white;
                   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
               }
               h2 {
                   padding: 16px;
               }
            </style>
            <div class="container-fluid" style="background-color: #5f5f5f;padding: 10px 20px;">
                <h1 style="color: rgb(255,255,255);">Misali</h1>
                <p style="color: rgb(255,255,255);">Carilah makanan kesukaanmu dan masak sendiri.</p>
            </div>`;
    }

}

customElements.define("app-bar", AppBar);