// Require the library
const paystack = require("paystack-api")(
  "sk_test_386fb085933911fde995accdc6517ea64ce7ccfa"
);

export async function GET(request) {
  const { data: pagesData } = await paystack.page.list();



  const pages = pagesData.map(({ name, description, slug }) => ({
    name,
    description,
    slug,
  }));

  const { data: plansData } = await paystack.plan.list();

  const plans = plansData.map(({ amount, interval, name }) => ({
    name,
    amount,
    interval,
  }));

  const merged = plans.map(({ name: planName, amount, interval }) =>
    pages.map(({ name: pageName, slug }) => {
      if (planName === pageName) {
        return { slug, planName, amount, interval };
      }
    })
  );

  const data = merged.flat().filter(item => item);
  // console.log(data);

  return new Response(JSON.stringify(data));
}
