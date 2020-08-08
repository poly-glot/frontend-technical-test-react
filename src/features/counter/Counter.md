React component example:

```js
import Counter from "./index";
<Counter />;
```

You can add a custom props to an example wrapper:

```js { "props": { "className": "checks" } }
<Counter>I’m transparent!</Counter>
```

Or disable an editor by passing a `noeditor` modifier:

```jsx noeditor
<Counter />
```

To render an example as highlighted source code add a `static` modifier:

```jsx static
import React from "react";
```

Examples with all other languages are rendered only as highlighted source code, not an actual component:

```html
<Counter />
```

Any [Markdown](http://daringfireball.net/projects/markdown/) is **allowed** _here_.
