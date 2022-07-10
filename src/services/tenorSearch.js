import { CONSTANTS } from '../lib/constants';

class Tenor {
    constructor(context) {
        this.context = context ?? "search";
        this.key = process.env.REACT_APP_TENOR_API_KEY;
        this.client = CONSTANTS.CLIENT_KEY;
        // this.gifSearchUrl = "https://g.tenor.com/v1/";
        this.apiBaseUrl = "https://tenor.googleapis.com/v2/";
    }

    generateFetchUrl(baseUrl, query) {
        let queryParams = "";
        for(let param in query) {
            queryParams += `&${param}=${decodeURIComponent(query[param])}`;
        }
        const url = `${baseUrl}?key=${this.key}&client_key=${this.client}${queryParams}`;
        return url
    }

    async loadGifData(baseUrl, query) {
        const url = this.generateFetchUrl(baseUrl, query)

        let data;
        try {
            const response = await fetch(url);
            data = response.json();
        } catch(err) {
            //error in fetch
        }

        return data;
    }

    async getGifList(query={}) {
        let baseUrl = this.apiBaseUrl;

        switch(this.context){
            case "trending":
                baseUrl += "trending_terms";
                query = {};
                break;
            case "featured":
                baseUrl += "featured";
                break;
            default:
                baseUrl += "search";                                                                                                                         ;
        }

        const response = await this.loadGifData(baseUrl, query);

        return response
    }
}

export default Tenor;