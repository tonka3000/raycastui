# Actions

## API Reference

### Action

A context-specific action that can be performed by the user.
Assign keyboard shortcuts to items to make it easier for users to perform frequently used actions.

> This action forward all props directly to the Raycast [Action](https://developers.raycast.com/api-reference/user-interface/actions#action) without any modification.

#### Example

```tsx
import { Action, List } from "@raycast-community/ui";
import { ActionPanel } from "@raycast/api";

export default function Command() {
  return (
    <List>
      <List.Item
        title="An Item"
        subtitle="#1"
        actions={
          <ActionPanel title="#1 in raycast/extensions">
            <Action title="Trigger" onAction={() => console.log("Triggered")} />
          </ActionPanel>
        }
      />
    </List>
  );
}
```

#### Props

| Prop      | Description                                                                                                              | Type                                                                                                            | Default                                                                                               |
| --------- | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| title\*   | The title displayed for the Action.                                                                                      | `string`                                                                                                        | -                                                                                                     |
| autoFocus | Indicates whether the Action should be focused automatically when the parent ActionPanel (or Actionpanel.Submenu) opens. | `boolean`                                                                                                       | -                                                                                                     |
| icon      | The icon displayed for the Action.                                                                                       | [Image.ImageLike](https://developers.raycast.com/api-reference/user-interface/icons-and-images#image.imagelike) | -                                                                                                     |
| shortcut  | The keyboard shortcut for the Action.                                                                                    | [Keyboard.Shortcut](https://developers.raycast.com/api-reference/keyboard#keyboard.shortcut)                    | -                                                                                                     |
| style     | Defines the visual style of the Action.                                                                                  | [Alert.ActionStyle](https://developers.raycast.com/api-reference/feedback/alert#alert.actionstyle)              | [Action.Style.Regu](https://developers.raycast.com/api-reference/user-interface/actions#action.style) |
| onAction  | Callback that is triggered when the Action is selected.                                                                  | `() => void`                                                                                                    | -                                                                                                     |

### Action.Numeric

`🧪 Experimental`

Action that let choose a number.
You can define a list of possible options and/or the number which the user entered.

#### Example

```tsx
import { ActionPanel, List } from "@raycast/api";
import { Action } from "@raycast-community/ui";

export default function Command() {
  return (
    <List>
      <List.Section title="Actions">
        <List.Item
          title="Numeric"
          actions={
            <ActionPanel>
              <Action.Numeric
                title="Choose Number From predefined List"
                limits={{ min: { value: 2 }, max: { value: 8 } }}
                predefined={[2, 3, 4, 5, 6, 7, 8]}
                onValueChanged={(v) => console.log(`Number changed to ${v}`)}
              />
            </ActionPanel>
          }
        />
      </List.Section>
    </List>
  );
}
```

#### Props

| Prop               | Description                                                                                            | Type                                                                                                            | Default |
| ------------------ | ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- | ------- |
| title\*            | The title displayed for the Action.                                                                    | `string`                                                                                                        | -       |
| icon               | The icon displayed for the Action.                                                                     | [Image.ImageLike](https://developers.raycast.com/api-reference/user-interface/icons-and-images#image.imagelike) | -       |
| shortcut           | The keyboard shortcut for the Action.                                                                  | [Keyboard.Shortcut](https://developers.raycast.com/api-reference/keyboard#keyboard.shortcut)                    | -       |
| limits             | The limits of the value                                                                                | `NumericRangeBoundary`                                                                                          | -       |
| predefined         | Values which a user can choose from                                                                    | `NumericValues`                                                                                                 | -       |
| defaultValue       | The default which will be shown as the first value in the list                                         | `number`                                                                                                        | -       |
| defaultMarker      | The given string will be shown at the of the default value to indicate the default value               | `string`                                                                                                        | -       |
| onFormat           | The given function will be used to convert a number to a string. Custom formatting can be applied here | `(value: number) => string`                                                                                     | -       |
| enableCustomNumber | When true the user search-text will be added to the input at the top if it is a valid number           | `boolean`                                                                                                       | -       |
| onValueChanged     | Function will be called when a user has selected a value                                               | `(value: number) => void`                                                                                       | -       |

### Action.OpenExtensionPreferences

Open the current Extension Preferences

#### Example

```tsx
import { ActionPanel, List } from "@raycast/api";
import { Action } from "@raycast-community/ui";

export default function Command() {
  return (
    <List>
      <List.Item
        title="Configure"
        actions={
          <ActionPanel>
            <Action.OpenExtensionPreferences />
          </ActionPanel>
        }
      />
    </List>
  );
}
```

#### Props

| Prop      | Description                                                                                                              | Type                                                                                                            | Default                                                                                               |
| --------- | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| title     | The title displayed for the Action.                                                                                      | `string`                                                                                                        | `Configure Extension`                                                                                 |
| autoFocus | Indicates whether the Action should be focused automatically when the parent ActionPanel (or Actionpanel.Submenu) opens. | `boolean`                                                                                                       | -                                                                                                     |
| icon      | The icon displayed for the Action.                                                                                       | [Image.ImageLike](https://developers.raycast.com/api-reference/user-interface/icons-and-images#image.imagelike) | -                                                                                                     |
| shortcut  | The keyboard shortcut for the Action.                                                                                    | [Keyboard.Shortcut](https://developers.raycast.com/api-reference/keyboard#keyboard.shortcut)                    | -                                                                                                     |
| style     | Defines the visual style of the Action.                                                                                  | [Alert.ActionStyle](https://developers.raycast.com/api-reference/feedback/alert#alert.actionstyle)              | [Action.Style.Regu](https://developers.raycast.com/api-reference/user-interface/actions#action.style) |

### Action.OpenCommandPreferences

Open the current Command Preferences

#### Example

```tsx
import { ActionPanel, List } from "@raycast/api";
import { Action } from "@raycast-community/ui";

export default function Command() {
  return (
    <List>
      <List.Item
        title="Configure"
        actions={
          <ActionPanel>
            <Action.OpenCommandPreferences />
          </ActionPanel>
        }
      />
    </List>
  );
}
```

#### Props

| Prop      | Description                                                                                                              | Type                                                                                                            | Default                                                                                               |
| --------- | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| title     | The title displayed for the Action.                                                                                      | `string`                                                                                                        | `Configure Command`                                                                                   |
| autoFocus | Indicates whether the Action should be focused automatically when the parent ActionPanel (or Actionpanel.Submenu) opens. | `boolean`                                                                                                       | -                                                                                                     |
| icon      | The icon displayed for the Action.                                                                                       | [Image.ImageLike](https://developers.raycast.com/api-reference/user-interface/icons-and-images#image.imagelike) | -                                                                                                     |
| shortcut  | The keyboard shortcut for the Action.                                                                                    | [Keyboard.Shortcut](https://developers.raycast.com/api-reference/keyboard#keyboard.shortcut)                    | -                                                                                                     |
| style     | Defines the visual style of the Action.                                                                                  | [Alert.ActionStyle](https://developers.raycast.com/api-reference/feedback/alert#alert.actionstyle)              | [Action.Style.Regu](https://developers.raycast.com/api-reference/user-interface/actions#action.style) |

### Action.OpenMaps

Open Apple Maps

#### Example

```tsx
import { ActionPanel, List } from "@raycast/api";
import { Action } from "@raycast-community/ui";

export default function Command() {
  return (
    <List>
      <List.Item
        title="Maps"
        actions={
          <ActionPanel>
            <Action.OpenMaps title="Coordinates" coordinates={{ long: 51.5007292, lat: -0.1272003 }} />
            <Action.OpenMaps title="Map Type" mapType="Satellite" />
          </ActionPanel>
        }
      />
    </List>
  );
}
```

#### Props

| Prop        | Description                                                                                                              | Type                                                                                                            | Default                                                                                               |
| ----------- | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| title\*     | The title displayed for the Action.                                                                                      | `string`                                                                                                        | -                                                                                                     |
| autoFocus   | Indicates whether the Action should be focused automatically when the parent ActionPanel (or Actionpanel.Submenu) opens. | `boolean`                                                                                                       | -                                                                                                     |
| icon        | The icon displayed for the Action.                                                                                       | [Image.ImageLike](https://developers.raycast.com/api-reference/user-interface/icons-and-images#image.imagelike) | -                                                                                                     |
| shortcut    | The keyboard shortcut for the Action.                                                                                    | [Keyboard.Shortcut](https://developers.raycast.com/api-reference/keyboard#keyboard.shortcut)                    | -                                                                                                     |
| style       | Defines the visual style of the Action.                                                                                  | [Alert.ActionStyle](https://developers.raycast.com/api-reference/feedback/alert#alert.actionstyle)              | [Action.Style.Regu](https://developers.raycast.com/api-reference/user-interface/actions#action.style) |
| onAction    | Callback that is triggered when the Action is selected.                                                                  | `() => void`                                                                                                    | -                                                                                                     |
| coordinates | The coordinate of the location which should be shown.                                                                    | `Coordinates`                                                                                                   | -                                                                                                     |
| mapType     | Which map type should be used like `Satellite`                                                                           | `MapType`                                                                                                       | -                                                                                                     |
