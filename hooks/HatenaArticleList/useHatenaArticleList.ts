
import { useCallback, useEffect, useState } from 'react';
import HatenaArticleListRepository from './HetanaArticleListRepository';


export interface entryData{
    entry: blogData[] ,
    err?: Error
  }
  
  export interface blogData{
    day: string,
    title: string,
    href: string
  }

export const  useHatenaArticleList = () => {
    const repository = new HatenaArticleListRepository;

    const [data, setData] = useState<blogData[] | null>(null);

    const fetch = useCallback(() => {
        let item_list:blogData[] = [];
        repository.getArticle().then((res) => {
            console.log("useHatenaArticleList");
            if (data !== undefined){
                for (let e of res.data){
                  const title = e.title;
                  const day = e.day;
                  const href = e.href;
                  item_list.push({day, title, href})
                }
              }
            setData(item_list);
            console.log(item_list);
        }).catch((e) => {
            console.log(`Error in useHatenaArticleList fetch: ${e}`);
        })

    }, []);

    useEffect(() => {
        fetch();
    }, [])

    return {data, fetch};
}

