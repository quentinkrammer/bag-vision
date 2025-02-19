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
    this.domElement.innerHTML = `<div class="root-container">
      <div id="image-container" class="image-container">
        <img
          src="${require("./assets/vision_blue.png")}"
          class="liftable blue"
          data-name="blue"
        />
        <img
          src="${require("./assets/vision_green.png")}"
          class="liftable green"
          data-name="green"
        />
        <img
          src="${require("./assets/vision_yellow.png")}"
          class="liftable yellow"
          data-name="yellow"
        />
      </div>
      <div id="small-modal" popover class="popover">
        <div class="small-popover-container">
          <div class="small-popover-header-container">
            <button
              type="button"
              id="small-modal-close-button"
              class="small-popover-close-button"
            >
              ✖
            </button>
            <h2 id="small-modal-header" class="small-popover-header"></h2>
          </div>
          <div id="small-modal-content" class="small-popover-content"></div>
          <button
            type="button"
            id="open-large-modal-button"
            class="open-large-popover-button"
          >
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.04289 0.792893C1.43342 0.402369 2.06658 0.402369 2.45711 0.792893L6.95711 5.29289C7.34763 5.68342 7.34763 6.31658 6.95711 6.70711L2.45711 11.2071C2.06658 11.5976 1.43342 11.5976 1.04289 11.2071C0.652369 10.8166 0.652369 10.1834 1.04289 9.79289L4.83579 6L1.04289 2.20711C0.652369 1.81658 0.652369 1.18342 1.04289 0.792893Z"
                fill="white"
              ></path>
            </svg>
            <span>Details</span>
          </button>
        </div>
      </div>
      <div id="large-modal" popover class="popover large-popover">
        <div>
          <button type="button" id="large-modal-close-button">X</button>
          <h2 id="large-modal-header"></h2>
        </div>
        <div id="large-modal-content"></div>
      </div>
    </div>
   `;

    if (!this.renderedOnce) {
      // this.onButton();
      // this.fooAnchor();
      this.loadAssets();
    }
  }

  private loadAssets(): void {
    const scriptUrl = `${require("./assets/script.js")}`;
    const styleUrl = `${require("./assets/style.css")}`;
    SPComponentLoader.loadScript(scriptUrl).catch(() => {});
    SPComponentLoader.loadCss(styleUrl);
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
