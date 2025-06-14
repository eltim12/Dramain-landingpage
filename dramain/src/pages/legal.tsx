// UI
import DefaultLayout from "@/layouts/default";
import { Button } from "@heroui/button";
import titleEllipse from '@/assets/title-ellipse.svg'
import { useTranslation } from 'react-i18next';

export default function IndexPage() {
  const { t } = useTranslation();
  return (
    <DefaultLayout>

      <div className="min-h-screen bg-[#06070B] relative">
        {/* Header Section with Background Image */}
        <div
          className="w-full bg-cover bg-no-repeat bg-center pt-[150px] md:pt-[200px] pb-[30px] md:pb-[100px] text-center relative"
          style={{
            backgroundImage: `url("${titleEllipse}")`,
            backgroundPosition: 'center top',
            backgroundSize: 'cover',
            minHeight: '55vh',
          }}
        >
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-white">
                {t('legal.header')}</h2>
              <p className="text-base lg:text-lg px-4 text-gray-400 leading-relaxed mt-10">
                {t('legal.intro')}
              </p>
            </div>
          </div>
        </div>
        {/* Grid Button Section */}
        <div className="max-w-3xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          <a href="/legal/akta-pendirian.pdf" target="_blank" rel="noopener noreferrer">
            <Button
              className="w-full h-[80px] text-white text-md font-bold hover:text-black"
              size="lg"
              variant="ghost"
            >
              Surat Akta Pendirian PT
            </Button>
          </a>

          <a href="/legal/keputusan-menteri.pdf" target="_blank" rel="noopener noreferrer">
            <Button
              className="w-full h-[80px] text-white text-md font-bold hover:text-black"
              size="lg"
              variant="ghost"
            >
              Surat Keputusan Menteri Hukum RI
            </Button>
          </a>

          <a href="/legal/nib.pdf" target="_blank" rel="noopener noreferrer">
            <Button
              className="w-full h-[80px] text-white text-md font-bold hover:text-black"
              size="lg"
              variant="ghost"
            >
              Nomor Induk Berusaha
            </Button>
          </a>

          <a href="/legal/pse.pdf" target="_blank" rel="noopener noreferrer">
            <Button
              className="w-full h-[80px] text-white text-md font-bold hover:text-black"
              size="lg"
              variant="ghost"
            >
              Penyelenggara Sistem Elektronik
            </Button>
          </a>
        </div>


      </div>

    </DefaultLayout>
  );
}
