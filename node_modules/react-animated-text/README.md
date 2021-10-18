# react-animated-text

## Installation

```shell
npm install --save react-animated-text
```

## Documentation

**[See Live Examples on CodeSandbox](https://codesandbox.io/s/jz6pvqlz85)**

react-animated-text provides a quick way to add animated words, or short phrases, to a page. For example, you could add the animated text "LOADING" as a loading indicator, or make small pieces of data appear once loaded, or a link "go away" after someone clicks on it.

It uses CSS Animation to animate the characters of the text, and provides a couple options for how the text, as a whole, will animate. There are currently two different animation types, which are also components. They are Wave and Random.

Wave animates the characters from left to right (or right to left), kind of like a wave that fans make in a stadium. Random animates the characters, well, at random.

Here's the most basic way to add them to your page:

```javascript
import React from 'react';
import { Wave } from 'react-animated-text';

const ExampleOne = () => (
  <Wave text="EXAMPLE TEXT" />
);
```

```javascript
import React from 'react';
import { Random } from 'react-animated-text';

const ExampleTwo = () => (
  <Random text="EXAMPLE TEXT" />
);
```

It's as simple as importing whichever component you want to use, and then just using it somewhere.

The only required prop is "text". There are lots of other props you can pass in to customize the animation. The most notable is "effect", which specifies exactly what each character in "text" will do when it's its turn to do something. For example:

```javascript
<Wave text="EXAMPLE TEXT" effect="stretch" effectChange={2.2} />

<Random
  text={this.props.children}
  paused={this.state.paused}
  effect="verticalFadeOut"
  effectDirection="down"
  effectChange={3.0}
/>
```

The two different animation types have slightly different sets of valid props. Here's a list of props that effect the overall animation:

|prop name|Wave|Random|default|
|---------|----|------|-------|
|text|the text to animate|the text to animate|n/a|
|speed|The speed the wave travels - in characters per second|_not used_|10|
|direction|The direction the wave will travel, either 'right' or 'left'|_not used_|"right"|
|iterationsThe number of times the wave will animate, an integer or the string "infinite"|The number of times each character will animate, an integer or the string "infinite"|"infinite"|
|delay|The delay between each wave animation - in seconds|_not used_|0.0|
|paused|Is the animation paused - boolean|Is the animation paused - boolean|false|
|effect|The effect to apply to each character|The effect to apply to each character|"jump"|

The animation type (Wave or Random) controls _when_ each character will animate in relation to the other characters. The effect is what each character will do. The valid effects are:

- jump - the character "jumps up" (or down - see below)
- stretch - the character stretches vertically
- color - the character changes color, then changes back
- pop - the character changes scale
- fadeOut - the character fades out
- fadeIn - the character fades in
- verticalFadeOut - the character both fades out and moves away vertically
- verticalFadeIn - the character both fades in and moves into position vertically

These props further define the chosen effect.

|prop name|description|default|
|---------|-----------|-------|
|effectDuration|Length of time the effect will take to complete - in seconds|0.3|
|effectDirection|Some effects have a direction - see below|up|
|effectChange|The amount of change, or new value, at the effect's apex - see below|1.0|
|effectDelay|Special - used with Random only - an _average_ delay between the end of the effect running on a character, and the start of it running again on that character. The actual delay will be between 0 and twice this value - calculated randomly each time the effect ends.|0.5|

These effects use effectDirection:

- jump - "up" or "down"
- stretch - "up", "down" or "both"
- verticalFadeOut - "up" or "down"
- verticalFadeIn - "up" or "down"

How the effects use effectChange:

- jump - the number of "em" to move the character
- stretch - the vertical scale multiplier (ie: 2.0 will stretch character to be twice as tall)
- color - the color the character changes to - use valid CSS values, such as "#FF0000" or "red" (then it changes back to original color)
- pop - the scale multiplier
- fadeOut - not used
- fadeIn - not used
- verticalFadeOut - the number of "em" to move the character
- verticalFadeIn - the number of "em" to move the character

### A couple notes:

- If the "paused" prop is set to a variable in the component's state or app's store, you can start/stop the animation whenever you want.
- Any time you change any prop dynamically ("paused", or any of the others), the component will re-render, and if the animation is running (and you're not pausing it), it will restart. This might not be too noticeable with the Random component, but will reset the Wave component back to the start.

## Licence

[MIT](LICENCE) - Copyright (c) 2018, Greg Burger
