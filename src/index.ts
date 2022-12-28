import type { Core } from "@easepick/core";
import type {
  EasePickWrapperProps,
  EasePickOptions,
  EasePickInputElement,
} from "easepick-react";
import type { IAmpPlugin } from "@easepick/amp-plugin/dist/interface";
import type { IKbdPlugin } from "@easepick/kbd-plugin/dist/interface";
import EasePicker from "easepick-react";
import {
  AmpPlugin,
  DateTime,
  KbdPlugin,
  LockPlugin,
  PresetPlugin,
  RangePlugin,
  TimePlugin,
} from "@easepick/bundle";

type Options = EasePickOptions & {
  AmpPlugin?: IAmpPlugin;
  KbdPlugin?: IKbdPlugin;
};

export type {
  EasePickWrapperProps as EasePickerProps,
  Options as EasePickOptions,
  EasePickInputElement,
  Core,
};

export {
  AmpPlugin,
  DateTime,
  KbdPlugin,
  LockPlugin,
  PresetPlugin,
  RangePlugin,
  TimePlugin,
};

export default EasePicker;
