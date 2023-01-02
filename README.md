# react-easepick

`EasePicker` - a react component based on the [easepick](https://easepick.com/) library.



### Attributes

* **date** - date value
* **startDate** - start date (RangePlugin)
* **endDate** - end date (RangePlugin)
* **options** - easepick options
* **...inputProps[]** - input props


### How to Use

Step 1.
```bash
npm i react-easepick
```

Step 2.
```jsx
import { useMemo, useState } from "react";
import EasePicker, { EasePickOptions } from "react-easepick";

function Demo() {
  const [date, setDate] = useState<Date | undefined>();
  const options: EasePickOptions = useMemo(
    () => ({
      css: [
        'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.0/dist/index.css',
      ],
      setup(picker) {
        picker.on("select", (e) => {
          const { date } = e.detail;
          setDate(date);
        });
      },
    }),
    []
  );

  return <EasePicker date={date} options={options} />;
}

export default Demo;

```