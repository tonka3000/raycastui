import { Action as RCAction } from "@raycast/api";
import {
  ActionOpenCommandPreferences,
  ActionOpenCommandPreferencesProps,
  ActionOpenExtensionPreferences,
  ActionOpenExtensionPreferencesProps,
} from "./preferences";
import { ActionNumeric, ActionNumericProps } from "./numeric";
import { ActionOpenInMaps, ActionOpenInMapsProps } from "./maps";

interface ActionProps extends RCAction.Props {}

const Action: React.FC<ActionProps> & {
  /**
   * Open the current Extension Preferences
   *
   * @example
   * ```tsx
   * import { ActionPanel, List } from "@raycast/api";
   * import { Action } from "@raycast-community/ui";
   *
   * export default function Command() {
   *   return (
   *     <List>
   *       <List.Item
   *         title="Configure"
   *         actions={
   *           <ActionPanel>
   *             <Action.OpenExtensionPreferences />
   *           </ActionPanel>
   *         }
   *       />
   *     </List>
   *   );
   * }
   * ```
   */
  OpenExtensionPreferences: typeof ActionOpenExtensionPreferences;
  /**
   * Open the current Command Preferences
   *
   * @example
   * ```tsx
   * import { ActionPanel, List } from "@raycast/api";
   * import { Action } from "@raycast-community/ui";
   *
   * export default function Command() {
   *   return (
   *     <List>
   *       <List.Item
   *         title="Configure"
   *         actions={
   *           <ActionPanel>
   *             <Action.OpenCommandPreferences />
   *           </ActionPanel>
   *         }
   *       />
   *     </List>
   *   );
   * }
   * ```
   */
  OpenCommandPreferences: typeof ActionOpenCommandPreferences;
  /**
   * @experimental
   *
   * Select a number via an Action.Submenu
   *
   * @example
   * ```tsx
   * import { ActionPanel, List } from "@raycast/api";
   * import { Action } from "@raycast-community/ui";
   *
   * export default function Command() {
   *   return (
   *     <List>
   *       <List.Section title="Actions">
   *         <List.Item
   *           title="Numeric"
   *           actions={
   *             <ActionPanel>
   *               <Action.Numeric
   *                 title="Choose Number From predefined List"
   *                 limits={{ min: { value: 2 }, max: { value: 8 } }}
   *                 predefined={[2, 3, 4, 5, 6, 7, 8]}
   *                 onValueChanged={(v) => console.log(`Number changed to ${v}`)}
   *               />
   *             </ActionPanel>
   *           }
   *         />
   *       </List.Section>
   *     </List>
   *   );
   * }
   * ```
   */
  Numeric: typeof ActionNumeric;
  /**
   * Open Apple Maps
   */
  OpenMaps: typeof ActionOpenInMaps;
} = (props) => {
  return <RCAction {...props} />;
};
Action.OpenExtensionPreferences = ActionOpenExtensionPreferences;
Action.OpenCommandPreferences = ActionOpenCommandPreferences;
Action.Numeric = ActionNumeric;
Action.OpenMaps = ActionOpenInMaps;

namespace Action {
  export type Props = ActionProps;

  export namespace OpenExtensionPreferences {
    export type Props = ActionOpenExtensionPreferencesProps;
  }
  export namespace OpenCommandPreferences {
    export type Props = ActionOpenCommandPreferencesProps;
  }
  export namespace Numeric {
    export type Props = ActionNumericProps;
  }
  export namespace OpenMaps {
    export type Props = ActionOpenInMapsProps;
  }
}

export { Action };
