const ContactUs = () => {
  return (
    <div className="w-[700px] mx-auto mt-[80px] bg-green-300 rounded-2xl py-[40px] px-[80px]">
      <h1
        data-aos="fade-down"
        data-aos-duration="1000"
        className="text-center font-bold text-[40px] text-[#131313] mb-14"
      >
        Contact Us
      </h1>
      <div className="flex justify-between items-center">
        <div className="font-normal text-lg">
          <p
            data-aos="fade-left"
            data-aos-delay="1000"
            className="font-semibold text-xl"
          >
            Address:{" "}
          </p>
          <p data-aos="fade-left" data-aos-delay="1200">
            SafeTour
          </p>
          <p data-aos="fade-left" data-aos-delay="1400">
            123 Main Street{" "}
          </p>
          <p data-aos="fade-left" data-aos-delay="1600">
            Anytown, USA
          </p>
          <p data-aos="fade-left" data-aos-delay="1800">
            Zip Code: 12345
          </p>
        </div>

        <div className="font-normal text-lg">
          <p
            data-aos="fade-left"
            data-aos-delay="2000"
            className="font-semibold text-xl"
          >
            Phone:{" "}
          </p>
          <p data-aos="fade-left" data-aos-delay="2200">
            General Inquiries: +1 (555) 123-4567
          </p>
          <p data-aos="fade-left" data-aos-delay="2400">
            Managers: +1 (555) 987-6543
          </p>
        </div>
      </div>
      <div className="text-center mt-3 mb-5 font-normal text-lg">
        <p
          data-aos="fade-right"
          data-aos-delay="2600"
          className="font-semibold text-xl"
        >
          Email:{" "}
        </p>
        <p data-aos="fade-right" data-aos-delay="2800">
          General Inquiries:{" "}
          <a className="text-blue-500 underline" href="">
            info@safetour.com
          </a>{" "}
        </p>
        <p data-aos="fade-right" data-aos-delay="3000">
          Managers:{" "}
          <a className="text-blue-500 underline" href="">
            manager@safetour.com
          </a>{" "}
        </p>
      </div>
      <p
        data-aos="fade-right"
        data-aos-delay="3200"
        className="text-center mb-5 font-normal text-lg"
      >
        For room reservations, please contact our reservations team at{" "}
        <a className="text-blue-500 underline" href="">
          reservations@safetour.com
        </a>{" "}
        or call us at +1 (555) 123-4567.
      </p>

      <div className="font-normal text-lg flex flex-col items-center mb-6">
        <p
          data-aos="fade-left"
          data-aos-delay="3400"
          className="font-semibold text-xl"
        >
          Front Desk/Reception:
        </p>
        <p data-aos="fade-left" data-aos-delay="3600">
          Monday - Sunday: 24 hours
        </p>
      </div>
      <div className="font-normal text-lg flex flex-col items-center">
        <p
          data-aos="fade-left"
          data-aos-delay="3800"
          className="font-semibold text-xl"
        >
          Reservations Department:
        </p>
        <p data-aos="fade-left" data-aos-delay="4000">
          Monday - Friday: 9:00 AM - 5:00 PM
        </p>
        <p data-aos="fade-left" data-aos-delay="4200">
          Saturday - Sunday: 10:00 AM - 4:00 PM
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
