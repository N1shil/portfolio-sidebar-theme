/**
 * Copyright 2025 Nishil Patel
 * @license Apache-2.0
 */
import { LitElement, html, css } from "lit";

export class PortfolioSidebar extends LitElement {
  static get tag() { return "portfolio-sidebar"; }

  static get properties() {
    return { pages: { type: Array } };
  }

  static styles = css`
    :host {
      position: fixed;
      width: 240px;
      top: 0; left: 0; bottom: 0;
      background-color: #121212;
      color: white;
      padding-top: 50px;
      box-sizing: border-box;
      font-family: 'Segoe UI', sans-serif;
    }
    a {
      display: block;
      color: white;
      padding: 15px 20px;
      font-size: 16px;
      text-decoration: none;
      transition: background-color 0.3s;
      cursor: pointer;
    }
    a:hover {
      background-color: #333;
    }
  `;

  render() {
    return html`
      ${this.pages.map(page => html`
        <a @click=${() => page.element.scrollIntoView({behavior:"smooth"})}>
          ${page.title}
        </a>
      `)}
    `;
  }
}

customElements.define(PortfolioSidebar.tag, PortfolioSidebar);
