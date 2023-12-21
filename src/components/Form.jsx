"use client";

import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

function Form() {
  return (
    <>
      <form className="flex max-w-md flex-col gap-4 mx-auto mt-40">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Usuario" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="tuemail@email.com"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Contraseña" />
          </div>
          <TextInput id="password1" type="password" required />
        </div>

        <Link to="/">
          <Button type="submit" className="w-full">
            Ingresar
          </Button>
        </Link>
      </form>
    </>
  );
}

export default Form;
