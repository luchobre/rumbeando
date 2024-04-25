'use client'
import React, { useState } from "react";
import { Textarea, Link, Button } from "@nextui-org/react";
import './Contact.css'

const Contact = () => {
    const [message, setMessage] = useState('')

    const handleMessage =(e)=> {
        setMessage(e.target.value)
    }
  return (
    <>
      <div className="containerTextArea" id="contacto">
      <h1>Podes enviarnos un WhatsApp para sacarte todas las dudas</h1>
        <Textarea
          label="Enviar mensaje al WhatsApp"
          placeholder="Escriba su mensaje"
          className="textArea"
          value={message}
          onChange={handleMessage}
        />
      <Link
              href={`https://wa.me/5491130141734?text=${message}`}
              isExternal
            >
              <Button color="primary">Consultar por WhatsApp</Button>
        </Link>
      </div>
    </>
  );
};

export default Contact;
