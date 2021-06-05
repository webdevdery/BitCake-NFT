import React, { useState } from 'react'
import "@pathofdev/react-tag-input/build/index.css";
import ReactTagInput from "@pathofdev/react-tag-input";

export default function TagInput(props) {
  return (
    <ReactTagInput 
      tags={props.tags} 
      placeholder="Input tags"
      maxTags={10}
      editable={true}
      readOnly={false}
      removeOnBackspace={true}
      onChange={props.onChange}
      // validator={(value) => {
      //   // Don't actually validate e-mails this way
      //   const isEmail = value.indexOf("@") !== -1;
      //   if (!isEmail) {
      //     alert("Please enter an e-mail address");
      //   }
      //   // Return boolean to indicate validity
      //   return isEmail;
      // }}
    />
  )
}
