import { useTranslations } from 'next-intl';
import HeroSection from './HeroSection';
import ServiceBanner from '@/components/ServiceBanner';


export default function Index() {
  const t = useTranslations('TypingText');
  const h = useTranslations('HeroText');
  const ui = useTranslations('UI');
  return <>
    <div className="container">
      <HeroSection UIText={ui('commenceBtn')} heroText={[h('Line1'), h('Line2')]} typingText={[t('Line1'), t('Line2'), t('Line3'), t('Line4')]}></HeroSection>
      <ServiceBanner text1="Text 1" text2="Text 2" text3="Text 3" />

    </div>
  </>
}