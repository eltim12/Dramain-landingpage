// UI
import DefaultLayout from "@/layouts/default";
import titleEllipse from '@/assets/title-ellipse.svg'
import { useTranslation } from 'react-i18next';

export default function IndexPage() {
  const { t } = useTranslation();

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
              {t('terms.header')}
            </h2>
            <p className="text-base lg:text-lg px-4 text-gray-400 leading-relaxed mt-10">
              {t('terms.intro')}
            </p>
          </div>
        </div>


        {/* Terms Sections */}
        <div className="max-w-6xl mx-auto py-8 px-4 md:px-20 text-white">

          {/* VIP Package Terms */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t('terms.vipPackage.title')}</h2>
            <p className="mb-4">{t('terms.vipPackage.intro')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('terms.vipPackage.general.title')}</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>{t('terms.vipPackage.general.qualifications')}</li>
              <li>{t('terms.vipPackage.general.value')}</li>
              <li>{t('terms.vipPackage.general.streamerRevenue')}</li>
              <li>{t('terms.vipPackage.general.usageRestrictions')}</li>
              <li>{t('terms.vipPackage.general.dailyDistribution')}</li>
              <li>{t('terms.vipPackage.general.availability')}</li>
              <li>{t('terms.vipPackage.general.storageExpiry')}</li>
              <li>{t('terms.vipPackage.general.nonRefundable')}</li>
              <li>{t('terms.vipPackage.general.changes')}</li>
              <li>{t('terms.vipPackage.general.legalTerms')}</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">{t('terms.vipPackage.specific.title')}</h3>
            <div className="pl-5">
              <div className="mb-4">
                <h4 className="text-lg font-medium">{t('terms.vipPackage.specific.starter.title')}</h4>
                <p>{t('terms.vipPackage.specific.starter.promo')}</p>
                <p>{t('terms.vipPackage.specific.starter.content')}</p>
                <p>{t('terms.vipPackage.specific.starter.dailyDistribution')}</p>
                <p>{t('terms.vipPackage.specific.starter.experience')}</p>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-medium">{t('terms.vipPackage.specific.supreme.title')}</h4>
                <p>{t('terms.vipPackage.specific.supreme.offer')}</p>
                <p>{t('terms.vipPackage.specific.supreme.content')}</p>
                <p>{t('terms.vipPackage.specific.supreme.dailyDistribution')}</p>
                <p>{t('terms.vipPackage.specific.supreme.experience')}</p>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-medium">{t('terms.vipPackage.specific.super.title')}</h4>
                <p>{t('terms.vipPackage.specific.super.offer')}</p>
                <p>{t('terms.vipPackage.specific.super.content')}</p>
                <p>{t('terms.vipPackage.specific.super.dailyDistribution')}</p>
                <p>{t('terms.vipPackage.specific.super.experience')}</p>
              </div>
            </div>
          </section>

          {/* VIP Membership Terms */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t('terms.vipMembership.title')}</h2>
            <p className="mb-4">{t('terms.vipMembership.intro')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('terms.vipMembership.general.title')}</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>{t('terms.vipMembership.general.qualifications')}</li>
              <li>{t('terms.vipMembership.general.subscription')}</li>
              <li>{t('terms.vipMembership.general.nature')}</li>
              <li>{t('terms.vipMembership.general.duration')}</li>
              <li>{t('terms.vipMembership.general.changes')}</li>
              <li>{t('terms.vipMembership.general.termination')}</li>
            </ul>
            <div className="pl-5">
              <div className="mb-4">
                <h4 className="text-lg font-medium">{t('terms.vipMembership.essential.title')}</h4>
                <p>{t('terms.vipMembership.essential.duration')}</p>
                <ul className="list-disc pl-5">
                  <li>{t('terms.vipMembership.essential.benefits.allAccess')}</li>
                  <li>{t('terms.vipMembership.essential.benefits.goldenCar')}</li>
                  <li>{t('terms.vipMembership.essential.benefits.referral')}</li>
                </ul>
                <h5 className="text-md font-medium mt-2">{t('terms.vipMembership.essential.rewards.title')}</h5>
                <ul className="list-disc pl-5">
                  <li>{t('terms.vipMembership.essential.rewards.level1')}</li>
                  <li>{t('terms.vipMembership.essential.rewards.level2')}</li>
                  <li>{t('terms.vipMembership.essential.rewards.level3')}</li>
                </ul>
                <h5 className="text-md font-medium mt-2">{t('terms.vipMembership.essential.purchaseRewards.title')}</h5>
                <ul className="list-disc pl-5">
                  <li>{t('terms.vipMembership.essential.purchaseRewards.level1')}</li>
                  <li>{t('terms.vipMembership.essential.purchaseRewards.level2')}</li>
                  <li>{t('terms.vipMembership.essential.purchaseRewards.level3')}</li>
                </ul>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-medium">{t('terms.vipMembership.prestige.title')}</h4>
                <p>{t('terms.vipMembership.prestige.duration')}</p>
                <ul className="list-disc pl-5">
                  <li>{t('terms.vipMembership.prestige.benefits.allAccess')}</li>
                  <li>{t('terms.vipMembership.prestige.benefits.rocketPack')}</li>
                  <li>{t('terms.vipMembership.prestige.benefits.referral')}</li>
                </ul>
                <h5 className="text-md font-medium mt-2">{t('terms.vipMembership.prestige.rewards.title')}</h5>
                <ul className="list-disc pl-5">
                  <li>{t('terms.vipMembership.prestige.rewards.level1')}</li>
                  <li>{t('terms.vipMembership.prestige.rewards.level2')}</li>
                  <li>{t('terms.vipMembership.prestige.rewards.level3')}</li>
                </ul>
                <h5 className="text-md font-medium mt-2">{t('terms.vipMembership.prestige.purchaseRewards.title')}</h5>
                <ul className="list-disc pl-5">
                  <li>{t('terms.vipMembership.prestige.purchaseRewards.level1')}</li>
                  <li>{t('terms.vipMembership.prestige.purchaseRewards.level2')}</li>
                  <li>{t('terms.vipMembership.prestige.purchaseRewards.level3')}</li>
                </ul>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('terms.vipMembership.referral.title')}</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>{t('terms.vipMembership.referral.qualification')}</li>
              <li>
                <p>{t('terms.vipMembership.referral.mechanism')}</p>
                <ul className="list-disc pl-5">
                  <li>{t('terms.vipMembership.referral.mechanism.level1')}</li>
                  <li>{t('terms.vipMembership.referral.mechanism.level2')}</li>
                  <li>{t('terms.vipMembership.referral.mechanism.level3')}</li>
                </ul>
              </li>
              <li>
                <p>{t('terms.vipMembership.referral.eligiblePurchases')}</p>
                <ul className="list-disc pl-5">
                  <li>{t('terms.vipMembership.referral.eligiblePurchases.item1')}</li>
                  <li>{t('terms.vipMembership.referral.eligiblePurchases.item2')}</li>
                  <li>{t('terms.vipMembership.referral.eligiblePurchases.item3')}</li>
                </ul>
              </li>
              <li>{t('terms.vipMembership.referral.usage')}</li>
              <li>{t('terms.vipMembership.referral.essentialLimit')}</li>
              <li>
                <p>{t('terms.vipMembership.referral.restrictions')}</p>
                <ul className="list-disc pl-5">
                  <li>{t('terms.vipMembership.referral.restrictions.item1')}</li>
                  <li>{t('terms.vipMembership.referral.restrictions.item2')}</li>
                  <li>{t('terms.vipMembership.referral.restrictions.item3')}</li>
                </ul>
              </li>
              <li>{t('terms.vipMembership.referral.changes')}</li>
            </ul>
          </section>

          {/* Withdrawal Terms */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t('terms.withdrawal.title')}</h2>
            <p className="mb-4">{t('terms.withdrawal.intro')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('terms.withdrawal.schedule.title')}</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>{t('terms.withdrawal.schedule.item1')}</li>
              <li>{t('terms.withdrawal.schedule.item2')}</li>
              <li>{t('terms.withdrawal.schedule.item3')}</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">{t('terms.withdrawal.minimum.title')}</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>{t('terms.withdrawal.minimum.item1')}</li>
              <li>{t('terms.withdrawal.minimum.item2')}</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">{t('terms.withdrawal.unused.title')}</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>{t('terms.withdrawal.unused.item1')}</li>
              <li>{t('terms.withdrawal.unused.item2')}</li>
              <li>{t('terms.withdrawal.unused.item3')}</li>
              <li>{t('terms.withdrawal.unused.item4')}</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">{t('terms.withdrawal.aml.title')}</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>{t('terms.withdrawal.aml.item1')}</li>
              <li>{t('terms.withdrawal.aml.item2')}</li>
              <li>{t('terms.withdrawal.aml.item3')}</li>
              <li>{t('terms.withdrawal.aml.item4')}</li>
              <li>{t('terms.withdrawal.aml.item5')}</li>
              <li>{t('terms.withdrawal.aml.item6')}</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">{t('terms.withdrawal.method.title')}</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>{t('terms.withdrawal.method.item1')}</li>
              <li>{t('terms.withdrawal.method.item2')}</li>
              <li>{t('terms.withdrawal.method.item3')}</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">{t('terms.withdrawal.fees.title')}</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>{t('terms.withdrawal.fees.item1')}</li>
              <li>{t('terms.withdrawal.fees.item2')}</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">{t('terms.withdrawal.changes.title')}</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>{t('terms.withdrawal.changes.item1')}</li>
              <li>{t('terms.withdrawal.changes.item2')}</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">{t('terms.withdrawal.legal.title')}</h3>
            <p>{t('terms.withdrawal.legal.item1')}</p>
          </section>
        </div>
      </div>

    </DefaultLayout>
  );
}
