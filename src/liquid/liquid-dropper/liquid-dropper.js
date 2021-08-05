import { Component, html } from "@exalt/core";
import { define, options } from "@exalt/core/decorators";
import styles from "./liquid-dropper.css";

@define("liquid-dropper")
@options({ shadow: true, styles: [styles] })
export class LiquidDropper extends Component {

    render() {
        return html `
                <div class="drops">
                    <div class="drop1"></div>
                    <div class="drop2"></div>  
                </div>
        `;
    }
}