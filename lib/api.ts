const url = "https://aikawablog.microcms.io/api/v1/blog"
const apikey ="944d7c90858149009575f1cb130fcef49348"

const params = {
    "method": "GET",
    "header": {
        "X-API-KEY": apikey
    }
}

export const getAllPostsData = async () => {
    const res = await fetch(url, params);
    const posts = await res.json();
    if(posts.contents){
    return posts.contents;
    }
}