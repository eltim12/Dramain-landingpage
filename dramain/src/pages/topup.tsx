// UI
import DefaultLayout from "@/layouts/default";
import titleEllipse from '@/assets/title-ellipse.svg'
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";
import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import { Card } from "@heroui/react";
import dangerIcon from "@/assets/danger-icon.svg";
import essentialIcon from "@/assets/essential-icon.svg";
import prestigeIcon from "@/assets/prestige-icon.svg";
import coinIcon from "@/assets/coin-icon.svg";
import carIcon from "@/assets/car-icon.svg";
import rocketIcon from "@/assets/rocket-icon.svg";

export default function IndexPage() {
  const { t } = useTranslation();

  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [paymentMethod, setPaymentMethod] = useState('QRIS');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <DefaultLayout>
      <div className="min-h-screen bg-[#06070B] relative overflow-hidden justify-items-center">
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-white">
              {t('topup.header')}
            </h2>
            <p className="text-base lg:text-lg px-4 text-gray-400 leading-relaxed mt-10" dangerouslySetInnerHTML={{ __html: t('topup.intro') }}>

            </p>
          </div>
        </div>


        <div className="max-w-4xl mx-auto p-4 md:p-8 text-white space-y-8 text-[#FAFAFA]">
          {/* Account ID */}
          <Card className="bg-[#191516] border border-[#5B5254] p-6 space-y-4">
            <h2 className="font-bold text-lg text-[#FAFAFA]">Input Account ID</h2>
            <div className="flex gap-4 items-center">
              <Input placeholder="Masukkan ID" className="flex-1" />
            </div>
          </Card>

          {/* Top-up Amounts */}
          <Card className="p-6 bg-[#191516] border border-[#5B5254] space-y-4">
            <h2 className="font-bold text-lg text-[#FAFAFA]">Select Top-up Amount</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[{ amount: 1000, price: 100000 }, { amount: 10000, price: 1000000 }, { amount: 50000, price: 5000000 }].map((opt) => (
                <button
                  key={opt.amount}
                  onClick={() => setSelectedAmount(opt.amount)}
                  className={`flex justify-between items-center p-4 rounded-xl border ${selectedAmount === opt.amount ? 'border-[#F82857] bg-[#F82857]/10' : 'border-white/10 bg-zinc-800'} hover:border-[#F82857] transition`}
                >
                  <div className="flex justify-center items-center">
                    <img src={coinIcon} alt="Dramein Logo" className="h-[20px] pr-1" />
                    {opt.amount.toLocaleString()}
                  </div>
                  <span>Rp. {opt.price.toLocaleString()}</span>
                </button>
              ))}
            </div>
          </Card>

          {/* VIP Section */}
          <Card className="bg-[#191516] border border-[#5B5254] p-6 space-y-6">
            <h2 className="font-bold text-lg text-[#FAFAFA]">Be a VIP</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {/* Essential VIP */}

              <div className="bg-[#292728] border border-[#5B5254] p-4 rounded-xl relative overflow-visible">
                {/* Icon with overflow */}
                <img
                  src={essentialIcon}
                  className="absolute -top-10 -right-10 w-[200px] h-[200px] pointer-events-none select-none"
                  alt="Prestige Icon"
                />

                <div className="flex items-center justify-between z-10 relative">
                  <div>
                    <h3 className="font-bold text-xl">Essential</h3>
                    <p className="text-sm">Valid for 30 Days</p>
                  </div>

                </div>

                <ul className="text-sm mt-2 list-disc list-inside space-y-1 relative z-10">
                  <li>Unlock ALL Dramas</li>
                  <li>Earn 40% Rebate</li>
                  <li>Access VIP Gift Packs</li>
                </ul>

                <div className="mt-4">
                  <p className="line-through text-gray-500 text-sm">Rp. 180,000</p>
                  <p className="text-[#F82857] font-bold">Rp. 100,000</p>
                  <Button className="mt-2 w-full bg-[#F82857] hover:bg-[#F82857]">Select</Button>
                </div>
              </div>

              {/* Prestige VIP */}
              <div className="bg-[#292728] border border-[#5B5254] p-4 rounded-xl relative overflow-visible">
                {/* Icon with overflow */}
                <img
                  src={prestigeIcon}
                  className="absolute -top-10 -right-10 w-[200px] h-[200px] pointer-events-none select-none"
                  alt="Prestige Icon"
                />

                <div className="flex items-center justify-between z-10 relative">
                  <div>
                    <h3 className="font-bold text-xl">Prestige</h3>
                    <p className="text-sm">Valid for 12 Months</p>
                  </div>

                </div>

                <ul className="text-sm mt-2 list-disc list-inside space-y-1 relative z-10">
                  <li>Unlock ALL Dramas</li>
                  <li>Earn 70% Rebate</li>
                  <li>VIP Gift Packs</li>
                </ul>

                <div className="mt-4 relative z-10">
                  <p className="line-through text-gray-500 text-sm">Rp. 1,800,000</p>
                  <p className="text-[#F82857] font-bold">Rp. 1,000,000</p>
                  <Button className="mt-2 w-full bg-[#F82857] hover:bg-[#F82857]">Select</Button>
                </div>
              </div>

            </div>
          </Card>

          {/* VIP Privileges */}
          <Card className="bg-[#191516] border border-[#5B5254] p-6 space-y-6">
            <h2 className="font-bold text-lg text-[#FAFAFA]">VIP Privileges</h2>
            <div className="grid md:grid-cols-2 gap-4">

              {/* Starter Pack */}
              <div className="bg-zinc-800 p-4 rounded-xl relative overflow-visible">
                <img
                  src={carIcon}
                  className="absolute -right-2 w-[150px] h-[150px] md:w-[200px] md:h-[200px] pointer-events-none select-none"
                  alt="Starter Icon"
                />
                <p className="text-sm text-gray-400 mb-2 relative z-10">Standard</p>
                <h3 className="font-bold text-xl relative z-10">Starter Pack</h3>
                <p className="text-sm mt-1 text-gray-300 relative z-10">Rp. 850,000 worth of gifts</p>
                <ul className="text-sm mt-2 text-gray-300 list-disc list-inside space-y-1 relative z-10">
                  <li>30 Days VIP Gift Value</li>
                  <li>Receive gift daily</li>
                  <li>Exclusive supporter gifts</li>
                </ul>
                <div className="mt-4 relative z-10">
                  <p className="text-[#F82857] font-bold">Rp. 500,000</p>
                  <Button className="mt-2 w-full bg-[#F82857] hover:bg-[#F82857]">Select</Button>
                </div>
              </div>

              {/* Supreme Pack */}
              <div className="bg-zinc-800 p-4 rounded-xl border border-yellow-400 relative overflow-visible">
                <img
                  src={rocketIcon}
                  className="absolute -right-10 w-[200px] h-[200px] pointer-events-none select-none"
                  alt="Supreme Icon"
                />
                <p className="text-sm text-yellow-400 mb-2 relative z-10">Best Value</p>
                <h3 className="font-bold text-xl relative z-10">Supreme Pack</h3>
                <p className="text-sm mt-1 text-gray-300 relative z-10">Rp. 8,900,000 worth of gifts</p>
                <ul className="text-sm mt-2 text-gray-300 list-disc list-inside space-y-1 relative z-10">
                  <li>Huge daily VIP gift</li>
                  <li>Missile pack + Big Impact daily</li>
                  <li>Dedicated fan perks</li>
                </ul>
                <div className="mt-4 relative z-10">
                  <p className="text-[#F82857] font-bold">Rp. 5,000,000</p>
                  <Button className="mt-2 w-full bg-[#F82857] hover:bg-[#F82857]">Select</Button>
                </div>
              </div>
            </div>
          </Card>


          {/* Payment Method */}
          <Card className="bg-[#191516] border border-[#5B5254] p-6 space-y-4">
            <h2 className="font-bold text-lg text-[#FAFAFA]">Pilih Metode Pembayaran</h2>
            <div className="space-y-2">
              {['QRIS', 'Bank Transfer'].map((method) => (
                <button
                  key={method}
                  onClick={() => setPaymentMethod(method)}
                  className={`w-full flex justify-between items-center p-4 rounded-xl border ${paymentMethod === method ? 'border-[#F82857] bg-[#F82857]/10' : 'border-white/10 bg-zinc-800'} hover:border-[#F82857] transition`}
                >
                  {method}
                </button>
              ))}
            </div>
          </Card>

          {/* Confirm Payment */}
          <Button className="w-full py-4 text-lg font-bold bg-[#F82857] hover:bg-[#F82857] h-[55px]">
            Konfirmasi Pembayaran
          </Button>
        </div>
        <div className="mt-6 text-center text-sm text-white/70 mb-20">
          <div className="flex justify-center items-center gap-1 text-red-500 font-medium">
            <img src={dangerIcon} alt="Dramein Logo" className="w-auto h-[25px]" />
            <span>Only adults (18+) can make purchases.</span>
          </div>
          <p className="mt-2 text-sm text-white/60">
            By making an in-app purchase, you have agreed to our{" "}
            <a href="/legal" className="underline hover:text-white/80">
              Terms and Conditions
            </a>
            .
          </p>
        </div>

      </div>

    </DefaultLayout>
  );
}
