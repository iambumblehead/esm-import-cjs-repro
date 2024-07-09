esm import cjs repro

```bash
git clone https://github.com/iambumblehead/esm-import-cjs-repro.git
cd esm-import-cjs-repro
npm install
npm run test:node # pass
npm run test:tsx # pass
npm run test:swc # fail
```
