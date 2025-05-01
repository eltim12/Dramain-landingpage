// UI
import { Button } from "@heroui/button";
import { siteConfig } from "@/config/site";
import DefaultLayout from "@/layouts/default";

// Components
import GradientBlobOrange from "@/components/gradientBlobOrange"
import GradientBlobPurple from "@/components/gradientBlobPurple"
import ShapeBlur from '@/components/ShapeBlur';
import GradientText from '@/components/GradientText'

// Assets
import DownloadIcon from "@/assets/download-icon.svg"
import ConnectIcon from "@/assets/connect.svg"
import DeliverIcon from "@/assets/deliver-icon.svg"
import EmpowerIcon from "@/assets/empower.svg"
import HeroPhoneMockup from "@/assets/hero-phone.png"
// import Feature from '@/assets/feature-1.png'
import Feature from '@/assets/feature-img.png'
import AppIcon from '@/assets/app-icon.svg'
import downloadBg from '@/assets/download-bg.svg'
import GooglePlayDownload from '@/assets/download-google-play.svg'

export default function IndexPage() {
  return (
    <DefaultLayout>
      {/* HERO */}
      <section
        className="
          relative /* Keep relative */
          flex flex-col items-start pt-[130px] md:pt-0 md:justify-center gap-4
          py-10 px-[20px] md:px-[70px] h-screen
          bg-[#171717]
          overflow-hidden /* Keep for now, but check if it hides the blob */
        "
      >
        <GradientBlobOrange />
        <GradientBlobPurple />
        {/* Content container - helps with layering if needed */}
        <div className="relative z-10 flex flex-col items-center md:items-start justify-center gap-4 md:pl-[100px]">
          <div className="inline-block max-w-xl text-center md:text-left justify-start">
            <span className="text-[18px] text-neutral-400">Discover Dramein <br /> </span>
            {/* Using text-white assuming the dark background */}
            <span className="text-5xl text-white">Every second holds <br className="hidden" /> a{'\u00A0'}

              <GradientText
                colors={["#FD6D42", "#FA175D", "#9D794D", "#FA175D", "#634A80"]}
                animationSpeed={5}
                showBorder={false}
                className="custom-class font-bold"
              >
                Universe.
              </GradientText>

            </span>
            {/* <span className={title({ color: "violet" })}>beautiful&nbsp;</span> */}
            <br />
            {/* Using text-gray-300 for subtitle contrast */}
            <div className="mt-4 text-neutral-400 text-[16px]">
              Immerse yourself in gripping short series, connect with live communities, and jump into thrilling game streams – all in one vibrant app.
            </div>
          </div>

          <div className="flex-center md:flex-start gap-3 mt-4"> {/* Added some margin-top */}
            <Button
              className="px-[40px] py-[24px]"
              radius="lg"
              variant="bordered"
              href={siteConfig.links.sponsor}
            >
              <img
                src={DownloadIcon}
                alt="Dramein join button"
                className="w-auto h-[16px] pa-16"
              />
              <span className="text-white">Download Free Now</span>
            </Button>
          </div>
        </div>
        <img
          src={HeroPhoneMockup}
          alt="Dramein APP mockup"
          className="h-[550px] w-auto md:w-[448px] md:h-auto self-center md:absolute bottom-[-100px] md:bottom-0 right-[13.5%] md:right-[150px] "
        />
      </section>

      {/* ABOUT */}
      <section className="py-16 md:py-24 text-gray-800 sm:px-[20px] md:px-[180px] ">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[50px] md:gap-[100px]">
            <div className="flex flex-col items-center text-center justify-center max-w-[300px]">
              <div className="w-16 h-16 text-purple-600 flex items-center justify-center">
                <img
                  src={DeliverIcon}
                  alt="deliver"
                  className="w-auto h-[50px]"
                />
              </div>
              <h4 className="text-xl font-bold mb-2 text-white text-[40px] mb-[20px]">Deliver</h4>
              <p className="text-base text-neutral-500">Curate and produce high-quality, culturally relevant short dramas that resonate deeply with our audience.</p>
            </div>

            <div className="flex flex-col items-center text-center max-w-[300px]">
              <div className="w-16 h-16 text-purple-600 flex items-center justify-center">
                <img
                  src={EmpowerIcon}
                  alt="deliver"
                  className="w-auto h-[50px]"
                />
              </div>
              <h4 className="text-xl font-bold mb-2 text-white text-[40px] mb-[20px]">Empower</h4>
              <p className="text-base text-neutral-500">Provide creators with innovative tools and a supportive environment to stream, grow, and thrive.</p>
            </div>

            <div className="flex flex-col items-center text-center max-w-[300px]">
              <div className="w-16 h-16 text-purple-600 flex items-center justify-center">
                <img
                  src={ConnectIcon}
                  alt="deliver"
                  className="w-auto h-[50px]"
                />
              </div>
              <h4 className="text-xl font-bold mb-2 text-white text-[40px] mb-[20px]">Connect</h4>
              <p className="text-base text-neutral-500">Foster a vibrant, interactive community where users can share passions and build real connections.</p>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="flex flex-col"> {/* Consider adjusting padding/height if needed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center h-[80vh] bg-black pb-3">
          {/* --- Image Column --- */}
          {/* Add 'justify-end' to the flex container div */}
          <img
            src={Feature} // Ensure 'Feature' is correctly imported or defined
            alt="Short drama app interface examples"
            // Remove 'flex-end' from the image itself
            // Keep w-[400px] if a fixed width is desired, otherwise consider max-w-[400px] or responsive width like w-full
            className="w-[100%] h-[100%] rounded-lg cover" // Added back rounded/shadow for visual consistency
          />

          {/* --- Text Column --- */}
          <div className="text-left md:max-w-2xl px-5 md:pr-[80px]">
            {/* ... Label ... */}
            <p className="mb-2 text-sm font-semibold text-[#F82857] uppercase tracking-wider">
              Binge Bites Drama
            </p>
            {/* ... Headline ... */}
            <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Addictive Short Dramas: Your Next Binge Awaits
            </h2>
            {/* ... Paragraph ... */}
            <p className="text-base lg:text-lg text-gray-400">
              Get hooked on exclusive, mobile-first drama series. Each episode is crafted for quick, emotional impact – perfect for your commute, break time, or unwinding. Discover new stories and support local talent.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center h-[80vh] bg-black pb-3">

          {/* --- Text Column --- */}
          <div className="text-left md:max-w-2xl px-5 md:pl-[180px]">
            {/* ... Label ... */}
            <p className="mb-2 text-sm font-semibold text-[#F82857] uppercase tracking-wider">
              Connect Live
            </p>
            {/* ... Headline ... */}
            <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Go Live or Connect: Real-Time Interaction
            </h2>
            {/* ... Paragraph ... */}
            <p className="text-base lg:text-lg text-gray-400">
              Join live streams from creators around the region. Chat, send virtual gifts, participate in polls, and feel closer to your favorite personalities and fellow fans than ever before.
            </p>
          </div>

          {/* --- Image Column --- */}
          {/* Add 'justify-end' to the flex container div */}
          <img
            src={Feature} // Ensure 'Feature' is correctly imported or defined
            alt="Short drama app interface examples"
            // Remove 'flex-end' from the image itself
            // Keep w-[400px] if a fixed width is desired, otherwise consider max-w-[400px] or responsive width like w-full
            className="w-[100%] h-[100%] rounded-lg cover" // Added back rounded/shadow for visual consistency
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center h-[80vh] bg-black pb-3">
          {/* --- Image Column --- */}
          {/* Add 'justify-end' to the flex container div */}
          <img
            src={Feature} // Ensure 'Feature' is correctly imported or defined
            alt="Short drama app interface examples"
            // Remove 'flex-end' from the image itself
            // Keep w-[400px] if a fixed width is desired, otherwise consider max-w-[400px] or responsive width like w-full
            className="w-[100%] h-[100%] rounded-lg cover" // Added back rounded/shadow for visual consistency
          />

          {/* --- Text Column --- */}
          <div className="text-left md:max-w-2xl px-5 md:pr-[80px]">
            {/* ... Label ... */}
            <p className="mb-2 text-sm font-semibold text-[#F82857] uppercase tracking-wider">
              Game & Watch
            </p>
            {/* ... Headline ... */}
            <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Game Streams: Excitement in Every Pixel
            </h2>
            {/* ... Paragraph ... */}
            <p className="text-base lg:text-lg text-gray-400">
              Watch top gamers showcase their skills, discover new games, or stream your own mobile gaming sessions. Connect with gaming communities and share the thrill of victory (and defeat!).
            </p>
          </div>
        </div>
      </section>

      {/* DOWNLOAD NOW */}
      <section
        className="py-16 md:py-20 bg-black h-[80vh] flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat px-[20px]"
        style={{ backgroundImage: `url("${downloadBg}")` }}
      >
        <div className="relative flex justify-center items-center mb-4 md:mb-6 overflow-visible">
          <div className="absolute h-[200px] overflow-visible">
            <ShapeBlur
              variation={0}
              pixelRatioProp={window.devicePixelRatio || 1}
              shapeSize={0.9}
              roundness={0.5}
              borderSize={0.05}
              circleSize={0.5}
              circleEdge={1.5}
            />
          </div>
          <img
            src={AppIcon}
            alt="App icon"
            className="w-[80px] h-auto relative"
          />
        </div>
        <span className="text-[14px] text-neutral-400 mb-2">Download Dramein for free<br /> </span>
        {/* Using more standard responsive text sizes, but kept close to original */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white font-bold mb-4 md:mb-6 max-w-4xl">
          Your Entertainment <br /> Journey Starts Now.
        </h2>

        {/* Paragraph - inherits text-center */}
        {/* max-w-3xl constrains width, items-center on parent centers the block */}
        <p className="max-w-4xl text-neutral-400 text-base md:text-lg"> {/* Standard text sizes */}
          Don't miss out on the dramas everyone's talking about, the live moments you have to see, and the games you love to watch. Download Dramein today and step into a world of endless entertainment.
        </p>

        <img
          src={GooglePlayDownload}
          alt="Google play download"
          className="w-auto h-[62px] relative mt-[80px]"
        />
        <span className="text-neutral-400 text-base mt-2">Coming soon to <span className="font-bold">App Store.</span> </span>

      </section>


    </DefaultLayout>
  );
}
