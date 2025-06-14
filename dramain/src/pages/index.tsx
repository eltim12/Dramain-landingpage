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
import Feature from '@/assets/feature-1.png'
import Feature2 from '@/assets/feature-2.png'
import Feature3 from '@/assets/feature-3.png'
import AppIcon from '@/assets/app-icon2.svg'
import downloadBg from '@/assets/download-bg.svg'
import GooglePlayDownload from '@/assets/download-google-play.svg'
import { useTranslation } from 'react-i18next';

export default function IndexPage() {
  const { t } = useTranslation();
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
            <span className="text-[18px] text-neutral-400 font-bold"> {t('hero.sub')} <br /> </span>
            {/* Using text-white assuming the dark background */}
            <span className="text-6xl text-white font-bold">Every second holds <br className="hidden" /> a{'\u00A0'}

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
              {t('hero.desc')}
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
              <span className="text-white">{t('hero.download')}</span>
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
              <h4 className="text-xl font-bold mb-2 text-white text-[40px] mb-[20px]">{t('about.deliver.head')}</h4>
              <p className="text-base text-neutral-500">{t('about.deliver.desc')}</p>
            </div>

            <div className="flex flex-col items-center text-center max-w-[300px]">
              <div className="w-16 h-16 text-purple-600 flex items-center justify-center">
                <img
                  src={EmpowerIcon}
                  alt="deliver"
                  className="w-auto h-[50px]"
                />
              </div>
              <h4 className="text-xl font-bold mb-2 text-white text-[40px] mb-[20px]">{t('about.empower.head')}</h4>
              <p className="text-base text-neutral-500">{t('about.empower.desc')}</p>
            </div>

            <div className="flex flex-col items-center text-center max-w-[300px]">
              <div className="w-16 h-16 text-purple-600 flex items-center justify-center">
                <img
                  src={ConnectIcon}
                  alt="deliver"
                  className="w-auto h-[50px]"
                />
              </div>
              <h4 className="text-xl font-bold mb-2 text-white text-[40px] mb-[20px]">{t('about.connect.head')}</h4>
              <p className="text-base text-neutral-500">{t('about.connect.desc')}</p>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="flex flex-col"> {/* Consider adjusting padding/height if needed */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-0 md:gap-12 lg:gap-16 items-center h-auto bg-[#000001] py-[50px] md:py-0">
          {/* --- Image Column --- */}
          {/* Add 'justify-end' to the flex container div */}
          <img
            src={Feature} // Ensure 'Feature' is correctly imported or defined
            alt="Short drama app interface examples"
            // Remove 'flex-end' from the image itself
            // Keep w-[400px] if a fixed width is desired, otherwise consider max-w-[400px] or responsive width like w-full
            className="w-[95%] h-auto rounded-lg p-[20px] md:p-[45px]" // Added back rounded/shadow for visual consistency
          />

          {/* --- Text Column --- */}
          <div className="text-left md:max-w-2xl px-5 md:pr-[80px]">
            {/* ... Label ... */}
            <p className="mb-2 text-sm font-semibold text-[#F82857] uppercase tracking-wider">
              {t('feature.sub1')}
            </p>
            {/* ... Headline ... */}
            <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {t('feature.head1')}
            </h2>
            {/* ... Paragraph ... */}
            <p className="text-base lg:text-lg text-gray-400">
              {t('feature.desc1')}
            </p>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 gap-0 md:gap-12 lg:gap-16 items-center h-auto bg-[#000001] py-[50px] md:py-0">
          {/* --- Text Column --- */}
          <div className="text-left md:max-w-2xl px-5 md:pl-[180px]">
            {/* ... Label ... */}
            <p className="mb-2 text-sm font-semibold text-[#F82857] uppercase tracking-wider">
              {t('feature.sub2')}
            </p>
            {/* ... Headline ... */}
            <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {t('feature.head2')}
            </h2>
            {/* ... Paragraph ... */}
            <p className="text-base lg:text-lg text-gray-400">
              {t('feature.desc2')}
            </p>
          </div>

          {/* --- Image Column --- */}
          {/* Add 'justify-end' to the flex container div */}
          <img
            src={Feature2} // Ensure 'Feature' is correctly imported or defined
            alt="Short drama app interface examples"
            // Remove 'flex-end' from the image itself
            // Keep w-[400px] if a fixed width is desired, otherwise consider max-w-[400px] or responsive width like w-full
            className="w-[100%] h-auto rounded-lg contain p-[20px] md:p-[45px]" // Added back rounded/shadow for visual consistency
          />
        </div>
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-0 md:gap-12 lg:gap-16 items-center h-auto bg-[#000001] py-[50px] md:py-[100px]">
          {/* --- Image Column --- */}
          {/* Add 'justify-end' to the flex container div */}
          <img
            src={Feature3} // Ensure 'Feature' is correctly imported or defined
            alt="Short drama app interface examples"
            // Remove 'flex-end' from the image itself
            // Keep w-[400px] if a fixed width is desired, otherwise consider max-w-[400px] or responsive width like w-full
            className="w-[100%] h-auto rounded-lg cover p-[20px] md:p-[45px]" // Added back rounded/shadow for visual consistency
          />

          {/* --- Text Column --- */}
          <div className="text-left md:max-w-2xl px-5 md:pr-[80px]">
            {/* ... Label ... */}
            <p className="mb-2 text-sm font-semibold text-[#F82857] uppercase tracking-wider">
              {t('feature.sub3')}
            </p>
            {/* ... Headline ... */}
            <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {t('feature.head3')}
            </h2>
            {/* ... Paragraph ... */}
            <p className="text-base lg:text-lg text-gray-400">
              {t('feature.desc3')}
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
              shapeSize={0.8}
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
        <span className="text-[14px] text-neutral-400 mb-2">{t('download.sub')}<br /> </span>
        {/* Using more standard responsive text sizes, but kept close to original */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white font-bold mb-4 md:mb-6 max-w-4xl">
          {t('download.head').split('\n').map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </h2>

        {/* Paragraph - inherits text-center */}
        {/* max-w-3xl constrains width, items-center on parent centers the block */}
        <p className="max-w-4xl text-neutral-400 text-base md:text-lg"> {/* Standard text sizes */}
          {t('download.desc')}
        </p>

        <img
          src={GooglePlayDownload}
          alt="Google play download"
          className="w-auto h-[47px] md:h-[62px] relative mt-[80px]"
        />
        <span className="text-neutral-400 text-base mt-2">{t('download.comingSoon')} <span className="font-bold">{t('download.appStore')}</span> </span>

      </section>


    </DefaultLayout>
  );
}
