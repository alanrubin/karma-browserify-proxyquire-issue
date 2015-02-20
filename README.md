Demonstrates problem with `karma-browserify` and ~~`proxyquire-universal`~~ `proxyquireify`.

```
git clone git@github.com:jamestalmage/karma-browserify-proxyquire-issue.git
cd karma-browserify-proxyquire-issue
npm install
```

1. `git checkout browser-only-tests`
2. Start karma with `karma start`
3. Open up a file and, make changes and save.
4. Repeat step 2 **rapidly** until you see the error.
5. Stop karma
6. `git checkout no-proxyquire`
7. Repeat steps 2 & 3. No errors.


Note:
I originally thought the problem was `proxyquire-universal` but the underlying `proxyquireify` has the same issue, and is likely the real culprit.

* `proxyquire-universal` is used on `master` branch (has errors).
* `proxyquireify` is used on `browser-only-tests` branch (has errors).
* the `no-proxyquire` branch is the control branch using neither library (no errors).