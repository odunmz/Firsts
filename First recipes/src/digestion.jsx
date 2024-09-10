import React, { useState } from "react";
import axios from "axios";

const Digestion = () => {
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
          When is the baby's digestive system complete?{" "}
        </h1>
        <div>
          The health of the child's digestive system is always the top concern
          of parents who are taking care of their children. A healthy digestive
          system is an important prerequisite for a child's comprehensive
          development.{" "}
        </div>
        <h3 className="text-green-600 my-4 font-serif text-lg">
          So when is the baby's digestive system complete?
        </h3>
        <div>
          The first years of life are the time when a baby's digestive system is
          perfect in both structure and function. However, the nutritional and
          energy needs of children are very high, not synchronized with the
          physiological function of the digestive system. Therefore,
          understanding when a baby's digestive system matures and the
          characteristics of each stage of development will help parents prevent
          possible digestive problems for their baby. The complete digestive
          system is an extremely closely linked chain including: mouth,
          esophagus, stomach, intestines, liver and pancreas, each of which
          plays an indispensable role. for the overall development of the
          digestive system.
        </div>
        <h3 className="text-green-600 my-4 font-serif text-lg"> Mouth </h3>
        <div>
          {" "}
          The jaw structure of a newborn is not yet complete, the mouth of a
          baby is small, but the tongue is quite wide compared to the mouth, the
          tongue spines develop to help the baby suckle better at the mother's
          breast. The mucosal area of ​​the child's oral cavity is quite thin,
          with many blood vessels, so it is very susceptible to injury, fungal
          and bacterial infections, mothers should clean the child's oral cavity
          regularly. The salivary glands in babies have to wait until 3 to 4
          months to complete, so the best food at this stage is breast milk or
          formula. Children 4-6 months often have physiological salivation
          because the tooth germ stimulates the V nerve. In the saliva contains
          starch-digesting enzymes: amylase, mantase..., the activity of these
          enzymes will gradually increase. by age. When a baby is born without
          teeth, baby teeth will start to erupt from the 4th to 6th month and
          end in the 24th to 30th month when all 20 teeth have erupted. By 1
          year of age, the structure of the oral cavity of the child is almost
          complete. When a child is 6 years old, the permanent teeth will begin
          to grow and gradually replace the baby teeth.
        </div>
        <h3 className="text-green-600 my-4 font-serif text-lg"> Oesophagus</h3>
        <div>
          The Oesophagus of a newborn baby has a funnel-shaped structure with a
          very thin wall, and the muscles are still quite weak, so babies often
          vomit. According to the developmental age, the esophageal length will
          have a change in size to reach the complete adult length: Newborn: 10
          - 11 cm 1 year old: 12 cm 5 years old: 16 cm 10 years old: 18 cm 15
          years old: 20 cm Adult: 25 – 32 cm
        </div>
        <h3 className="text-green-600 my-4 font-serif text-lg">Stomach</h3>
        <div>
          Stomach In infants and young children, the stomach is usually round,
          horizontal, and relatively tall. The muscular organization of young
          children is weakly developed, especially the gastric sphincter, so the
          stomach is easily deformed after eating, while the pyloric sphincter
          is well developed (closes more tightly than the gastric spasm). It is
          very easy to vomit after eating too much, especially in the first 6
          months of life. Over time, the child's digestive system will gradually
          improve, but how long it takes depends on each child, some children's
          digestive systems at 3 months old have basically completed, some
          children 6 months, 12 months. .. In order to avoid milk reflux because
          the gastric sphincter does not close tightly when the stomach
          contracts to expel milk into the small intestine, the mother should
          put the baby's head up after feeding, divide the feeding (meals of the
          child) should be spaced from 2.5 to 3 hours), avoid stomach too full,
          avoid forcing babies to suckle continuously. When the baby is 1 year
          old, instead of being horizontal like in infancy, the baby's stomach
          starts to stand vertically from the age of a toddler and has an
          elongated oblong shape. From the age of 2 onwards, the stomach
          structure has developed and become more complete, almost similar to
          the stomach of an adult.
        </div>
        <h3 className="text-green-600 my-4 font-serif text-lg">Intestinal</h3>
        <div>
          In fact, the intestines of children are usually longer than the
          intestines of adults, when a child is 6 months old, the child's large
          intestine is 6 times longer than the body, while the length of the
          large intestine in adults is only 4 times the height. Characteristics
          of the child's intestines are that the gastrointestinal tract is quite
          large, the intestinal wall in children is very thin, the vascular
          system is many and high permeability, so even in the first years of
          life when the intestinal system is gradually completing Parents need
          to take good care of the digestive system to take advantage of the
          fast absorption capacity of the intestine, avoid infection due to the
          loose connection between intestinal epithelial cells, which cannot
          prevent bacteria. harmful. The child's mesentery is quite long, the
          short cecum is easy to move, so the intestines are often twisted. In
          young children, especially children under 1 year of age, the appendix
          is ​​not fixed, often located behind the cecum, so the diagnosis of
          appendicitis in children is difficult. The child's rectum is quite
          long, the muscles are weak and the mucosa is loose, so it is easy to
          prolapse when coughing a lot, pushing a lot. After the child is 7
          years old or older, the child's digestive system has completed and is
          almost similar to adults in both anatomy and physiology, especially
          the intestinal microflora.
        </div>
        <h3 className="text-green-600 my-4 font-serif text-lg">Pancreas</h3>
        <div>
          Pancreas is an organ that secretes a number of digestive enzymes such
          as Trypsin, Lipase, Amylase, which helps children convert proteins,
          fats, sugars, micronutrients... from complex molecular form to simple
          molecular form. absorbed through the intestinal membrane. In the first
          years of a child's life, the pancreas' function is not yet complete,
          so breast milk is the only source of nutrition that is suitable for
          the absorption characteristics of the baby's body.
        </div>
        <h3 className="text-green-600 my-4 font-serif text-lg"> Liver</h3>
        <div>
          The size of a newborn's liver is quite large, accounting for 4.4% of
          the body weight, containing many blood vessels, but the liver cells
          are not fully developed. Besides digestive enzymes from the pancreas,
          bile secretion from the liver also plays a significant part in the
          breakdown of complex compounds in food into simple and easily absorbed
          molecules. Food will be digested in the intestines thanks to the
          effect of digestive enzymes present in intestinal juice, pancreatic
          juice, bile... however, the content of these enzymes in children is
          always lower than in adults, so children are very susceptible to
          illness. digestive disorders and malabsorption.
        </div>
        <div className="my-4">
          Take good care of your child's incomplete digestive system Children's
          digestive system has not yet matured, so symptoms such as flatulence,
          constipation, vomiting, diarrhea, indigestion... are very common, if
          you know how to examine your child's digestive system at home. Parents
          can completely become "personal doctors" to help children overcome and
          perfect the immature digestive system.
        </div>
        <h3 className="text-green-600 my-4 font-serif text-lg">
          Taking care of the digestive system of children under 6 months of age{" "}
        </h3>
        <div>
          Mothers need to try to breastfeed their babies right after birth,
          within 1 hour to stimulate milk secretion. Colostrum will help babies
          prevent infections in the newborn period, help them excrete stools
          quickly and improve jaundice. How to breastfeed will determine whether
          the baby is getting enough or not, it is necessary to feed the baby
          according to the baby's needs and stomach capacity, so let the baby
          empty one breast before transferring so that the baby can receive a
          rich amount of milk. fat. Babies need to be exclusively breastfed for
          the first 6 months, do not give them any food or drink, including
          white water. The digestive system in formula-fed babies is often much
          worse than breast-fed babies and has a higher risk of gastrointestinal
          diseases.
        </div>
        <h3 className="text-green-600 my-4 font-serif text-lg">
          Taking care of the digestive system of children from 6-24 months old
        </h3>
        <div>
          Children from 6-24 months old, breast milk is still the main source of
          food and meets most of their energy needs, so it is necessary to
          continue breastfeeding. lasts until the child is 2 years old, and at
          the same time begins to introduce solid foods when the child turns 6
          months. The time to start weaning is when the child turns 6 months old
          because at this age children have an interest in eating, teeth also
          begin to grow, know how to use the tongue to turn food and use the jaw
          to chew. Your baby's digestive system has begun to be able to digest
          solid foods. Children's weaning foods need to be diverse, meet the
          needs of physical, mental and brain development, and have 4 groups:
          starch, protein, fat, vitamins and minerals. The number of meals and
          the amount of food in each meal should gradually increase with age to
          match the growing stomach capacity of the child. During this period,
          children should drink more boiled and cooled water about
          400-600ml/day. Gently massage the baby's abdomen to stimulate bowel
          movements, give the child more fruits (oranges, papaya, dragon
          fruit...), vegetables to supplement fiber, practice the habit of
          defecation on time, do not hold bowel movements. In general, the
          digestive system characteristics of children have many differences
          compared to adults. Knowing these characteristics will help parents
          easily arrange appropriate nutrition as well as detect abnormal
          digestive problems in children early. For children to be healthy and
          develop well, it is necessary to have a nutritious diet in terms of
          quantity and quality balance. If children are not provided with
          adequate and balanced nutrients, it will lead to diseases of excess or
          lack of nutrients, which adversely affect the comprehensive
          development of children in terms of physical, mental and motor skills.
          Children who do not eat properly are at risk of micro-mineral
          deficiency causing anorexia, growth retardation, malabsorption,... If
          they notice the above signs, parents should supplement their children
          with products. The supplement contains lysine, essential
          micro-minerals and vitamins such as zinc, chromium, selenium, and B
          vitamins to help fully meet the nutritional needs of children. At the
          same time, these essential vitamins also support digestion, enhance
          nutrient absorption, help improve anorexia, and help children eat
          well.
        </div>
      </div>
    </>
  );
};

export default Digestion;
