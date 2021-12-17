const url = "https://aikawablog.microcms.io/api/v1/blog"
const apikey = process.env.NEXT_PUBLIC_API_KEY

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