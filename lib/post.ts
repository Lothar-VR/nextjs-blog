import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import  html  from "remark-html";


const postDirectory = path.join(process.cwd(), "posts");



export function getPostData(){
    const fileNmaes = fs.readdirSync(postDirectory);
    const allPostData  = fileNmaes.map((fileName) =>{
        const id : string = fileName.replace(/\.md$/, "");

        //マークダウンを文字列として読み取る
        const fullPath = path.join(postDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf-8");

        const matterResult = matter(fileContents);

        //idとデータを返す
        return {
            id,
            ...matterResult.data,
        };

    });
    return allPostData;
}

//grtStaticpathでpathを取得
export function getAllPostIds(){
    const fileNmaes = fs.readdirSync(postDirectory);
    return fileNmaes.map((fileName) => {
        const id = fileName.replace(/\.md$/, "");
        return{
            params:{
                id,
            }
        };
    });
}

//IDに基づいてblog投稿データを返す
export async function getPostDataId(id : string){
    const fullPath = path.join(postDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, `utf-8`);

    const matterResult = matter(fileContents);

    const blogContents = await remark().use(html).process(matterResult.content);

    const blogContentsHTML = blogContents.toString();
    
    return{
        id, 
        blogContentsHTML,
        ...matterResult.data,
    }

}

