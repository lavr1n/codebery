import { useState } from 'react'
import './Content.css'

export default function Content() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: 'Пример товара',
      brand: 'CodeBery',
      price: 1990,
      oldPrice: 2490,
      rating: 5,
      reviews: 0,
      image: '/minecraft.svg'
    }
  ])

  return (
    <main className="catalog">
      {products.length === 0 && <p className="emptyState">Карточек пока нет.</p>}

      <div className="cardsGrid">
        {products.map((product) => (
          <article key={product.id} className="productCard">
            <div className="cardImageWrap">
              <img src={product.image} alt={product.title} className="cardImage" />
            </div>
            <p className="cardPrice">{product.price} som</p>
            <p className="cardOldPrice">{product.oldPrice} som</p>
            <p className="cardTitle">{product.title}</p>
            <p className="cardMeta">{product.brand}</p>
            <p className="cardRating">{"★".repeat(5)} {product.rating} ({product.reviews})</p>
            <button className="buyBtn" type="button">Buy</button>
          </article>
        ))}
      </div>
    </main>
  )
}