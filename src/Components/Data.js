import React, {useEffect, useState} from 'react';

import axios from 'axios';

const Data =()=>{
    const [Covid,setCovid] = useState([]);

    useEffect(() => {
        test()

    },[Covid])

    const test = async () => {
        const {data}= await axios.get('https://disease.sh/v3/covid-19/countries/TH')
        setCovid([{country:data.country, cases:data.cases, todayCases:data.todayCases,recovered:data.recovered, todayRecovered:data.todayRecovered, deaths: data.deaths, todayDeaths: data.todayDeaths}])
    }

    return(
        Covid.map(data =>
            <div>
            <p>Country: {data.country}<br/>
            Cases: {data.cases}<br/>
            TodayCases: {data.todayCases}<br/>
            Recovered: {data.recovered}<br/>
            TodayRecovered: {data.todayRecovered}<br/>
            Deaths: {data.deaths}<br/>
            TodayDeaths: {data.todayDeaths}</p>
            </div>
        )
    );

}
export default Data