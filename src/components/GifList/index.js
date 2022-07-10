import React, { useState, useEffect, useCallback } from 'react';
import GifItem from './gifItem';

import './gifList.css';

const NUMBER_OF_COLUMNS = 3;

const GifList = ({gifData}) => {
    const [prevGifList, setPrevGifList] = useState();
    const [gifGroups, setGifGroups] = useState([]);

    const prevPosition = prevGifList?.next;

    const sortByHeight = (groups) => {        
        let sortReference = groups.map((g,id)=>({
            id,
            height: (g?.height||0)
        }));
        sortReference = sortReference.sort((a,b)=>a.height-b.height);
        return sortReference;
    }

    const getDocumentHeight = (groups) => {
        if(document) {
            const documentGroups = document.getElementsByClassName("group");
            if(documentGroups.length) {
                groups.forEach(((group, index)=>{
                    const height = documentGroups[index]?.getBoundingClientRect()?.height;
                    groups[index].height = height;
                }))
            }
        }
        return groups;
    }

    const gifListData = useCallback((gifGroups,gifData)=>{
        let groups = gifGroups.length ? gifGroups : new Array(NUMBER_OF_COLUMNS).fill(null);
        // reference array to sort group using previous values, without modifying oridinal array
        groups = getDocumentHeight(groups);
        let sortReference = sortByHeight(groups);
        gifData?.results?.forEach((gif)=>{ 
            const group = sortReference[0];
            if(!groups[group.id]?.results) {
                groups[group.id] = {
                    results: [],
                    height: 0
                }
            }
            groups[group.id].results.push(gif);
            groups[group.id].height += gif.media_formats?.gif?.dims[1] ?? 0;
            sortReference = sortByHeight(groups);
        })

        return groups;
    },[])

    useEffect(()=>{        
        setGifGroups((prevState)=>{
            if(prevPosition === gifData?.next) {
                return prevState;
            }
            const groups = [...gifListData(prevState, gifData)];
            return groups;
        });
        setPrevGifList(gifData);
    },[prevPosition, gifData, gifListData])

    return(
        <div className="gif-list">
            {gifGroups.map((group,idx) => (
                <div key={`gif_group_${idx}`} className="group">
                    {group?.results?.map((gif,idx)=>(
                        <GifItem key={gif.id+idx} gif={gif} />
                    ))}
                </div>
            ))}
        </div>
    )
}
export default React.memo(GifList);