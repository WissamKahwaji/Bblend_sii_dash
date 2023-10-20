import React from "react";
import Input from "../Components/UI/Input";
import { Form, useNavigation } from "react-router-dom";
import { baseURL } from "../API/baseURL";
import PageContainer from "../Components/UI/PageContainer";
import { useSelector } from "react-redux";

const AddProduct = () => {
  const navigation = useNavigation();
  const colorsData = useSelector((state) => state.colorsSlice);
  const headingTitle = {
    color: colorsData.mainColor,
  };
  return (
    <PageContainer>
      <h2
        style={headingTitle}
        className={`text-center text-2xl font-semibold mb-2`}
      >
        Add Product
      </h2>
      <p className={`text-center text-gray-400 mb-4`}>
        Please Enter The Required Information
      </p>
      <Form method="post" className={`grid grid-cols-1 lg:grid-cols-2 p-4`}>
        <Input
          inputTitle={`Enter the Product Title`}
          inputName={`product_title`}
          inputType="text"
        />
        <Input
          inputTitle={`Enter the Product Title AR`}
          inputName={`product_title_ar`}
          inputType="text"
        />
        <Input
          inputTitle={`Enter the Product Image Link`}
          inputName={`product_image_link`}
          inputType="text"
        />
        <Input
          inputTitle={`Enter the Product First Sub Image Link`}
          inputName={`product_first_sub_image_link`}
          inputType="text"
        />
        <Input
          inputTitle={`Enter the Product Second Sub Image Link`}
          inputName={`product_second_sub_image_link`}
          inputType="text"
        />
        <Input
          inputTitle={`Enter the Product Third Sub Image Link`}
          inputName={`product_third_sub_image_link`}
          inputType="text"
        />
        {/* <Input
          inputTitle={`Enter the Product Size`}
          inputName={`product_size`}
          inputType="text"
        />
        <Input
          inputTitle={`Enter the Product Size Unit`}
          inputName={`product_size_unit`}
          inputType="text"
        /> */}
        <div className={`flex flex-col mb-4`}>
          <label className={`text-xl mb-2`}>
            Enter The Description of the Product :
          </label>
          <textarea
            name="product_desc"
            className={`p-1 border  w-60 rounded-lg outline-none`}
          />
        </div>
        <div className={`flex flex-col mb-4`}>
          <label className={`text-xl mb-2`}>
            Enter The Description of the Product AR:
          </label>
          <textarea
            name="product_desc_ar"
            className={`p-1 border  w-60 rounded-lg outline-none`}
          />
        </div>
        <div className={`flex flex-col mb-4`}>
          <label className={`text-xl mb-2`}>
            Enter The Ingredients of the Product :
          </label>
          <textarea
            name="product_ing"
            className={`p-1 border w-60 rounded-lg outline-none`}
          />
        </div>
        <div className={`flex flex-col mb-4`}>
          <label className={`text-xl mb-2`}>
            Enter The Ingredients of the Product AR:
          </label>
          <textarea
            name="product_ing_ar"
            className={`p-1 border w-60 rounded-lg outline-none`}
          />
        </div>
        <div className={`flex flex-col mb-4`}>
          <label className={`text-xl mb-2`}>
            Enter the Usage of the Product :
          </label>
          <textarea
            name="product_usage"
            className={`p-1 border  w-60 rounded-lg outline-none`}
          />
        </div>
        <div className={`flex flex-col mb-4`}>
          <label className={`text-xl mb-2`}>
            Enter the Usage of the Product AR:
          </label>
          <textarea
            name="product_usage_ar"
            className={`p-1 border  w-60 rounded-lg outline-none`}
          />
        </div>
        <div className={`flex flex-col mb-4`}>
          <label className={`text-xl mb-2`}>
            Enter the Expiry Information of the Product :
          </label>
          <textarea
            name="product_exp"
            className={`p-1 border w-60 rounded-lg outline-none`}
          />
        </div>
        <div className={`flex flex-col mb-4`}>
          <label className={`text-xl mb-2`}>
            Enter the Expiry Information of the Product AR:
          </label>
          <textarea
            name="product_exp_ar"
            className={`p-1 border w-60 rounded-lg outline-none`}
          />
        </div>
        {/* <Input
          inputTitle={`Enter the Product Price`}
          inputName={`product_price`}
          inputType="text"
        /> */}
        <Input
          inputTitle={`Enter the Product Prefix`}
          inputName={`product_prefix`}
          inputType="text"
        />
        <Input
          inputTitle={`Enter the Product Size 1`}
          inputName={`product_size_1`}
          inputType="text"
        />
        <Input
          inputTitle={`Enter the Product Price for Size 1`}
          inputName={`product_price_1`}
          inputType="text"
        />
        <Input
          inputTitle={`Enter the Product Weight for Size 1`}
          inputName={`product_weight_1`}
          inputType="text"
        />
        {/*  */}
        <Input
          inputTitle={`Enter the Product Size 2`}
          inputName={`product_size_2`}
          inputType="text"
        />
        <Input
          inputTitle={`Enter the Product Price for Size 2`}
          inputName={`product_price_2`}
          inputType="text"
        />
        <Input
          inputTitle={`Enter the Product Weight for Size 2`}
          inputName={`product_weight_2`}
          inputType="text"
        />
        {/*  */}
        <Input
          inputTitle={`Enter the  Product Size 3`}
          inputName={`product_size_3`}
          inputType="text"
        />
        <Input
          inputTitle={`Enter the  Product Price for Size 3`}
          inputName={`product_price_3`}
          inputType="text"
        />
        <Input
          inputTitle={`Enter the Product Weight for Size 3`}
          inputName={`product_weight_3`}
          inputType="text"
        />
        <button className={`border px-4 py-1 rounded-lg`}>
          {navigation.state === "submitting"
            ? "Submitting...Please Wait"
            : "Submit"}
        </button>
      </Form>
    </PageContainer>
  );
};

export default AddProduct;
export const addProductsAction = async ({ request }) => {
  const confirm = window.confirm("Are You Sure");
  if (confirm === true) {
    const data = await request.formData();
    const formDataArray = [];

    // Iterate over the form data
    for (const [key, value] of data.entries()) {
      // Get the form data for the current key
      const formDataItem = data.get(key);

      // Create a new form data object for the current key
      const formDataObject = {
        key,
        value,
      };

      // Add the form data object to the array
      formDataArray.push(formDataObject);
    }
    console.log(formDataArray);

    const result = {
      img: formDataArray.find((item) => item.key === "product_image_link")
        .value,
      imgs: {
        first: formDataArray.find(
          (item) => item.key === "product_first_sub_image_link"
        ).value,
        second: formDataArray.find(
          (item) => item.key === "product_second_sub_image_link"
        ).value,
        third: formDataArray.find(
          (item) => item.key === "product_third_sub_image_link"
        ).value,
      },
      // size: formDataArray.find((item) => item.key === "product_size").value,
      // sizeUnit: formDataArray.find((item) => item.key === "product_size_unit")
      //   .value,

      // price: formDataArray.find((item) => item.key === "product_price").value,
      title: formDataArray.find((item) => item.key === "product_title").value,
      titleAr: formDataArray.find((item) => item.key === "product_title_ar")
        .value,
      type: formDataArray.find((item) => item.key === "product_prefix").value,
      desc: formDataArray.find((item) => item.key === "product_desc").value,
      descAR: formDataArray.find((item) => item.key === "product_desc_ar")
        .value,
      usage: formDataArray.find((item) => item.key === "product_usage").value,
      usageAR: formDataArray.find((item) => item.key === "product_usage_ar")
        .value,
      ing: formDataArray.find((item) => item.key === "product_ing").value,
      ingAR: formDataArray.find((item) => item.key === "product_ing_ar").value,
      exp: formDataArray.find((item) => item.key === "product_exp").value,
      expAR: formDataArray.find((item) => item.key === "product_exp_ar").value,
      deepDetails: {
        first: {
          size: formDataArray.find((item) => item.key === "product_size_1")
            .value,
          price: formDataArray.find((item) => item.key === "product_price_1")
            .value,
          weight: formDataArray.find((item) => item.key === "product_weight_1")
            .value,
        },
        second: {
          size: formDataArray.find((item) => item.key === "product_size_2")
            .value,
          price: formDataArray.find((item) => item.key === "product_price_2")
            .value,
          weight: formDataArray.find((item) => item.key === "product_weight_2")
            .value,
        },
        third: {
          size: formDataArray.find((item) => item.key === "product_size_3")
            .value,
          price: formDataArray.find((item) => item.key === "product_price_3")
            .value,
          weight: formDataArray.find((item) => item.key === "product_weight_3")
            .value,
        },
      },
    };

    console.log(result);
    const response = await fetch(`${baseURL}allProducts.json`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(result),
    });
    const responseData = await response.json();
    console.log(responseData);
    window.alert("Process Has Been Completed");
    // Return the array of form data objects
    return null;
  } else {
    window.alert("Process Has Been Canceled");
    return null;
  }
};
