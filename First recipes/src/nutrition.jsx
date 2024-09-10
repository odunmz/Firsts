import React, { useState } from "react";
import axios from "axios";
import { List } from "flowbite-react";

const Nutrition = () => {
  return (
    <>
      <div
        className=" mx-96"
        style={{
          width: "50%",
          alignItems: "center",
          justifyItems: "center",

          display: "block",
        }}
      >
        <h1 className="text-3xl  text-green-600 my-8  ">
          Nutritional Needs of Babies: the First 12 Months
        </h1>
        <div className="">
          New parents always have a lot on their minds, including serving up the
          best foods for their babies. The happy news is that it’s pretty easy
          to provide the nutrients babies need once you learn what they are.
        </div>
        <div>
          <List className="text-black my-4 font-serif mx-8">
            <List.Item>How much should babies eat?</List.Item>
            <List.Item>How much should a 0- to 6-month-old baby eat?</List.Item>
            <List.Item>
              How much should a 7- to 12-month-old baby eat?
            </List.Item>
            <List.Item>
              What are the most important nutrients in a baby’s diet?
            </List.Item>
            <List.Item>
              What should you do if you think your baby’s not eating enough?
            </List.Item>
          </List>
        </div>
        <div className="">
          For their first six months or so, babies get all the nutrients they
          need to thrive from breast milk and/or formula. Considering how
          dizzying those early days are, it’s a big relief knowing that — at
          least when it comes to feeding your baby — you’re pretty much covered.
          But that’s exactly why making the transition to solids can feel so
          daunting. Although breast milk and/or formula will continue to be the
          main sources of your child’s nutrition through the first 12 months,
          you’ll gradually be serving up more and more nutrients in the form of
          solid foods. How to Bathe Your Newborn Baby As a result, you may be
          feeling the pressure to decide which foods to serve your baby and make
          sure she’s eating them, too — something that’s not always easy to do
          if your little one has a less-than-stellar appetite.
        </div>
        <h3 className="text-green-600 my-4 font-serif text-lg">
          How much should babies eat?
        </h3>
        <div>
          When it comes to solid foods, some babies eat all the time, some eat
          very little most of the time and others eat like a mouse one day and a
          horse the next. Some babies are varied and adventurous eaters (maniacs
          for meat, voracious for veggies), others are particularly picky. When
          presented with a wide variety of wholesome foods and allowed to follow
          their appetites, almost all healthy babies eat as much as they need to
          grow and thrive. As long as your little one is growing at a healthy
          rate, along her personal growth curve — and your doctor will let you
          know if she isn’t — she’s likely getting all the nutrition she needs.
          Don’t worry about keeping a running tab, or cramming a certain number
          of servings of each food group into your baby’s mouth every day. Not
          only is that a sure way to drive yourself crazy, it’s bound to set the
          stage for food squabbles in the high chair and, later, at the table.
          Read This Next introducing solids Baby Feeding shopping cart safety
          Can You Put a Car Seat in a Shopping Cart? baby What Does It Mean if
          My Baby's Bigger Than Average? Instead, take a big-picture view —
          whether your little one is eating enough over the course of a few
          days, for example, rather than whether she’s eating enough at one
          meal. As you introduce more and more foods into your baby’s
          repertoire, resist the urge to push, measure or count servings, and
          instead aim for a mix of good-for-baby-foods.
        </div>
        <h3 className="text-green-600 my-4 font-serif text-lg">
          How much should a 0-to 6-month-old baby eat?
        </h3>
        <div>
          In the first six months, breast milk and/or formula will provide all
          of your child's nutritional needs. During that time, some babies eat
          more than others, while some little ones are grazers, content with
          eating less, more often. In general, however, babies drink more — and
          go longer stretches without eating — the older they get, increasing
          their amounts of liquid by about 1 ounce each month until they reach
          about 7 to 8 ounces of breast milk or formula per feeding. Still,
          don’t stress about the numbers. A baby who is growing at a healthy
          rate is likely getting enough to eat. Every child is different, but a
          feeding schedule for a newborn to 6-month-old baby may look something
          like this: Newborns tend to eat 2 to 3 ounces of breast milk or
          formula at a time every two to three hours a day (though it may be
          hard to know how many ounces your baby is eating if you’re
          breastfeeding). 1-month-olds may be eating about 3 to 4 ounces every
          two to four hours a day. 2-month-olds may consume 4 to 5 ounces of
          breast milk or formula every three to four hours a day. 3-month-olds
          may consume about 4 to 5 ounces of breast milk or formula every three
          to four hours. 4-month-olds usually consume 4 to 6 ounces of breast
          milk or formula every four to five hours a day. (Experts generally
          recommend waiting until 6 months to start solids, but if your
          pediatrician says your child is ready to start sampling solid foods
          around the 4-month mark, stick to 1 tablespoon no more than twice a
          day.) 5-month-olds may be eating 6 to 7 ounces of breast milk or
          formula every four to five hours a day. 6-month-olds can eat 7 to 8
          ounces of breast milk or formula every four to five hours a day, as
          well as 1 to 9 tablespoons of solids such as cereals, fruits and
          vegetables. If you're opting to start solids through a baby-led
          weaning approach, you'll introduce these foods after the 6-month mark
          in the form of soft, gummable finger foods instead of purées.
        </div>
        <h3 className="text-green-600 my-4 font-serif text-lg">
          How much should a 7- to 12-month-old baby eat?
        </h3>
        <div>
          By the time babies are 7 months old, many little ones are
          developmentally ready to sleep through the night without a feeding.
          (Of course, the decision to drop night feedings is entirely up to you,
          and you should always get the green light from your pediatrician
          before you start night weaning.) Between 7 months and 1 year, babies
          are still getting the vast majority of their calories and nutrients
          from breast milk and/or formula, but they’ll also be trying their
          hands — and later, pincer grasps — at solids. Here’s a breakdown of
          what your little one might eat from age 7 months to 1 year. Keep in
          mind that diets and frequency vary from baby to baby. 7- and
          8-month-olds may be eating about 24 to 36 ounces of breast milk or
          formula each day (four to six nursing sessions, if you're
          breastfeeding), plus 4 to 9 tablespoons of cereal, fruit and
          vegetables daily as well as 1 to 6 tablespoons of meat/proteins. 9- to
          10-month-olds may be eating about 24 to 30 ounces of breast milk
          and/or formula a day (three to five nursing sessions, if you're
          breastfeeding), along with 1/4 to 1/2 cup each of grains, fruit,
          vegetables, dairy products and meat/protein foods. 11-month-olds may
          be taking 16 to 24 ounces a day of breast milk or formula a day (three
          to five nursing sessions, if you're breastfeeding), though their diet
          will include more solids: 1/4 to 1/2 cup each of grains, fruit,
          vegetables, dairy products and meat/protein foods. 12-month-olds may
          be taking up to 24 ounces a day of breast milk or formula (three to
          five nursing sessions, if you're breastfeeding), though many will
          start weaning from the bottle or breast around now and start drinking
          cow’s milk. In addition, they'll eat 1/4 to 1/2 cup each of grains,
          fruit, vegetables, dairy products and meat/protein foods.
        </div>

        <h3 className="text-green-600 my-4 font-serif text-lg">
          What are the most important nutrients in a baby’s diet?
        </h3>
        <div>
          There’s no suchthing as an “unimportant” nutrient — but some will play
          a bigger role in your baby’s diet than others. Here are the nutrients
          that your growing baby needs to thrive. (When serving the foods below,
          make sure to offer them in age-appropriate preparations, introduce
          just one new food at a time and watch closely for signs of an allergic
          reaction when baby first samples common allergens like nuts, dairy and
          wheat.) Protein. Baby’s still getting most of the protein she needs
          from breast milk and/or formula. But since that picture may change
          once those first birthday candles are blown out, now’s a good time for
          your little one to start sampling other protein-packed foods,
          including eggs, meat, chicken, fish and tofu. Calcium-rich foods
          (especially whole milk cottage cheese and ricotta), and some grains
          can also provide protein. Calcium. Both breast milk and formula
          provide all the calcium your baby needs for the first year.
          Baby-friendly, calcium-rich foods such as whole milk cheese (cheddar,
          muenster, Havarti, baby Swiss, Colby or Monterey Jack, for example)
          and whole milk yogurt, ricotta and cottage cheese are yummy,
          nutritious additions. Plus, they also add protein. Whole grains and
          complex carbohydrates. These high chair favorites will add essential
          vitamins and minerals, as well as some protein, to baby’s daily
          intake. Good options, as they’re introduced, include whole-grain
          bread, whole-grain cereal (baby cereal for spoon-feeding, bite-size
          cereal for self-feeding), whole-grain pasta (bite-size is typically a
          big hit), brown rice or quinoa, lentils, beans and peas. Vitamins A,
          B, C and E. These four vitamins boost your baby from top to bottom,
          promoting healthy brain and nerve development, as well as proper
          functioning and development of the eyes, skin and immune system. The
          secret to getting them into your little one’s diet: Feed her the
          rainbow! Carrots and sweet potatoes are loaded with vitamin A; green
          veggies, bananas and beans are packed with B vitamins; tomatoes,
          strawberries and cantaloupe are full of C; and cereal and grains are
          rich in E. High-fat foods. Babies who get most of their calories from
          breast milk and/or formula get all the fat and cholesterol they need.
          As they switch to a more varied diet and spend less time breastfeeding
          or bottle-feeding, it’s important to make sure that fat and
          cholesterol intake don’t dip too low. That’s why most dairy products
          you serve baby (cottage cheese, yogurt, hard cheese) should be
          full-fat or made from whole milk. You can also add a healthy dose of
          fat by serving avocado, or cooking with canola or olive oil. Iron.
          Bottle-fed babies get their full share of iron from fortified formula,
          but breastfed babies need another source. Starting when your baby is 4
          months old, ask your pediatrician if you should give her a liquid iron
          supplement until you start adding iron-rich solids to her diet.
          Fortified baby cereal can fit the bill easily, and additional iron can
          come from iron-rich foods such as meat, egg yolks, wheat germ, whole
          grain breads and cereals, cooked dried peas and other legumes as they
          are introduced into the diet. Omega-3 fatty acids. Part of the family
          of essential fatty acids, omega-3s (including DHA), are vital for your
          infant’s growth, vision and optimal brain development — more than
          living up to their headline-making reputation as baby brain food.
          These fabulous fats are served up naturally in breast milk, but also
          are used to enrich some formulas and baby foods. Once baby’s eating
          repertoire expands, you can add other foods high in omega-3 fatty
          acids, such as fish (like salmon), grass-fed meat, tofu, flaxseed,
          canola oil and DHA-enriched yogurt, cereal and eggs. Fluids. During
          the first six months of life, virtually all of a baby’s fluids come
          from bottle or breast — no supplementary water is usually needed. But
          once baby starts solids around 6 months of age, small amounts will
          start to come from other sources, including sips of water with meals,
          and juicy fruits and vegetables. As formula or breast milk intake
          begins to decrease, it’s important to be sure that the total fluid
          intake doesn’t. In hot weather, it should increase, so offer water
          when temperatures soar. Remember, don’t worry about serving sizes or
          numbers of servings. Instead, provide a variety of good-for-baby foods
          and a fun, relaxed mealtime atmosphere. Then sit back and watch the
          healthy eating happen… and a future of healthy eating habits take
          shape. What should you do if you think your baby’s not eating enough?
          As long as your little one is continuing to grow at a healthy rate —
          read: along her own personal growth curve (not those of your friends’
          babies), which your pediatrician will measure using a growth chart —
          she’s probably getting enough to eat. Still, if you suspect your baby
          isn’t eating enough, talk to your child’s doctor, who can evaluate her
          further or refer you to a nutritionist or feeding center.
        </div>

        <div>
          <h3 className="text-green-600 my-4 font-serif text-lg">
            TIPS FOR TODDLER MEALS
          </h3>
          <h3 className="text-green-600 my-4 font-serif text-lg">
            Keep on Serving the Healthy Food:{" "}
          </h3>
          Toddlers are known to be finicky, so whether they eat the entire
          portion of fruits or veggies, take one itsy-bitsy bite or refuse to
          even look at it, at this age it’s all about exposure. Keep on serving
          the colorful and healthy foods alongside foods you know they will eat
          and enjoy, and one day they will surprise you with how much they eat
          of food they hated the day before.
          <h3 className="text-green-600 my-4 font-serif text-lg">
            Nutrition is a Long Term Goal:
          </h3>
          Instead of thinking of each meal as the perfectly portioned and
          balanced meal, think instead of how a toddler’s overall week of eating
          looks like. For some meals, you may not have time to add in veggies or
          fruit and that’s okay if you serve them at a different meal.
          <p>
            {" "}
            What my Kids Ate: I made all of these meals for my toddlers and some
            of them they loved and some of them my toddler took one bite and
            then proceeded to have a meltdown because I gave them the wrong
            color of spoon. Again, toddlers are finicky about everything in
            life. These meals are just here to give you some inspiration and
            guidance of what I fed my little ones, now whether they eat them or
            not is another story.
          </p>
          <h3 className="text-green-600 my-4 font-serif text-lg">
            Meals Can be Customized:
          </h3>
          These meals are pretty open-ended and can be made gluten-free,
          dairy-free, vegan or vegetarian by switching out some of the
          ingredients. If you need help, comment below and I can help you figure
          out how to make it acceptable for any diet. Cut Food
          Age-Appropriately: the pictures below are for my 3-year-old. If you
          are going to serve the same foods to a younger toddler, you may have
          to cut the foods shown into small pieces to avoid choking risks.
        </div>
      </div>
    </>
  );
};
export default Nutrition;
