
    const fetchPost=(api,formData)=>{
        return fetch(api, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body:formData,
        })
        .then((response) => response.text())
        .then((responseText) => {
            const json = JSON.parse(responseText);
            return json;
        })
        .catch((error) => {
            console.error(error);
        })
    }


    export default fetchPost;
