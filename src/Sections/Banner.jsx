const Banner = () => {
  return (
    <div className="mt-14 rounded-[50px] bg-green-300 py-8 px-7 flex flex-col lg:flex-row justify-center items-center gap-8">
      <div className="flex flex-col items-center mb-4">
        <h1
          data-aos="fade-right"
          data-aos-duration="1000"
          className="text-center font-extrabold text-4xl mb-3 text-wrap"
        >
          Welcome on Tour site of America
        </h1>
        <p
          data-aos="fade-right"
          data-aos-delay="1000"
          className="text-center w-[500px] font-normal text-lg text-wrap"
        >
          Discover the Heartbeat of America: Embark on a Journey of Wonders,
          from Iconic Landmarks to Hidden Gems. Book Your Adventure Today!
        </p>
      </div>
      <div data-aos="zoom-in" data-aos-delay="1000">
        <div className="carousel w-full rounded-2xl">
          <div id="item1" className="carousel-item w-full h-[400px]">
            <img
              src="https://i.postimg.cc/SKy3Zzh1/sliderimg1.jpg"
              className="w-full"
            />
          </div>
          <div id="item2" className="carousel-item w-full h-[400px]">
            <img
              src="https://i.postimg.cc/Bt9w2jpg/sliderimg2.jpg"
              className="w-full"
            />
          </div>
          <div id="item3" className="carousel-item w-full h-[400px]">
            <img
              src="https://i.postimg.cc/hGZnT0d1/sliderimg3.jpg"
              className="w-full"
            />
          </div>
          <div id="item4" className="carousel-item w-full h-[400px]">
            <img
              src="https://i.postimg.cc/4drTFNwK/slidrerimg4.jpg"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
