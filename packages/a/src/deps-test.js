// `lodash` is intentionally listed in `devDependencies`.
// Without it, this file cannot be tested locally because the workspace package
// has no local fallback for the peer dependency.
//
// However, when it is installed as a `devDependency` for local development,
// Yarn does not emit a warning that the consuming package is missing the
// required `peerDependency`, which makes the issue harder to notice.

import _ from 'lodash';

console.log(_.camelCase('test'));
