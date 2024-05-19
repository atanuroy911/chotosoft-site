import { useTranslations } from 'next-intl';
import HeroSection from './HeroSection';
// import ServiceBanner from '@/components/ServiceBanner';
// import ProductBanner from '@/components/ProductBanner';
// import LogoCarousel from '@/components/LogoCarousel';
import LogoSpotlight from '@/components/LogoSpotlight';
import WhoAreWe from '@/components/WhoAreWe';
import FeaturedWorks2 from '@/components/FeaturedWorks2';
import ContactUs from '@/components/ContactUs';
import ServiceBanner3 from '@/components/ServiceBanner3';

export default function Index() {
  const t = useTranslations('TypingText');
  const h = useTranslations('HeroText');
  const ui = useTranslations('UI');
  const s = useTranslations('ServiceBanner');

  const servicesData = {
    service1: {
      title: s('service1_title'),
      description: s('service1_description'),
    },
    service2: {
      title: s('service2_title'),
      description: s('service2_description'),
    },
    service3: {
      title: s('service3_title'),
      description: s('service3_description'),
    },
    service4: {
      title: s('service4_title'),
      description: s('service4_description'),
    },
    service5: {
      title: s('service5_title'),
      description: s('service5_description'),
    },
  };


  return <>
    <main className="">
      <HeroSection UIText={ui('commenceBtn')} heroText={[h('Line1'), h('Line2')]} typingText={[t('Line1'), t('Line2'), t('Line3'), t('Line4')]}></HeroSection>
      {/* <ServiceBanner text1={ui('web')} text2={ui('app')} text3={ui('soft')} /> */}
      <ServiceBanner3 services={servicesData} />
      {/* <LogoCarousel/> */}
      <FeaturedWorks2 />
      {/* <ProductBanner/> */}
      <LogoSpotlight />

      <WhoAreWe />
      <ContactUs />
    </main>
  </>
}