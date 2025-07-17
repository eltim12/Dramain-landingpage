// UI
import DefaultLayout from "@/layouts/default";
import titleEllipse from '@/assets/title-ellipse.svg'
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

export default function IndexPage() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <DefaultLayout>

      <div className="min-h-screen bg-[#06070B] relative overflow-hidden justify-items-center">
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-white">
              {t('terms.header')}
            </h2>
            <p className="text-base lg:text-lg px-4 text-gray-400 leading-relaxed mt-10">
              {t('terms.intro')}
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto py-8 px-4 md:px-20 text-white">

          <section className="mb-8 px-2">
            <h2 className="text-2xl font-bold mb-4">Tahapan Hapus Akun di Dramein.vip</h2>
            <ol className="list-decimal pl-5 mb-4 space-y-2">
              <li>
                <strong>Masuk ke Halaman Profil:</strong> Klik ikon profil di kanan atas dan pilih <em>"Profil"</em>.
              </li>
              <li>
                <strong>Pilih Informasi Pribadi:</strong> Di dalam profil, buka tab <em>"Informasi Pribadi"</em>.
              </li>
              <li>
                <strong>Klik Tombol "Hapus Akun":</strong> Scroll ke bagian bawah halaman dan klik tombol <em>Hapus Akun</em>.
              </li>
              <li>
                <strong>Konfirmasi Penghapusan:</strong> Masukkan ulang kata sandi Anda untuk konfirmasi penghapusan akun secara permanen.
              </li>
              <li>
                <strong>Selesai:</strong> Akun Anda akan dihapus secara permanen dan tidak dapat dikembalikan.
              </li>
            </ol>
            <p className="text-yellow-400 font-medium">
              ⚠️ Catatan Penting: Setelah akun dihapus, semua data akan hilang dan tidak bisa dipulihkan kembali.
            </p>
            <p className="mt-2">
              Bila Anda mengalami kendala, silakan hubungi <a href="mailto:support@dramein.vip" className="text-blue-400 underline">hello@dramein.vip</a>
            </p>
          </section>
        </div>
      </div>
    </DefaultLayout>
  )
}