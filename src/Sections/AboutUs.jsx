const AboutUs = () => {
  return (
    <div className="w-[700px] mx-auto mt-[80px] bg-green-300 rounded-3xl px-[100px] py-[40px]">
      <h1
        data-aos="fade-down"
        data-aos-duration="1000"
        className="text-center text-wrap font-bold text-[40px] text-[#131313] mb-14"
      >
        About Us
      </h1>
      <p
        data-aos="fade-left"
        data-aos-delay="500"
        className="text-center text-wrap font-medium text-xl mb-5"
      >
        Founders: <span className="font-normal text-lg">Md Fardin</span>
      </p>
      <p
        data-aos="fade-left"
        data-aos-delay="1000"
        className="text-center text-wrap font-normal text-base mb-3"
      >
        At <span className="font-medium text-lg">HuntingHotels</span>, we strive
        to provide exceptional experiences that create lasting memories for our
        guests. With a commitment to excellence and personalized service, we aim
        to exceed expectations at every turn.
      </p>
      <p
        data-aos="fade-left"
        data-aos-delay="1200"
        className="text-center text-wrap font-normal text-base mb-3"
      >
        <span className="font-medium text-lg">
          HuntingHotels Hospitality Group
        </span>{" "}
        is a leading provider of luxury accommodations, dining experiences, and
        event venues. Founded in{" "}
        <span className="font-medium text-lg">2018</span>, our company has
        earned a reputation for excellence in hospitality through our dedication
        to quality, innovation, and guest satisfaction.
      </p>
    </div>
  );
};

export default AboutUs;
