import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
export default function Accordions() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <div className="px-10 py-32 space-y-5 text-yellow-100 ">
      <Accordion className="border-2 border-yellow-100 border-solid" open={open === 1}>
        <AccordionHeader className="text-3xl px-10 "  onClick={() => handleOpen(1)}>
          1. This is a question?
        </AccordionHeader>
        <AccordionBody className="text-2xl text-yellow-100 px-10 text-justify">
          We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion className="border-2 border-yellow-100 border-solid" open={open === 2}>
        <AccordionHeader className="text-3xl px-10 " onClick={() => handleOpen(2)}>
          2. This is a question?
        </AccordionHeader>
        <AccordionBody className="text-2xl text-yellow-100 px-10 text-justify">
          We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion className="border-2 border-yellow-100 border-solid" open={open === 3}>
        <AccordionHeader className="text-3xl px-10 " onClick={() => handleOpen(3)}>
          3. This is a question?
        </AccordionHeader>
        <AccordionBody className="text-2xl text-yellow-100 px-10 text-justify">
          We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion className="border-2 border-yellow-100 border-solid" open={open === 4}>
        <AccordionHeader className="text-3xl px-10 " onClick={() => handleOpen(4)}>
          4. This is a question?
        </AccordionHeader>
        <AccordionBody className="text-2xl text-yellow-100 px-10 text-justify">
          We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion className="border-2 border-yellow-100 border-solid" open={open === 5}>
        <AccordionHeader className="text-3xl px-10 " onClick={() => handleOpen(5)}>
          5. This is a question?
        </AccordionHeader>
        <AccordionBody className="text-2xl text-yellow-100 px-10 text-justify">
          We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
    </div>
  );
}