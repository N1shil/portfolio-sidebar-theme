/**
 * Copyright 2025 Nishil Patel
 * @license Apache-2.0
 */
import { LitElement, html, css } from "lit";

export class PortfolioSidebarScreen extends LitElement {
  static get tag() { return "portfolio-sidebar-screen"; }

  static get properties() {
    return { title: { type: String }, bgColor: { type: String } };
  }

  static styles = css`
    :host {
      display: block;
      padding-left: 260px;
      min-height: 100vh;
      box-sizing: border-box;
    }
    section {
      padding: 40px;
      box-sizing: border-box;
    }
    h2 {
      font-size: 2rem;
      margin-bottom: 20px;
      color: #222;
    }
    p, ul {
      font-size: 1rem;
      color: #333;
      line-height: 1.6;
    }
    img {
      max-width: 100%;
      height: auto;
      margin-top: 15px;
      border-radius: 8px;
      box-shadow: 0 3px 6px rgba(0,0,0,0.2);
    }
    a {
      color: #1976d2;
      text-decoration: none;
    }
    a:hover { text-decoration: underline; }
  `;

  render() {
    return html`
      <section style="background-color: ${this.bgColor}">
        <h2>${this.title}</h2>
        <slot></slot>
      </section>
    `;
  }

  firstUpdated() {
    this.dispatchEvent(new CustomEvent("page-added", {
      bubbles: true, composed: true,
      detail: { value: this, title: this.title }
    }));
  }
}

customElements.define(PortfolioSidebarScreen.tag, PortfolioSidebarScreen);
