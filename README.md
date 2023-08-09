### Setup Dev Env

- Step 0: install gatsbyjs. See this https://www.gatsbyjs.com/docs/tutorial/getting-started/part-0/
- Step 1: `git clone https://github.com/ModelAtlasofTheEarth/website.git atlas-website.git`
- Step 2: `cd atlas-website.git` and then `npm install --legacy-peer-deps`
- Step 3: `npm run build`
- Step 4: `gatsby develop`
- Step 5: in web browser, go http://localhost:8000

### Staging server

 https://websitemain60061.gatsbyjs.io

### List markdown files

let's use https://github.com/ModelAtlasofTheEarth/website/tree/main/src/pages/contact as an example

- https://github.com/ModelAtlasofTheEarth/website/blob/main/src/pages/contact/index.js

This index.js file read in a list of markdown files and list them in a web page. Pay attention to the "template key" https://github.com/ModelAtlasofTheEarth/website/blob/71608bf3331d456fe542d73898ec2a9b47a1126e/src/pages/contact/index.js#L119

- We need to get some markdown files from Sara and Dan

Create a new folder https://github.com/ModelAtlasofTheEarth/website/blob/main/src/pages/models and put the markdown files in this folder

- Copy and modify index.js to make the web page work at http://localhost:8000/models/

 
