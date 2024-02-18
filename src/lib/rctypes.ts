import { LaunchType } from "@raycast/api";

export interface Arguments {
  /**
   * The representation of arguments given that key here is the `name` defined in manifest file and value is the user's input
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [item: string]: any;
}

export interface LaunchContext {
  /**
   * The context values for a command launch.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [item: string]: any;
}

export type InterExtensionLaunchOptions = IntraExtensionLaunchOptions & {
  /** when launching command from a different extension, the owner or author (as defined in the extension's manifest) is necessary */
  ownerOrAuthorName: string;
  /** when launching command from a different extension, the extension name (as defined in the extension's manifest) is necessary */
  extensionName: string;
};

/**
 * Options for launching a command from the same extension.
 */
export type IntraExtensionLaunchOptions = {
  /** command name as defined in the extension's manifest */
  name: string;
  /** {@link LaunchType.UserInitiated} or {@link LaunchType.Background} */
  type: LaunchType;
  /** optional object for the argument properties and values as defined in the extension's manifest, for example: `{ "argument1": "value1" }` */
  arguments?: Arguments | null;
  /** arbitrary object for custom data that should be passed to the command and accessible as `environment.launchContext`; the object must be JSON serializable (Dates and Buffers supported) */
  context?: LaunchContext | null;
  /** optional string to send as fallback text to the command */
  fallbackText?: string | null;
};

export type LaunchOptions = IntraExtensionLaunchOptions | InterExtensionLaunchOptions;
