BEGIN;

INSERT INTO "user" (email, password) VALUES ('goodsantiqueswisconsin@gmail.com', 'admin');

INSERT INTO product (name, description, price, sku, category, sold) VALUES ('Norweigian Blanket Chest', 'Mid-18th century or earlier blanket chest with hand forged ironwork and original lock. Fullboard, dovetailed case with pegged construction. Initial found in front. All iron straps are tight and intact. 26"H X 42"L X 20 1/2"D', '$1200', 'PRIM-0001', 'primitive', false);
INSERT INTO product (name, description, price, sku, category, sold) VALUES ('Mustard Dish Dresser', 'Early mustard dish cupboard. Retains its original paint, and wavy glass windows. Wooden knobs and bracket feet. From Manotowoc, WI. 46" W X 83" H X 19.25" D', '$1650', 'COUN-0001', 'country', false);

INSERT INTO image (url) VALUES ('primitive-01.jpg');
INSERT INTO image (url) VALUES ('primitive-01-sup-02.jpg');
INSERT INTO image (url) VALUES ('primitive-01-sup-03.jpg');
INSERT INTO image (url) VALUES ('primitive-01-sup-04.jpg');
INSERT INTO image (url) VALUES ('country-01.jpg');
INSERT INTO image (url) VALUES ('country-01-sup-02.jpg');

INSERT INTO image_product_ref (product_id, image_id) VALUES (1, 1);
INSERT INTO image_product_ref (product_id, image_id) VALUES (1, 2);
INSERT INTO image_product_ref (product_id, image_id) VALUES (1, 3);
INSERT INTO image_product_ref (product_id, image_id) VALUES (1, 4);
INSERT INTO image_product_ref (product_id, image_id) VALUES (2, 5);
INSERT INTO image_product_ref (product_id, image_id) VALUES (2, 6);

COMMIT;
