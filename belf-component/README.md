```bash
npx create-next-app --example with-typescript [앱 이름]
```

```bash
.
├── README.md
├── components
│   ├── Layout.tsx
│   ├── List.tsx
│   ├── ListDetail.tsx
│   └── ListItem.tsx
├── interfaces
│   └── index.ts
├── next-env.d.ts
├── node_modules
├── package-lock.json
├── package.json
├── pages
│   ├── about.tsx
│   ├── api
│		│   └── users
│		│       └── index.ts
│   ├── index.tsx
│   └── users
│				├── [id].tsx
│		    └── index.tsx
├── tsconfig.json
└── utils
    └── sample-data.ts
```

```bash
.
├── README.md
├── components
│   └── Layout.tsx
├── interfaces
├── next-env.d.ts
├── node_modules
├── package-lock.json
├── package.json
├── pages
│   ├── about.tsx
│   └── index.tsx
└── tsconfig.json
```

```bash
npm i react-redux
npm i -D @types/react-redux
```

```bash
npm i next-redux-wrapper
npm i -D @types/next-redux-wrapper
```

```bash
npm i @reduxjs/toolkit
```

```bash
npm i styled-components
npm i -D @types/styled-components
```

```bash
npm i -D babel-plugin-styled-components
```

```bash
.
├── README.md
├── components
│   └── Layout.tsx
├── config
│   └── store.ts
├── features
│   └── counter
│		    ├── Counter.tsx
│		    ├── counterSlice.ts
│		    └── style.tsx
├── interfaces
├── next-env.d.ts
├── node_modules
├── package-lock.json
├── package.json
├── .babelrc
├── pages
│   ├── _app.tsx
│   ├── about.tsx
│   └── index.tsx
└── tsconfig.json
```

```tsx
/config/store.ts

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import counterSlice, { initialState as ICounter } from '../features/counter/counterSlice';

const rootReducer = combineReducers({
  counter: counterSlice,
});

const preloadedState = () => {
  return { counter: ICounter };
};

const store = () => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: preloadedState(),
  });
};

export const wrapper = createWrapper(store, {
  debug: process.env.NODE_ENV !== 'production',
});

export default store;
```

```tsx
/pages/_app.tsx

import { AppProps } from "next/app";
import React from "react";
import { wrapper } from "../config/store";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(MyApp);
```

```json
/.babelrc

{
  "presets": [
    "next/babel"
  ],
  "plugins": [
    [
      "styled-components",
      {
        "ssr": true,
        "displayName": true
      }
    ]
  ]
}
```

```json
/package.json

{
  "name": "belf-component",
  "version": "1.0.0",
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start",
    "type-check": "tsc"
  },
  "dependencies": {
    "@reduxjs/toolkit": "^1.5.1",
    "next": "latest",
    "next-redux-wrapper": "^6.0.2",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-redux": "^7.2.3",
    "styled-components": "^5.2.1"
  },
  "devDependencies": {
    "@types/next-redux-wrapper": "^3.0.0",
    "@types/node": "^12.12.21",
    "@types/react": "^17.0.2",
    "@types/react-dom": "^17.0.1",
    "@types/react-redux": "^7.1.16",
    "@types/styled-components": "^5.1.9",
    "babel-plugin-styled-components": "^1.12.0",
    "typescript": "4.0"
  },
  "license": "MIT"
}
```

```typescript
/pages/_document.tsx

import Document, { DocumentContext } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}

```