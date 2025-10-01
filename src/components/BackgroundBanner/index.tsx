import HeroBanner, { HeroBannerProps } from '../HeroBanner'

type BackgroundBannerProps = Pick<HeroBannerProps, 'backgroundImage'>

const BackgroundBanner = ({ backgroundImage }: BackgroundBannerProps) => {
  return <HeroBanner backgroundImage={backgroundImage} />
}

export default BackgroundBanner
