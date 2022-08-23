import { Box, Button, Flex, Input, Text, Textarea } from "@chakra-ui/react";
import axios from "axios";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import SectionHeading from "../shared/section-heading";

const inputStyles = {
  h: "auto",
  p: "0",
  textAlign: "inherit",
  border: "none",
  "&:focus-visible": { boxShadow: "none" },
};

const ContactSection = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const formHandler = async (event: FormEvent) => {
    event.preventDefault();

    const data = {
      embeds: [
        {
          type: "rich",
          title: `טופס צור קשר`,
          description: "",
          color: 0x00ffff,
          fields: [
            {
              name: `מספר טלפון`,
              value: phoneNumber || " ",
              inline: false,
            },
            {
              name: `אימייל`,
              value: email || " ",
              inline: false,
            },
            {
              name: `תיאור`,
              value: description || " ",
              inline: false,
            },
          ],
        },
      ],
    };

    const JSONdata = JSON.stringify(data);

    const endpoint = "/api/contact-form";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSONdata,
    };

    const myPromise = axios(endpoint, options);

    toast.promise(
      myPromise,
      {
        loading: "טוען",
        success: () => `פנייתך נשמרה בהצלחה`,
        error: (err) => `קרתה שגיאה ${err.toString()}`,
      },
      {
        style: {
          minWidth: "250px",
        },
        success: {
          duration: 5000,
          icon: "🔥",
        },
      }
    );
  };
  return (
    <Box
      as="section"
      id="contact"
      maxW="842px"
      mx="auto"
      py="20px"
      mb={{ base: "160px", lg: "215px" }}
    >
      <SectionHeading fontWeight={500} mb={{ base: "26px", sm: "37px" }}>
        צור קשר
      </SectionHeading>
      <Text
        color="darkBg.50"
        fontWeight={500}
        textAlign="center"
        mb={{ base: "50px", sm: "70px" }}
      >
        אחזור אליכם בהקדם האפשרי בדוא”ל. אם יש העדפה לוואצאפ, כתבו את הטלפון
        שלכם.
      </Text>

      <Box as="form" onSubmit={formHandler}>
        <Flex
          flexDir={{ base: "column", sm: "row" }}
          gap={{ base: "15px", sm: "30px" }}
          mb={{ base: "15px", sm: "30px" }}
          lineHeight="23.5px"
        >
          <Box
            flex={1}
            bgColor="darkBg.100"
            borderRadius="8px"
            p={{ base: "10px 18px", sm: "14px 25px" }}
          >
            <Text as="label">* טלפון</Text>
            <Input
              type="tel"
              placeholder="000 0000 000"
              required
              sx={inputStyles}
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </Box>
          <Box
            flex={1}
            bgColor="darkBg.100"
            borderRadius="8px"
            p={{ base: "10px 18px", sm: "14px 25px" }}
          >
            <Text as="label">* דוא”ל</Text>
            <Input
              type="email"
              placeholder="username@email.com"
              required
              sx={inputStyles}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Box>
        </Flex>

        <Box
          flex={1}
          bgColor="darkBg.100"
          borderRadius="8px"
          p={{ base: "10px 18px", sm: "14px 25px" }}
          mb={{ base: "30px", sm: "50px" }}
        >
          <Text as="label" mb="2px">
            * ההודעה
          </Text>
          <Textarea
            placeholder="השאר כאן את הודעתך"
            sx={inputStyles}
            rows={8}
            resize="none"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </Box>

        <Button
          type="submit"
          w="100%"
          h="auto"
          variant="unstyled"
          bg="primary"
          py={{ base: "18px", sm: "27px" }}
        >
          צור קשר
        </Button>
      </Box>
    </Box>
  );
};

export default ContactSection;
