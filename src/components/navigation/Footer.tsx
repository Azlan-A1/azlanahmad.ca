import GradientText from '@/components/typography/GradientText';
import SocialButtons from '@/components/elements/SocialButtons';
import FooterMenu from '@/components/navigation/FooterMenu';

export default function Footer() {
  return (
    <footer className="container flex flex-col gap-12 border-t border-t-border pb-9 pt-6 sm:flex-row sm:justify-between">
      <div>
        <h3 className="font-display text-6 font-semibold">
          <GradientText>Azlan Ahmad</GradientText>
        </h3>
        <a
          href="mailto:aahma232@uwo.ca"
          className="mb-4 block font-display text-4 font-medium text-secondary-foreground"
        >
          aahma232@uwo.ca
        </a>
        <SocialButtons />
      </div>
      <FooterMenu />
    </footer>
  );
}
