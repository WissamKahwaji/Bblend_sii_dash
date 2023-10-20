import React, { useState } from "react";
import { baseURL } from "../API/baseURL";
import { Form, useLoaderData } from "react-router-dom";
import Input from "../Components/UI/Input";
import { useSelector } from "react-redux";
import PageContainer from "../Components/UI/PageContainer";

const EditProductForm = () => {
  const data = useLoaderData();
  console.log(data);
  const [main, setMain] = useState(false);
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const colorsData = useSelector((state) => state.colorsSlice);
  const headingTitle = {
    color: colorsData.mainColor,
  };
  return (
    <PageContainer className={`p-2`}>
      <h2
        style={headingTitle}
        className={`text-center text-2xl font-semibold mb-2`}
      >
        Your Product
      </h2>
      <Form method="post" className={`flex flex-col md:grid md:grid-cols-2`}>
        <Input
          inputTitle={`Enter the Product Title`}
          inputName={`product_title`}
          inputType="text"
          defaultValue={data.title}
        />
        <div>
          <img src={data.img} className={`w-40 rounded-lg`} alt={data.title} />
          {main ? (
            <span className={`text-lg font-semibold text-red-500`}>
              Changed
            </span>
          ) : (
            <span className={`text-lg font-semibold text-red-500`}>
              Did Not Change
            </span>
          )}
        </div>
        <Input
          inputTitle={`Enter the Product Image Link`}
          inputName={`product_image_link`}
          inputType="text"
          defaultValue={data.img}
          onChange={() => {
            setMain(true);
          }}
        />
        <div>
          <img
            src={data.imgs.first}
            className={`w-40 rounded-lg`}
            alt={data.title}
          />
          {first ? (
            <span className={`text-lg font-semibold text-red-500`}>
              Changed
            </span>
          ) : (
            <span className={`text-lg font-semibold text-red-500`}>
              Did Not Change
            </span>
          )}
        </div>
        <Input
          inputTitle={`Enter the Product First Sub Image Link`}
          inputName={`product_first_sub_image_link`}
          inputType="text"
          defaultValue={data.imgs.first}
          onChange={() => {
            setFirst(true);
          }}
        />
        <div>
          <img
            src={data.imgs.second}
            className={`w-40 rounded-lg`}
            alt={data.title}
          />
          {second ? (
            <span className={`text-lg font-semibold text-red-500`}>
              Changed
            </span>
          ) : (
            <span className={`text-lg font-semibold text-red-500`}>
              Did Not Change
            </span>
          )}
        </div>
        <Input
          inputTitle={`Enter the Product Second Sub Image Link`}
          inputName={`product_second_sub_image_link`}
          inputType="text"
          defaultValue={data.imgs.second}
          onChange={() => {
            setSecond(true);
          }}
        />
        <div>
          <img
            src={data.imgs.third}
            className={`w-40 rounded-lg`}
            alt={data.title}
          />
          {third ? (
            <span className={`text-lg font-semibold text-red-500`}>
              Changed
            </span>
          ) : (
            <span className={`text-lg font-semibold text-red-500`}>
              Did Not Change
            </span>
          )}
        </div>
        <Input
          inputTitle={`Enter the Product Third Sub Image Link`}
          inputName={`product_third_sub_image_link`}
          inputType="text"
          defaultValue={data.imgs.third}
          onChange={() => {
            setThird(true);
          }}
        />
        <div className={`flex flex-col mb-4`}>
          <label className={`text-xl mb-2`}>
            Enter The Description of the Product :
          </label>
          <textarea
            name="product_desc"
            className={`p-1 border w-60 rounded-lg outline-none`}
            defaultValue={data.desc}
          />
        </div>
        <div className={`flex flex-col mb-4`}>
          <label className={`text-xl mb-2`}>
            Enter The Ingredients of the Product :
          </label>
          <textarea
            name="product_ing"
            className={`p-1 border w-60 rounded-lg outline-none`}
            defaultValue={data.ing}
          />
        </div>
        <div className={`flex flex-col mb-4`}>
          <label className={`text-xl mb-2`}>
            Enter the Usage of the Product :
          </label>
          <textarea
            name="product_usage"
            className={`p-1 border w-60 rounded-lg outline-none`}
            defaultValue={data.usage}
          />
        </div>
        <div className={`flex flex-col mb-4`}>
          <label className={`text-xl mb-2`}>
            Enter the Expiry Information of the Product :
          </label>
          <textarea
            name="product_exp"
            className={`p-1 border w-60 rounded-lg outline-none`}
            defaultValue={data.exp}
          />
        </div>
        {/* <Input
          inputTitle={`Enter the Product Size`}
          inputName={`product_size`}
          inputType="text"
          defaultValue={data.size}
        /> */}
        {/* <Input
          inputTitle={`Enter the Product Size Unit`}
          inputName={`product_size_unit`}
          inputType="text"
          defaultValue={data.sizeUnit}
        /> */}
        {/* <Input
          inputTitle={`Enter the Product Price`}
          inputName={`product_price`}
          inputType="text"
          defaultValue={data.price}
        /> */}
        <Input
          inputTitle={`Enter the Product Prefix`}
          inputName={`product_prefix`}
          inputType="text"
          defaultValue={data.type}
        />
        <Input
          inputTitle={`Enter the Product Size 1`}
          inputName={`product_size_1`}
          inputType="text"
          defaultValue={data.deepDetails.first.size}
        />
        <Input
          inputTitle={`Enter the Product Price for Size 1`}
          inputName={`product_price_1`}
          inputType="text"
          defaultValue={data.deepDetails.first.price}
        />
        <Input
          inputTitle={`Enter the Product Weight for Size 1`}
          inputName={`product_weight_1`}
          inputType="text"
          defaultValue={data.deepDetails.first.weight}
        />
        {/*  */}
        <Input
          inputTitle={`Enter the  Product Size 2`}
          inputName={`product_size_2`}
          inputType="text"
          defaultValue={data.deepDetails.second.size}
        />
        <Input
          inputTitle={`Enter the Product Price for Size 2`}
          inputName={`product_price_2`}
          inputType="text"
          defaultValue={data.deepDetails.second.price}
        />
        <Input
          inputTitle={`Enter the Product Weight for Size 2`}
          inputName={`product_weight_2`}
          inputType="text"
          defaultValue={data.deepDetails.second.weight}
        />
        {/*  */}
        <Input
          inputTitle={`Enter the Product Size 3`}
          inputName={`product_size_3`}
          inputType="text"
          defaultValue={data.deepDetails.third.size}
        />
        <Input
          inputTitle={`Enter the Product Price for Size 3`}
          inputName={`product_price_3`}
          inputType="text"
          defaultValue={data.deepDetails.third.price}
        />
        <Input
          inputTitle={`Enter the Product Weight for Size 3`}
          inputName={`product_weight_3`}
          inputType="text"
          defaultValue={data.deepDetails.third.weight}
        />
        <button className={`border px-4 py-1 rounded-lg`}>Update</button>
      </Form>
    </PageContainer>
  );
};

export default EditProductForm;

export const editProductFormLoader = async ({ params }) => {
  const productId = params.productId;
  const response = await fetch(`${baseURL}allProducts/${productId}.json`);
  const data = await response.json();
  return data;
};
export const editProductFormAction = async ({ request, params }) => {
  const data = await request.formData();
  const productId = params.productId;
  const result = {
    img: data.get("product_image_link"),
    imgs: {
      first: data.get("product_first_sub_image_link"),
      second: data.get("product_second_sub_image_link"),
      third: data.get("product_third_sub_image_link"),
    },
    // size: data.get("product_size"),
    // sizeUnit: data.get("product_size_unit"),
    // price: data.get("product_price"),
    title: data.get("product_title"),
    type: data.get("product_prefix"),
    desc: data.get("product_desc"),
    usage: data.get("product_usage"),
    ing: data.get("product_ing"),
    exp: data.get("product_exp"),
    deepDetails: {
      first: {
        size: data.get("product_size_1"),
        price: data.get("product_price_1"),
        weight: data.get("product_weight_1"),
      },
      second: {
        size: data.get("product_size_2"),
        price: data.get("product_price_2"),
        weight: data.get("product_weight_2"),
      },
      third: {
        size: data.get("product_size_3"),
        price: data.get("product_price_3"),
        weight: data.get("product_weight_3"),
      },
    },
  };

  const response = await fetch(`${baseURL}allProducts/${productId}.json`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(result),
  });
  const responseData = await response.json();
  console.log(responseData);
  // Return the array of form data objects
  return null;
};
