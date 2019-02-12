## An attempt to reproduce [issue #449](https://github.com/prisma/graphqlgen/issues/449); to be shared with team [`graphqlgen`](https://github.com/prisma/graphqlgen)

### Steps:

```
> yarn dev # keep server running, schema is introspected by graphql-code-generator to generate `types.d.ts.`
> yarn generate # use graphql-code-generator to generate `types.d.ts.`
> npx graphqlgen # should scaffold resolvers, throws error (`UnhandledPromiseRejectionWarning: TypeError: Cannot read property 'map' of undefined`) instead
```

### Error received in my environment:

```
G:\git_projs\bug_repro\graphqlgen-heap-burst>yarn generate
yarn run v1.7.0
$ gql-gen
  √ Parse configuration
  √ Generate outputs
Done in 2.42s.

G:\git_projs\bug_repro\graphqlgen-heap-burst>npx graphqlgen -v
npx: installed 1 in 1.642s
Path must be a string. Received undefined
G:\git_projs\bug_repro\graphqlgen-heap-burst\node_modules\graphqlgen\dist\index.js
0.6.0-rc8

G:\git_projs\bug_repro\graphqlgen-heap-burst>npx graphqlgen
npx: installed 1 in 1.543s
Path must be a string. Received undefined
G:\git_projs\bug_repro\graphqlgen-heap-burst\node_modules\graphqlgen\dist\index.js
(node:39688) UnhandledPromiseRejectionWarning: TypeError: Cannot read property 'map' of undefined
    at Object.exports.printFieldLikeType (G:\git_projs\bug_repro\graphqlgen-heap-burst\node_modules\graphqlgen\dist\generators\common.js:135:52)    at renderTypeResolver (G:\git_projs\bug_repro\graphqlgen-heap-burst\node_modules\graphqlgen\dist\generators\typescript\generator.js:234:31)
    at G:\git_projs\bug_repro\graphqlgen-heap-burst\node_modules\graphqlgen\dist\generators\typescript\generator.js:210:82    at Array.map (<anonymous>)
    at renderResolverFunctionInterfaces (G:\git_projs\bug_repro\graphqlgen-heap-burst\node_modules\graphqlgen\dist\generators\typescript\generator.js:209:10)
    at renderNamespace (G:\git_projs\bug_repro\graphqlgen-heap-burst\node_modules\graphqlgen\dist\generators\typescript\generator.js:153:274)
    at G:\git_projs\bug_repro\graphqlgen-heap-burst\node_modules\graphqlgen\dist\generators\typescript\generator.js:118:16    at Array.map (<anonymous>)
    at renderObjectNamespaces (G:\git_projs\bug_repro\graphqlgen-heap-burst\node_modules\graphqlgen\dist\generators\typescript\generator.js:117:10)    at renderNamespaces (G:\git_projs\bug_repro\graphqlgen-heap-burst\node_modules\graphqlgen\dist\generators\typescript\generator.js:112:21)
(node:39688) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)
(node:39688) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
G:\git_projs\bug_repro\graphqlgen-heap-burst>
```
