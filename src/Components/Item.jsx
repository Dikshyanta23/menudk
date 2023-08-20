import React from 'react'

const Item = ({title, price, img, desc}) => {
  return (
    <article className="item">
      <img src={img} alt={title} className="img" />
      <div className="item-text">
        <div className="item-header">
          <h3>
            <strong>{title}</strong>
          </h3>
          <p className="price">£ {price}</p>
        </div>
        <p className="desc">{desc}</p>
      </div>
    </article>
  );
}

export default Item
