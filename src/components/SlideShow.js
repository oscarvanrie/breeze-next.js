
import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

export default function SlideShow() {
   



  
   const sliderImages = [
      {
         url: "https://d150u0abw3r906.cloudfront.net/wp-content/uploads/2021/10/image2-2-1024x649.png",
      },
      {
         url: "https://luminous-landscape.com/wp-content/uploads/2015/06/Storm-Light-Grand-Tetons-810x500.jpg",
      },
      {
         url: "https://cdn.fstoppers.com/styles/full/s3/media/2022/01/25/mount-moran-day.jpg",
      },
      {
         url: "https://petapixel.com/assets/uploads/2022/08/fdfs11-800x533.jpg",
      }
   ];
   
   return (
      <div className="mt-20 z-0">
         <SimpleImageSlider
            width={1530}
            height={500}
            images={sliderImages}
            showNavs={true}
            showBullets={true}
            autoPlay={true}
            autoPlayDelay={5}
            navSize={30}
         />
      </div>
   );
}