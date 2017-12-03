import React from 'react';
import styles from './Buy.css';

class Buy extends React.Component {
  render() {
    return(
      <div className="border-component">
        <div className="buy-page">
          <h1>MAKING A PURCHASE</h1>
          <p id="disclaimer">Thanks for your interest! Until Good's Antiques incorporates its e-commerce store (coming soon!), please simply:</p>
          <h2 className="serif">Email Us</h2>
          <p>Click <a target="_blank" href="mailto:goodsantiqueswisconsin@gmail.com?subject=I would like to purchase an item I viewed in your online gallery&body=Hello Good's Antiques,%0D%0A %0D%0AI'm interested in purchasing an item I viewed in your online gallery. %0D%0APlease get back to me as soon as possible.%0D%0A %0D%0A %0D%0A*My name: %0D%0A %0D%0A*My address is: %0D%0A %0D%0A*My phone number is: %0D%0A %0D%0A*Item name: %0D%0A %0D%0AAny questions/comments: %0D%0A %0D%0A %0D%0A %0D%0AThank you very much%0D%0ASigned,%0D%0A*">here </a>
          and fill out the generated email form.<br />Refer to the item in the previous tab for product information.
          Fill out the form as accurately as you can, and feel free to leave any additional questions or comments.</p>
          <h2 id="faq" className="serif">FREQUENTLY ASKED QUESTIONS:</h2>
          <h2 className="serif">Shipping Costs</h2>
          <p>When you purchase a piece from Goods Antiques, you purchase a one-of-a-kind item. We always suggest
          you pick up your piece or arrange delivery. If that is not possible, please give us a call to arrange
          delivery: 262-740-1416. Goods Antiques can refer you to a local, fedex or UPS shipper. Pricing varies
          based on location and packaging materials. We will ensure products are wrapped to prevent damage.</p>
          <h2 className="serif">Delivery</h2>
          <p>Delivery can be arranged. Depending upon location, we may suggest a small fee for gas and time.
          We deliver all across the country and we may just have a show or pick that will bring us your way!
          Please give us a call to arrange: 262-740-1416.</p>
          <h2 className="serif">Payment</h2>
          <p>We accept all major credit cards, and cash. All payments can be made over the phone or in store<br />
          As a retail business we must charge tax. When we travel to shows, we charge a local tax. Other fees may apply. </p>
          <h2 className="serif">Returns</h2>
          <p>We currently do not accept returns unless the item has been damaged on our end. Good's Antiques will not
          be responsible for return shipping rates</p>
        </div>
      </div>
    );
  }
}

export default Buy;
