//For forms
const postData = async (url, data) => {
    let result = await fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });

    return await result.json();
};
//For cards
const getResourse = async(url) => {
    const res = await fetch(url);

    if(!res.ok){
        throw new Error(`Could not fetch ${url}, status ${res.status}`);
    }
    return await res.json();
};
export {postData};
export {getResourse};