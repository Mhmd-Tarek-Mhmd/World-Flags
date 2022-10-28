import React from "react";
import { str } from "./primitives";

export type obj = {};
export type func = Function;
export type arrOrNull = [] | null;
export type strOrNull = str | null;
export type divOrNull = divEle | null;

// Elements
export type ele = JSX.Element;
export type divEle = HTMLDivElement;

// Refs
export type divRef = React.LegacyRef<divEle>;

// Events
export type keyEve = React.KeyboardEvent;
export type submitEve = React.SyntheticEvent;
export type changeEve = React.ChangeEvent<HTMLInputElement>;

// Event Handlers
export type mouseHandler = React.MouseEventHandler;
export type keyboardHandler = React.KeyboardEventHandler;
