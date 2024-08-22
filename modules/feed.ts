/**
 * Display the feed. (Latest page by default)
 */

import { consola } from "consola"
import { getConfig } from "../lib/config"
const config = getConfig();

function getFeed(page: number = 0) {
    fetch(`${config.schoologyURL}/home/feed?page=${page}`, {
        headers: {
            "Cookie":`${config.tokenPrefix}=${config.token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const feed = data.output
        const names = [...feed.matchAll(/title="(.*?)"><div  class=" profile-picture-wrapper">/g)];  
        const courses = [...feed.matchAll(/course\/[0-9]{10}">(.*?)<\/a>/g)];
        const posts = [...feed.matchAll(/<span class="update-body s-rte">(.*?)<\/span><span class="edge-main"><div/g)];
        names.forEach((nameMatch, index) => {
            consola.success(`${nameMatch[1]} - ${courses[index][1]}`)
            consola.box(posts[index][1])
        })
    })
}

export { getFeed }