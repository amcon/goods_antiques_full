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
        Our story began when Christine Good brought home here very first
        antique trunk, purchased from Antiques on Main in East Troy. Her
        love for antiques inspired Tim Good, her husband, to find pieces
        and refurbish them. They decorated their home, trading and upgrading
        pieces. Antique-ing became a hobby of theirs and they began selling
        at local shows. Soon, they were teaching their kids, and later
        grandkids, the trick of the trade, passing an appreciation for the
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
          <div className="family-photo" id="christine"></div>
          <div className="family-text">
            <h2 className="serif">Christine Good</h2>
            <p>I love the look and feel of antiques. The designs are unique
            and one-of-a-kind. I love that they provide this special sense
            of character to a home. They are inviting and give warmth to any
            room. It’s why I have loved decorating my home with them.
            </p>
          </div>
        </div>
        <div className="family-member">
          <div className="family-text">
            <h2 className="serif">Tim Good</h2>
            <p>I love finding the antiques and preserving their history.
            Over the years, I've learned about the pieces, the people who
            owned them, and how they were built. I enjoy reading about
            them and studying their design. I collect hardware, wood,
            knobs and more so that I can bring them back to their
            original state.</p>
          </div>
          <div className="family-photo" id="tim"></div>
        </div>
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
            culture their culture evolved. I enjoy the unique craftsmanship,
            and I get to travel and explore history through each piece.
            </p>
          </div>
          <div className="family-photo" id="steven"></div>
        </div>
        <div className="family-member">
          <div className="family-photo" id="kathy"></div>
          <div className="family-text">
            <h2 className="serif">Kathy (Good) Ritter</h2>
            <p>I loved growing up watching dad in the shop working on an
            antique he or mom found. He would share with me the history
            and details of the craftsmanship. Each piece had a story and
            I couldn’t wait to hear the next one. There began my love of
            antiques. The pieces I find and the people I meet make this
            journey special. I strive to give our salvaged pieces the same
            story as our antiques. Each reclaimed piece receives a new life.
            For me, being able to keep that alive in the pieces we work on
            and sell means the stories never have to end.
            </p>
          </div>
        </div>
        <div className="family-member">
          <div className="family-text">
            <h2 className="serif">Kristie Conklin</h2>
            <p>I love antiques because they tell a story, are made with
            quality, and were built for function. I found my very first
            antique with my uncle while digging holes in my grandparent's
            lawn in search of buried treasure. (I can’t believe I found
            something!!) Most of the antiques I own tell a story of time
            spent with family, an adventure, or a lesson learned. I also
            love them because they were built with the best wood by craftsmen
            who designed it with a purpose in mind. I see too many people my
            age spending money on particle board, which they throw in the
            garbage the moment it’s out of style. Antiques are unique, and
            if they no longer fit your life, you can resell them for,
            generally, more than what you paid.
            </p>
          </div>
          <div className="family-photo" id="kristie"></div>
        </div>
      </div>
    </div>
  </div>
)

export default About;
