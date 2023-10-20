import React from "react";
import PageContainer from "../Components/UI/PageContainer";
import { Form, useLoaderData } from "react-router-dom";
import Input from "../Components/UI/Input";
import { baseURL } from "../API/baseURL";
import { wait } from "@testing-library/user-event/dist/utils";

const EditContactInfo = () => {
  const data = useLoaderData();
  return (
    <PageContainer className={`p-2`}>
      <Form method="post" className={`grid grid-cols-1 lg:grid-cols-2`}>
        <Input
          inputName="mail"
          inputTitle="Mail ID"
          defaultValue={data.Email}
        />
        <Input
          inputName="call"
          inputTitle="Mobile Number"
          defaultValue={data.callUs}
        />

        <Input
          inputName="insta"
          inputTitle="Instagram Link"
          defaultValue={data.insta}
        />
        <Input
          inputName="whatsapp"
          inputTitle="Whatsapp Number"
          defaultValue={data.whatsapp}
        />
        <button className={`border px-4 py-1 rounded-lg`}>Update</button>
      </Form>
    </PageContainer>
  );
};

export default EditContactInfo;
export const editContactInfoLoader = async () => {
  const response = await fetch(`${baseURL}contactInfo.json`);
  const data = await response.json();
  return data;
};
const editContactInfoAction = async ({ request }) => {
  const data = await request.formData();
  const result = {};
  const response = await fetch(`${baseURL}contactInfo.json`, {
    method: "put",
  });
};
