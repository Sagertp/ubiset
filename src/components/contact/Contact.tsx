import React from "react";
import Form from "./ContactForm";
import Info from "./Info";
import "./Contact.css";

import Message from "../../libs/interfaces/message";
import funcProps from "../../libs/interfaces/funcProps";
import { db } from "../../libs/interfaces/firebase";

const funContact: funcProps = {
  addMessage: async (message: Message) => {
    let consoleMessage: string = "New Message is Saved.";
    await db.collection("messages").doc().set(message);
    console.log(consoleMessage);
  },
};

const Contact = () => {
  return (
    <div className="container-fluid bodyCreative">
      <div className="row">
        <Info />
        <Form addMessage={funContact.addMessage} />
      </div>
    </div>
  );
};
export default Contact;
