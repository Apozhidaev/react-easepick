# react-easepick

`EasePicker` - a react component based on the [easepick](https://easepick.com/) library.



### Attributes

* **options** - easepick options
* **...inputProps[]** - input props


### How to Use

Step 1.
```bash
npm i react-easepick
```

Step 2.
```jsx
import { useMemo } from "react";
import EasePicker, { EasePickOptions } from "react-easepick";

function App() {
  const options: EasePickOptions = useMemo(
    () => ({
      date: new Date(),
      css: [
        'https://cdn.jsdelivr.net/npm/@easepick/core@1.2.0/dist/index.css',
      ],
    }),
    []
  );

  return <EasePicker options={options} />;
}

export default App;

```