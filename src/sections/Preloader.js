import React from 'react';
import ReactDOM from 'react-dom';


function Preloader()
{
    return(
        <section>
        <div id="preloader">
          <div id="ctn-preloader" class="ctn-preloader">
            <div class="animation-preloader">
              <div class="spinner"></div>
              <div class="txt-loading">
                <span data-text-preloader="R" class="letters-loading">
                  R
                </span>
                <span data-text-preloader="O" class="letters-loading">
                  O
                </span>
                <span data-text-preloader="G" class="letters-loading">
                  G
                </span>
                <span data-text-preloader="A" class="letters-loading">
                  A
                </span>
                <span data-text-preloader="N" class="letters-loading">
                  N
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Preloader;