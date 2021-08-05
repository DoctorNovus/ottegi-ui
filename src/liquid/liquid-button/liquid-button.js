import { Component, html } from "@exalt/core";
import { define, options } from "@exalt/core/decorators";
import styles from "./liquid-button.css";

@define("liquid-button")
@options({ shadow: true, styles: [styles] })
export class LiquidButton extends Component {

    render() {
        return html `
            <a href="#">
                <span><slot></slot></span>
                <div class="liquid"></div>
            </a>
        `;
    }
}