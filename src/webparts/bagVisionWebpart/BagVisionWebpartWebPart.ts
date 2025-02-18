import { SPComponentLoader } from "@microsoft/sp-loader";
import { escape } from "@microsoft/sp-lodash-subset";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";

import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import * as strings from "BagVisionWebpartWebPartStrings";
import styles from "./BagVisionWebpartWebPart.module.scss";

export interface IBagVisionWebpartWebPartProps {
  description: string;
}

export default class BagVisionWebpartWebPart extends BaseClientSideWebPart<IBagVisionWebpartWebPartProps> {
  public render(): void {
    this.domElement.innerHTML = `
    <section class="${styles.bagVisionWebpart} ">
      <div class="${styles.welcome}">
        <img alt="" src="${require("./assets/welcome-light.png")}" class="${
      styles.welcomeImage
    }" />
        <h2>Well done, ${escape(
          this.context.pageContext.user.displayName
        )}!</h2>
    
        <div>Web part property value: <strong>${escape(
          this.properties.description
        )}</strong></div>
      </div>
      <div>
       Moin
      </div>
    </section>
    <button type="button">Show welcome message</button>
    <article id="foo-anchor">
    
    </article>`;

    if (!this.renderedOnce) {
      this.onButton();
      this.fooAnchor();
      this.loadAssets();
    }
  }

  private loadAssets() {
    SPComponentLoader.loadScript(require("./assets/script.js")).catch(() => {});
    SPComponentLoader.loadCss(require("./assets/style.css"));
  }

  private fooAnchor() {
    const fooElement = document.createElement("h1");
    fooElement.innerText = "Foo";
    fooElement.classList.add("foo");

    const fooAnchorElement = document.querySelector("#foo-anchor");
    fooAnchorElement?.appendChild(fooElement);
  }

  private onButton() {
    this.domElement
      .getElementsByTagName("button")[0]
      .addEventListener("click", (event: MouseEvent) => {
        event.preventDefault();
        alert("Welcome to the SharePoint Framework!");
      });
  }

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
