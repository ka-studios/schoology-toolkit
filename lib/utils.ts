/**
 * Various utilities for use around the library
 */
import { getConfig } from "./config"
const config = getConfig();

function SFetch(url: string) {
    fetch(`${config.schoologyURL}${url}`, {
        headers: {
            "Cookie": `${config.tokenPrefix}=${config.token}`
        }
    })
}

export { SFetch }