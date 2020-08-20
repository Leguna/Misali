class MealItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
           <style>
                     
                   element.style {
                      background-color: #ffffff;
                      margin-bottom: 8px;
                    }
                    
                    .rounded {
                      border-radius: .25rem!important;
                    }
                    
                    .border {
                      border: 1px solid #dee2e6!important;
                    }
                    
                    .meal-item {
                      position: relative;
                      display: -ms-flexbox;
                      display: flex;
                      -ms-flex-direction: column;
                      flex-direction: column;
                      min-width: 0;
                      word-wrap: break-word;
                      background-color: #e5e5e5;
                      background-clip: border-box;
                      border: 1px solid rgba(0,0,0,.125);
                      border-radius: .25rem;
                    }
                    
                    @media (min-width:1200px) {
                      .justify-content-xl-start {
                        -ms-flex-pack: start!important;
                        justify-content: flex-start!important;
                      }
                    }
                    
                    @media (min-width:1200px) {
                      .d-xl-flex {
                        display: -ms-flexbox!important;
                        display: flex!important;
                      }
                    }
                    
                    .card-body {
                      -ms-flex: 1 1 auto;
                      flex: 1 1 auto;
                      padding: 1.25rem;
                    }
                    
                    .text-center {
                      text-align: center!important;
                    }
                    
                    @media (min-width:1200px) {
                      .align-items-xl-center {
                        -ms-flex-align: center!important;
                        align-items: center!important;
                      }
                    }
                    
                    @media (min-width:1200px) {
                      .justify-content-xl-center {
                        -ms-flex-pack: center!important;
                        justify-content: center!important;
                      }
                    }

                img {
                    vertical-align: middle;
                    border-style: none;
                }
.h5, h5 {
  font-size: 1.25rem;
}
.h6, h6 {
  font-size: 1rem;
}
.text-justify {
  text-align: justify!important;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
  margin-bottom: .5rem;
  font-weight: 500;
  line-height: 1.2;
}

h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: .5rem;
}

.btn-danger:not(:disabled):not(.disabled).active:focus, .btn-danger:not(:disabled):not(.disabled):active:focus, .show > .btn-danger.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(225,83,97,.5);
}

.btn-danger:not(:disabled):not(.disabled).active, .btn-danger:not(:disabled):not(.disabled):active, .show > .btn-danger.dropdown-toggle {
  color: #fff;
  background-color: #bd2130;
  border-color: #b21f2d;
}

.btn-danger.focus, .btn-danger:focus {
  box-shadow: 0 0 0 .2rem rgba(225,83,97,.5);
}

.btn-danger:hover {
  color: #fff;
  background-color: #c82333;
  border-color: #bd2130;
}

.btn.focus, .btn:focus {
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(0,123,255,.25);
}

.btn:hover {
  color: #ffffff;
  text-decoration: none;
}

a:hover {
  color: #0056b3;
  text-decoration: underline;
}

.btn-danger {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}

@media (prefers-reduced-motion:reduce) {
  .btn {
    transition: none;
  }
}

.btn {
  background-color: #dc3545;
  border-color: #dc3545;
  display: inline-block;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

a {
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
}


           </style>
           
           <div id="meal-item" class="card border rounded" style="background-color: #ffffff;margin: 20px;">
                <div id="meal-info" class="card-body d-xl-flex justify-content-xl-start">
                    <div class="text-center d-xl-flex justify-content-xl-center align-items-xl-center"><img
                        alt="Meal Thumb"
                        id="meal-thumb"
                        class="rounded border rounded-0 d-xl-flex justify-content-xl-start"
                        style="padding: 0;margin-right: 8px;"
                        src="${this._meal.strMealThumb}" width="200px"
                        height="200px"></div>
                    <div style="margin: 8px;">
                        <h5>${this._meal.strMeal}<br></h5>
                        <h6 style="color: rgb(119,122,126);">${this._meal.strArea}<br></h6>
                        <p class="text-justify" style="">${this._meal.strInstructions.slice(0, 300) + '...'}<br>
                        </p><a class="btn btn-danger" role="button" style="margin: 10px;"
                               href="${this._meal.strYoutube}">Youtube</a></div>
                </div>
           </div>

`;


    }

}

customElements.define("meal-item", MealItem);