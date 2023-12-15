// components
import { Navbar, HeroSection, FeaturedProducts } from '../components';

const Homepage = () => {
  return (
    <>
      <Navbar />
      <HeroSection
        title={'Buy iPhone 14 Pro'}
        subtitle={'Experience the power of the latest iPhone 14 with our most Pro camera ever'}
        url={
          'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907_Full-Bleed-Image.jpg.large.jpg'
        }
      />
      <FeaturedProducts />
      <HeroSection
        title={'Buy iPhone 15 Pro'}
        subtitle={'Apple unveils iPhone 15 Pro and iPhone 15 Pro Max - Apple'}
        url={
          'https://www.apple.com/newsroom/videos/iphone-15-pro-action-button/posters/Apple-iPhone-15-Pro-lineup-Action-button-230912.jpg.large_2x.jpg'
        }
      />
    </>
  );
};

export default Homepage;
