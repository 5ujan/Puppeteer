const axios = require("axios")

const Month = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec",
}

const populateFloorsheet = async()=>{
    let temp;
    let response = await axios.get(
      "https://the-value-crew.github.io/nepse-api/data/companies.json"
    );
    const codes = Object.keys(response.data)
    // console.log(codes)

    for(i=0;i<codes.length; i++){

        let oldDate = 1670942432;
        let newDate = new Date().getTime();
        newDate = Math.floor(newDate / 1000) - 1;
        
        const url = `https://merolagani.com/handlers/TechnicalChartHandler.ashx?type=get_advanced_chart&symbol=${codes[i]}&resolution=1D&rangeStartDate=${oldDate}&rangeEndDate=${newDate}&from=&isAdjust=1&currencyCode=NPR`;
        console.log(codes[i])
        try{
            response = await axios.get(url)
            temp = response.data.t.map((t, index)=>{
            const dd = new Date(t*1000).getDate()-1
            const mInt = new Date(t*1000+500).getMonth()
            const mm = Month[mInt];
            const yy = new Date(t*1000+5000).getFullYear()
            return  {val:response.data.c[index], time:{dd, mm, yy} }
        })
    }catch(error){
        console.log("error ",response.data )
    }
    console.log(temp)
    response = await axios.post("http://localhost:5000/floorsheet/add", {code: codes[i], data: temp})
        console.log("\n", response.status)
    }
}


const populateFundamentals = async () => {
  let temp;
  let response = await axios.get(
    "https://the-value-crew.github.io/nepse-api/data/companies.json"
  );
  const codes = Object.keys(response.data);
  // console.log(codes)

  for (i = 0; i < codes.length; i++) {
   

    const url = `http://localhost:5000/fundamentals/${codes[i]}`;
    // console.log(codes[i]);
    try {
      response = await axios.get(url);
      temp = response.data
      console.log(temp.fundamentals.symbol, i);
      response = await axios.post(url, {code: codes[i], fundamentals: temp.fundamentals});
      console.log("\n", response.status);
    
    } catch (error) {
      console.log("error ", response.data);
    }
  }
}
  populateFundamentals()
    
    
