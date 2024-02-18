# RaycastUI

Ready to use [Raycast](https://raycast.com) Components.

The components are based on native Raycast components (`@raycast/api`), but they are offer more functionality.
Some components are specifically designed for particular use cases, such as `MenuBarExtra.RootOnly`.

⚠️ <b style="color: red">This is not(!) an official Raycast library</b> ⚠️

## Why RaycastUI?

Raycast's native components are awesome, and you can build a lot of stuff with them.
After developing many extensions, I found myself rebuilding the same components repeatedly.
While some parts may eventually be added to the native components over time, some are out of the scope of `@raycast/api` in my opinion.
This library is here to address these needs.

## How to install

`npm install @raycast-community/ui`

## Requirements

Minimum Raycast API version `1.64.0`. The minimum version may increase over time to support the latest features.

## Versioning

This library is still in development. I try not to break existing features, but it can happen.
I would recommend setting the `@raycast-community/ui` in `package.json` to `~` (for only upgrading the fix versions) for now, instead of the common `^`prefix (which automatically updates every minor version)!

e.g. `"@raycast-community/ui": "~0.1"`

## How to use

The components are mainly structured as you know them from Raycast itself and can be used mixed with native components.

### Mixing with @raycast/api

You can mix the components with the native ones.
It is recommended to prefix the component upon import to avoid naming collision when mixing Raycast native components with RaycastUI components.

This can be done in various ways like following ...

```tsx
import * as rui from "@raycast-community/ui";
```

```tsx
import { Action as RUIAction } from "@raycast-community/ui";
```

```tsx
import { Action as RCAction } from "@raycast/api"; // alias Raycast native components
import { Action } from "@raycast-community/ui"; // use RaycastUI without alias
```

### Reference

You can find an API reference for all components [here](docs/index.md)

### Examples

Check out the [test commands](tests/src) in this repository to see how to use the components.

You can clone this repository and build it yourself to play around with different components from the library.

### Numeric Action Example

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

### Menu Command Example

```tsx
import { LaunchType, showHUD } from "@raycast/api";
import { MenuBarExtra } from "@raycast-community/ui";

export default function MenuCommand() {
  return (
    <MenuBarExtra title="Raycast UI Menu Command">
      <MenuBarExtra.Item
        title={`${"#".repeat(100)}`}
        textLimits={{ maxLength: 10 }}
        onAction={() => showHUD("Child Menu from Menubar")}
      />
      <MenuBarExtra.Item title="Test Item" />
      <MenuBarExtra.Section title="A Section" subtitle="Section Subtitle">
        <MenuBarExtra.Item title="Section Item 1" />
      </MenuBarExtra.Section>
      <MenuBarExtra.OpenInBrowser url="https://www.raycast.com" />
      <MenuBarExtra.LaunchCommand
        title="Launch Command"
        command={{
          name: "test",
          type: LaunchType.UserInitiated,
        }}
      />
      <MenuBarExtra.Submenu title="Submenu">
        <MenuBarExtra.Item title="Submenu Item" />
      </MenuBarExtra.Submenu>
      <MenuBarExtra.ConfigureCommand />
      <MenuBarExtra.ConfigureExtension />
      <MenuBarExtra.OpenInBrowser url="https://www.raycast.com" />
    </MenuBarExtra>
  );
}
```

## Development

To build the library you need to call `npm ci && npm run build`.

Go to the [tests](tests) directory and build it to be able to test the components. Don't forget to build the library first before using the tests!

Build it via `cd tests && npm ci && npm run build`

## License

[MIT](LICENSE)
