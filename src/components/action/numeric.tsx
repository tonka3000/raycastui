import { ActionPanel, Icon } from "@raycast/api";
import { Action } from ".";
import { useState } from "react";

function numberArray(min: number, max: number, step: number): number[] {
  const result: number[] = [];

  if (step <= 0) {
    throw new Error("Step value must be greater than zero");
  }

  if (min > max) {
    throw new Error("Minimum value cannot be greater than maximum value");
  }

  for (let i = min; i <= max; i += step) {
    result.push(i);
  }

  return result;
}

export interface NumericRange {
  min: number;
  max: number;
  steps?: number;
}

export interface NumericBoundary {
  value: number;
  reachable?: boolean;
}

export interface NumericRangeBoundary {
  min?: NumericBoundary;
  max?: NumericBoundary;
}

function isNumericRange(object: NumericValues) {
  if (typeof object !== "object") {
    return false;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const o = object as any;
  return o.min !== undefined && o.max !== undefined;
}

export type NumericValues = number[] | NumericRange;

export interface ActionNumericProps extends ActionPanel.Submenu.Props {
  /** The limits of the value */
  limits?: NumericRangeBoundary;
  /** Values which a user can choose from */
  predefined?: NumericValues;
  /** The default which will be shown as the first value in the list */
  defaultValue?: number;
  /** The given string will be shown at the of the default value to indicate the default value */
  defaultMarker?: string;
  /** The given function will be used to convert a number to a string. Custom formatting can be applied here. */
  onFormat?: (value: number) => string;
  /** Enable custom number. When true the user search-text will be added to the input at the top if it is a valid number */
  enableCustomNumber?: boolean;
  /** Function will be called when a user has selected a value */
  onValueChanged?: (value: number) => void;
}

function extractNumbers(value: NumericValues): number[] {
  if (Array.isArray(value)) {
    if (value.length <= 0) {
      return [];
    }
    if (value.every((item) => typeof item === "number")) {
      const nums = value as number[];
      return nums;
    }
  }
  if (isNumericRange(value)) {
    const r = value as NumericRange;
    const [start, stop] = r.min > r.max ? [r.max, r.min] : [r.min, r.max];
    const steps = r.steps === undefined || r.steps === null ? 10 : r.steps;
    const stepSize = (stop - start) / steps;
    return numberArray(start, stop, stepSize);
  }
  return [];
}

function valueUnderLimit(value: number, boundary: NumericBoundary) {
  const reachable = boundary.reachable === false ? false : true;
  if (reachable) {
    return value <= boundary.value;
  } else {
    return value < boundary.value;
  }
}

function valueOverLimit(value: number, boundary: NumericBoundary) {
  const reachable = boundary.reachable === false ? false : true;
  if (reachable) {
    return value >= boundary.value;
  } else {
    return value > boundary.value;
  }
}

function inBoundary(value: number, boundary: NumericRangeBoundary | undefined) {
  if (!boundary) {
    return true;
  }
  if (boundary.min) {
    if (valueUnderLimit(value, boundary.min)) {
      return false;
    }
  }
  if (boundary.max) {
    if (valueOverLimit(value, boundary.max)) {
      return false;
    }
  }
  return true;
}

/**
 * @experimental
 *
 * Select a number
 *
 * @example
 * ```typescript
 * import * as rui from "@raycast-community/ui";
 *
 * <rui.Action.Numeric
 *   title="Choose Number with Custom Number"
 *   min={5.5}
 *   max={10}
 *   step={0}
 *   onFormat={(v) => v.toPrecision(2)}
 *   onNumberChanged={(v) => console.log(`Number changed to ${v}`)}
 *   enableCustomNumber={true}
 * />
 * ```
 */
export function ActionNumeric({
  onFormat,
  limits,
  icon,
  predefined,
  defaultValue,
  defaultMarker: defaultMarkerCaller,
  enableCustomNumber,
  onValueChanged,
  ...restProps
}: ActionNumericProps) {
  let numbers = (predefined ? extractNumbers(predefined) : []).filter((e) => inBoundary(e, limits));
  if (defaultValue !== undefined && defaultValue !== null) {
    const defaultExists = numbers.find((e) => e === defaultValue) !== undefined;
    if (defaultExists) {
      numbers = numbers.filter((e) => e !== defaultValue);
    }
    numbers = [defaultValue, ...numbers]; // show default as first value because ActionPanel.Submenu has no selection mechanism
  }
  const format = onFormat ? onFormat : (value: number) => value.toString();
  const [customNumber, setCustomNumber] = useState<number>();
  const [filterNumbers, setFilterNumbers] = useState<number[]>(numbers);
  const onSearchTextChange = (searchText: string) => {
    const ttext = searchText.trim();
    const filtered = numbers.filter((e) => format(e).includes(ttext));
    if (filtered && filtered.length > 0) {
      setFilterNumbers(filtered);
    } else {
      setFilterNumbers([]);
    }
    if (enableCustomNumber) {
      const n = Number(ttext);
      if (ttext.length <= 0 || isNaN(n)) {
        setCustomNumber(undefined);
      } else {
        setCustomNumber(n);
      }
    }
  };

  const onAction = (value: number) => {
    if (onValueChanged) {
      if (inBoundary(value, limits)) onValueChanged(value);
    }
  };

  const defaultMarker = defaultMarkerCaller ? defaultMarkerCaller : "(Default)";

  return (
    <ActionPanel.Submenu {...restProps} icon={icon ?? Icon.Hashtag} onSearchTextChange={onSearchTextChange}>
      {customNumber !== undefined && inBoundary(customNumber, limits) && (
        <Action title={`${format(customNumber)}`} onAction={() => onAction(customNumber)} />
      )}
      {filterNumbers?.map((e) => (
        <Action
          key={e}
          title={format(e) + (e === defaultValue ? ` ${defaultMarker}` : "")}
          onAction={() => onAction(e)}
        />
      ))}
    </ActionPanel.Submenu>
  );
}
