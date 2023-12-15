const ProductCard = () => {
  return (
    <article className='product-card'>
      <div className='product-image'>
        <a href=''>
          <img src='' alt='' />
        </a>
      </div>
      <div className='product-details'>
        <h3 className='product-price'>$999</h3>
        <div className='product-title'>iPhone 14 Pro</div>

        <footer className='product-info'>
          <div className='items-center'>
            <p className='product-rating'>
              <span>
                <img src='' alt='' />
              </span>
              <span>120</span>
            </p>
            <p className='product-review-count'>120</p>
          </div>
          <button className='add-to-cart'>
            <img src='' alt='basket icon' />
          </button>
        </footer>
      </div>
    </article>
  );
};
export default ProductCard;
