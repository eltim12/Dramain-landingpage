// src/i18n.ts
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      navbar: {
        about: 'About Us',
        features: 'Features',
        download: 'Download'
      },
      footer: {
        sections: {
          Links: "Links",
          Platform: "Platform"
        },
        links: {
          "About Us": "About Us",
          "Features": "Features",
          "Partners": "Partners",
          "Download": "Download",
          "FAQ": "FAQ",
          "Terms & Conditions": "Terms & Conditions",
          "Legal & Compliance": "Legal & Compliance"
        }
      },
      hero: {
        sub: 'Discover Dramein',
        desc: 'Immerse yourself in gripping short series, connect with live communities, and jump into thrilling game streams – all in one vibrant app.',
        download: 'Download free now!',
      },
      about: {
        deliver: {
          head: 'Deliver',
          desc: 'Curate and produce high-quality, culturally relevant short dramas that resonate deeply with our audience.',
        },
        empower: {
          head: 'Empower',
          desc: 'Provide creators with innovative tools and a supportive environment to stream, grow, and thrive.'
        },
        connect: {
          head: 'Connect',
          desc: 'Foster a vibrant, interactive community where users can share passions and build real connections.'
        }
      },
      download: {
        sub: 'Download Dramein for free',
        head: 'Your Entertainment\nJourney Starts Now.',
        desc: 'Don\'t miss out on the dramas everyone\'s talking about, the live moments you have to see, and the games you love to watch. Download Dramein today and step into a world of endless entertainment.',
        comingSoon: 'Coming soon to',
        appStore: 'App Store.'
      },
      feature: {
        sub1: 'Binge Bites Drama',
        head1: 'Addictive Short Dramas: Your Next Binge Awaits',
        desc1: 'Get hooked on exclusive, mobile-first drama series. Each episode is crafted for quick, emotional impact – perfect for your commute, break time, or unwinding. Discover new stories and support local talent.',

        sub2: 'Connect Live',
        head2: 'Go Live or Connect: Real-Time Interaction',
        desc2: 'Join live streams from creators around the region. Chat, send virtual gifts, participate in polls, and feel closer to your favorite personalities and fellow fans than ever before.',

        sub3: 'Game & Watch',
        head3: 'Game Streams: Excitement in Every Pixel',
        desc3: 'Watch top gamers showcase their skills, discover new games, or stream your own mobile gaming sessions. Connect with gaming communities and share the thrill of victory (and defeat!).',
      },
      legal: {
        header: 'Legal & Compliances',
        intro: 'At Dramein, we take legal compliance seriously. As an officially registered Indonesian company under the name PT DRAMEIN DIGITAL GLOBAL, we operate with full legality and transparency. Our business is supported by valid documentation. This legal foundation allows us to operate our services—including short drama production and live streaming—with integrity, professionalism, and respect for intellectual property rights.',
      },
      terms: {
        header: 'Terms & Conditions',
        intro: 'By accessing and using our services—including short dramas and live streaming—you agree to comply with the applicable Terms & Conditions. We are a legally registered company in Indonesia, committed to providing high-quality, safe, and regulation-compliant digital entertainment. Please read this page carefully before using our services.',
        vipPackage: {
          title: 'Dramein VIP Package - Terms & Conditions',
          intro: 'Welcome and enjoy the exclusive benefits of the Dramein VIP Package! As our esteemed VIP member, you have the privilege to purchase this package to enhance your experience and support your favorite streamers. Please read the following terms and conditions carefully.',
          general: {
            title: 'General Terms for All VIP Packages',
            qualifications: 'Qualifications: The VIP Package (hereinafter referred to as “package”) is only available to active Dramein VIP members. Your VIP membership must be active to purchase and enjoy the rights of this package.',
            value: 'Value & Content: Each VIP Package has a specific value that will be clearly displayed at the time of purchase. The content generally includes “gift items” within the app used to enhance your interaction experience.',
            streamerRevenue: 'Revenue for Streamers: When streamers receive virtual gifts from the gift items contained in this package, they will earn 30% of the item’s value as revenue. Calculations and withdrawal methods follow the agreement between Dramein and the streamer, as well as platform rules.',
            usageRestrictions: 'Usage & Restrictions of Gift Items: Gift items can only be used on the Dramein platform to send virtual gifts to streamers. It is strictly prohibited to use package purchases or gift items for money laundering, illegal fund transfers, fraud, or other financial crimes. Dramein will monitor these activities and reserves the right to suspend accounts, seize related funds, and report to authorities.',
            dailyDistribution: 'Daily Distribution: Gift items in the package will be distributed to your account daily from the successful purchase date, over a specified period as described in each package’s details.',
            availability: 'Availability of Gift Items: Daily distributed gift items will be added to your account and can be used anytime to gift streamers, subject to the general expiration rules for virtual items outlined in Dramein’s main Terms of Service. The duration like “30 days” refers to the distribution schedule, not the expiration of each daily gift item (see point 7 for specific daily gift expiration).',
            storageExpiry: 'Storage & Expiration of Daily Gifts: Each specific virtual gift obtained from the package (e.g., “Golden Car”, “Galaxy Rocket”) will be stored in your account inventory. Each item expires after 7 days from being added to the inventory. If unused within 7 days, the item will automatically disappear.',
            nonRefundable: 'Non-Refundable: All VIP Package purchases are final and non-refundable, unless required by applicable Indonesian law.',
            changes: 'Changes: Dramein reserves the right to change, replace, or discontinue the VIP Package offer, content, value, or terms at any time. However, all purchased packages will adhere to the terms applicable at the time of purchase.',
            legalTerms: 'Legal Terms: These terms are in addition to Dramein’s main Terms of Service and Privacy Policy, which also remain applicable.',
          },
          specific: {
            title: 'Specific Terms for Each Package',
            starter: {
              title: 'Starter Pack',
              promo: 'Special First-Time Promo: The Starter Pack is an exclusive promotion for new Dramein VIP members purchasing a VIP package for the first time. Each VIP account can purchase this only once (maximum 100 packages).',
              content: 'Main Content: The package price is Rp 500,000. You will receive gift items totaling Rp 850,000, distributed as exclusive daily virtual gifts.',
              dailyDistribution: 'Daily Distribution: Over 30 consecutive days, you will receive one (1) virtual “Golden Car” gift daily to your account.',
              experience: 'Expected Experience: This package is perfect for VIPs wanting to impress every day. The daily “Golden Car” gift can be used to elegantly support your favorite streamer!',
            },
            supreme: {
              title: 'Supreme Pack',
              offer: 'Our Best Offer: Designed for loyal fans, this package provides exceptional value through impactful daily gifts.',
              content: 'Main Content: The package price is Rp 5,000,000. You will receive virtual gifts totaling Rp 8,900,000, distributed daily as special gifts.',
              dailyDistribution: 'Daily Distribution: Over 30 consecutive days, you will receive one (1) virtual “Galaxy Rocket” gift daily.',
              experience: 'Expected Experience: Become a legendary supporter! Sending one (1) “Galaxy Rocket” daily to your favorite streamer for a full month will showcase extraordinary enthusiasm and create a significant impact!',
            },
            super: {
              title: 'Super Pack (Not Yet Available)',
              offer: 'Special Offer (Coming Soon): The Super Pack is the highest tier of VIP packages, offering an truly extraordinary exclusive experience.',
              content: 'Main Content: The package price is Rp 50,000,000. You will receive gifts totaling Rp 92,500,000, distributed daily as super virtual gifts.',
              dailyDistribution: 'Daily Distribution: Over 30 days, you will receive one (1) virtual “Not Yet Available” gift daily.',
              experience: 'Expected Experience: Become an unforgettable true supporter! Daily gifts for a full month will demonstrate your extraordinary support level, providing the highest interaction value for your favorite streamer!',
            },
          },
        },
        vipMembership: {
          title: 'Dramein VIP Membership – Terms & Conditions',
          intro: 'Welcome to the Dramein VIP experience! By purchasing the Essential or Prestige VIP membership, you agree to the following terms and conditions, as well as Dramein’s main Terms of Service and Privacy Policy.',
          general: {
            title: 'General VIP Membership Terms',
            qualifications: 'Qualifications: VIP membership is only available to registered users on the Dramein platform.',
            subscription: 'Subscription & Payment: VIP membership is a subscription service. Fees according to the chosen tier (Essential or Prestige) will be charged through official payment systems like Google Play or other valid methods.',
            nature: 'Nature of Membership: VIP membership is personal, non-transferable, and non-refundable (unless required by law).',
            duration: 'Duration: Your VIP membership is a one-time purchase with a specific active period. There is no automatic renewal. After expiration, you need to repurchase to continue VIP privileges.',
            changes: 'Changes to Terms: Dramein reserves the right to modify, add, or remove VIP benefits, membership fees, or these terms at any time with reasonable notice. Changes will not affect active subscriptions but will apply to subsequent purchases.',
            termination: 'Termination of Membership: If you violate these terms or Dramein’s main terms of service, Dramein may terminate or suspend your VIP membership without refund.',
          },
          essential: {
            title: 'Essential Version (Price: Rp100,000)',
            duration: 'Duration: 30 calendar days from the successful purchase date.',
            benefits: {
              allAccess: 'Access to All Short Drama Series: During the membership period, you can access all available short drama series on Dramein, including newly added content periodically.',
              goldenCar: 'Right to Purchase Golden Car VIP Pack: Gain exclusive access to buy the Golden Car VIP Pack at the listed price. Purchase and usage are subject to separate terms and conditions.',
              referral: 'Referral Reward Program: You are eligible to receive rewards through Dramein’s tiered referral system (see section D).',
            },
            rewards: {
              title: 'Reward Percentages (Essential VIP)',
              level1: 'Level 1 (Direct Friend - Friend A): 30% virtual reward from eligible purchases.',
              level2: 'Level 2 (Friend B, invited by A): 20% virtual reward from eligible purchases.',
              level3: 'Level 3 (Friend C, invited by B): 10% virtual reward from eligible purchases.',
            },
            purchaseRewards: {
              title: 'Purchase Reward Percentages',
              level1: 'Level 1: 3%',
              level2: 'Level 2: 2%',
              level3: 'Level 3: 1%',
            },
          },
          prestige: {
            title: 'Prestige Version (Price: Rp1,000,000)',
            duration: 'Duration: 12 months / 365 days from the successful purchase date.',
            benefits: {
              allAccess: 'Access to All Short Drama Series: Same as Essential, but valid for a full year.',
              rocketPack: 'Right to Purchase Rocket VIP Pack: Exclusive access to buy the Rocket VIP Pack at the listed price. Subject to specific terms and conditions.',
              referral: 'Referral Reward Program: Higher rewards than Essential (see section D).',
            },
            rewards: {
              title: 'Reward Percentages (Prestige VIP)',
              level1: 'Level 1: 40%',
              level2: 'Level 2: 20%',
              level3: 'Level 3: 10%',
            },
            purchaseRewards: {
              title: 'Purchase Reward Percentages',
              level1: 'Level 1: 3%',
              level2: 'Level 2: 2%',
              level3: 'Level 3: 1%',
            },
          },
          referral: {
            title: 'Referral Reward Program Terms (Exclusive to VIP Members)',
            qualification: 'Eligibility for Rewards: Only active VIP members (Essential or Prestige) are eligible to receive rewards from this program. If your membership expires or is terminated, you will not receive new rewards.',
            mechanism: 'How It Works: Share your Dramein invitation link with friends. When a friend (Friend A) registers using your link and makes an eligible purchase, you will receive rewards based on your VIP status and level. Rewards are given up to 3 levels: Level 1: Friend A; Level 2: Friend B (invited by A); Level 3: Friend C (invited by B).',
            eligiblePurchases: 'Eligible Purchases: Includes VIP purchases, renewals, VIP package purchases, virtual gift purchases, and full access to short dramas. Purchases using free points or promotions may not qualify. Future Store Purchases: If a store is launched in the Dramein app, purchases there may also generate rewards, subject to additional terms.',
            usage: 'Usage of Rewards: Rewards can only be used to gift hosts in Dramein live streams. They cannot be cashed out, exchanged for other services, or used outside their intended function.',
            essentialLimit: 'Essential VIP Limitation: If an Essential VIP member refers a friend who purchases a Prestige VIP, they will not receive rewards from that transaction.',
            restrictions: {
              item1: 'Prohibited self-invites or system abuse. Violations will result in reward confiscation and potential account blocking.',
              item2: 'Dramein reserves the right to investigate suspicious referral activities.',
              item3: 'The program is for personal promotion only, not commercial. Spamming invitation codes is prohibited.',
            },
            changes: 'Program Changes: Dramein reserves the right to modify, suspend, or terminate this program at any time with reasonable notice.',
          },
        },
        withdrawal: {
          title: 'Dramein - Terms & Conditions for Withdrawal',
          intro: 'Effective Date: May 17, 2025. These Terms & Conditions for Withdrawal (“Withdrawal Terms”) govern the process, requirements, and conditions for withdrawing funds from your Dramein account. By submitting a withdrawal request, you (“User”, “You”, “Your”) acknowledge that you have read, understood, and agree to be bound by these Withdrawal Terms, as well as Dramein’s main Terms of Service and Privacy Policy.',
          schedule: {
            title: 'Withdrawal Process Schedule',
            item1: 'Withdrawal requests are collected weekly. Requests submitted from Monday (00:00 WIB) to Friday (23:59 WIB) will be reviewed by the finance team on Saturday and Sunday, then forwarded to the third-party bank. The bank typically processes payments on the following Monday.',
            item2: 'The time funds reach your bank account depends on the bank’s standard processing time, working hours, and business days.',
            item3: 'If the payment processing day coincides with a national holiday in Indonesia, the withdrawal may be delayed. Dramein will process it as soon as possible after the holiday ends.',
          },
          minimum: {
            title: 'Minimum Withdrawal Amount',
            item1: 'The minimum amount for each withdrawal transaction is Rp 100,000.',
            item2: 'Requests below this amount will not be processed. You will receive a notification if the amount is less than the minimum threshold.',
          },
          unused: {
            title: 'Withdrawal of Unused Funds',
            item1: 'If funds have been added to your Dramein account but not used for actual transactions and are then withdrawn, Dramein reserves the right to charge an administrative fee.',
            item2: 'This fee is 30% of the total withdrawal amount.',
            item3: '“Actual transaction activity” includes direct use of funds for Dramein services/platform (e.g., VIP purchases, gift packages, sending gifts to streamers, paid content access, etc.), as determined solely by Dramein.',
            item4: 'This fee covers administrative costs, payment processing, and operational expenses, and prevents account misuse for activities not aligned with the platform’s purpose.',
          },
          aml: {
            title: 'Anti-Money Laundering (AML) & Counter-Terrorism Financing (CTF) Policy',
            item1: 'Prohibition of Illegal Activities: It is strictly prohibited to use the Dramein platform (including recharge and withdrawal features) for money laundering, terrorism financing, fraud, or other illegal financial activities under Indonesian law or international standards.',
            item2: 'Identity Verification (KYC/CDD): Dramein reserves the right to conduct “Know Your Customer” (KYC) and “Customer Due Diligence” (CDD) procedures at any time. This may include: a) KTP for Indonesian citizens or passport for foreigners; b) Proof of address; c) Source of funds or wealth information; d) Beneficial owner information if applicable. This is mandatory for large withdrawals, frequent transactions, or suspicious activities.',
            item3: 'Transaction Monitoring & Reporting: Dramein will monitor user transactions to detect signs of illegal activities. If suspicious activity is found, Dramein reserves the right to suspend accounts, deny withdrawals, and report to authorities like PPATK.',
            item4: 'User Declarations & Warranties: By transacting on the platform, you declare that: a) Funds in your account come from lawful sources; b) You are the rightful owner of the funds and the account used; c) You are not using the account for prohibited activities.',
            item5: 'Consequences of Violations: a) Dramein account may be immediately suspended or terminated; b) Funds related to illegal activities may be confiscated; c) Your activities and data may be reported to authorities.',
            item6: 'Cooperation in Investigations: Dramein will fully cooperate with law enforcement for investigations into illegal activities.',
          },
          method: {
            title: 'Withdrawal Methods & Account Information',
            item1: 'Withdrawals can only be made to a registered Indonesian bank account under the same full name as your Dramein account.',
            item2: 'You are fully responsible for the accuracy and completeness of your bank account details. Dramein is not liable for delays or errors due to incorrect or outdated information.',
            item3: 'Dramein may add other withdrawal methods in the future (e.g., digital wallets or other financial tools) subject to internal policies and regulations.',
          },
          fees: {
            title: 'Fees & Deductions',
            item1: 'Except for fees mentioned in Article 3, Dramein currently does not charge additional withdrawal fees. However, your bank or third parties may impose separate fees.',
            item2: 'Dramein reserves the right to introduce withdrawal fees in the future with prior notice.',
          },
          changes: {
            title: 'Changes to Withdrawal Terms',
            item1: 'Dramein reserves the right to modify or update these Withdrawal Terms at any time. Changes take effect immediately upon announcement in the app or via notification.',
            item2: 'You must periodically check for updates. Continuing to use the withdrawal feature after changes means you accept and agree to the updated version.',
          },
          legal: {
            title: 'Applicable Law',
            item1: 'These Withdrawal Terms are governed by the laws of the Republic of Indonesia and will be interpreted accordingly.',
          },
        },
      },
    },
  },
  id: {
    translation: {
      "navbar": {
        "about": "Tentang Kami",
        "features": "Fitur",
        "download": "Unduh"
      },
      "footer": {
        "sections": {
          "Links": "Tautan",
          "Platform": "Platform"
        },
        "links": {
          "About Us": "Tentang Kami",
          "Features": "Fitur",
          "Partners": "Mitra",
          "Download": "Unduh",
          "FAQ": "FAQ",
          "Terms & Conditions": "Syarat & Ketentuan",
          "Legal & Compliance": "Legal & Kepatuhan"
        }
      },
      "hero": {
        "sub": "Temukan Dramein",
        "desc": "Nikmati drama pendek yang seru, terhubung dengan komunitas live, dan ikuti keseruan game streaming – semuanya dalam satu aplikasi penuh warna.",
        "download": "Unduh gratis sekarang!"
      },
      "about": {
        "deliver": {
          "head": "Menghadirkan",
          "desc": "Menyajikan drama pendek berkualitas tinggi dan relevan secara budaya yang menyentuh hati penonton kami."
        },
        "empower": {
          "head": "Memberdayakan",
          "desc": "Memberikan kreator alat inovatif dan lingkungan suportif untuk streaming, berkembang, dan bersinar."
        },
        "connect": {
          "head": "Menghubungkan",
          "desc": "Membangun komunitas interaktif yang hidup di mana pengguna bisa berbagi minat dan membangun koneksi nyata."
        }
      },
      "download": {
        "sub": "Unduh Dramein secara gratis",
        "head": "Petualangan Hiburanmu\nDimulai Sekarang.",
        "desc": "Jangan sampai ketinggalan drama yang lagi ramai dibicarakan, momen live yang seru, dan game favorit yang wajib ditonton. Unduh Dramein hari ini dan masuk ke dunia hiburan tanpa batas!",
        "comingSoon": "Segera hadir di",
        "appStore": "App Store."
      },
      "feature": {
        "sub1": "Drama Pendek Langsung",
        "head1": "Drama Pendek yang Bikin Ketagihan: Keseruan Menantimu",
        "desc1": "Nikmati drama eksklusif yang dibuat khusus untuk layar ponsel. Setiap episode dirancang singkat tapi penuh emosi – pas untuk saat perjalanan, istirahat, atau waktu santai. Temukan kisah baru dan dukung talenta lokal.",

        "sub2": "Terhubung Live",
        "head2": "Live atau Gabung: Interaksi Real-Time",
        "desc2": "Tonton live streaming dari kreator di seluruh daerah. Ngobrol, kirim hadiah virtual, ikutan polling, dan rasakan kedekatan dengan idola favoritmu maupun sesama fans.",

        "sub3": "Main & Tonton",
        "head3": "Game Streaming: Seru Tiap Pikselnya",
        "desc3": "Saksikan gamer andalan beraksi, temukan game baru, atau siarkan sesi gaming kamu sendiri. Terhubung dengan komunitas game dan rasakan keseruan menang (dan kalah!) bareng-bareng."
      },
      "legal": {
        "header": "Legal & Kepatuhan",
        "intro": "Di Dramein, kami sangat menjunjung tinggi kepatuhan hukum. Sebagai perusahaan resmi yang terdaftar di Indonesia dengan nama PT DRAMEIN DIGITAL GLOBAL, kami beroperasi secara legal dan transparan. Seluruh aktivitas kami didukung oleh dokumen hukum yang sah. Dasar hukum ini memungkinkan kami menyelenggarakan layanan—termasuk produksi drama pendek dan live streaming—dengan integritas, profesionalisme, dan penghormatan terhadap hak kekayaan intelektual."
      },
      terms: {
        header: 'Syarat & Ketentuan',
        intro: 'Dengan mengakses dan menggunakan layanan kami—termasuk drama pendek dan live streaming—Anda setuju untuk mematuhi Syarat & Ketentuan yang berlaku. Kami adalah perusahaan resmi berbadan hukum di Indonesia, dan berkomitmen untuk memberikan hiburan digital yang berkualitas tinggi, aman, dan sesuai peraturan yang berlaku. Harap baca halaman ini dengan saksama sebelum menggunakan layanan kami.',
        vipPackage: {
          title: 'Paket VIP Dramein - Syarat & Ketentuan',
          intro: 'Selamat datang dan nikmati manfaat eksklusif dari Paket VIP Dramein! Sebagai anggota VIP kami yang terhormat, Anda memiliki hak istimewa untuk membeli paket ini demi meningkatkan pengalaman Anda dan mendukung streamer favorit. Mohon baca syarat dan ketentuan berikut dengan seksama.',
          general: {
            title: 'Syarat Umum Semua Paket VIP',
            qualifications: 'Kualifikasi: Paket VIP (selanjutnya disebut “paket”) hanya tersedia untuk anggota VIP Dramein yang aktif. Keanggotaan VIP Anda harus dalam status aktif agar dapat membeli dan menikmati hak-hak dari paket ini.',
            value: 'Nilai & Isi Paket: Setiap Paket VIP memiliki nilai tertentu yang akan ditampilkan secara jelas saat pembelian. Isi paket umumnya berupa “item hadiah” dalam aplikasi yang digunakan untuk meningkatkan pengalaman interaksi Anda.',
            streamerRevenue: 'Pendapatan untuk Streamer: Saat streamer menerima hadiah virtual dari item hadiah yang terkandung dalam paket ini, mereka akan memperoleh 30% dari nilai item tersebut sebagai pendapatan. Perhitungan dan metode pencairan mengikuti perjanjian antara Dramein dan streamer, serta aturan platform.',
            usageRestrictions: 'Penggunaan & Pembatasan Item Hadiah: Item hadiah hanya dapat digunakan di platform Dramein untuk mengirim hadiah virtual ke streamer. Dilarang keras menggunakan pembelian paket atau item hadiah dalam paket untuk melakukan pencucian uang, pemindahan dana ilegal, penipuan, atau aktivitas kejahatan finansial lainnya. Dramein akan memantau aktivitas ini dan berhak menangguhkan akun, menyita dana terkait, dan melaporkannya ke pihak berwenang.',
            dailyDistribution: 'Pembagian Harian: Item hadiah dalam paket akan dibagikan ke akun Anda secara harian sejak tanggal pembelian berhasil, selama jangka waktu tertentu sesuai yang dijelaskan pada deskripsi masing-masing paket.',
            availability: 'Ketersediaan Item Hadiah: Item hadiah yang dibagikan setiap hari akan ditambahkan ke akun Anda dan dapat digunakan kapan saja untuk memberi hadiah ke streamer. Namun, ini tetap tunduk pada aturan masa berlaku umum item virtual dalam aplikasi yang diuraikan di Ketentuan Layanan utama Dramein. Durasi seperti “30 hari” merujuk pada jadwal pembagian, bukan masa berlaku dari setiap item hadiah harian (lihat poin 7 untuk masa berlaku spesifik hadiah harian).',
            storageExpiry: 'Penyimpanan & Masa Berlaku Hadiah Harian: Setiap hadiah virtual spesifik yang didapat dari paket (misalnya “Mobil Emas”, “Roket Galaksi”) akan disimpan di inventaris akun Anda. Setiap item tersebut berlaku selama 7 hari sejak masuk ke inventaris. Jika tidak digunakan dalam 7 hari, item akan otomatis hilang.',
            nonRefundable: 'Tidak Dapat Dikembalikan: Semua pembelian Paket VIP bersifat final dan tidak dapat dikembalikan, kecuali diwajibkan oleh hukum yang berlaku di Indonesia.',
            changes: 'Perubahan: Dramein berhak untuk mengubah, mengganti, atau menghentikan penawaran Paket VIP, isi, nilai, atau syaratnya kapan saja. Namun, semua paket yang sudah dibeli akan tetap mengikuti syarat yang berlaku saat pembelian.',
            legalTerms: 'Ketentuan Hukum: Syarat ini merupakan tambahan dari Ketentuan Layanan dan Kebijakan Privasi utama Dramein, yang juga tetap berlaku.',
          },
          specific: {
            title: 'Syarat & Ketentuan Khusus Setiap Paket',
            starter: {
              title: 'Paket Pemula (Starter Pack)',
              promo: 'Promo Khusus Pertama Kali: Paket Pemula adalah promo eksklusif bagi anggota VIP Dramein yang baru pertama kali membeli paket VIP. Setiap akun VIP hanya dapat membeli satu (1) kali <maksimal 100 paket>.',
              content: 'Isi Utama: Harga paket adalah Rp 500.000. Anda akan menerima item hadiah senilai total Rp 850.000, dibagikan sebagai hadiah virtual eksklusif harian.',
              dailyDistribution: 'Pembagian Harian: Selama 30 hari berturut-turut, Anda akan menerima satu (1) hadiah mobil virtual “Mobil Emas” setiap hari ke akun Anda.',
              experience: 'Pengalaman yang Diharapkan: Paket ini sempurna bagi VIP yang ingin tampil memukau setiap hari. Hadiah “Mobil Emas” harian dapat langsung digunakan untuk memberikan dukungan yang elegan ke streamer favorit Anda!',
            },
            supreme: {
              title: 'Paket Supreme (Supreme Pack)',
              offer: 'Penawaran Terbaik Kami: Didesain khusus untuk penggemar setia, paket ini memberi nilai luar biasa lewat hadiah harian yang impactful.',
              content: 'Isi Utama: Harga paket adalah Rp 5.000.000. Anda akan menerima hadiah virtual senilai Rp 8.900.000, dibagikan setiap hari sebagai hadiah spesial.',
              dailyDistribution: 'Pembagian Harian: Selama 30 hari berturut-turut, Anda akan menerima satu (1) hadiah virtual “Roket Galaksi” setiap hari.',
              experience: 'Pengalaman yang Diharapkan: Jadilah pendukung legendaris! Dengan mengirim satu (1) “Roket Galaksi” setiap hari ke streamer favorit Anda selama sebulan penuh, Anda akan menunjukkan semangat luar biasa dan menciptakan dampak besar!',
            },
            super: {
              title: 'Paket Super (Belum Tersedia)',
              offer: 'Penawaran Spesial (Segera Hadir): Paket Super adalah tingkatan tertinggi dari paket VIP, memberikan pengalaman eksklusif yang benar-benar luar biasa.',
              content: 'Isi Utama: Harga paket adalah Rp 50.000.000. Anda akan menerima hadiah senilai Rp 92.500.000, dikirim harian dalam bentuk hadiah virtual super.',
              dailyDistribution: 'Pembagian Harian: Selama 30 hari, Anda akan menerima satu (1) hadiah virtual “Belum Tersedia” setiap harinya.',
              experience: 'Pengalaman yang Diharapkan: Jadilah pendukung sejati yang tak terlupakan! Hadiah harian selama satu bulan penuh akan menunjukkan level dukungan Anda yang luar biasa, memberikan nilai interaksi tertinggi untuk streamer favorit Anda!',
            },
          },
        },
        vipMembership: {
          title: 'Keanggotaan VIP Dramein – Syarat & Ketentuan',
          intro: 'Selamat datang di pengalaman VIP Dramein! Dengan membeli keanggotaan VIP versi Essential atau Prestige, Anda menyetujui syarat & ketentuan berikut, serta Ketentuan Layanan dan Kebijakan Privasi utama Dramein.',
          general: {
            title: 'Ketentuan Umum Keanggotaan VIP',
            qualifications: 'Kualifikasi: Keanggotaan VIP hanya tersedia bagi pengguna yang telah terdaftar di platform Dramein.',
            subscription: 'Langganan & Pembayaran: Keanggotaan VIP merupakan layanan berlangganan. Biaya sesuai tingkat langganan yang Anda pilih (Essential atau Prestige) akan dibebankan melalui sistem pembayaran resmi seperti Google Play atau metode pembayaran sah lainnya.',
            nature: 'Sifat Keanggotaan: Keanggotaan VIP bersifat pribadi, tidak dapat dipindahtangankan, dan tidak dapat dikembalikan (kecuali diwajibkan oleh hukum).',
            duration: 'Masa Berlaku: Keanggotaan VIP Anda bersifat pembelian satu kali dengan masa aktif tertentu. Tidak ada perpanjangan otomatis. Setelah habis masa aktif, Anda perlu melakukan pembelian ulang untuk melanjutkan hak istimewa VIP.',
            changes: 'Perubahan Ketentuan: Dramein berhak mengubah, menambah, atau menghapus manfaat VIP, biaya keanggotaan, atau ketentuan ini kapan saja dengan pemberitahuan wajar. Perubahan ini tidak akan memengaruhi langganan yang sedang aktif, namun akan berlaku untuk pembelian berikutnya.',
            termination: 'Penghentian Keanggotaan: Jika Anda melanggar ketentuan ini atau ketentuan layanan utama Dramein, Dramein dapat menghentikan atau menangguhkan keanggotaan VIP Anda tanpa pengembalian dana.',
          },
          essential: {
            title: 'VIP Versi Essential (Harga: Rp100.000)',
            duration: 'Masa Berlaku: 30 hari kalender sejak tanggal pembelian berhasil.',
            benefits: {
              allAccess: 'Akses Semua Serial Drama Pendek: Selama masa keanggotaan, Anda dapat mengakses seluruh konten serial drama pendek yang tersedia di Dramein, termasuk konten terbaru yang ditambahkan secara berkala.',
              goldenCar: 'Hak Membeli Paket VIP Mobil Emas: Dapatkan akses eksklusif untuk membeli Golden Car VIP Pack sesuai harga yang tertera. Pembelian dan penggunaannya tunduk pada syarat & ketentuan terpisah.',
              referral: 'Program Hadiah Rekomendasi: Anda berhak memperoleh hadiah melalui sistem rekomendasi berjenjang Dramein (lihat bagian D).',
            },
            rewards: {
              title: 'Persentase Hadiah (Essential VIP)',
              level1: 'Level 1 (Teman langsung - Teman A): Hadiah virtual senilai 30% dari pembelian yang memenuhi syarat.',
              level2: 'Level 2 (Teman B, diundang oleh A): Hadiah virtual senilai 20% dari pembelian.',
              level3: 'Level 3 (Teman C, diundang oleh B): Hadiah virtual senilai 10% dari pembelian.',
            },
            purchaseRewards: {
              title: 'Pembelian Drama Penuh / Paket VIP / Produk Toko Masa Depan',
              level1: 'Level 1: 3%',
              level2: 'Level 2: 2%',
              level3: 'Level 3: 1%',
            },
          },
          prestige: {
            title: 'VIP Versi Prestige (Harga: Rp1.000.000)',
            duration: 'Masa Berlaku: 12 bulan / 365 hari sejak pembelian berhasil.',
            benefits: {
              allAccess: 'Akses Semua Serial Drama Pendek: Sama seperti Essential, namun berlaku selama 1 tahun penuh.',
              rocketPack: 'Hak Membeli Paket VIP Rocket: Akses eksklusif untuk membeli Rocket VIP Pack sesuai harga yang tertera. Tunduk pada syarat & ketentuan khusus.',
              referral: 'Program Hadiah Rekomendasi: Hadiah lebih besar dari Essential. (lihat bagian D)',
            },
            rewards: {
              title: 'Persentase Hadiah (Prestige VIP)',
              level1: 'Level 1: 40%',
              level2: 'Level 2: 20%',
              level3: 'Level 3: 10%',
            },
            purchaseRewards: {
              title: 'Pembelian Drama Penuh / Paket VIP / Produk Toko Masa Depan',
              level1: 'Level 1: 3%',
              level2: 'Level 2: 2%',
              level3: 'Level 3: 1%',
            },
          },
          referral: {
            title: 'Ketentuan Program Hadiah Rekomendasi (Khusus Member VIP)',
            qualification: 'Syarat Mendapatkan Hadiah: Hanya VIP aktif (Essential atau Prestige) yang berhak menerima hadiah dari program ini. Jika keanggotaan Anda berakhir atau dihentikan, Anda tidak akan bisa menerima hadiah baru.',
            mechanism: 'Cara Kerja: Bagikan link undangan Dramein Anda ke teman. Saat teman (Teman A) mendaftar menggunakan link Anda dan melakukan pembelian yang memenuhi syarat, Anda akan mendapatkan hadiah berdasarkan level dan status VIP Anda. Hadiah diberikan hingga 3 level: Level 1: Teman A; Level 2: Teman B (diundang oleh A); Level 3: Teman C (diundang oleh B).',
            eligiblePurchases: 'Pembelian yang Memenuhi Syarat: Termasuk pembelian VIP, perpanjangan VIP, pembelian paket VIP, pembelian hadiah virtual, dan akses penuh ke drama pendek. Pembelian menggunakan poin gratis atau promo mungkin tidak memenuhi syarat. Pembelian di Toko Masa Depan: Jika toko diluncurkan di aplikasi Dramein, pembelian di sana juga bisa menghasilkan hadiah, tergantung ketentuan tambahan.',
            usage: 'Penggunaan Hadiah: Hadiah hanya dapat digunakan untuk memberikan gift kepada host di ruang siaran langsung Dramein. Tidak dapat diuangkan, ditukar layanan lain, atau digunakan di luar fungsinya.',
            essentialLimit: 'Batasan Tertentu untuk Level Essential: Jika pengguna VIP Essential merekomendasikan teman yang membeli VIP Prestige, maka tidak akan menerima hadiah dari transaksi tersebut.',
            restrictions: {
              item1: 'Dilarang melakukan self-invite atau penyalahgunaan sistem. Pelanggaran akan menyebabkan hadiah disita dan akun bisa diblokir.',
              item2: 'Dramein berhak menyelidiki aktivitas rekomendasi yang mencurigakan.',
              item3: 'Program hanya untuk promosi pribadi, bukan komersial. Spam kode undangan dilarang.',
            },
            changes: 'Perubahan Program: Dramein berhak mengubah, menunda, atau menghentikan program ini kapan saja dengan pemberitahuan yang wajar.',
          },
        },
        withdrawal: {
          title: 'Dramein - Syarat & Ketentuan Penarikan Dana',
          intro: 'Tanggal Berlaku: 17 Mei 2025. Syarat & Ketentuan Penarikan Dana ini (“Syarat Penarikan”) mengatur proses, persyaratan, dan ketentuan penarikan dana dari akun Dramein Anda. Dengan mengajukan permintaan penarikan, Anda (“Pengguna”, “Anda”, “Milik Anda”) menyatakan telah membaca, memahami, dan menyetujui untuk terikat pada Syarat Penarikan ini, serta Syarat Layanan dan Kebijakan Privasi utama dari Dramein.',
          schedule: {
            title: 'Jadwal Proses Penarikan',
            item1: 'Permintaan penarikan dikumpulkan setiap minggu. Permintaan yang diajukan dari Senin (00:00 WIB) hingga Jumat (23:59 WIB) akan direview oleh tim keuangan pada hari Sabtu dan Minggu, lalu diteruskan ke bank pihak ketiga. Bank biasanya memproses pembayaran pada hari Senin minggu berikutnya.',
            item2: 'Waktu dana masuk ke rekening bank Anda tergantung pada waktu proses standar, jam kerja, dan hari kerja bank terkait.',
            item3: 'Jika hari proses pembayaran bertepatan dengan hari libur nasional Indonesia, maka penarikan bisa tertunda. Dramein akan berusaha memprosesnya secepat mungkin setelah libur berakhir.',
          },
          minimum: {
            title: 'Jumlah Minimum Penarikan',
            item1: 'Jumlah minimum untuk setiap transaksi penarikan adalah Rp 100.000.',
            item2: 'Permintaan di bawah nominal tersebut tidak akan diproses. Anda akan menerima pemberitahuan jika nominalnya kurang dari batas minimum.',
          },
          unused: {
            title: 'Penarikan Dana yang Tidak Digunakan untuk Transaksi',
            item1: 'Jika dana telah dimasukkan ke akun Dramein namun belum digunakan untuk aktivitas transaksi nyata di aplikasi, dan kemudian ditarik, maka Dramein berhak mengenakan biaya administrasi.',
            item2: 'Biaya ini sebesar 30% dari total jumlah penarikan.',
            item3: '“Aktivitas transaksi nyata” mencakup penggunaan dana secara langsung untuk layanan/platform Dramein (misalnya pembelian VIP, paket hadiah, mengirim hadiah ke streamer, akses konten berbayar, dll.), sesuai penilaian sepihak Dramein.',
            item4: 'Biaya ini digunakan untuk menutupi biaya administrasi, pemrosesan pembayaran, dan biaya operasional lainnya, serta mencegah penyalahgunaan akun untuk aktivitas yang tidak sesuai dengan tujuan platform.',
          },
          aml: {
            title: 'Kebijakan Anti Pencucian Uang (AML) & Pendanaan Terorisme (CTF)',
            item1: 'Larangan Kegiatan Ilegal: Dilarang keras menggunakan platform Dramein (termasuk fitur isi ulang dan penarikan) untuk kegiatan pencucian uang, pendanaan terorisme, penipuan, atau aktivitas keuangan ilegal lainnya berdasarkan hukum Indonesia maupun standar internasional.',
            item2: 'Verifikasi Identitas (KYC/CDD): Dramein berhak melakukan prosedur “Know Your Customer” (KYC) dan “Customer Due Diligence” (CDD) kapan pun. Ini dapat mencakup: a) KTP untuk WNI atau paspor untuk WNA; b) Bukti alamat; c) Informasi dan dokumen sumber dana atau kekayaan; d) Informasi pemilik manfaat jika berlaku. Proses ini wajib terutama untuk penarikan dalam jumlah besar, transaksi sering, atau aktivitas mencurigakan lainnya.',
            item3: 'Pemantauan & Pelaporan Transaksi: Dramein akan memantau transaksi pengguna untuk mendeteksi indikasi aktivitas ilegal. Jika ditemukan aktivitas mencurigakan, Dramein berhak menangguhkan akun, menolak penarikan, dan melaporkan ke pihak berwenang seperti PPATK.',
            item4: 'Pernyataan & Jaminan Pengguna: Dengan melakukan transaksi di platform, Anda menyatakan bahwa: a) Dana di akun Anda berasal dari sumber yang sah; b) Anda adalah pemilik sah dana dan rekening yang digunakan; c) Anda tidak menggunakan akun untuk aktivitas terlarang.',
            item5: 'Konsekuensi Pelanggaran: a) Akun Dramein dapat langsung ditangguhkan atau dihentikan; b) Dana yang terkait aktivitas ilegal dapat disita; c) Aktivitas dan data Anda dapat dilaporkan ke pihak berwenang.',
            item6: 'Kerja Sama dalam Penyelidikan: Dramein akan bekerja sama penuh dengan pihak berwajib untuk investigasi aktivitas ilegal.',
          },
          method: {
            title: 'Metode Penarikan & Informasi Rekening',
            item1: 'Penarikan dana hanya dapat dilakukan ke rekening bank Indonesia yang terdaftar atas nama lengkap yang sama dengan akun Dramein Anda.',
            item2: 'Anda bertanggung jawab penuh atas keakuratan dan kelengkapan data rekening bank. Dramein tidak bertanggung jawab atas keterlambatan atau kesalahan akibat data yang salah atau tidak diperbarui.',
            item3: 'Dramein dapat menambahkan metode penarikan lain di masa depan (misalnya dompet digital atau alat keuangan lain) sesuai dengan kebijakan internal dan regulasi.',
          },
          fees: {
            title: 'Biaya & Potongan',
            item1: 'Kecuali biaya yang disebut pada Pasal 3, saat ini Dramein tidak mengenakan biaya penarikan tambahan. Namun, bank Anda atau pihak ketiga bisa saja mengenakan biaya terpisah.',
            item2: 'Dramein berhak memperkenalkan biaya penarikan di masa depan dengan pemberitahuan sebelumnya.',
          },
          changes: {
            title: 'Perubahan pada Syarat Penarikan',
            item1: 'Dramein berhak mengubah atau memperbarui Syarat Penarikan ini kapan saja. Perubahan akan berlaku segera setelah diumumkan di aplikasi atau melalui notifikasi.',
            item2: 'Anda wajib memeriksa pembaruan ini secara berkala. Melanjutkan penggunaan fitur penarikan setelah perubahan berarti Anda menerima dan menyetujui versi yang diperbarui.',
          },
          legal: {
            title: 'Hukum yang Berlaku',
            item1: 'Syarat Penarikan ini tunduk pada hukum Republik Indonesia dan akan ditafsirkan sesuai dengan hukum yang berlaku di wilayah tersebut.',
          },
        },
      },
    },
  },
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    detection: { order: ['localStorage', 'navigator'], caches: ['localStorage'] },
  });

export default i18next;