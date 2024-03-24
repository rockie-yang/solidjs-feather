# solidjs-feather

Feather Icons for SolidJS or any other JSX library as long as it use kebab-case.
Or even for a homebrew JSX libraries like I do.

We take the most simple and lean way just like [feathericons](https://feathericons.com/) does.

The whole project only have the minimum code. The component is directly in jsx file.
It rely on the target project use bundler like [vite](https://vitejs.dev/) which will during bundle time create real component.

## Install

    npm i solidjs-feather

## Import individual icon one by one

Import each icon in one line. This is a recommended method

As it will only need to load the icon imported without load any other files.
Not only faster but also does not pollute the reloading logs.

    import IconDisc from "solidjs-feather/IconDisc.jsx";

## Import all used icons by once

Import all needed icons in one line

    import {IconDisc, IconRefreshCw} from "solidjs-feather";

> This will need load all the icons, specially with Hot Module Reloading, might take a second or two to reload

> And might have reload log print out

## Customize

the following parameters can be customized via jsx props.

* size, default value "1em". Both width and height will use the size value.
* fill, default value "none", it can be any css color value or variable like `var(--color)`
* stroke, default value "currentColor", it can be any css color value or variable like `var(--color)`
* strokeWidth, default value 2, e.g. like 1 for very thin, 1.5 for thin. 3 for thick.
* strokeLinecap, default value "round". The other meaningful option is square.
* strokeLinejoin, default value "round". . The other meaningful option is square.

example

    <IconFeather strokeWidth={1.5}>

    <IconFeather strokeLinecap={"square"} strokeLinejoin={"square}">