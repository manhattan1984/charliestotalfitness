import { getVariationValue } from "@/utils/helpers";
import React from "react";
import Packages from "../(components)/Packages";
import {createClient} from "../../utils/supabase-server";

const page = async () => {
  const supabase = createClient();

  let { data: product_item, error } = await supabase.from("product_item")
    .select(`price, id, product!inner(name), product_configuration!inner(
      variation_option_id!inner(value)
    )`);


  const plans = product_item.map(
    ({ price, id, product: { name }, product_configuration }) => ({
      price,
      id,
      name,
      value: getVariationValue(product_configuration),
    })
  );
  return (
    <div>
      <Packages plans={plans} />
    </div>
  );
};

export default page;
