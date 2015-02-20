Demonstrates problem with `karma-browserify` and `proxyquire-universal`.

```
git clone git@github.com:jamestalmage/karma-browserify-proxyquire-issue.git
cd karma-browserify-proxyquire-issue
npm install
karma start
```

1. Start karma with `karma start`
2. Open up a file and, make changes and save.
3. Repeat step 2 **rapidly** until you see the error.
4. Stop karma
5. `git checkout no-proxyquire`
6. Repeat steps 2 & 3. No errors.
