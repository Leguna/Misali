class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        element.style {
  margin: 10px 30px;
}
        .search-form {
  margin: 40px 5px;
  font: normal 12px sans-serif;
  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.08);
}

        .input-group {
          position: relative;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          -ms-flex-align: stretch;
          align-items: stretch;
          width: 100%;
        }
        .input-group-prepend {
  margin-right: -1px;
}
        .input-group-append, .input-group-prepend {
          display: -ms-flexbox;
          display: flex;
        }
        .input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle), .input-group > .input-group-append:last-child > .input-group-text:not(:last-child), .input-group > .input-group-append:not(:last-child) > .btn, .input-group > .input-group-append:not(:last-child) > .input-group-text, .input-group > .input-group-prepend > .btn, .input-group > .input-group-prepend > .input-group-text {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
        .input-group-text {
          display: -ms-flexbox;
          display: flex;
          -ms-flex-align: center;
          align-items: center;
          padding: .375rem .75rem;
          margin-bottom: 0;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5;
          color: #495057;
          text-align: center;
          white-space: nowrap;
          background-color: #e9ecef;
          border: 1px solid #ced4da;
          border-radius: .25rem;
        }

        .input-group > .custom-select:not(:first-child), .input-group > .form-control:not(:first-child) {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
        .input-group > .custom-select:not(:last-child), .input-group > .form-control:not(:last-child) {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
        .input-group > .custom-file .custom-file-input:focus ~ .custom-file-label, .input-group > .custom-select:focus, .input-group > .form-control:focus {
          z-index: 3;
        }

        .search-form .input-group input {
          background-color: #ffffff;
          box-shadow: none;
          color: #4E565C;
          outline: none;
          border: 1px solid #b6c3cd;
          border-right: 0;
          border-left: 0;
        }
        .input-group > .custom-file, .input-group > .custom-select, .input-group > .form-control, .input-group > .form-control-plaintext {
  position: relative;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  width: 1%;
  margin-bottom: 0;
}
        .form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(0,123,255,.25);
}

    @media (prefers-reduced-motion:reduce) {
  .form-control {
    transition: none;
  }
}

.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + .75rem + 2px);
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

button, input {
  overflow: visible;
}

button, input, optgroup, select, textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
.input-group-append {
  margin-left: -1px;
}

.input-group-append, .input-group-prepend {
  display: -ms-flexbox;
  display: flex;
}

.btn-light:not(:disabled):not(.disabled).active:focus, .btn-light:not(:disabled):not(.disabled):active:focus, .show > .btn-light.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(216,217,219,.5);
}

.btn-light:not(:disabled):not(.disabled).active, .btn-light:not(:disabled):not(.disabled):active, .show > .btn-light.dropdown-toggle {
  color: #212529;
  background-color: #c0c8cf;
  border-color: #d3d9df;
}

.input-group > .input-group-append > .btn, .input-group > .input-group-append > .input-group-text, .input-group > .input-group-prepend:first-child > .btn:not(:first-child), .input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child), .input-group > .input-group-prepend:not(:first-child) > .btn, .input-group > .input-group-prepend:not(:first-child) > .input-group-text {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.input-group-append .btn:focus, .input-group-prepend .btn:focus {
  z-index: 3;
}

.input-group-append .btn, .input-group-prepend .btn {
  position: relative;
  z-index: 2;
}

.btn-light.focus, .btn-light:focus {
  box-shadow: 0 0 0 .2rem rgba(216,217,219,.5);
}

.btn-light:hover {
  color: #212529;
  background-color: #cddfea;
  border-color: #dae0e5;
}

.btn.focus, .btn:focus {
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(0,123,255,.25);
}

.btn:hover {
  color: #212529;
  text-decoration: none;
}

[type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
  cursor: pointer;
}

button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}

.btn-light {
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}

@media (prefers-reduced-motion:reduce) {
  .btn {
    transition: none;
  }
}

.btn {
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

[type=button], [type=reset], [type=submit], button {
  -webkit-appearance: button;
}

button, select {
  text-transform: none;
}

button, input {
  overflow: visible;
}

button, input, optgroup, select, textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button {
  border-radius: 0;
}



</style>

<div class="search-form" style="margin: 30px 30px; ">
    <div class="input-group">
        <div class="input-group-prepend"><span class="input-group-text"><fa-icon class="fa fa-search"></fa-icon></span></div>
        <input id="searchElement" class="form-control" type="text" placeholder="Aku mencari..." />
        <div class="input-group-append"><button id="searchButtonElement" class="btn btn-light" type="button">Search </button></div>
    </div>
</div>
        `;
        const button = this.shadowDOM.querySelector("#searchButtonElement");
        const input = this.shadowDOM.querySelector("#searchElement");

        button.addEventListener("click", this._clickEvent);

        input.addEventListener("keyup", function(event) {
            // Number 13 is the "Enter" key on the keyboard
            if (event.keyCode === 13) {
                // Cancel the default action, if needed
                event.preventDefault();
                // Trigger the button element with a click
                button.click();
            }
        });
    }
}

customElements.define("search-bar", SearchBar);
