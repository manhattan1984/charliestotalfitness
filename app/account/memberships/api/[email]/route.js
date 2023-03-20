// Require the library
const paystack = require("paystack-api")(
  "sk_test_386fb085933911fde995accdc6517ea64ce7ccfa"
);

export async function GET(request, { params: { email } }) {
  // paystack.{resource}.{method}

  console.log('email', email)

  try {
    const data = await paystack.customer.get({
      id: email,
    });
    console.log(data);
    return new Response(JSON.stringify(data));
  } catch (error) {
    // console.log(error);
    return new Error(error);
  }

  // curl https://api.paystack.co/subscription -H "Authorization: Bearer sk_test_386fb085933911fde995accdc6517ea64ce7ccfa" -X GET
}
