import React, {useState, useEffect} from 'react';

function Portfolio() {

    const [data, setData] = useState(null);
    const access_key = "rvmwo2cCJTt8CoiNAWOc-j5OgX52gGpaq6A4E43KwtI";
    const APIlink = `https://api.unsplash.com/photos/random?client_id=${access_key}`;
    
    useEffect(async () => {
        const response = await fetch(APIlink);
        const resData = await response.json();
        console.log(resData);
        setData(resData);
    }, []);

    return (
        <div>
            {/*here will gone be bootstrap gred cards part. Need to find how we done that before. */}
            <p>my last masterpice</p> {data && <img src={data.urls.regular} />}
        </div>
    )
}

export default Portfolio;


