import type { Core } from "@easepick/core";
import type {
  EasePickWrapperProps,
  EasePickOptions,
  EasePickInputElement,
} from "easepick-react";
import EasePicker from "easepick-react";
import { DateTime } from "@easepick/datetime";
import { LockPlugin } from "@easepick/lock-plugin";
import { RangePlugin } from "@easepick/range-plugin";
import { PresetPlugin } from "@easepick/preset-plugin";
import { TimePlugin } from "@easepick/time-plugin";
import { AmpPlugin } from "easepick-plugin-amp";
import { KeyboardPlugin } from "easepick-plugin-keyboard";


export type {
  EasePickWrapperProps as EasePickerProps,
  EasePickOptions,
  EasePickInputElement,
  Core,
};

export {
  AmpPlugin,
  DateTime,
  KeyboardPlugin,
  LockPlugin,
  PresetPlugin,
  RangePlugin,
  TimePlugin,
};

export default EasePicker;
