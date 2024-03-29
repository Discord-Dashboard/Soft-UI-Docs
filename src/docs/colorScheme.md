# Color Scheme

A [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) which is the color scheme of the whole website.

## Available Colors

-   dark
-   pink
-   blue
-   red
-   green
-   yellow

## Example Usage

```js
theme: SoftUI({
    colorScheme: "pink"
})
```

## Custom Color Scheme

You can also define your own color scheme by setting the `colorScheme` to custom and adding the `themeColors` option.

### Example Usage

```js
theme: SoftUI({
    colorScheme: "custom",
    themeColors: {
        primaryColor: "#ff0000",
        secondaryColor: "#ff0000"
    }
})
```

## Types:

-   [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
