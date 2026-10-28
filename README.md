# GitHub Actions Training Project — Node.js + npm + Build Artifact

This beginner CI project demonstrates a simple Node.js application, npm scripts, an automated test, a build step, and an uploaded GitHub Actions artifact.

## Project structure

```text
github-actions-npm-artifact-project/
├── .github/
│   └── workflows/
│       └── node-ci.yml
├── src/
│   └── index.js
├── test/
│   └── index.test.js
├── scripts/
│   └── build.js
├── package.json
├── package-lock.json
└── README.md
```

## Run locally

Requirements: Node.js 20 or newer and npm.

```bash
npm ci
npm test
npm run build
```

The build creates `dist/index.js` and `dist/build-info.json`.

## Run on GitHub

1. Create a GitHub repository, for example `github-actions-npm-artifact-project`.
2. Push these files to the repository's `main` branch.
3. Open **Actions** and select **Node.js CI - Build Artifact**.
4. Open the latest run to see install, test, build, and upload logs.
5. Under the run's **Artifacts** section, download `hello-app-build`.

The workflow also supports manual execution using **Run workflow**.

## Teaching points

- `npm ci` installs from the lock file.
- `npm test` checks the expected application behavior.
- `npm run build` generates the files to distribute.
- `actions/upload-artifact` stores those files with the workflow run; it does not deploy them to a server.

## Practice exercises

1. Change the greeting in `src/index.js`, run the tests, and rebuild.
2. Add a second test.
3. Add a version field to `package.json` and print it in the build info.
4. Change the artifact name in the workflow.
5. Intentionally break the test and observe that the workflow stops before the build/upload steps.
