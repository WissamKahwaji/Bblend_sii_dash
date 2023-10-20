import React from "react";
import { baseURL } from "../API/baseURL";
import { Form, useLoaderData } from "react-router-dom";
import PageContainer from "../Components/UI/PageContainer";
import Input from "../Components/UI/Input";

const GeneralInfo = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <PageContainer className={`flex flex-col p-2`}>
      <h3 className={`self-center text-3xl font-bold`}>Info</h3>
      <Form method="post" className={`md:grid md:grid-cols-2`}>
        <div>
          <h4 className={`text-xl font-semibold mt-8 mb-4`}>Logos :</h4>
          <Input
            inputTitle="Main Logo"
            inputName="main_logo"
            defaultValue={data.MainLogo}
          />
          <Input inputTitle="Logo" inputName="logo" defaultValue={data.logo} />
        </div>
        <div>
          <h4 className={`text-xl font-semibold mt-8 mb-4`}>Sliders :</h4>
          <Input
            inputTitle="First Slider"
            inputName="first_slider"
            defaultValue={data.sliderImgs.first}
          />
          <Input
            inputTitle="Second Slider"
            inputName="second_slider"
            defaultValue={data.sliderImgs.second}
          />
          <Input
            inputTitle="Third Slider"
            inputName="third_slider"
            defaultValue={data.sliderImgs.third}
          />
        </div>
        <div>
          <h4 className={`text-xl font-semibold mt-8 mb-4`}>About:</h4>
          <Input
            inputTitle="About Content"
            inputName="about_intro"
            defaultValue={data.aboutContent.intro}
          />
          <Input
            inputTitle="About First Box Title"
            inputName="about_first_title"
            defaultValue={data.aboutContent.firstBox.title}
          />
          <Input
            inputTitle="About First Box Description"
            inputName="about_first_desc"
            defaultValue={data.aboutContent.firstBox.text}
          />
          <Input
            inputTitle="About First Box Img"
            inputName="about_first_img"
            defaultValue={data.aboutContent.firstBox.img}
          />
          <Input
            inputTitle="About Second Box Title"
            inputName="about_second_title"
            defaultValue={data.aboutContent.secondBox.title}
          />
          <Input
            inputTitle="About Second Box Description"
            inputName="about_second_desc"
            defaultValue={data.aboutContent.secondBox.text}
          />
          <Input
            inputTitle="About Second Box Img"
            inputName="about_second_img"
            defaultValue={data.aboutContent.secondBox.img}
          />
        </div>
        <div>
          <h4 className={`text-xl font-semibold mt-8 mb-4`}>Branding:</h4>
          <Input
            inputTitle="Brand Name"
            inputName="brand_name"
            defaultValue={data.branding.BrandName}
          />
          <Input
            inputTitle="Brand Description"
            inputName="brand_desc"
            defaultValue={data.branding.brandDescription}
          />
        </div>
        <div>
          <h4 className={`text-xl font-semibold mt-8 mb-4`}>Collection:</h4>
          <Input
            inputTitle="Main Image"
            inputName="main_img"
            defaultValue={data.collections.first.img}
          />
          <Input
            inputTitle="Main Image Description"
            inputName="main_img_desc"
            defaultValue={data.collections.first.description}
          />
          <Input
            inputTitle="Left Small Image"
            inputName="left_img"
            defaultValue={data.collections.second.img}
          />
          <Input
            inputTitle="Left Small Description"
            inputName="left_img_desc"
            defaultValue={data.collections.second.description}
          />
          <Input
            inputTitle="Right Small Image"
            inputName="right_img"
            defaultValue={data.collections.third.img}
          />
          <Input
            inputTitle="Right Small Description"
            inputName="right_img_desc"
            defaultValue={data.collections.third.description}
          />
          <Input
            inputTitle="Wide Image"
            inputName="wide_img"
            defaultValue={data.collections.fourth.img}
          />
          <Input
            inputTitle="Wide Description"
            inputName="wide_img_desc"
            defaultValue={data.collections.fourth.description}
          />
        </div>
        <div>
          <h4 className={`text-xl font-semibold mt-8 mb-4`}>Colors :</h4>
          <Input
            inputTitle="Hover Color"
            inputName="hover_color"
            defaultValue={data.colors.hoverColor}
          />
          <Input
            inputTitle="Main Color"
            inputName="main_color"
            defaultValue={data.colors.mainColor}
          />
          <Input
            inputTitle="Nav Links Color Color"
            inputName="nav_color"
            defaultValue={data.colors.navLinksColor}
          />
        </div>
        <div>
          <h4 className={`text-xl font-semibold mt-8 mb-4`}>Contact Us:</h4>
          <Input
            inputTitle="Contact Us Image"
            inputName="contact_img"
            defaultValue={data.contactUsPage.img}
          />
        </div>
        <div>
          <h4 className={`text-xl font-semibold mt-8 mb-4`}>Middle Section:</h4>
          <Input
            inputTitle="Middle Description"
            inputName="middle_description"
            defaultValue={data.middle.description}
          />
          <Input
            inputTitle="Middle Image"
            inputName="middle_img"
            defaultValue={data.middle.img}
          />
          <Input
            inputTitle="Middle Title"
            inputName="middle_title"
            defaultValue={data.middle.title}
          />
        </div>
        <button className={`border px-4 py-1 rounded-lg my-4 col-span-2`}>
          Submit
        </button>
      </Form>
    </PageContainer>
  );
};

export default GeneralInfo;
export const generalInfoLoader = async () => {
  const response = await fetch(`${baseURL}.json`);
  return response;
};
export const generalInfoAction = async ({ request }) => {
  const data = await request.formData();
  data.forEach((element) => {
    console.log(element);
  });
  //!
  const mainLogo = data.get("main_logo");
  const mainLogoResponse = await fetch(`${baseURL}/MainLogo.json`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(mainLogo),
  });
  //!
  const logo = data.get("logo");
  const logoResponse = await fetch(`${baseURL}/logo.json`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(logo),
  });
  //!
  //!
  const sliderImgs = {
    first: data.get("first_slider"),
    second: data.get("second_slider"),
    third: data.get("third_slider"),
  };
  const sliderImgsResponse = await fetch(`${baseURL}/sliderImgs.json`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sliderImgs),
  });
  //!
  //!
  const aboutContent = {
    intro: data.get("about_intro"),
    firstBox: {
      img: data.get("about_first_img"),
      text: data.get("about_first_desc"),
      title: data.get("about_first_title"),
    },
    secondBox: {
      img: data.get("about_second_img"),
      text: data.get("about_second_desc"),
      title: data.get("about_second_title"),
    },
  };
  const aboutContentResponse = await fetch(`${baseURL}/aboutContent.json`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(aboutContent),
  });
  //!
  //!
  const branding = {
    BrandName: data.get("brand_name"),
    brandDescription: data.get("brand_desc"),
  };
  const brandingResponse = await fetch(`${baseURL}/branding.json`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(branding),
  });
  //!
  //!
  const collection = {
    first: {
      description: data.get("main_img_desc"),
      img: data.get("main_img"),
    },
    fourth: {
      description: data.get("wide_img_desc"),
      img: data.get("wide_img"),
    },
    second: {
      description: data.get("left_img_desc"),
      img: data.get("left_img"),
    },
    third: {
      description: data.get("left_img_desc"),
      img: data.get("left_img"),
    },
  };
  const collectionResponse = await fetch(`${baseURL}/collections.json`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(collection),
  });
  //!
  //!
  const colors = {
    hoverColor: data.get("hover_color"),
    mainColor: data.get("main_color"),
    navLinksColor: data.get("nav_color"),
  };
  const colorsResponse = await fetch(`${baseURL}/colors.json`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(colors),
  });
  //!
  //!
  const contactUs = {
    img: data.get("contact_img"),
  };
  const contactUsResponse = await fetch(`${baseURL}/contactUsPage.json`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactUs),
  });
  //!
  //!
  const middleSection = {
    description: data.get("middle_description"),
    img: data.get("middle_img"),
    title: data.get("middle_title"),
  };
  const middleSectionResponse = await fetch(`${baseURL}/middle.json`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(middleSection),
  });
  //!
  return null;
};
