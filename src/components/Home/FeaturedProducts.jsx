import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  return (
    <section className='px-4 py-8 lg:py-16 bg-white dark:bg-gray-700'>
      <div className='max-w-screen-xl mx-auto '>
        <h2 className='text-xl md:text-2xl lg:text-3xl font-extrabold dark:text-white tracking-tight'>
          Featured Products
        </h2>

        <div>
          <ProductCard />
        </div>
      </div>
    </section>
  );
};
export default FeaturedProducts;
