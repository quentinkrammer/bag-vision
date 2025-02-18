import { SPComponentLoader } from "@microsoft/sp-loader";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";

import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import * as strings from "BagVisionWebpartWebPartStrings";

export interface IBagVisionWebpartWebPartProps {
  description: string;
}

export default class BagVisionWebpartWebPart extends BaseClientSideWebPart<IBagVisionWebpartWebPartProps> {
  public render(): void {
    this.domElement.innerHTML = `<div class="stacey-container">
      <div id="questionaire-container" class="questionaire-container">
        <div class="header-container">
          <h2 class="header">STACEY MATRIX - KOMPLEXITÄT BESTIMMEN</h2>
          <img
            class="agileversity-logo"
            src="${require("./assets/agileversity-logo.png")}"
          />
        </div>
        <div
          id="question-answer-button-container"
          class="question-answer-button-container"
        >
          <h3 id="question" class="question"></h3>
          <div id="answer-container" class="answer-container"></div>
          <p id="question-counter" class="question-counter">FRAGE 1 VON 8</p>
          <div class="button-container">
            <button
              type="button"
              id="back-button"
              class="button secondary-button"
              onclick="onBackButton()"
            >
              ZURÜCK
            </button>
            <button
              type="button"
              class="button primary-button"
              id="next-button"
              onclick="onNextButton()"
            >
              WEITER
            </button>
            <button
              type="button"
              class="button primary-button"
              id="calculate-results-button"
              onclick="onCalculateResultsButton()"
            >
              AUSWERTUNG
            </button>
          </div>
        </div>
        <div id="results-container" class="results-container display-none">
          <h3 class="result-header">EINORDNUNG IN DIE STACEY MATRIX</h3>
          <h4
            id="result-summary-header-requirements"
            class="result-summary-header"
          ></h4>
          <p
            id="result-summary-text-requirements"
            class="result-summary-text"
          ></p>
          <h4
            id="result-summary-header-implementation"
            class="result-summary-header"
          ></h4>
          <p
            id="result-summary-text-implementation"
            class="result-summary-text"
          ></p>
          <div class="result-image-container">
            <img
              id="result-image"
              class="result-image"
              src="${require("./assets/stacey-matrix.png")}"
            />
            <div id="result-image-dot" class="result-image-dot"></div>
          </div>
        </div>
        <div id="contact" class="area-text-container contact display-none">
          <h4>KONTAKT</h4>
          <div style="display: flex; gap: 4px; flex-wrap: wrap">
            <p>Hier findest du unseren</p>
            <a
              href="files/content/brockhaus_ag/downloads/agileversity_trainingskatalog.pdf"
              target="_blank"
              >Trainingskatalog</a
            >
          </div>
          <p>Und so kannst du uns erreichen:</p>
          <a href="mailto:agileversity@brockhaus-ag.de"
            >agileversity@brockhaus-ag.de</a
          >
          <p>Head of Agileversity - André Beschmann: +49 (0) 231 98 75 - 690</p>
        </div>
      </div>
    </div>
   `;

    if (!this.renderedOnce) {
      // this.onButton();
      // this.fooAnchor();
      this.loadAssets();
    }
  }

  private loadAssets() {
    SPComponentLoader.loadScript(require("./assets/script.js")).catch(() => {});
    SPComponentLoader.loadCss(require("./assets/style.css"));
  }

  // private fooAnchor() {
  //   const fooElement = document.createElement("h1");
  //   fooElement.innerText = "Foo";
  //   fooElement.classList.add("foo");

  //   const fooAnchorElement = document.querySelector("#foo-anchor");
  //   fooAnchorElement?.appendChild(fooElement);
  // }

  // private onButton() {
  //   this.domElement
  //     .getElementsByTagName("button")[0]
  //     .addEventListener("click", (event: MouseEvent) => {
  //       event.preventDefault();
  //       alert("Welcome to the SharePoint Framework!");
  //     });
  // }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription,
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("description", {
                  label: strings.DescriptionFieldLabel,
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
