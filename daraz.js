const puppeteer = require("puppeteer");
const puppeteerConfig = require("./puppeteerConfig.js");


let dataArr;

const darazQuery = async (search) => {

  const queryParams = search.split(" ").join("+")
  const url = `https://daraz.com.np/catalog/?q=${queryParams}`
  
  const browser = await puppeteer.launch(puppeteerConfig.launch);
  const page = await browser.newPage();
  await page.setViewport({
    width: 8000, 
    height: 6000, 
    deviceScaleFactor: 1,
  });
  await page.goto(url, { waitUntil: "networkidle2" });
   dataArr = await page.evaluate(() => {
    
    const container = Array.from(document.querySelectorAll(".gridItem--Yd0sa"));
    const countStars = (html)=>{
        
        if (html===null) return -1;
        return html.split("star-10--UQtQk").length-1;
     
     
    }
    // const data= container.map((item) => {
    //   return {
    //     title: item.querySelector(".title--wFj93 a").getAttribute("title"),
    //     price: item.querySelector(".price--NVB62 span").innerText,
    //     oPrice: item.querySelector(".origPrice--AJxRs .currency--GVKjl")
    //       ? item.querySelector(".origPrice--AJxRs .currency--GVKjl").innerText
    //       : 0,
    //     rating: item.querySelector(".rating--ZI3Ol.rate--DCc4j")?countStars(item.querySelector(".rating--ZI3Ol.rate--DCc4j").innerHTML):0,
    //     // rating: countStars(item.querySelector(".rating--ZI3Ol"))
    //     reviews: item.querySelector(".rating__review--ygkUy")
    //       ? item.querySelector(".rating__review--ygkUy").innerText
    //       : 0,
    //     img: item.querySelector(".image--Smuib").getAttribute("src"),
    //   };
    // });
    return container
  });
  console.log(dataArr);

  browser.close();
  
  return dataArr
}
darazQuery("rubix cube");

const hamroBazaarQuery = async (search) => {
  const queryParams = search
  const url = `https://hamrobazaar.com/search/product?q=${queryParams}`;

  const browser = await puppeteer.launch(puppeteerConfig.launch);
  const page = await browser.newPage();
   await page.setViewport({
     width: 8000, 
     height: 6000, 
     deviceScaleFactor: 1,
   });
  await page.goto(url, { waitUntil: "networkidle2" });
  const dataArr = await page.evaluate(() => {
       
    const container = Array.from(
      document.querySelectorAll(".card-product-linear")
    );
    const data= container.map((item) => {
      return {
        title: item.querySelector("h2.product-title").innerText,
        price: item.querySelector("span.regularPrice").innerText,
        img: item.querySelector(".linear-img").getAttribute("src"),
      };
    });
    return data
  });
  console.log(dataArr);

  browser.close();
}


// const darazQuery = async (search) => {
//   const queryParams = search.split(" ").join("+")
//   const url = `https://daraz.com.np/catalog/?q=${queryParams}`

//   const browser = await puppeteer.launch(puppeteerConfig.launch);
//   const page = await browser.newPage();
//    await page.setViewport({
//      width: 8000, 
//      height: 6000, 
//      deviceScaleFactor: 1,
//    });
//   await page.goto(url, { waitUntil: "networkidle2" });
//   const dataArr = await page.evaluate(() => {
       
//     const container = Array.from(document.querySelectorAll(".gridItem--Yd0sa"));
//     const data= container.map((item) => {
//       return {
//         title: item.querySelector(".title--wFj93 a").getAttribute("title"),
//         price: item.querySelector(".price--NVB62 span").innerText,
//         img:  item.querySelector(".image--Smuib").getAttribute("src"),
//       };
//     });
//     return data
//   });
//   console.log(dataArr);

//   browser.close();
// }
// const darazQuery = async (search) => {
//   const queryParams = search.split(" ").join("+")
//   const url = `https://daraz.com.np/catalog/?q=${queryParams}`

//   const browser = await puppeteer.launch(puppeteerConfig.launch);
//   const page = await browser.newPage();
//    await page.setViewport({
//      width: 8000, 
//      height: 6000, 
//      deviceScaleFactor: 1,
//    });
//   await page.goto(url, { waitUntil: "networkidle2" });
//   const dataArr = await page.evaluate(() => {
       
//     const container = Array.from(document.querySelectorAll(".gridItem--Yd0sa"));
//     const data= container.map((item) => {
//       return {
//         title: item.querySelector(".title--wFj93 a").getAttribute("title"),
//         price: item.querySelector(".price--NVB62 span").innerText,
//         img:  item.querySelector(".image--Smuib").getAttribute("src"),
//       };
//     });
//     return data
//   });
//   console.log(dataArr);

//   browser.close();
// }
// const darazQuery = async (search) => {
//   const queryParams = search.split(" ").join("+")
//   const url = `https://daraz.com.np/catalog/?q=${queryParams}`

//   const browser = await puppeteer.launch(puppeteerConfig.launch);
//   const page = await browser.newPage();
//    await page.setViewport({
//      width: 8000, 
//      height: 6000, 
//      deviceScaleFactor: 1,
//    });
//   await page.goto(url, { waitUntil: "networkidle2" });
//   const dataArr = await page.evaluate(() => {
       
//     const container = Array.from(document.querySelectorAll(".gridItem--Yd0sa"));
//     const data= container.map((item) => {
//       return {
//         title: item.querySelector(".title--wFj93 a").getAttribute("title"),
//         price: item.querySelector(".price--NVB62 span").innerText,
//         img:  item.querySelector(".image--Smuib").getAttribute("src"),
//       };
//     });
//     return data
//   });
//   console.log(dataArr);

//   browser.close();
// }
// const darazQuery = async (search) => {
//   const queryParams = search.split(" ").join("+")
//   const url = `https://daraz.com.np/catalog/?q=${queryParams}`

//   const browser = await puppeteer.launch(puppeteerConfig.launch);
//   const page = await browser.newPage();
//    await page.setViewport({
//      width: 8000, 
//      height: 6000, 
//      deviceScaleFactor: 1,
//    });
//   await page.goto(url, { waitUntil: "networkidle2" });
//   const dataArr = await page.evaluate(() => {
       
//     const container = Array.from(document.querySelectorAll(".gridItem--Yd0sa"));
//     const data= container.map((item) => {
//       return {
//         title: item.querySelector(".title--wFj93 a").getAttribute("title"),
//         price: item.querySelector(".price--NVB62 span").innerText,
//         img:  item.querySelector(".image--Smuib").getAttribute("src"),
//       };
//     });
//     return data
//   });
//   console.log(dataArr);

//   browser.close();
// }

