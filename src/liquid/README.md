# Liquid Components - Ottegi UI

## Liquid Div
Liquid Div is the container that allows for size containment for the liquid items. 

Example:
```html
<liquid-div size="small">
    <liquid-fill></liquid-fill>
</liquid-div>
```

Methods for Liquid Div:
- setSize : "small", "medium", or "large"

## Liquid Button
Creates a customizable lava-lamp styled button.
```html
<liquid-button>Text</liquid-button>
```

If extending the button as a class, you can overwrite the onclick event.

## Liquid Dropper
Creates a dropping liquid element.
```html
<liquid-dropper>
```

## Liquid Fill
Creates a vertical flowing element.
```html
<liquid-fill></liquid-fill>
```

Methods:
- reload - Reloads the animation