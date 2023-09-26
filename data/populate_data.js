import fs from 'fs';
import matter from 'gray-matter';

const baseDir = process.cwd() + "/public/markdowns/";

const contentTypes = [
    "blog",
    "projects"
];

contentTypes.forEach(contentType => {
    const dir = baseDir + contentType + "/";
    const files = fs.readdirSync(dir);
    console.log(files);

})
