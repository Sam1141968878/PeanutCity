/**
 * @flow
 * Created by Administrator on 2018/1/9.
 */


    const fetchWX = (api) => {
        return fetch(api)
        .then((response) => response.text())
        .then((responseText) => {
            const json = JSON.parse(responseText);
            return json;
        })
        .catch((error) => {
            console.error(error);
        })
    }



export default fetchWX;
