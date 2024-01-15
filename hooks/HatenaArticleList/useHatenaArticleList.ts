import { NextPage } from 'next'
import { Box } from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';
import HatenaArticleListService, { blogData } from './HatenaArticleListService';


export const  useHatenaArticleList = () => {
    const service = new HatenaArticleListService;

    const [data, setData] = useState<blogData[]>();

    const fetch = async() => {
        let item_list:{ day: any; title: any; href: any; }[] = [];
        const data = await service.getEntry()
        console.log("useHatenaArticleList");
        if (data !== undefined){
            for (let e of data.data){
              const title = e.title;
              const day = e.day;
              const href = e.href;
              item_list.push({day, title, href})
            }
          }
        setData(item_list);
        console.log(item_list);

    };

    return {data, fetch};
}

