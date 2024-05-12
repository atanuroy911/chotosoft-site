import { useTranslations } from 'next-intl';
import HeroSection from './HeroSection';
import ServiceBanner from '@/components/ServiceBanner';
import ProductBanner from '@/components/ProductBanner';
import LogoCarousel from '@/components/LogoCarousel';
import LogoSpotlight from '@/components/LogoSpotlight';
import FeaturedWorks from '@/components/FeaturedWorks';

export default function Index() {
  const t = useTranslations('TypingText');
  const h = useTranslations('HeroText');
  const ui = useTranslations('UI');
  return <>
    <div className="">
      <HeroSection UIText={ui('commenceBtn')} heroText={[h('Line1'), h('Line2')]} typingText={[t('Line1'), t('Line2'), t('Line3'), t('Line4')]}></HeroSection>
      <ServiceBanner text1={ui('web')} text2={ui('app')} text3={ui('soft')} />
      {/* <LogoCarousel/> */}
      <LogoSpotlight/>
      <FeaturedWorks/>
      <ProductBanner/>
    </div>
  </>
}