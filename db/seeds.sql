BEGIN;

INSERT INTO product (name, description, price, sku, category, sold, main_img, sup_img_1, sup_img_2, sup_img_3) VALUES ('Norweigian Blanket Chest', 'Mid-18th century or earlier blanket chest with hand forged ironwork and original lock. Fullboard, dovetailed case with pegged construction. Initial found in front. All iron straps are tight and intact. 26"H X 42"L X 20 1/2"D', '$1200', 'PRIM-0001', 'primitive', false, 'primitive-01.jpg', 'primitive-01-sup-02.jpg', 'primitive-01-sup-03.jpg', 'primitive-01-sup-04.jpg');
INSERT INTO product (name, description, price, sku, category, sold, main_img, sup_img_1) VALUES ('Mustard Dish Dresser', 'Early mustard dish cupboard. Retains its original paint, and wavy glass windows. Wooden knobs and bracket feet. From Manotowoc, WI. 46" W X 83" H X 19.25" D', '$1650', 'COUN-0001', 'country', false, 'country-01.jpg', 'country-01-sup-02.jpg');

INSERT INTO show (name, show_date, venue, location, website, current) VALUES ('Elkhorn Flea Market', 'Sunday, Aug 13', 'Walworth County Fairgrounds', 'Elkhorn, WI', 'http://www.walworthcountyfair.com/p/events/290', true);
INSERT INTO show (name, show_date, venue, location, website, current) VALUES ('Elkhorn Flea Market', 'Sunday, Jun 25', 'Walworth County Fairgrounds', 'Elkhorn, WI', 'http://www.walworthcountyfair.com/p/events/290', false);

COMMIT;
