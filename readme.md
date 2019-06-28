# MeldCX Virtual Keyboard

The `<m-keyboard>` can be installed using npm via the command `npm install @meldcx/matrix-component-keyboard`.

Add a reference to the keyboard component in the `<head></head>` of your app.

```
...
<head>
    <script src="node_modules/@meldcx/matrix-component-keyboard/dist/index.js"></script>
</head>
...
```

Add the keyboard component like you would any other HTML element

```
...
<body>
    <m-keyboard/>
</body>
...
```

The `<m-keyboard>`'s style can be highly customized with CSS variables.
By default the keyboard has a neutral style, with each variable assigned to a
default value, however these can easily be overridden.

```css
m-keyboard {
    --c-text: black;
    --keyboard-height: 30rem;
    --keyboard-bg: #eee;
    --keyboard-key-margin: 0.5rem;
    --keyboard-width: 80rem;
    --keyboard-key-font-family: 'Titillium Web', Arial;
    --keyboard-key-font-size: 2rem;
    --keyboard-key-bg: white;
    --keyboard-key-margin: 0.5rem;
    --keyboard-key-radius: 0.4rem;
    --keyboard-key-border: 0;;
    --keyboard-key-color: var(--c-text, black);
    --keyboard-icon-size: 4rem;
    --keyboard-icon-size: 4rem;
    --keyboard-key-active-color: #567ebf;
    --keyboard-icon-backspace: /custom-icon.svg;
    --keyboard-icon-board-down: /custom-icon.svg;
    --keyboard-icon-shift: /custom-icon.svg;
    --keyboard-icon-numbers: /custom-icon.svg;
    --keyboard-icon-letters: /custom-icon.svg;
}
```
To create a custom keyset, you must first register it on the keyboard.
Let's create a keyset that adds a few buttons better suited for entering a URL like `'/'` and `'.com'`
We'll use the QWERTY `layout`, and extend from the default `keyset`.

```js
const kb = document.querySelector('m-keyboard');
kb.addKeyset('web', [
    [
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p"
    ],

    [
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l"
    ],
    [
        ".com", // Changed from SHIFT
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
        "BACKSPACE"
    ],
    [
        "$NUMPAD",
        "/", // CHANGED FROM SPACE
        "CLOSE"
    ]
]
);

// Use the querty layout with our new 'web' keyset

kb.update('qwerty', 'web');
```
To create a custom layout, you must first register it on the keyboard.
Let's create a layout and keyset that has 3 buttons; 'Small', 'Medium', 'Large'

When creating a key in the keyset, use the `width` property to assign a value
relative to the rest of the keys.

```js
const kb = document.querySelector('m-keyboard');
kb.addLayout('sizes', [
    [{width: 1}, {width: 2}, {width: 3}]
]);
kb.addKeyset('sizes', [
    ['Small'],
    ['Medium'],
    ['Large']
]);

// Use the querty layout with our new 'sizes' key layout and set
kb.update('sizes', 'sizes');
```


If the layout contains multiple rows, take
care to ensure that each row has the same sum of widths.

```js
kb.addLayout('multiple-rows', [
    [{width: 1}, {width: 1}, {width: 1}]
    [{width: 2}, {width: 1}]
    [{width: 3}]
]);
```
More complex layouts can be created by adding margins to the left and right.
Keep in mind the total amount (sum of all the widths and margins) must match on
each row.
Take this example with three rows:

```js
kb.addLayout('spaces', [
    [{width: 1}, {width: 1}, {width: 1}],           // Adds up to 3
    [{width: 1, marginLeft: 1, marginRight: 1}],    // Adds up to 3
    [{width: 2, marginLeft: 0.5, marginRight: 0.5}] // Adds up to 3
]);
```
