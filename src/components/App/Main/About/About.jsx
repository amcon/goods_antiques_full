import React from 'react';
import styles from './About.css';

const About = () => (
  <div className="about">
    <div className="about-text">
      <div className="about-description">
        <h1>Get to know the Goods</h1>
        <p>Our family has been working with antiques for over 25 years
        in the southwestern Wisconsin area and is proud to have opened
        our first storefront in East Troy. We believe antiques are uniquely
        crafted with quality, telling the history of a time, place and
        people. Each piece we uncover or refurbish highlights the integrity
        of that history. Our hope is that the piece you fall in love with
        becomes a focal point of a story in your home.
        <br/>
        <br/>
        Our story began when Christine Good brought home her very first
        antique trunk, purchased from Antiques on Main in East Troy. Her
        love for antiques inspired Tim Good, her husband, to find pieces
        and refurbish them. They decorated their home, trading and upgrading
        pieces. Antique-ing became a hobby of theirs and they began selling
        at local shows. Soon, they were teaching their kids, and later
        grandkids, the tricks of the trade, passing an appreciation for the
        furniture. We all love antiques for reasons that are personal,
        but the common thread is that they remind us of moments shared
        together.
        <br/>
        <br/>
        Just as we believe these memories will last forever, we stand
        behind craftsmanship and quality of antiques. Old growth wood is
        sturdy and cannot be reproduced. Original painted surfaces have
        withstood that test of time. These handcrafted pieces have been
        built with a care and precision that lasts. Your investment tells
        a story of the past, but it also can be passed down generations.
        </p>
      </div>
      <div className="about-meet">
        <h1>Meet the family</h1>
        <div className="family-member">
          <div className="family-photo" id="tom"></div>
          <div className="family-text">
            <h2 className="serif">Tom Good</h2>
            <p>I love the thrill of the find. I get to save a piece of
            our history from getting destroyed while traveling and meeting
            new people. The freedom to find antiques and not be on a
            schedule is fun. Every time I go somewhere, I get to learn
            something new. You can never know it all. It’s interesting to
            examining the craftsmanship before electricity was on the scene.
            That is woodworking.</p>
          </div>
        </div>
        <div className="family-member">
          <div className="family-text">
            <h2 className="serif">Steven Good</h2>
            <p>I love that you can learn so much about American furniture
            through antiques. They tell a story of the people and place.
            They share where people settled, when they migrated and how
            their culture evolved. I enjoy the unique craftsmanship,
            and I get to travel and explore history through each piece.
            </p>
          </div>
          <div className="family-photo" id="steven"></div>
        </div>
      </div>
    </div>
  </div>
)

export default About;
