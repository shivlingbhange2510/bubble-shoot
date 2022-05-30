import { v4 as uuidv4 } from 'uuid';
export const circleData=[
    {
        id:1,
        color:'#'+(Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6),
        position:0,
    },
    {
        // id:2,
        id: 2,
        color: '#' +uuidv4().slice(0,4),
        position:2,
    },
    {
        id:3,
        color:'#'+(Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6),
        position:0,
    },
    {
        id:4,
   
        color:'#'+(Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6),
        position:0,
    },
    {
        id:5,
        color:'#'+(Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6),
        position:0,
    }
]