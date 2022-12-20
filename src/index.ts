import type { EasePickOptions, EasePickInputElement } from "easepick-react";
import type { IAmpPlugin } from "@easepick/amp-plugin/dist/interface";
import EasePicker from "easepick-react";

export * from "@easepick/bundle";

type Options = EasePickOptions & { AmpPlugin?: IAmpPlugin };

export type { Options as EasePickOptions, EasePickInputElement };

export default EasePicker;
