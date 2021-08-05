import { Component, html } from "@exalt/core";
import { define, options } from "@exalt/core/decorators";
import styles from "./liquid-fill.css";

@define("liquid-fill")
@options({ shadow: true, styles: [styles] })
export class LiquidFill extends Component {

    container = super.createRef();

    render() {
        return html `
            <div ref="container" class="container fill">
                <slot></slot>
            </div>
        `;
    }

    reload() {
        this.container.classList.remove("fill");

        void this.container.offsetWidth;

        this.container.classList.add("fill");
    }
}