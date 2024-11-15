import BannerImg from "../assets/banner.jpg";
const Banner = () => {

  return (
    <div>
      <div className="text-white text-center mt-10 lg:mb-80">
        <div className="lg:h-5">
          <h1 className="font-bold text-2xl lg:text-5xl leading-snug">
            Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
          </h1>
          <br />
          <p>
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br /> the coolest accessories, we
            have it all!
          </p>{" "}
          <br />
          <div className="bg-white px-4 py-1 inline-block rounded-xl">
            <button className="text-[#9538E2] font-bold">Shop Now</button>
          </div>
        </div>
        <div className="lg:flex justify-center -bottom-72 lg:relative ">
          <img
            className="lg:max-w-3xl rounded-xl shadow-xl border-slate-100 border p-3"
            src={BannerImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
