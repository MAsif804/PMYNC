const productsList = [
  {
    slug: "amla-reetha-shikakai-shampoo",
    title: "Amla Reetha Shikakai Hair Repair Shampoo",
    thumbnail: "/shampoos-1/1.png",
    company: "The Pureness",
    images: [
      "/shampoos-1/1.png",
      "/shampoos-1/2.png",
      "/shampoos-1/3.png",
      "/shampoos-1/4.png",
      "/shampoos-1/5.png",
      "/shampoos-1/6.png",
      "/shampoos-1/7.png",
    ],
    benefite: "/shampoos-1/0.png",
    video: "/shampoos-1/Shampoo-1.mp4",
    totalReviews: 6,
    avgRating: 4,
    quantity: "300 ml",
    description: (
      <div className="flex flex-col items-start gap-[16px] lg:gap-[32px]">
        {/* Benefits */}
        <div className="flex flex-col items-start gap-[16px] lg:gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[24px] lg:text-[32px] font-medium leading-normal">
            Benefits
          </h2>
          <ul className="flex flex-col list-disc items-start gap-[16px] ">
            <li className="text-black ml-[22px]  font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
              Nourish & Moisturize the hairs with deep cleansing
            </li>
            <li className="text-black ml-[22px]  font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
              Protect hair damaged, Prevent hair loss
            </li>
            <li className="text-black ml-[22px]  font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
              Give shiny and smooth texture
            </li>
            <li className="text-black ml-[22px]  font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
              Control frizz and split ends
            </li>
            <li className="text-black ml-[22px]  font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
              Control dryness and excess oil on scalp
            </li>
            <li className="text-black ml-[22px]  font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
              Promote hair growth
            </li>
            <li className="text-black ml-[22px]  font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
              Unclogged the clogged pores
            </li>
          </ul>
        </div>
        {/* usuage */}
        <div className="flex flex-col items-start gap-[16px] lg:gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[24px] lg:text-[32px] font-medium leading-normal">
            Usuage
          </h2>
          <div className="flex flex-col items-start gap-[16px]">
            <p className="text-black font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
              Apply a small amount onto a wet scalp, work into a lather and
              distribute it to the rest of the hair
            </p>
            <p className="text-black font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
              Massage into hair for two minutes and then rinse with water
            </p>
            <p className="text-black font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
              For best results, use the thepureness PureCreamy Conditioner after
              shampooing your hair
            </p>
          </div>
        </div>
        {/* caution */}
        <div className="flex flex-col items-start gap-[16px] lg:gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[24px] lg:text-[32px] font-medium leading-normal">
            Caution
          </h2>
          <div className="flex flex-col items-start gap-[16px]">
            <p className="text-black font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
              For External Use only.
            </p>
            <p className="text-black font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
              If contact with eyes occurs, rinse immediately with water.
            </p>
            <p className="text-black font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
              If irritation persist, see a doctor.
            </p>
            <p className="text-black font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
              Keep out of reach of children.
            </p>
            <p className="text-black font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
              Store in a dry room temperature not above 30 C.
            </p>
          </div>
        </div>
        {/* ingredients */}
        <div className="flex flex-col items-start gap-[16px] lg:gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[24px] lg:text-[32px] font-medium leading-normal">
            Ingredients
          </h2>
          <p className="text-black font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
            Aqua, Cocobetain, Polyquarternium 7, Pearl liquid, Amla, Reetha and
            Shikakai Oil, Amla water, Phenoxyethanol, Xanthan gum, Vegetable
            glycerin & Dierhanolamine.
          </p>
        </div>
        {/* this product is */}
        <div className="flex flex-col items-start gap-[16px] lg:gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[24px] lg:text-[32px] font-medium leading-normal">
            This product is:
          </h2>
          <p className="text-black font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
            Artificial Color Free, Cruelty Free, Paraben Free, Sulphate Free,
            Vegan, Halal
          </p>
        </div>
      </div>
    ),
    recommendedProducts: [
      "kid-2-in-1-shampoo-and-conditioner",
      "go-grey-hair-anti-aging-hair-oil",
      "biotin-hair-serum-control-hair-fall",
      "coconut-milk-hair-frizz-control-shampoo",
    ],
    categories: ["shampoo", "new-arrival"],
    price: "2,400.00",
  },
  {
    slug: "kids-2-in-1-shampoo-conditioner",
    title: "Kids 2 In 1 Shampoo & Conditioner",
    thumbnail: "/shampoos-kids/2.png",
    company: "The Pureness",
    images: [
      "/shampoos-kids/2.png",
      "/shampoos-kids/3.png",
      "/shampoos-kids/1.png",
      "/shampoos-kids/4.png",
      "/shampoos-kids/5.png",
      "/shampoos-kids/6.png",
      "/shampoos-kids/7.png",
    ],
    benefite: "/shampoos-kids/0.png",
    video: "/shampoos-kids/kids-1.mp4",
    totalReviews: 6,
    avgRating: 4,
    quantity: "300 ml",
    description: (
      <div className="flex flex-col items-start gap-[16px] lg:gap-[32px]">
        {/* Benefits */}
        <div className="flex flex-col items-start gap-[16px] lg:gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[24px] lg:text-[32px] font-medium leading-normal">
            Benefits
          </h2>
          <p className="text-black font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
            KIDS shampoo is formulated because Kids exposure to external
            environments causes sweat and impurities to build up on scalp, and
            thickening hair volume makes kids hair tangle often but kids scalp
            is weaker than that of adults. That’s why you need kids-tailored
            ingredients for scalp and hair care customized for children.
          </p>
        </div>
        {/* usuage */}
        <div className="flex flex-col items-start gap-[16px] lg:gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[24px] lg:text-[32px] font-medium leading-normal">
            Usuage
          </h2>
          <ul className="flex flex-col list-disc items-start gap-[16px]">
            <li className="text-black font-poppins ml-[22px] text-[16px] lg:text-[20px] font-light leading-normal">
              Apply a small amount onto a wet scalp, work into a lather and
              distribute it to the rest of the hair
            </li>
            <li className="text-black font-poppins ml-[22px] text-[16px] lg:text-[20px] font-light leading-normal">
              Massage into hair for two minutes and then rinse with water
            </li>
          </ul>
        </div>
        {/* caution */}
        <div className="flex flex-col items-start gap-[16px] lg:gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[24px] lg:text-[32px] font-medium leading-normal">
            Caution
          </h2>
          <div className="flex flex-col items-start gap-[16px]">
            <p className="text-black font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
              For External Use only.
            </p>
            <p className="text-black font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
              If contact with eyes occurs, rinse immediately with water.
            </p>
            <p className="text-black font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
              If irritation persist, see a doctor.
            </p>
            <p className="text-black font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
              Keep out of reach of children.
            </p>
            <p className="text-black font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
              Store in a dry room temperature not above 30 C.
            </p>
          </div>
        </div>
        {/* ingredients */}
        <div className="flex flex-col items-start gap-[16px] lg:gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[24px] lg:text-[32px] font-medium leading-normal">
            Ingredients
          </h2>
          <p className="text-black font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
            Aqua, Cocobetain, Polyquarternium 7, Pearl liquid, Amla, Reetha and
            Shikakai Oil, Amla water, Phenoxyethanol, Xanthan gum, Vegetable
            glycerin & Dierhanolamine.
          </p>
        </div>
        {/* this product is */}
        <div className="flex flex-col items-start gap-[16px] lg:gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[24px] lg:text-[32px] font-medium leading-normal">
            This product is:
          </h2>
          <p className="text-black font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
            Tear Free, Paraben Free, Sulfhate Free
          </p>
        </div>
      </div>
    ),
    recommendedProducts: [
      "kid-2-in-1-shampoo-and-conditioner",
      "go-grey-hair-anti-aging-hair-oil",
      "biotin-hair-serum-control-hair-fall",
      "coconut-milk-hair-frizz-control-shampoo",
    ],
    categories: ["shampoo", "conditioner", "new-arrival"],
    price: "2,500.00",
  },
  {
    slug: "pure-blend-hair-grow-shampoo",
    title: "Pure Blend Hair Grow Shampoo",
    thumbnail: "/shampoos-3/1.png",
    company: "The Pureness",
    images: [
      "/shampoos-3/1.png",
      "/shampoos-3/2.png",
      "/shampoos-3/3.png",
      "/shampoos-3/4.png",
      "/shampoos-3/5.png",
      "/shampoos-3/6.png",
      "/shampoos-3/7.png",
    ],
    benefite: "/shampoos-3/0.png",
    video: "/shampoos-3/2.mp4",
    totalReviews: 6,
    avgRating: 4,
    quantity: "300 ml",
    description: (
      <div className="flex flex-col items-start gap-[16px] lg:gap-[32px]">
        {/* Benefits */}
        <div className="flex flex-col items-start gap-[16px] lg:gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[24px] lg:text-[32px] font-medium leading-normal">
            Benefits
          </h2>
          <ul className="flex flex-col list-disc items-start gap-[16px]">
            <li className="text-black font-poppins ml-[22px] text-[16px] lg:text-[20px] font-light leading-normal">
              Rosemary and Fenugreek oil with 12 rich ingredients when combined
              offer numerous benefits for hair health.
            </li>
            <li className="text-black font-poppins ml-[22px] text-[16px] lg:text-[20px] font-light leading-normal">
              Strengthening hair follicles.
            </li>
            <li className="text-black font-poppins ml-[22px] text-[16px] lg:text-[20px] font-light leading-normal">
              Rosemary is known for its ability to stimulate blood circulation
              and nourish hair follicles, while fenugreek provides essential
              nutrients like iron and protein, and may also help with hair
              growth and thickness.
            </li>
            <li className="text-black font-poppins ml-[22px] text-[16px] lg:text-[20px] font-light leading-normal">
              Reduce hair fall.
            </li>
            <li className="text-black font-poppins ml-[22px] text-[16px] lg:text-[20px] font-light leading-normal">
              Promote hair growth.
            </li>
            <li className="text-black font-poppins ml-[22px] text-[16px] lg:text-[20px] font-light leading-normal">
              Give shiny and smooth texture
            </li>
            <li className="text-black font-poppins ml-[22px] text-[16px] lg:text-[20px] font-light leading-normal">
              Control frizz and split ends
            </li>
            <li className="text-black font-poppins ml-[22px] text-[16px] lg:text-[20px] font-light leading-normal">
              Control dryness and excess oil on scalp
            </li>
          </ul>
        </div>
        {/* usuage */}
        <div className="flex flex-col items-start gap-[16px] lg:gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[24px] lg:text-[32px] font-medium leading-normal">
            Usuage
          </h2>
          <ul className="flex flex-col list-disc items-start gap-[16px]">
            <li className="text-black font-poppins ml-[22px] text-[16px] lg:text-[20px] font-light leading-normal">
              Apply a small amount onto a wet scalp, work into a lather and
              distribute it to the rest of the hair
            </li>
            <li className="text-black font-poppins ml-[22px] text-[16px] lg:text-[20px] font-light leading-normal">
              Massage into hair for two minutes and then rinse with water
            </li>
            <li className="text-black font-poppins ml-[22px] text-[16px] lg:text-[20px] font-light leading-normal">
              For best results, use the thepureness PureCreamy Conditioner after
              shampooing your hair
            </li>
          </ul>
        </div>
        {/* caution */}
        <div className="flex flex-col items-start gap-[16px] lg:gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[24px] lg:text-[32px] font-medium leading-normal">
            Caution
          </h2>
          <div className="flex flex-col items-start gap-[16px]">
            <p className="text-black font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
              For External Use only.
            </p>
            <p className="text-black font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
              If contact with eyes occurs, rinse immediately with water.
            </p>
            <p className="text-black font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
              If irritation persist, see a doctor.
            </p>
            <p className="text-black font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
              Keep out of reach of children.
            </p>
            <p className="text-black font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
              Store in a dry room temperature not above 30 C.
            </p>
          </div>
        </div>
        {/* ingredients */}
        <div className="flex flex-col items-start gap-[16px] lg:gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[24px] lg:text-[32px] font-medium leading-normal">
            Ingredients
          </h2>
          <p className="text-black font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
            Aqua, Cocobetain, Polyquarternium 7, Pearl liquid, Amla, Reetha and
            Shikakai Oil, Amla water, Phenoxyethanol, Xanthan gum, Vegetable
            glycerin & Dierhanolamine.
          </p>
        </div>
        {/* this product is */}
        <div className="flex flex-col items-start gap-[16px] lg:gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[24px] lg:text-[32px] font-medium leading-normal">
            This product is:
          </h2>
          <p className="text-black font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
            Artificial Color Free, Cruelty Free, Paraben Free, Sulphate Free,
            Vegan, Halal
          </p>
        </div>
      </div>
    ),
    recommendedProducts: [
      "kid-2-in-1-shampoo-and-conditioner",
      "go-grey-hair-anti-aging-hair-oil",
      "biotin-hair-serum-control-hair-fall",
      "coconut-milk-hair-frizz-control-shampoo",
    ],
    categories: ["shampoo", "new-arrival"],
    price: " 2,400.00",
  },
  {
    slug: "coconut-milk-shampoo",
    title: "Coconut Milk Hair Frizz Control Shampoo",
    thumbnail: "/shampoos-2/1.png",
    company: "The Pureness",
    images: [
      "/shampoos-2/1.png",
      "/shampoos-2/2.png",
      "/shampoos-2/3.png",
      "/shampoos-2/4.png",
      "/shampoos-2/5.png",
      "/shampoos-2/6.png",
      "/shampoos-2/7.png",
    ],

    benefite: "/shampoos-2/0.png",
    video: "/shampoos-2/coconut-milk.mp4",
    totalReviews: 6,
    avgRating: 4,
    quantity: "300ml",
    description: (
      <div className="flex flex-col items-start gap-[32px]">
        {/* Benefits */}
        <div className="flex flex-col items-start gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[32px] font-medium leading-normal">
            Benefits
          </h2>
          <ul className="flex flex-col items-start gap-[16px]">
            <li className="text-black font-poppins text-[20px] font-light leading-normal">
              Moisturize the hairs with deep cleansing
            </li>
            <li className="text-black font-poppins text-[20px] font-light leading-normal">
              Protect hair damaged, Prevent hair loss
            </li>
            <li className="text-black font-poppins text-[20px] font-light leading-normal">
              Give shiny and smooth texture
            </li>
            <li className="text-black font-poppins text-[20px] font-light leading-normal">
              Control frizz and split ends
            </li>
            <li className="text-black font-poppins text-[20px] font-light leading-normal">
              Control dryness and excess oil on scalp
            </li>
            <li className="text-black font-poppins text-[20px] font-light leading-normal">
              Promote hair growth
            </li>
            <li className="text-black font-poppins text-[20px] font-light leading-normal">
              Repair hair follicles
            </li>
            <li className="text-black font-poppins text-[20px] font-light leading-normal">
              Unclogged the clogged pores
            </li>
          </ul>
        </div>
        {/* usuage */}
        <div className="flex flex-col items-start gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[32px] font-medium leading-normal">
            Usuage
          </h2>
          <ul className="flex flex-col items-start gap-[16px]">
            <li className="text-black font-poppins text-[20px] font-light leading-normal">
              Apply a small amount onto a wet scalp, work into a lather and
              distribute it to the rest of the hair
            </li>
            <li className="text-black font-poppins text-[20px] font-light leading-normal">
              Massage into hair for two minutes and then rinse with water
            </li>
            <li className="text-black font-poppins text-[20px] font-light leading-normal">
              For best results, use the thepureness PureCreamy Conditioner after
              shampooing your hair
            </li>
          </ul>
        </div>
        {/* caution */}
        <div className="flex flex-col items-start gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[32px] font-medium leading-normal">
            Caution
          </h2>
          <div className="flex flex-col items-start gap-[16px]">
            <p className="text-black font-poppins text-[20px] font-light leading-normal">
              For External Use only.
            </p>
            <p className="text-black font-poppins text-[20px] font-light leading-normal">
              If contact with eyes occurs, rinse immediately with water.
            </p>
            <p className="text-black font-poppins text-[20px] font-light leading-normal">
              If irritation persist, see a doctor.
            </p>
            <p className="text-black font-poppins text-[20px] font-light leading-normal">
              Keep out of reach of children.
            </p>
            <p className="text-black font-poppins text-[20px] font-light leading-normal">
              Store in a dry room temperature not above 30 C.
            </p>
          </div>
        </div>
        {/* ingredients */}
        <div className="flex flex-col items-start gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[32px] font-medium leading-normal">
            Ingredients
          </h2>
          <p className="text-black font-poppins text-[20px] font-light leading-normal">
            Aqua, Cocobetain, Polyquarternium 7, Pearl liquid, Amla, Reetha and
            Shikakai Oil, Amla water, Phenoxyethanol, Xanthan gum, Vegetable
            glycerin & Dierhanolamine.
          </p>
        </div>
        {/* this product is */}
        <div className="flex flex-col items-start gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[32px] font-medium leading-normal">
            This product is:
          </h2>
          <p className="text-black font-poppins text-[20px] font-light leading-normal">
            Artificial Color Free, Cruelty Free, Paraben Free, Sulphate Free,
            Vegan, Halal
          </p>
        </div>
      </div>
    ),
    recommendedProducts: [
      "kid-2-in-1-shampoo-and-conditioner",
      "go-grey-hair-anti-aging-hair-oil",
      "biotin-hair-serum-control-hair-fall",
      "coconut-milk-hair-frizz-control-shampoo",
    ],
    categories: ["shampoo", "new-arrival"],
    price: "2,200.00",
  },
  {
    slug: "gentle-hug-baby-shampoo",
    title: "Gentle Hug Baby Shampoo",
    thumbnail: "/shampoos-5/1.png",
    company: "The Pureness",
    images: [
      "/shampoos-5/1.png",
      "/shampoos-5/2.png",
      "/shampoos-5/3.png",
      "/shampoos-5/4.png",
      "/shampoos-5/5.png",
      "/shampoos-5/6.png",
      "/shampoos-5/7.png",
    ],
    benefite: "/shampoos-5/0.png",
    video: "/shampoos-5/gentle-hug.mp4",
    totalReviews: 6,
    avgRating: 4,
    quantity: "300ml",
    description: (
      <div className="flex flex-col items-start gap-[32px]">
        {/* Benefits */}
        <div className="flex flex-col items-start gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[32px] font-medium leading-normal">
            Benefits
          </h2>
          <ul className="flex flex-col items-start gap-[16px]">
            <li className="text-black font-poppins text-[20px] font-light leading-normal">
              Cleanse the skin deeply, remove dirt gently
            </li>
            <li className="text-black font-poppins text-[20px] font-light leading-normal">
              Treat rash and redness,
            </li>
            <li className="text-black font-poppins text-[20px] font-light leading-normal">
              No itching or burn causing, make baby&apos;s skin soft and smooth
            </li>
          </ul>
        </div>
        {/* usuage */}
        <div className="flex flex-col items-start gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[32px] font-medium leading-normal">
            Usuage
          </h2>
          <ul className="flex flex-col items-start gap-[16px]">
            <li className="text-black font-poppins text-[20px] font-light leading-normal">
              Apply a small amount onto a wet scalp, work into a lather and
              distribute it to the rest of the hair
            </li>
            <li className="text-black font-poppins text-[20px] font-light leading-normal">
              Massage into hair for two minutes and then rinse with water
            </li>
            {/* <li className="text-black font-poppins text-[20px] font-light leading-normal">
              For best results, use the thepureness PureCreamy Conditioner after
              shampooing your hair
            </li> */}
          </ul>
        </div>
        {/* caution */}
        <div className="flex flex-col items-start gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[32px] font-medium leading-normal">
            Caution
          </h2>
          <div className="flex flex-col items-start gap-[16px]">
            <p className="text-black font-poppins text-[20px] font-light leading-normal">
              For External Use only.
            </p>
            <p className="text-black font-poppins text-[20px] font-light leading-normal">
              If contact with eyes occurs, rinse immediately with water.
            </p>
            <p className="text-black font-poppins text-[20px] font-light leading-normal">
              If irritation persist, see a doctor.
            </p>
            <p className="text-black font-poppins text-[20px] font-light leading-normal">
              Keep out of reach of children.
            </p>
            <p className="text-black font-poppins text-[20px] font-light leading-normal">
              Store in a dry room temperature not above 30 C.
            </p>
          </div>
        </div>
        {/* ingredients */}
        <div className="flex flex-col items-start gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[32px] font-medium leading-normal">
            Ingredients
          </h2>
          <p className="text-black font-poppins text-[20px] font-light leading-normal">
            Aqua, Allantoin, Glycerine, Aloe vera water, Rose water, Coco
            glucoside, Sodium cocoyl isothionate, Cocobetain, sodium citrate,
            Sodium benzoate, Potassium sorbate, Xanthan gum, Hydroxyethyl
            cellulose, Vegetable oil, Fragrance oil
          </p>
        </div>
        {/* this product is */}
        <div className="flex flex-col items-start gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[32px] font-medium leading-normal">
            This product is:
          </h2>
          <p className="text-black font-poppins text-[20px] font-light leading-normal">
            Tear Free, Paraben Free, Sulfhate Free
          </p>
        </div>
      </div>
    ),
    recommendedProducts: [
      "kid-2-in-1-shampoo-and-conditioner",
      "go-grey-hair-anti-aging-hair-oil",
      "biotin-hair-serum-control-hair-fall",
      "coconut-milk-hair-frizz-control-shampoo",
    ],
    categories: ["shampoo", "new-arrival"],
    price: "2,500.00",
  },
  {
    slug: "pure-creamy-hair-moisturizer-conditioner",
    title: "Pure Creamy Hair Moisturizer Conditioner",
    thumbnail: "/conditioner/5.png",
    company: "The Pureness",
    images: [
      "/conditioner/1.png",
      "/conditioner/2.png",
      "/conditioner/3.png",
      "/conditioner/4.png",
      "/conditioner/5.png",
      "/conditioner/6.png",
      "/conditioner/7.png",
    ],
    benefite: "/conditioner/0.png",
    video: "/conditioner/pure-cream.mp4",
    totalReviews: 6,
    avgRating: 4,
    quantity: "300ml",
    description: (
      <div className="flex flex-col items-start gap-[32px]">
        {/* Benefits */}
        <div className="flex flex-col items-start gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[32px] font-medium leading-normal">
            Benefits
          </h2>
          <ul className="flex flex-col items-start gap-[16px]">
            <li className="text-black font-poppins text-[20px] font-light leading-normal">
              Nourish hair strands
            </li>
            <li className="text-black font-poppins text-[20px] font-light leading-normal">
              Increase hair volume
            </li>
            <li className="text-black font-poppins text-[20px] font-light leading-normal">
              Make hair silky
            </li>
            <li className="text-black font-poppins text-[20px] font-light leading-normal">
              Control frizz and split ends
            </li>
            <li className="text-black font-poppins text-[20px] font-light leading-normal">
              Moisturize the hairs
            </li>
          </ul>
        </div>
        {/* usuage */}
        <div className="flex flex-col items-start gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[32px] font-medium leading-normal">
            Usuage
          </h2>
          <ul className="flex flex-col items-start gap-[16px]">
            <li className="text-black font-poppins text-[20px] font-light leading-normal">
              Apply conditioner on all hair from top to the ends moving in the
              same direction as water, leave it for 2 minutes and rinse it off
              with water.
            </li>
            <li className="text-black font-poppins text-[20px] font-light leading-normal">
              Best suitable to use after shampoo and those who dye / colour
              their hair.
            </li>
          </ul>
        </div>
        {/* caution */}
        <div className="flex flex-col items-start gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[32px] font-medium leading-normal">
            Caution
          </h2>
          <div className="flex flex-col items-start gap-[16px]">
            <p className="text-black font-poppins text-[20px] font-light leading-normal">
              For External Use only.
            </p>
            <p className="text-black font-poppins text-[20px] font-light leading-normal">
              If contact with eyes occurs, rinse immediately with water.
            </p>
            <p className="text-black font-poppins text-[20px] font-light leading-normal">
              If irritation persist, see a doctor.
            </p>
            <p className="text-black font-poppins text-[20px] font-light leading-normal">
              Keep out of reach of children.
            </p>
            <p className="text-black font-poppins text-[20px] font-light leading-normal">
              Store in a dry room temperature not above 30 C.
            </p>
          </div>
        </div>
        {/* ingredients */}
        <div className="flex flex-col items-start gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[32px] font-medium leading-normal">
            Ingredients
          </h2>
          <p className="text-black font-poppins text-[20px] font-light leading-normal">
            Aqua, Allantoin, Cetearyl alcohol, Stearic acid, Lauric acid,
            Cetrimonium chloride, Cetyl silicone, Glycerine, Sorbitol,
            Polyquarternium-7, Shea butter, Wheat protein, Witch hazel extract,
            Grape seeds oil, Phenoxyethanol, DMDM Hydnation.
          </p>
        </div>
        {/* this product is */}
        <div className="flex flex-col items-start gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[32px] font-medium leading-normal">
            This product is:
          </h2>
          <p className="text-black font-poppins text-[20px] font-light leading-normal">
            Artificial Color Free, Cruelty Free, Paraben Free, Sulphate Free,
            Vegan, Halal
          </p>
        </div>
      </div>
    ),
    recommendedProducts: [
      "kid-2-in-1-shampoo-and-conditioner",
      "go-grey-hair-anti-aging-hair-oil",
      "biotin-hair-serum-control-hair-fall",
      "coconut-milk-hair-frizz-control-shampoo",
    ],
    categories: ["conditioner", "new-arrival"],
    price: "2,200.00",
  },
  {
    slug: "biotin-hair-serum-control-hair-fall",
    title: "Biotin Hair Serum Control Hair Fall",
    thumbnail: "/hair-serum-1/4.png",
    company: "The Pureness",
    images: [
      "/hair-serum-1/1.png",
      "/hair-serum-1/2.png",
      "/hair-serum-1/3.png",
      "/hair-serum-1/4.png",
      "/hair-serum-1/5.png",
      "/hair-serum-1/6.png",
      "/hair-serum-1/7.png",
    ],
    benefite: "/hair-serum-1/0.png",
    video: "/hair-serum-1/hair-serum.mp4",
    totalReviews: 6,
    avgRating: 4,
    quantity: "30 ml",
    description: (
      <div className="flex flex-col items-start gap-[32px]">
        {/* Benefits */}
        <div className="flex flex-col items-start gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[32px] font-medium leading-normal">
            Benefits
          </h2>
          <div className="flex flex-col items-start gap-[16px]">
            {/* Reduces Hair fall: */}
            <div className="flex flex-col items-start gap-[8px]">
              <h2 className="text-black capitalize font-poppins text-[24px] font-medium leading-normal">
                Reduces Hair Fall:
              </h2>
              <p className="text-black font-poppins text-[20px] font-light leading-normal">
                Biotin supports keratin production, a key protein for hair
                strength, helping to minimize breakage and shedding.
              </p>
            </div>
            {/* Strenghtens Hair Follicles: */}
            <div className="flex flex-col items-start gap-[8px]">
              <h2 className="text-black capitalize font-poppins text-[24px] font-medium leading-normal">
                Strenghtens Hair Follicles:
              </h2>
              <p className="text-black font-poppins text-[20px] font-light leading-normal">
                Biotin nourishes hair follicles, promoting stronger and
                healthier hair growth from the roots.
              </p>
            </div>
            {/* Improves hair Texture: */}
            <div className="flex flex-col items-start gap-[8px]">
              <h2 className="text-black capitalize font-poppins text-[24px] font-medium leading-normal">
                Improves Hair Texture:
              </h2>
              <p className="text-black font-poppins text-[20px] font-light leading-normal">
                Biotin can help moisturize dry and damaged hair, making it
                smoother, softer, and more manageable.
              </p>
            </div>
            {/* Adds Shine and volume: */}
            <div className="flex flex-col items-start gap-[8px]">
              <h2 className="text-black capitalize font-poppins text-[24px] font-medium leading-normal">
                Adds Shine and Volume:
              </h2>
              <p className="text-black font-poppins text-[20px] font-light leading-normal">
                Biotin can improve the overall appearance of hair, adding shine
                and volume.
              </p>
            </div>
            {/* May promote Hair Growth: */}
            <div className="flex flex-col items-start gap-[8px]">
              <h2 className="text-black capitalize font-poppins text-[24px] font-medium leading-normal">
                May promote Hair Growth:
              </h2>
              <p className="text-black font-poppins text-[20px] font-light leading-normal">
                Biotin, when supplemented or incorporated into hair products,
                can support hair growth, especially in individuals with biotin
                deficiencies.
              </p>
            </div>
            {/* Almond oil: */}
            <div className="flex flex-col items-start gap-[8px]">
              <h2 className="text-black capitalize font-poppins text-[24px] font-medium leading-normal">
                Almond oil:
              </h2>
              <p className="text-black font-poppins text-[20px] font-light leading-normal">
                Rich in vitamin E and omega-3 fatty acids, it moisturizes skin,
                protects against sun damage, and may help prevent stretch marks.
                It can also be used for hair, promoting shine, softness, and
                potentially reducing split ends.
              </p>
            </div>
            {/* Amla Oil: */}
            <div className="flex flex-col items-start gap-[8px]">
              <h2 className="text-black capitalize font-poppins text-[24px] font-medium leading-normal">
                Amla Oil:
              </h2>
              <p className="text-black font-poppins text-[20px] font-light leading-normal">
                Known for its hair-strengthening and hair-growth properties, it
                may help reduce dandruff and premature greying.
              </p>
            </div>
            {/* Rosemary Oil: */}
            <div className="flex flex-col items-start gap-[8px]">
              <h2 className="text-black capitalize font-poppins text-[24px] font-medium leading-normal">
                Rosemary Oil:
              </h2>
              <p className="text-black font-poppins text-[20px] font-light leading-normal">
                Can stimulate scalp circulation, promoting healthy hair growth
                and addressing dry scalp conditions.
              </p>
            </div>
            {/* cedarwood Oil: */}
            <div className="flex flex-col items-start gap-[8px]">
              <h2 className="text-black capitalize font-poppins text-[24px] font-medium leading-normal">
                Cedarwood Oil:
              </h2>
              <p className="text-black font-poppins text-[20px] font-light leading-normal">
                May promote relaxation and potentially aid in managing hair
                loss, scalp conditions, and improving sleep quality.
              </p>
            </div>
            {/* Vitamin E Oil: */}
            <div className="flex flex-col items-start gap-[8px]">
              <h2 className="text-black capitalize font-poppins text-[24px] font-medium leading-normal">
                Vitamin E Oil:
              </h2>
              <p className="text-black font-poppins text-[20px] font-light leading-normal">
                A powerful antioxidant that can help protect skin from sun
                damage, manage scars, and promote nail health.
              </p>
            </div>
            {/* Castor Oil:*/}
            <div className="flex flex-col items-start gap-[8px]">
              <h2 className="text-black capitalize font-poppins text-[24px] font-medium leading-normal">
                Castor Oil:
              </h2>
              <p className="text-black font-poppins text-[20px] font-light leading-normal">
                Known for its moisturizing and anti-inflammatory properties, it
                can be beneficial for skin and potentially promote hair growth.
              </p>
            </div>
            {/* Brahmi Oil: */}
            <div className="flex flex-col items-start gap-[8px]">
              <h2 className="text-black capitalize font-poppins text-[24px] font-medium leading-normal">
                Brahmi Oil:
              </h2>
              <p className="text-black font-poppins text-[20px] font-light leading-normal">
                Traditionally used in Ayurveda, it may help promote hair growth,
                manage scalp conditions, and reduce anxiety.
              </p>
            </div>
          </div>
        </div>
        {/* usuage */}
        <div className="flex flex-col items-start gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[32px] font-medium leading-normal">
            Usuage
          </h2>
          <p className="text-black font-poppins text-[20px] font-light leading-normal">
            Apply on scalp with the dropper with little massage gently until
            absorb leave for 4 hours. For best results, leave the serum
            overnight and apply 3 times in a week
          </p>
        </div>
        {/* caution */}
        <div className="flex flex-col items-start gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[32px] font-medium leading-normal">
            Caution
          </h2>
          <div className="flex flex-col items-start gap-[16px]">
            <p className="text-black font-poppins text-[20px] font-light leading-normal">
              For External Use only.
            </p>
            <p className="text-black font-poppins text-[20px] font-light leading-normal">
              If contact with eyes occurs, rinse immediately with water.
            </p>
            <p className="text-black font-poppins text-[20px] font-light leading-normal">
              If irritation persist, see a doctor.
            </p>
            <p className="text-black font-poppins text-[20px] font-light leading-normal">
              Keep out of reach of children.
            </p>
            <p className="text-black font-poppins text-[20px] font-light leading-normal">
              Store in a dry room temperature not above 30 C.
            </p>
          </div>
        </div>
        {/* ingredients */}
        <div className="flex flex-col items-start gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[32px] font-medium leading-normal">
            Ingredients
          </h2>
          <p className="text-black font-poppins text-[20px] font-light leading-normal">
            Almond Sweet Oil, Amla Oil, Rosemary Oil, Cedarwood Oil Vitamin E
            Oil, Castor Oil & Brahami Infused Oil
          </p>
        </div>
        {/* this product is */}
        <div className="flex flex-col items-start gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[32px] font-medium leading-normal">
            This product is:
          </h2>
          <p className="text-black font-poppins text-[20px] font-light leading-normal">
            Artificial Color Free, Cruelty Free, Paraben Free, Sulphate Free,
            Vegan, Halal
          </p>
        </div>
      </div>
    ),
    recommendedProducts: [
      "kid-2-in-1-shampoo-and-conditioner",
      "go-grey-hair-anti-aging-hair-oil",
      "biotin-hair-serum-control-hair-fall",
      "coconut-milk-hair-frizz-control-shampoo",
    ],
    categories: ["hair-serum", "new-arrival"],
    price: "1,900.00",
  },
  {
    slug: "hair-growth-serum-restore-hair-grow",
    title: "Hair Growth Serum Restore Hair Grow",
    thumbnail: "/hair-serum-2/4.png",
    company: "The Pureness",
    images: [
      "/hair-serum-2/1.png",
      "/hair-serum-2/2.png",
      "/hair-serum-2/3.png",
      "/hair-serum-2/4.png",
      "/hair-serum-2/5.png",
      "/hair-serum-2/6.png",
      "/hair-serum-2/7.png",
    ],
    benefite: "/hair-serum-2/0.png",
    video: "/hair-serum-2/hair-serum.mp4",
    totalReviews: 6,
    avgRating: 4,
    quantity: "30 ml",
    description: (
      <div className="flex flex-col items-start gap-[32px]">
        {/* Benefits */}
        <div className="flex flex-col items-start gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[32px] font-medium leading-normal">
            Benefits
          </h2>
          <div className="flex flex-col items-start gap-[16px]">
            {/* 1- Aloe Vera */}
            <div className="flex items-start flex-col gap-2">
              <h2 className="text-black capitalize font-poppins text-[24px] font-medium leading-normal">
                1- Aloe Vera:
              </h2>
              {/* Moisturizes and conditions:*/}
              <div className="flex flex-col items-start gap-[8px]">
                <h2 className="text-black capitalize font-poppins text-[24px] font-medium leading-normal">
                  Moisturizes and conditions:
                </h2>
                <p className="text-black font-poppins text-[20px] font-light leading-normal">
                  Aloe vera is a natural humectant, drawing moisture into the
                  hair and scalp, which can help with dryness and itchiness.
                </p>
              </div>
              {/* Strengthens hair: */}
              <div className="flex flex-col items-start gap-[8px]">
                <h2 className="text-black capitalize font-poppins text-[24px] font-medium leading-normal">
                  Strengthens hair:
                </h2>
                <p className="text-black font-poppins text-[20px] font-light leading-normal">
                  Rich in vitamins and minerals, aloe vera can help strengthen
                  hair strands and reduce breakage.
                </p>
              </div>
              {/* Promotes hair growth:  */}
              <div className="flex flex-col items-start gap-[8px]">
                <h2 className="text-black capitalize font-poppins text-[24px] font-medium leading-normal">
                  Promotes hair growth:
                </h2>
                <p className="text-black font-poppins text-[20px] font-light leading-normal">
                  Some studies suggest that aloe vera may stimulate hair
                  follicles and promote hair growth.
                </p>
              </div>
              {/*  Reduces dandruff:*/}
              <div className="flex flex-col items-start gap-[8px]">
                <h2 className="text-black capitalize font-poppins text-[24px] font-medium leading-normal">
                  Reduces dandruff:
                </h2>
                <p className="text-black font-poppins text-[20px] font-light leading-normal">
                  Aloe vera&apos;s anti-inflammatory and antifungal properties
                  can help alleviate dandruff and soothe the scalp.
                </p>
              </div>
            </div>
            {/* 2- Grape Seed Oil */}
            <div className="flex items-start flex-col gap-2">
              <h2 className="text-black capitalize font-poppins text-[24px] font-medium leading-normal">
                2- Grape Seed Oil:
              </h2>
              {/* Hydrates and seals in moisture:*/}
              <div className="flex flex-col items-start gap-[8px]">
                <h2 className="text-black capitalize font-poppins text-[24px] font-medium leading-normal">
                  Hydrates and seals in moisture:
                </h2>
                <p className="text-black font-poppins text-[20px] font-light leading-normal">
                  Grapeseed oil is a lightweight oil that can be used to
                  moisturize and seal in moisture, reducing frizz and dryness.
                </p>
              </div>
              {/* May promote hair growth: */}
              <div className="flex flex-col items-start gap-[8px]">
                <h2 className="text-black capitalize font-poppins text-[24px] font-medium leading-normal">
                  May promote hair growth:
                </h2>
                <p className="text-black font-poppins text-[20px] font-light leading-normal">
                  Some studies suggest that grapeseed oil may contain flavonoids
                  that could induce hair growth.
                </p>
              </div>
              {/* Provides antioxidants:*/}
              <div className="flex flex-col items-start gap-[8px]">
                <h2 className="text-black capitalize font-poppins text-[24px] font-medium leading-normal">
                  Provides antioxidants:
                </h2>
                <p className="text-black font-poppins text-[20px] font-light leading-normal">
                  Grapeseed oil is rich in antioxidants, which can help protect
                  hair from damage and promote a healthy scalp.
                </p>
              </div>
              {/*  Reduces dandruff:*/}
              <div className="flex flex-col items-start gap-[8px]">
                <h2 className="text-black capitalize font-poppins text-[24px] font-medium leading-normal">
                  Reduces dandruff:
                </h2>
                <p className="text-black font-poppins text-[20px] font-light leading-normal">
                  Aloe vera&apos;s anti-inflammatory and antifungal properties
                  can help alleviate dandruff and soothe the scalp.
                </p>
              </div>
            </div>
            {/* 3- Vitamin E Oil */}
            <div className="flex items-start flex-col gap-2">
              <h2 className="text-black capitalize font-poppins text-[24px] font-medium leading-normal">
                4- Vitamin E Oil:
              </h2>
              {/*  Adds shine: */}
              <div className="flex flex-col items-start gap-[8px]">
                <h2 className="text-black capitalize font-poppins text-[24px] font-medium leading-normal">
                  Adds shine:
                </h2>
                <p className="text-black font-poppins text-[20px] font-light leading-normal">
                  Vitamin E oil can help restore luster and shine to dull,
                  damaged hair.
                </p>
              </div>
              {/* Reduces breakage:*/}
              <div className="flex flex-col items-start gap-[8px]">
                <h2 className="text-black capitalize font-poppins text-[24px] font-medium leading-normal">
                  Reduces breakage:
                </h2>
                <p className="text-black font-poppins text-[20px] font-light leading-normal">
                  Vitamin E oil can help protect hair from damage and reduce
                  breakage.
                </p>
              </div>
              {/* Promotes scalp health:*/}
              <div className="flex flex-col items-start gap-[8px]">
                <h2 className="text-black capitalize font-poppins text-[24px] font-medium leading-normal">
                  Promotes scalp health:
                </h2>
                <p className="text-black font-poppins text-[20px] font-light leading-normal">
                  Vitamin E &apos;s antioxidant properties can help protect the
                  scalp from damage and promote healthy hair growth.
                </p>
              </div>
              {/*  Reduces dandruff:*/}
              <div className="flex flex-col items-start gap-[8px]">
                <h2 className="text-black capitalize font-poppins text-[24px] font-medium leading-normal">
                  Reduces dandruff:
                </h2>
                <p className="text-black font-poppins text-[20px] font-light leading-normal">
                  Aloe vera &apos;s anti-inflammatory and antifungal properties
                  can help alleviate dandruff and soothe the scalp.
                </p>
              </div>
            </div>
            {/* 4- Castor Oil: */}
            <div className="flex items-start flex-col gap-2">
              <h2 className="text-black capitalize font-poppins text-[24px] font-medium leading-normal">
                4- Castor Oil:
              </h2>
              {/*  Promotes hair growth: */}
              <div className="flex flex-col items-start gap-[8px]">
                <h2 className="text-black capitalize font-poppins text-[24px] font-medium leading-normal">
                  Promotes hair growth:
                </h2>
                <p className="text-black font-poppins text-[20px] font-light leading-normal">
                  Castor oil is known for its ability to stimulate hair
                  follicles and promote hair growth.
                </p>
              </div>
              {/* Strengthens hair:*/}
              <div className="flex flex-col items-start gap-[8px]">
                <h2 className="text-black capitalize font-poppins text-[24px] font-medium leading-normal">
                  Strengthens hair:
                </h2>
                <p className="text-black font-poppins text-[20px] font-light leading-normal">
                  Castor oil can help strengthen hair from root to tip, reducing
                  breakage and split ends.
                </p>
              </div>
              {/* Reduces dandruff: */}
              <div className="flex flex-col items-start gap-[8px]">
                <h2 className="text-black capitalize font-poppins text-[24px] font-medium leading-normal">
                  Reduces dandruff:
                </h2>
                <p className="text-black font-poppins text-[20px] font-light leading-normal">
                  Castor oil &apos;s anti-inflammatory and antifungal properties
                  can help alleviate dandruff.
                </p>
              </div>
            </div>
            {/* 5- Coconut Oil: */}
            <div className="flex items-start flex-col gap-2">
              <h2 className="text-black capitalize font-poppins text-[24px] font-medium leading-normal">
                5- Coconut Oil:
              </h2>
              {/*   Moisturizes and conditions: */}
              <div className="flex flex-col items-start gap-[8px]">
                <h2 className="text-black capitalize font-poppins text-[24px] font-medium leading-normal">
                  Moisturizes and conditions:
                </h2>
                <p className="text-black font-poppins text-[20px] font-light leading-normal">
                  Coconut oil penetrates the hair shaft, helping to moisturize
                  and condition hair, reducing frizz and dryness.
                </p>
              </div>
              {/* Reduces protein loss:*/}
              <div className="flex flex-col items-start gap-[8px]">
                <h2 className="text-black capitalize font-poppins text-[24px] font-medium leading-normal">
                  Reduces protein loss:
                </h2>
                <p className="text-black font-poppins text-[20px] font-light leading-normal">
                  Coconut oil helps to prevent protein loss in hair, making it
                  stronger and more resilient.
                </p>
              </div>
              {/* Adds shine: */}
              <div className="flex flex-col items-start gap-[8px]">
                <h2 className="text-black capitalize font-poppins text-[24px] font-medium leading-normal">
                  Adds shine:
                </h2>
                <p className="text-black font-poppins text-[20px] font-light leading-normal">
                  Coconut oil can add shine and luster to hair, making it appear
                  healthier and more vibrant.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* usuage */}
        <div className="flex flex-col items-start gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[32px] font-medium leading-normal">
            Usuage
          </h2>
          <p className="text-black font-poppins text-[20px] font-light leading-normal">
            Apply on scalp and all hair to the ends with little massage. For
            best results, apply 3 times in a week.
          </p>
        </div>
        {/* caution */}
        <div className="flex flex-col items-start gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[32px] font-medium leading-normal">
            Caution
          </h2>
          <div className="flex flex-col items-start gap-[16px]">
            <p className="text-black font-poppins text-[20px] font-light leading-normal">
              For External Use only.
            </p>
            <p className="text-black font-poppins text-[20px] font-light leading-normal">
              If contact with eyes occurs, rinse immediately with water.
            </p>
            <p className="text-black font-poppins text-[20px] font-light leading-normal">
              If irritation persist, see a doctor.
            </p>
            <p className="text-black font-poppins text-[20px] font-light leading-normal">
              Keep out of reach of children.
            </p>
            <p className="text-black font-poppins text-[20px] font-light leading-normal">
              Store in a dry room temperature not above 30 C.
            </p>
          </div>
        </div>
        {/* ingredients */}
        <div className="flex flex-col items-start gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[32px] font-medium leading-normal">
            Ingredients
          </h2>
          <p className="text-black font-poppins text-[20px] font-light leading-normal">
            Aloe Vera Oil, Aloe Vera Gel, Grape Seed Oil, Vitamin E Oil, Castor
            Oil & Coconut Oil blend with Biotin
          </p>
        </div>
        {/* this product is */}
        <div className="flex flex-col items-start gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[32px] font-medium leading-normal">
            This product is:
          </h2>
          <p className="text-black font-poppins text-[20px] font-light leading-normal">
            Artificial Color Free, Cruelty Free, Paraben Free, Sulphate Free,
            Vegan, Halal
          </p>
        </div>
      </div>
    ),
    recommendedProducts: [
      "kid-2-in-1-shampoo-and-conditioner",
      "go-grey-hair-anti-aging-hair-oil",
      "biotin-hair-serum-control-hair-fall",
      "coconut-milk-hair-frizz-control-shampoo",
    ],
    categories: ["hair-serum", "new-arrival"],
    price: "1,900.00",
  },
  {
    slug: "grow-hair-oil-blend-of-7-rich-oils",
    title: "Grow Hair Oil Blend of 7 Rich Oils",
    thumbnail: "/hair-grow-1/1.png",
    company: "The Pureness",
    images: [
      "/hair-grow-1/1.png",
      "/hair-grow-1/3.png",
      "/hair-grow-1/2.png",
      "/hair-grow-1/4.png",
      "/hair-grow-1/5.png",
      "/hair-grow-1/6.png",
    ],

    benefite: "/hair-grow-1/0.png",
    video: "/hair-grow-1/hair-grow.mp4",
    totalReviews: 6,
    avgRating: 4,
    quantity: "250 ml",
    description: (
      <div className="flex flex-col items-start gap-[32px]">
        {/* Benefits */}
        <div className="flex flex-col items-start gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[32px] font-medium leading-normal">
            Benefits
          </h2>
          <div className="flex flex-col items-start gap-[16px]">
            {/* Powerful mixture of 7 rich oils ingredients Almond Oil: */}
            <div className="flex flex-col items-start gap-[8px]">
              <h2 className="text-black capitalize font-poppins text-[24px] font-medium leading-normal">
                Powerful mixture of 7 rich oils ingredients Almond Oil:
              </h2>
              <p className="text-black font-poppins text-[20px] font-light leading-normal">
                Rich in vitamin E and omega-3 fatty acids, it moisturizes skin,
                protects against sun damage, and may help prevent stretch marks.
                It can also be used for hair, promoting shine, softness, and
                potentially reducing split ends.
              </p>
            </div>
            {/* Amla Oil: */}
            <div className="flex flex-col items-start gap-[8px]">
              <h2 className="text-black capitalize font-poppins text-[24px] font-medium leading-normal">
                Amla Oil:
              </h2>
              <p className="text-black font-poppins text-[20px] font-light leading-normal">
                Known for its hair-strengthening and hair-growth properties, it
                may help reduce dandruff and premature greying.
              </p>
            </div>
            {/* Rosemary Oil: */}
            <div className="flex flex-col items-start gap-[8px]">
              <h2 className="text-black capitalize font-poppins text-[24px] font-medium leading-normal">
                Rosemary Oil:
              </h2>
              <p className="text-black font-poppins text-[20px] font-light leading-normal">
                Can stimulate scalp circulation, promoting healthy hair growth
                and addressing dry scalp conditions.
              </p>
            </div>
            {/* Cedarwood Oil: */}
            <div className="flex flex-col items-start gap-[8px]">
              <h2 className="text-black capitalize font-poppins text-[24px] font-medium leading-normal">
                Cedarwood Oil:
              </h2>
              <p className="text-black font-poppins text-[20px] font-light leading-normal">
                May promote relaxation and potentially aid in managing hair
                loss, scalp conditions, and improving sleep quality.
              </p>
            </div>
            {/* Vitamin E Oil: */}
            <div className="flex flex-col items-start gap-[8px]">
              <h2 className="text-black capitalize font-poppins text-[24px] font-medium leading-normal">
                Vitamin E Oil:
              </h2>
              <p className="text-black font-poppins text-[20px] font-light leading-normal">
                A powerful antioxidant that can help protect skin from sun
                damage, manage scars, and promote nail health.
              </p>
            </div>
            {/* Castor Oil: */}
            <div className="flex flex-col items-start gap-[8px]">
              <h2 className="text-black capitalize font-poppins text-[24px] font-medium leading-normal">
                Castor Oil:
              </h2>
              <p className="text-black font-poppins text-[20px] font-light leading-normal">
                Known for its moisturizing and anti-inflammatory properties, it
                can be beneficial for skin and potentially promote hair growth.
              </p>
            </div>
            {/* Brahmi Oil: */}
            <div className="flex flex-col items-start gap-[8px]">
              <h2 className="text-black capitalize font-poppins text-[24px] font-medium leading-normal">
                Brahmi Oil:
              </h2>
              <p className="text-black font-poppins text-[20px] font-light leading-normal">
                Traditionally used in Ayurveda, it may help promote hair growth,
                manage scalp conditions, and reduce anxiety.
              </p>
            </div>
          </div>
        </div>
        {/* usuage */}
        <div className="flex flex-col items-start gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[32px] font-medium leading-normal">
            Usuage
          </h2>
          <p className="text-black font-poppins text-[20px] font-light leading-normal">
            Apply on scalp and all hair to the ends with little massage. For
            best results, apply 3 times in a week.
          </p>
        </div>
        {/* caution */}
        <div className="flex flex-col items-start gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[32px] font-medium leading-normal">
            Caution
          </h2>
          <div className="flex flex-col items-start gap-[16px]">
            <p className="text-black font-poppins text-[20px] font-light leading-normal">
              For External Use only.
            </p>
            <p className="text-black font-poppins text-[20px] font-light leading-normal">
              If contact with eyes occurs, rinse immediately with water.
            </p>
            <p className="text-black font-poppins text-[20px] font-light leading-normal">
              If irritation persist, see a doctor.
            </p>
            <p className="text-black font-poppins text-[20px] font-light leading-normal">
              Keep out of reach of children.
            </p>
            <p className="text-black font-poppins text-[20px] font-light leading-normal">
              Store in a dry room temperature not above 30 C.
            </p>
          </div>
        </div>
        {/* ingredients */}
        <div className="flex flex-col items-start gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[32px] font-medium leading-normal">
            Ingredients
          </h2>
          <p className="text-black font-poppins text-[20px] font-light leading-normal">
            Almond Sweet Oil, Amla Oil, Rosemary Oil, Cedarwood Oil Vitamin E
            Oil, Castor Oil & Brahami Infused Oil
          </p>
        </div>
        {/* this product is */}
        <div className="flex flex-col items-start gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[32px] font-medium leading-normal">
            Oil Free Off:
          </h2>
          <p className="text-black font-poppins text-[20px] font-light leading-normal">
            Artificial Color Free, Cruelty Free, Paraben Free, Sulphate Free,
            Vegan, Halal
          </p>
        </div>
      </div>
    ),
    recommendedProducts: [
      "kid-2-in-1-shampoo-and-conditioner",
      "go-grey-hair-anti-aging-hair-oil",
      "biotin-hair-serum-control-hair-fall",
      "coconut-milk-hair-frizz-control-shampoo",
    ],
    categories: ["hair-oil", "new-arrival"],
    price: "2,200.00",
  },
  {
    slug: "grow-hair-oil-blend-of-7-rich-oils-1",
    title: "Go Grey Hair Anti – Aging Hair Oil",
    thumbnail: "/hair-grow-2/1.png",
    company: "The Pureness",
    images: [
      "/hair-grow-2/1.png",
      "/hair-grow-2/3.png",
      "/hair-grow-2/2.png",
      "/hair-grow-2/4.png",
    ],

    benefite: "/hair-grow-2/0.png",
    video: "/hair-grow-2/antuaging.mp4",
    totalReviews: 6,
    avgRating: 4,
    quantity: "250 ml",
    description: (
      <div className="flex flex-col items-start gap-[32px]">
        {/* Benefits */}
        <div className="flex flex-col items-start gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[32px] font-medium leading-normal">
            Benefits
          </h2>
          <div className="flex flex-col items-start gap-[16px]">
            <h2 className="text-black capitalize font-poppins text-[20px] font-medium leading-normal">
              Infused with 12 Rich Seeds oils
            </h2>
            <ul className="flex flex-col items-start gap-[16px]">
              <li className="text-black font-poppins text-[20px] font-light leading-normal">
                Hair smooth
              </li>
              <li className="text-black font-poppins text-[20px] font-light leading-normal">
                Enhance natural hair color
              </li>
              <li className="text-black font-poppins text-[20px] font-light leading-normal">
                Reduce hair line, delays balding
              </li>
              <li className="text-black font-poppins text-[20px] font-light leading-normal">
                Thicken hair strand
              </li>
              <li className="text-black font-poppins text-[20px] font-light leading-normal">
                Boost elasticity
              </li>
              <li className="text-black font-poppins text-[20px] font-light leading-normal">
                Delay aging and greying of hairs
              </li>
            </ul>
          </div>
        </div>
        {/* usuage */}
        <div className="flex flex-col items-start gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[32px] font-medium leading-normal">
            Usuage
          </h2>
          <p className="text-black font-poppins text-[20px] font-light leading-normal">
            Apply on scalp and all hair to the ends with little massage. For
            best results, apply 3 times in a week.
          </p>
        </div>
        {/* caution */}
        <div className="flex flex-col items-start gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[32px] font-medium leading-normal">
            Caution
          </h2>
          <div className="flex flex-col items-start gap-[16px]">
            <p className="text-black font-poppins text-[20px] font-light leading-normal">
              For External Use only.
            </p>
            <p className="text-black font-poppins text-[20px] font-light leading-normal">
              If contact with eyes occurs, rinse immediately with water.
            </p>
            <p className="text-black font-poppins text-[20px] font-light leading-normal">
              If irritation persist, see a doctor.
            </p>
            <p className="text-black font-poppins text-[20px] font-light leading-normal">
              Keep out of reach of children.
            </p>
            <p className="text-black font-poppins text-[20px] font-light leading-normal">
              Store in a dry room temperature not above 30 C.
            </p>
          </div>
        </div>
        {/* ingredients */}
        <div className="flex flex-col items-start gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[32px] font-medium leading-normal">
            Ingredients
          </h2>
          <p className="text-black font-poppins text-[20px] font-light leading-normal">
            Amla oil, Olive oil, Castor oil, Coconut oil, Clary sage oil, Sage
            infuse oil, Nagamotha oil, Baal char oil, Sahil e nabatati oil,
            Pumpkin seeds oil, 12 Beej oil, Walnut oil, Onion oil
          </p>
        </div>
        {/* this product is */}
        <div className="flex flex-col items-start gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[32px] font-medium leading-normal">
            Oil Free Off
          </h2>
          <p className="text-black font-poppins text-[20px] font-light leading-normal">
            Artificial Color Free, Cruelty Free, Paraben Free, Sulphate Free,
            Vegan, Halal
          </p>
        </div>
      </div>
    ),
    recommendedProducts: [
      "kid-2-in-1-shampoo-and-conditioner",
      "go-grey-hair-anti-aging-hair-oil",
      "biotin-hair-serum-control-hair-fall",
      "coconut-milk-hair-frizz-control-shampoo",
    ],
    categories: ["hair-oil", "new-arrival"],
    price: "2,200.00",
  },
  {
    slug: "hair-nourishing-mask-blend-of-12-essential-oils",
    title: "Hair Nourishing Mask Blend of 12 Essential Oils",
    thumbnail: "/hair-mask/2.png",
    company: "The Pureness",
    images: [
      "/hair-mask/1.png",
      "/hair-mask/2.png",
      "/hair-mask/3.png",
      "/hair-mask/4.png",
      "/hair-mask/5.png",
    ],
    benefit: "/hair-mask/0.png",
    video: "/hair-mask/hair-mask.mp4",
    totalReviews: 6,
    avgRating: 4,
    quantity: "150 ml",
    description: (
      <div className="flex flex-col items-start gap-[32px]">
        {/* Benefits */}
        <div className="flex flex-col items-start gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[32px] font-medium leading-normal">
            Benefits
          </h2>
          <ul className="flex flex-col items-start gap-[16px]">
            <li className="text-black font-poppins text-[20px] font-light leading-normal">
              Nourish & Moisturize the hairs with deep cleansing
            </li>
            <li className="text-black font-poppins text-[20px] font-light leading-normal">
              Protect hair damaged, Prevent hair loss
            </li>
            <li className="text-black font-poppins text-[20px] font-light leading-normal">
              Give shiny and smooth texture
            </li>
            <li className="text-black font-poppins text-[20px] font-light leading-normal">
              Control frizz and split ends
            </li>
            <li className="text-black font-poppins text-[20px] font-light leading-normal">
              Promote hair growth.
            </li>
            <li className="text-black font-poppins text-[20px] font-light leading-normal">
              Repair hair follicles
            </li>
            <li className="text-black font-poppins text-[20px] font-light leading-normal">
              Unclogged the clogged pores
            </li>
          </ul>
        </div>
        {/* usuage */}
        <div className="flex flex-col items-start gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[32px] font-medium leading-normal">
            Usuage
          </h2>
          <p className="text-black font-poppins text-[20px] font-light leading-normal">
            Apply mask on scalp and all hair to the ends moving in the same
            direction as water, leave it for 15 - 30 minutes and rinse it off
            with shampoo. For best results, apply 3 times in a week.
          </p>
        </div>
        {/* caution */}
        <div className="flex flex-col items-start gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[32px] font-medium leading-normal">
            Caution
          </h2>
          <div className="flex flex-col items-start gap-[16px]">
            <p className="text-black font-poppins text-[20px] font-light leading-normal">
              For External Use only.
            </p>
            <p className="text-black font-poppins text-[20px] font-light leading-normal">
              If contact with eyes occurs, rinse immediately with water.
            </p>
            <p className="text-black font-poppins text-[20px] font-light leading-normal">
              If irritation persist, see a doctor.
            </p>
            <p className="text-black font-poppins text-[20px] font-light leading-normal">
              Keep out of reach of children.
            </p>
            <p className="text-black font-poppins text-[20px] font-light leading-normal">
              Store in a dry room temperature not above 30 C.
            </p>
          </div>
        </div>
        {/* ingredients */}
        <div className="flex flex-col items-start gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[32px] font-medium leading-normal">
            Ingredients
          </h2>
          <p className="text-black font-poppins text-[20px] font-light leading-normal">
            Aqua, Allantoin, Polyquarternium 11, Vitamin E oil, Olive oil, Cocoa
            butter, Green tea extract, Cetyl alcohol, Cetearyl alcohol, Stearic
            acid, Shea butter, Wheat protein, Witch hazel extract, Grape seeds
            oil, Phenoxyethanol, dmdm hydnation.
          </p>
        </div>
        {/* this product is */}
        <div className="flex flex-col items-start gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[32px] font-medium leading-normal">
            Mask Free Off
          </h2>
          <p className="text-black font-poppins text-[20px] font-light leading-normal">
            Artificial Color Free, Cruelty Free, Paraben Free, Sulphate Free,
            Vegan, Halal
          </p>
        </div>
      </div>
    ),
    recommendedProducts: [
      "kid-2-in-1-shampoo-and-conditioner",
      "go-grey-hair-anti-aging-hair-oil",
      "biotin-hair-serum-control-hair-fall",
      "coconut-milk-hair-frizz-control-shampoo",
    ],
    categories: ["hair-mask", "new-arrival"],
    price: " 2,000.00",
  },
  {
    slug: "oil-applicator-bottle-with-nozle-lock",
    title: "Oil Applicator Bottle with Nozle Lock",
    thumbnail: "/oil/2.png",
    company: "The Pureness",
    images: ["/oil/2.png", "/oil/1.png", "/oil/3.png"],
    benefite: "/oil/0.png",
    video: "",
    totalReviews: 6,
    avgRating: 4,
    quantity: "",
    description: (
      <div className="flex flex-col items-start gap-[16px] lg:gap-[32px]">
        {/* 1.precise Application */}
        <div className="flex flex-col items-start gap-[16px] lg:gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[24px] lg:text-[32px] font-medium leading-normal">
            1. Precise Application
          </h2>
          <ul className="flex flex-col list-disc items-start gap-[16px]">
            <li className="text-black font-poppins  ml-[22px] text-[16px] lg:text-[20px] font-light leading-normal">
              The nozzle allows targeted application directly to the scalp or
              specific areas, minimizing mess and waste.
            </li>
            <li className="text-black font-poppins ml-[22px] text-[16px] lg:text-[20px] font-light leading-normal">
              Ideal for sectioned hair or treatments like scalp oiling and root
              care.
            </li>
          </ul>
        </div>
        {/* 2. Leak-Proof & Travel-Friendly */}
        <div className="flex flex-col items-start gap-[16px] lg:gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[24px] lg:text-[32px] font-medium leading-normal">
            2. Leak-Proof & Travel-Friendly
          </h2>
          <ul className="flex flex-col list-disc items-start gap-[16px]">
            <li className="text-black font-poppins ml-[22px] text-[16px] lg:text-[20px] font-light leading-normal">
              The nozzle lock prevents accidental spills or leaks, making it
              safe to carry in bags or while traveling.
            </li>
            {/* <li className="text-black font-poppins text-[20px] font-light leading-normal">
              Ideal for sectioned hair or treatments like scalp oiling and root
              care.
            </li> */}
          </ul>
        </div>
        {/* 3. Hygienic Usage  */}
        <div className="flex flex-col items-start gap-[16px] lg:gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[24px] lg:text-[32px] font-medium leading-normal">
            3. Hygienic Usage
          </h2>
          <ul className="flex flex-col items-start list-disc gap-[16px]">
            <li className="text-black font-poppins ml-[22px] text-[16px] lg:text-[20px] font-light leading-normal">
              The lockable nozzle keeps the tip clean and protected from dust or
              contamination when not in use.
            </li>
            {/* <li className="text-black font-poppins text-[20px] font-light leading-normal">
              Ideal for sectioned hair or treatments like scalp oiling and root
              care.
            </li> */}
          </ul>
        </div>
        {/* 4. Controlled Dispensing*/}
        <div className="flex flex-col items-start gap-[16px] lg:gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[24px] lg:text-[32px] font-medium leading-normal">
            4. Controlled Dispensing
          </h2>
          <ul className="flex flex-col items-start list-disc gap-[16px]">
            <li className="text-black font-poppins ml-[22px] text-[16px] lg:text-[20px] font-light leading-normal">
              You can easily control how much oil you dispense, avoiding overuse
              and ensuring even distribution.
            </li>
            {/* <li className="text-black font-poppins text-[20px] font-light leading-normal">
              Ideal for sectioned hair or treatments like scalp oiling and root
              care.
            </li> */}
          </ul>
        </div>
        {/* 5. Convenient Storage */}
        <div className="flex flex-col items-start gap-[16px] lg:gap-[32px]">
          <h2 className="text-black capitalize font-poppins text-[24px] lg:text-[32px] font-medium leading-normal">
            5. Convenient Storage
          </h2>
          <ul className="flex flex-col items-start lsit-disc gap-[16px]">
            <li className="text-black font-poppins ml-[22px] text-[16px] lg:text-[20px] font-light leading-normal">
              No worry of oil seeping out or creating sticky bottle surfaces —
              stays clean and secure with the nozzle lock.
            </li>
            {/* <li className="text-black font-poppins text-[20px] font-light leading-normal">
              Ideal for sectioned hair or treatments like scalp oiling and root
              care.
            </li> */}
          </ul>
        </div>
      </div>
    ),
    recommendedProducts: [
      "kid-2-in-1-shampoo-and-conditioner",
      "go-grey-hair-anti-aging-hair-oil",
      "biotin-hair-serum-control-hair-fall",
      "coconut-milk-hair-frizz-control-shampoo",
    ],
    categories: ["oil-applicator", "new-arrival", "tools"],
    price: "350.00",
  },
  {
    slug: "soft-bristled-hair-brush-for-kids",
    title: "Choose a Soft Bristled Hair Brush for Kids",
    thumbnail: "/kids-brush/1.png",
    company: "The Pureness",
    images: [
      "/kids-brush/2.png",
      "/kids-brush/1.png",
      "/kids-brush/3.png",
      "/kids-brush/4.png",
      "/kids-brush/5.png",
      "/kids-brush/6.png",
      "/kids-brush/7.png",
      "/kids-brush/8.png",
    ],
    benefite: "/kids-brush/0.png",
    video: "",
    totalReviews: 6,
    avgRating: 4,
    quantity: "",
    description: (
      <div className="flex flex-col items-start gap-[16px] lg:gap-[32px]">
        <h2 className="text-black capitalize font-poppins text-[24px] lg:text-[32px] font-medium leading-normal">
          Benefits
        </h2>
        {/* 1. Gentle on Scalp */}
        <div className="flex flex-col items-start gap-[16px]">
          <h2 className="text-black capitalize font-poppins text-[24px] lg:text-[32px] font-medium leading-normal">
            1. Gentle on Scalp
          </h2>
          <p className="text-black font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
            Soft bristles are ideal for children’s sensitive scalps. They
            minimize pulling, tugging, or scratching during brushing, making
            grooming a calm and comfortable experience.
          </p>
        </div>
        {/* 2. Reduces Hair Breakage */}
        <div className="flex flex-col items-start gap-[16px]">
          <h2 className="text-black capitalize font-poppins text-[24px] lg:text-[32px] font-medium leading-normal">
            2. Reduces Hair Breakage
          </h2>
          <p className="text-black font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
            The flexible, soft bristles glide smoothly through tangles, helping
            to detangle knots without causing unnecessary breakage or damage to
            delicate strands.
          </p>
        </div>
        {/* 3. Promotes Healthy Hair Growth */}
        <div className="flex flex-col items-start gap-[16px]">
          <h2 className="text-black capitalize font-poppins text-[24px] lg:text-[32px] font-medium leading-normal">
            3. Promotes Healthy Hair Growth
          </h2>
          <p className="text-black font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
            By gently stimulating the scalp, soft bristles encourage blood
            circulation, which can support healthier hair growth over time.
          </p>
        </div>
        {/* 4. Tames Tangles with Ease */}
        <div className="flex flex-col items-start gap-[16px]">
          <h2 className="text-black capitalize font-poppins text-[24px] lg:text-[32px] font-medium leading-normal">
            4. Tames Tangles with Ease
          </h2>
          <p className="text-black font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
            Perfect for detangling both wet and dry hair without pain or fuss.
            Especially helpful for managing long or curly hair that tangles
            easily.
          </p>
        </div>
        {/* 5. Kid-Friendly & Safe */}
        <div className="flex flex-col items-start gap-[16px]">
          <h2 className="text-black capitalize font-poppins text-[24px] lg:text-[32px] font-medium leading-normal">
            5. Kid-Friendly & Safe
          </h2>
          <p className="text-black font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
            Designed specifically with children in mind, the rounded bristle
            tips prevent irritation and make daily brushing a stress-free
            routine for both parents and kids.
          </p>
        </div>
        {/* 6. Encourages Good Hair Habits */}
        <div className="flex flex-col items-start gap-[16px]">
          <h2 className="text-black capitalize font-poppins text-[24px] lg:text-[32px] font-medium leading-normal">
            6. Encourages Good Hair Habits
          </h2>
          <p className="text-black font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
            A soft, comfortable brush helps make hair care fun, encouraging
            little ones to participate in their grooming routine from an early
            age.
          </p>
        </div>
      </div>
    ),
    recommendedProducts: [
      "kid-2-in-1-shampoo-and-conditioner",
      "go-grey-hair-anti-aging-hair-oil",
      "biotin-hair-serum-control-hair-fall",
      "coconut-milk-hair-frizz-control-shampoo",
    ],
    categories: ["kids-brush", "new-arrival", "tools"],
    price: "800.00",
  },
  {
    slug: "bamboo-hair-brush",
    title: "Bamboo Hair Brush",
    thumbnail: "/bamboo-hair/5.png",
    company: "The Pureness",
    images: ["/bamboo-hair/5.png", "/bamboo-hair/1.png", "/bamboo-hair/4.png"],
    benefite: "/bamboo-hair/0.png",
    video: "",
    totalReviews: 6,
    avgRating: 4,
    quantity: "",
    description: (
      <div className="flex flex-col items-start gap-[16px] lg:gap-[32px]">
        <h2 className="text-black capitalize font-poppins text-[24px] lg:text-[32px] font-medium leading-normal">
          Benefits
        </h2>
        {/* 1. Eco-Friendly & Sustainable */}
        <div className="flex flex-col items-start gap-[16px]">
          <h2 className="text-black capitalize font-poppins text-[24px] lg:text-[32px] font-medium leading-normal">
            1. Eco-Friendly & Sustainable
          </h2>
          <p className="text-black font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
            Made from natural bamboo, these brushes are biodegradable and a
            great alternative to plastic, reducing environmental impact. 
          </p>
        </div>
        {/* 2. Gentle on Hair & Scalp*/}
        <div className="flex flex-col items-start gap-[16px]">
          <h2 className="text-black capitalize font-poppins text-[24px] lg:text-[32px]font-medium leading-normal">
            2. Gentle on Hair & Scalp
          </h2>
          <p className="text-black font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
            Bamboo bristles are smooth and rounded, providing a gentle massage
            to the scalp while reducing irritation and hair breakage. 
          </p>
        </div>
        {/* 3. Reduces Frizz & Static */}
        <div className="flex flex-col items-start gap-[16px]">
          <h2 className="text-black capitalize font-poppins text-[24px] lg:text-[32px] font-medium leading-normal">
            3. Reduces Frizz & Static
          </h2>
          <p className="text-black font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
            Unlike plastic brushes, bamboo doesn &apos;t conduct electricity,
            helping to minimize static and frizz, leaving hair smoother and
            shinier.
          </p>
        </div>
        {/* 4. Improves Scalp Circulation */}
        <div className="flex flex-col items-start gap-[16px]">
          <h2 className="text-black capitalize font-poppins text-[24px] lg:text-[32px] font-medium leading-normal">
            4. Improves Scalp Circulation
          </h2>
          <p className="text-black font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
            The natural bristles stimulate blood flow to the scalp, which can
            promote healthier hair growth over time.
          </p>
        </div>
        {/* 5. Detangles Without Damage */}
        <div className="flex flex-col items-start gap-[16px]">
          <h2 className="text-black capitalize font-poppins text-[24px] lg:text-[32px] font-medium leading-normal">
            5. Detangles Without Damage
          </h2>
          <p className="text-black font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
            Easily glides through hair—wet or dry—without pulling or snagging,
            making it perfect for all hair types, including thick, curly, or
            wavy hair.  
          </p>
        </div>
        {/* 6. Durable & Long-Lasting */}
        <div className="flex flex-col items-start gap-[16px]">
          <h2 className="text-black capitalize font-poppins text-[24px] lg:text-[32px] font-medium leading-normal">
            6. Durable & Long-Lasting
          </h2>
          <p className="text-black font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
            Bamboo is incredibly strong and water-resistant, meaning your brush
            will last longer and hold up to daily use.
          </p>
        </div>
        {/* 7. Naturally Antibacterial */}
        <div className="flex flex-col items-start gap-[16px]">
          <h2 className="text-black capitalize font-poppins text-[24px] lg:text-[32px] font-medium leading-normal">
            7. Naturally Antibacterial
          </h2>
          <p className="text-black font-poppins text-[16px] lg:text-[20px] font-light leading-normal">
            Bamboo has natural antibacterial properties, helping keep your brush
            cleaner and more hygienic.
          </p>
        </div>
      </div>
    ),
    recommendedProducts: [
      "kid-2-in-1-shampoo-and-conditioner",
      "go-grey-hair-anti-aging-hair-oil",
      "biotin-hair-serum-control-hair-fall",
      "coconut-milk-hair-frizz-control-shampoo",
    ],
    categories: ["kids-brush", "new-arrival", "tools"],
    price: "1,500.00",
  },
];

export default productsList;
