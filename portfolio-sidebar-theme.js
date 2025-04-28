/**
 * Copyright 2025 Nishil Patel
 * @license Apache-2.0
 */
import { LitElement, html } from "lit";
import "./portfolio-sidebar.js";
import "./portfolio-sidebar-screen.js";

export class PortfolioSidebarTheme extends LitElement {
  static get tag() { return "portfolio-sidebar-theme"; }
  constructor() {
    super();
    this.pages = [];
  }

  render() {
    return html`
      <portfolio-sidebar .pages=${this.pages}></portfolio-sidebar>
      <slot @page-added=${this._addPage}></slot>
    `;
  }

  _addPage(e) {
    this.pages = [...this.pages, e.detail];
  }
}

customElements.define(PortfolioSidebarTheme.tag, PortfolioSidebarTheme);
