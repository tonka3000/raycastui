# MenuBarExtra

## API Reference

### MenuBarExtra

Adds an item to the menu bar, optionally with a menu attached in case its children prop is non-empty.

> Currently all props are just passed to [MenuBarExtra](https://developers.raycast.com/api-reference/menu-bar-commands#menubarextra)

#### Example

```tsx
import { LaunchType, showHUD } from "@raycast/api";
import { MenuBarExtra } from "@raycast-community/ui";

export default function MenuCommand() {
  return (
    <MenuBarExtra title="Raycast UI Menu Command">
      <MenuBarExtra.Item
        title="Hello"
        onAction={() => showHUD("Child Menu from Menubar")}
      />
  );
}
```

#### Props

Same as [native MenuBarExtra](https://developers.raycast.com/api-reference/menu-bar-commands#props).

### MenuBarExtra.RootOnly

`🧪 Experimental`

Only show a MenubarExtra without any items. Start the given action on user click.

⚠️ Warning: The `onAction` will also get called on the command activation e.g. during loading or reloading.

#### Example

```tsx
import { MenuBarExtra } from "@raycast-community/ui";
import { showHUD } from "@raycast/api";

export default function MenuCommand() {
  return <MenuBarExtra.RootOnly title="Root Only" onAction={() => showHUD("Menu Clicked")} />;
}
```

#### Props

Same as [native MenuBarExtra](https://developers.raycast.com/api-reference/menu-bar-commands#props) but no `children`.

Extra Props:

| Prop     | Description                                          | Type         | Default |
| -------- | ---------------------------------------------------- | ------------ | ------- |
| onAction | Callback that is triggered when the item is clicked. | `() => void` | -       |

### MenuBarExtra.Item

An enhanced version of [MenuBarExtra.Item](https://developers.raycast.com/api-reference/menu-bar-commands#menubarextra.item).

#### Example

```tsx
import { MenuBarExtra } from "@raycast-community/ui";
import { LaunchType, showHUD } from "@raycast/api";

export default function MenuCommand() {
  return (
    <MenuBarExtra title="Raycast UI Menu Command">
      <MenuBarExtra.Item
        title={`${"#".repeat(100)}`}
        textLimits={{ maxLength: 10 }}
        onAction={() => showHUD("Child Menu from Menubar")}
      />
  );
}
```

#### Props

| Prop       | Description                                             | Type                                                                                                            | Default |
| ---------- | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------- |
| title\*    | The title displayed for the item.                       | `string`                                                                                                        | -       |
| subtitle   | The subtitle displayed for the item.                    | `string`                                                                                                        | -       |
| icon       | The icon displayed for the item.                        | [Image.ImageLike](https://developers.raycast.com/api-reference/user-interface/icons-and-images#image.imagelike) | -       |
| shortcut   | The keyboard shortcut for the item.                     | [Keyboard.Shortcut](https://developers.raycast.com/api-reference/keyboard#keyboard.shortcut)                    | -       |
| onAction   | Callback that is triggered when the Action is selected. | `() => void`                                                                                                    | -       |
| tooltip    | A tooltip to display when the cursor hovers the item.   | `string`                                                                                                        | -       |
| textLimits | Clip text if defined                                    | `TextLimitProps`                                                                                                | -       |

### MenuBarExtra.Section

An enhanced version of the native [MenuBarExtra.Section](https://developers.raycast.com/api-reference/menu-bar-commands#menubarextra.section).

#### Example

```tsx
import { MenuBarExtra } from "@raycast-community/ui";

export default function MenuCommand() {
  return (
    <MenuBarExtra title="Menu">
      <MenuBarExtra.Section title="Title" subtitle="Subtitle">
        <MenuBarExtra.Item title="Item" />
      </MenuBarExtra.Section>
    </MenuBarExtra>
  );
}
```

#### Props

| Prop           | Description                                             | Type                                                                                                            | Default |
| -------------- | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------- |
| title\*        | The title displayed for the item.                       | `string`                                                                                                        | -       |
| subtitle       | The subtitle displayed for the item.                    | `string`                                                                                                        | -       |
| icon           | The icon displayed for the item.                        | [Image.ImageLike](https://developers.raycast.com/api-reference/user-interface/icons-and-images#image.imagelike) | -       |
| shortcut       | The keyboard shortcut for the item.                     | [Keyboard.Shortcut](https://developers.raycast.com/api-reference/keyboard#keyboard.shortcut)                    | -       |
| onAction       | Callback that is triggered when the Action is selected. | `() => void`                                                                                                    | -       |
| tooltip        | A tooltip to display when the cursor hovers the item.   | `string`                                                                                                        | -       |
| titleSeparator | The separator which will be used when a subtitle is set | `string`                                                                                                        | -       |
| childrenLimit  | Set the children limits                                 | `ElementLimit`                                                                                                  | -       |

### MenuBarExtra.Submenu

An enhanced version of the native [MenuBarExtra.Submenu](https://developers.raycast.com/api-reference/menu-bar-commands#menubarextra.submenu).

#### Example

```tsx
import { MenuBarExtra } from "@raycast-community/ui";

export default function MenuCommand() {
  return (
    <MenuBarExtra title="Menu">
      <MenuBarExtra.Submenu title="Submenu" subtitle="Subtitle" titleSeparator="|">
        <MenuBarExtra.Item title="Test" />
      </MenuBarExtra.Submenu>
    </MenuBarExtra>
  );
}
```

#### Props

| Prop           | Description                                             | Type                                                                                                            | Default |
| -------------- | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------- |
| title\*        | The title displayed for the item.                       | `string`                                                                                                        | -       |
| subtitle       | The subtitle displayed for the item.                    | `string`                                                                                                        | -       |
| icon           | The icon displayed for the item.                        | [Image.ImageLike](https://developers.raycast.com/api-reference/user-interface/icons-and-images#image.imagelike) | -       |
| shortcut       | The keyboard shortcut for the item.                     | [Keyboard.Shortcut](https://developers.raycast.com/api-reference/keyboard#keyboard.shortcut)                    | -       |
| onAction       | Callback that is triggered when the Action is selected. | `() => void`                                                                                                    | -       |
| tooltip        | A tooltip to display when the cursor hovers the item.   | `string`                                                                                                        | -       |
| titleSeparator | The separator which will be used when a subtitle is set | `string`                                                                                                        | -       |

### MenuBarExtra.OpenInBrowser

Open the given url in the default browser.

#### Example

```tsx
import { MenuBarExtra } from "@raycast-community/ui";

export default function MenuCommand() {
  return (
    <MenuBarExtra title="Menu">
      <MenuBarExtra.OpenInBrowser url="https://www.raycast.com" />
    </MenuBarExtra>
  );
}
```

#### Props

| Prop       | Description                                             | Type                                                                                                            | Default |
| ---------- | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------- |
| title\*    | The title displayed for the item.                       | `string`                                                                                                        | -       |
| subtitle   | The subtitle displayed for the item.                    | `string`                                                                                                        | -       |
| icon       | The icon displayed for the item.                        | [Image.ImageLike](https://developers.raycast.com/api-reference/user-interface/icons-and-images#image.imagelike) | -       |
| shortcut   | The keyboard shortcut for the item.                     | [Keyboard.Shortcut](https://developers.raycast.com/api-reference/keyboard#keyboard.shortcut)                    | -       |
| onAction   | Callback that is triggered when the Action is selected. | `() => void`                                                                                                    | -       |
| tooltip    | A tooltip to display when the cursor hovers the item.   | `string`                                                                                                        | -       |
| textLimits | Clip text if defined                                    | `TextLimitProps`                                                                                                | -       |
| url\*      | This url which should be opened                         | `string`                                                                                                        | -       |
| onOpen     | Callback when the URL was opened in the browser         | `(url: string) => void`                                                                                         | -       |

### MenuBarExtra.CopyToClipboard

Copy given content to the clipboard.

#### Example

```tsx
import { MenuBarExtra } from "@raycast-community/ui";

export default function MenuCommand() {
  return (
    <MenuBarExtra title="Menu">
      <MenuBarExtra.CopyToClipboard content="Some Content" />
    </MenuBarExtra>
  );
}
```

#### Props

| Prop       | Description                                             | Type                                                                                                                  | Default |
| ---------- | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ------- |
| title\*    | The title displayed for the item.                       | `string`                                                                                                              | -       |
| subtitle   | The subtitle displayed for the item.                    | `string`                                                                                                              | -       |
| icon       | The icon displayed for the item.                        | [Image.ImageLike](https://developers.raycast.com/api-reference/user-interface/icons-and-images#image.imagelike)       | -       |
| shortcut   | The keyboard shortcut for the item.                     | [Keyboard.Shortcut](https://developers.raycast.com/api-reference/keyboard#keyboard.shortcut)                          | -       |
| onAction   | Callback that is triggered when the Action is selected. | `() => void`                                                                                                          | -       |
| tooltip    | A tooltip to display when the cursor hovers the item.   | `string`                                                                                                              | -       |
| textLimits | Clip text if defined                                    | `TextLimitProps`                                                                                                      | -       |
| content    | The contents that will be copied to the clipboard       | `string` or `number` or [Clipboard.Content](https://developers.raycast.com/api-reference/clipboard#clipboard.content) | -       |

### MenuBarExtra.LaunchCommand

Launch the given Raycast command via the given [LaunchOptions](https://developers.raycast.com/api-reference/command#launchoptions).

#### Example

```tsx
import { MenuBarExtra } from "@raycast-community/ui";

export default function MenuCommand() {
  return (
    <MenuBarExtra title="Menu">
      <MenuBarExtra.LaunchCommand
        title="Launch Command"
        command={{
          name: "test",
          type: LaunchType.UserInitiated,
        }}
      />
    </MenuBarExtra>
  );
}
```

#### Props

| Prop       | Description                                             | Type                                                                                                            | Default |
| ---------- | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------- |
| title\*    | The title displayed for the item.                       | `string`                                                                                                        | -       |
| subtitle   | The subtitle displayed for the item.                    | `string`                                                                                                        | -       |
| icon       | The icon displayed for the item.                        | [Image.ImageLike](https://developers.raycast.com/api-reference/user-interface/icons-and-images#image.imagelike) | -       |
| shortcut   | The keyboard shortcut for the item.                     | [Keyboard.Shortcut](https://developers.raycast.com/api-reference/keyboard#keyboard.shortcut)                    | -       |
| onAction   | Callback that is triggered when the Action is selected. | `() => void`                                                                                                    | -       |
| tooltip    | A tooltip to display when the cursor hovers the item.   | `string`                                                                                                        | -       |
| textLimits | Clip text if defined                                    | `TextLimitProps`                                                                                                | -       |
| command    | The command + options which should be launched          | [LaunchOptions](https://developers.raycast.com/api-reference/command#launchoptions)                             | -       |

### MenuBarExtra.ConfigureCommand

Open the current Command Preferences.

#### Example

```tsx
import { MenuBarExtra } from "@raycast-community/ui";

export default function MenuCommand() {
  return (
    <MenuBarExtra title="MenuBar">
      <MenuBarExtra.ConfigureCommand />
    </MenuBarExtra>
  );
}
```

#### Props

| Prop       | Description                                             | Type                                                                                                            | Default |
| ---------- | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------- |
| title\*    | The title displayed for the item.                       | `string`                                                                                                        | -       |
| subtitle   | The subtitle displayed for the item.                    | `string`                                                                                                        | -       |
| icon       | The icon displayed for the item.                        | [Image.ImageLike](https://developers.raycast.com/api-reference/user-interface/icons-and-images#image.imagelike) | -       |
| shortcut   | The keyboard shortcut for the item.                     | [Keyboard.Shortcut](https://developers.raycast.com/api-reference/keyboard#keyboard.shortcut)                    | -       |
| onAction   | Callback that is triggered when the Action is selected. | `() => void`                                                                                                    | -       |
| tooltip    | A tooltip to display when the cursor hovers the item.   | `string`                                                                                                        | -       |
| textLimits | Clip text if defined                                    | `TextLimitProps`                                                                                                | -       |

### MenuBarExtra.ConfigureExtension

Open the current Extension Preferences

#### Example

```tsx
import { MenuBarExtra } from "@raycast-community/ui";

export default function MenuCommand() {
  return (
    <MenuBarExtra title="MenuBar">
      <MenuBarExtra.ConfigureExtension />
    </MenuBarExtra>
  );
}
```

#### Props

| Prop       | Description                                             | Type                                                                                                            | Default |
| ---------- | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------- |
| title\*    | The title displayed for the item.                       | `string`                                                                                                        | -       |
| subtitle   | The subtitle displayed for the item.                    | `string`                                                                                                        | -       |
| icon       | The icon displayed for the item.                        | [Image.ImageLike](https://developers.raycast.com/api-reference/user-interface/icons-and-images#image.imagelike) | -       |
| shortcut   | The keyboard shortcut for the item.                     | [Keyboard.Shortcut](https://developers.raycast.com/api-reference/keyboard#keyboard.shortcut)                    | -       |
| onAction   | Callback that is triggered when the Action is selected. | `() => void`                                                                                                    | -       |
| tooltip    | A tooltip to display when the cursor hovers the item.   | `string`                                                                                                        | -       |
| textLimits | Clip text if defined                                    | `TextLimitProps`                                                                                                | -       |

### MenuBarExtra.OpenMaps

Open Apple Maps.

#### Example

```tsx
import { MenuBarExtra } from "@raycast-community/ui";

export default function MenuCommand() {
  return (
    <MenuBarExtra title="MenuBar">
      <MenuBarExtra.Section title="Maps">
        <MenuBarExtra.OpenMaps />
        <MenuBarExtra.OpenMaps title="Coordinates" coordinates={{ long: 51.5007292, lat: -0.1272003 }} />
        <MenuBarExtra.OpenMaps title="Map Type" mapType="Satellite" />
      </MenuBarExtra.Section>
    </MenuBarExtra>
  );
}
```

#### Props

| Prop        | Description                                             | Type                                                                                                            | Default |
| ----------- | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------- |
| title\*     | The title displayed for the item.                       | `string`                                                                                                        | -       |
| subtitle    | The subtitle displayed for the item.                    | `string`                                                                                                        | -       |
| icon        | The icon displayed for the item.                        | [Image.ImageLike](https://developers.raycast.com/api-reference/user-interface/icons-and-images#image.imagelike) | -       |
| shortcut    | The keyboard shortcut for the item.                     | [Keyboard.Shortcut](https://developers.raycast.com/api-reference/keyboard#keyboard.shortcut)                    | -       |
| onAction    | Callback that is triggered when the Action is selected. | `() => void`                                                                                                    | -       |
| tooltip     | A tooltip to display when the cursor hovers the item.   | `string`                                                                                                        | -       |
| textLimits  | Clip text if defined                                    | `TextLimitProps`                                                                                                | -       |
| coordinates | The coordinate of the location which should be shown    | `Coordinates`                                                                                                   | -       |
| mapType     | Which map type should be used like `Satellite`          | `MapType`                                                                                                       | -       |
