---
path: '/rexplorer-file-explorer'
date: '2018-02-09T20:08:39.597Z'
title: 'Rexplorer, A file explorer built in React'
---

We'll be doing a deep dive into Rexplorer, a file explorer I built with React. This project has been going on for almost a year and I'd like to share somethings I learnt while building it. Before we begin, some background.

### Folder Structure

Rexplorer folder structure looks like any other typical node/react library

```
├── dist    //minified output
├── docs    //StorybookJS static output
├── es      //es module version
├── lib     //cjs output
├── package.json
├── package-lock.json
├── README.md
├── rollup.config.js
├── screenshots //screenshots for readme
├── src //components
│   ├── content // Folder content component
│   ├── context.js //React context
│   ├── filetree //FileTree component
│   ├── index.js
│   ├── navigation //Navigation bar
│   └── svgs
├── stories // Storybookjs tests
└── yarn.lock
```

### Data Flow

Rexplorer consumes `json` of directory listing in similar to this form below. The npm package [directory-tree](https://www.npmjs.com/package/directory-tree) makes this pretty easy to obtain. Recplorer takes this data and creates components
that mimic the files/folder present in json.

```json
{
  "path": "",
  "name": "",
  "children": []
}
```

Moving on to actual rendering, let's say for argument sake, we get the directory listing from some local json file generated by [directory-tree](https://www.npmjs.com/package/directory-tree) and on the frontend it looks like this

```javascript
const dataSource = require('./sample.json')
...
render(){
    return(
      <Rexplorer data={dataSource}>
        {({ getFileTree, getFileContents }) => (
          <div>
            <div>{getFileTree()}</div>
            <div>{getFileContents()}</div>
          </div>
        )}
      </Rexplorer>
    )
}
```

Here, the methods `getFileTree` and `getFileContents` are used to spit out rendered components from the json input. As we can see from the implementation below, it only renders the current visible folders, (which in this case can be found in children object).

```javascript
getTree = () => {
  let { children } = this.state.initialFileTree
  return children.map((content, key) => (
    <Icon
      {...content}
      key={content.name + key}
      title={content.name}
      isDirectory={content.type === 'directory' ? true : false}
      iconHeight={20}
    />
  ))
}
```

`initialFileTree` here represents the same json after it has been sorted. Similarly with `getFileContents`, it takes the current sorted children and renders out File/Folder icons respectively.

```javascript
getContents = () => {
  var { children } = this.state
  return children.map((content, index) => (
    <File
      {...content}
      key={content.name + index}
      isDirectory={content.type === 'directory' ? true : false}
      title={content.name}
    />
  ))
}
```

Now it's time to see it in action! See it live here https://pr0x1m4.github.io/rexplorer

## Lessons learnt (So far)

1. Use React Context.

   I initially had planned to use redux for state management but using context I was quickly able not only to get started developing but also was very productive in moving/creating new components that required some more state/features.

2. Keep dependencies to a (and I cant stress this enough) _bare_ minimum

   I started out using styled-components in this project to help out
   with styling and theming (possibly) but when build time came around, I was disappointed with the bundle size, coming in at `55.65 KB`, which to be honest isn't bad but a small library such as this one should carry that much weight. After refactoring and using inline-styles, I was able to remove styled-components and my new bundle size was a teeny tiny `6.54KB`!

## The Road Ahead

- Navigation?
  Im working on including more features such as navigation bar and searching in `rexplorer`, really excited.
- Themes
  This might be in the distant future, but it'd be pretty cool if it were able to accept different themes and customisations.

- Smaller Bundles, better perf?

  Definitely looking forward to shaving even more off the bundle size and increasing perf.
