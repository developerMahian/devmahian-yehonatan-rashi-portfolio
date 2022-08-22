import { Box, Button, Flex, Input, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";
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

      <Box as="form" action="#" method="POST">
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
          onClick={async (event) => {
            // Stop the form from submitting and refreshing the page.
            event.preventDefault();

            // Get data from the form.
            const data = {
              content: `מספר טלפון:${phoneNumber}\n\nאימייל:${email}\n\nתיאור:${description}`,
            };

            // Send the data to the server in JSON format.
            const JSONdata = JSON.stringify(data);

            // API endpoint where we send form data.
            const endpoint = "/api/contact-form";

            // Form the request for sending data to the server.
            const options = {
              // The method is POST because we are sending data.
              method: "POST",
              // Tell the server we're sending JSON.
              headers: {
                "Content-Type": "application/json",
              },
              // Body of the request is the JSON data we created above.
              body: JSONdata,
            };

            // Send the form data to our forms API on Vercel and get a response.
            const response = await fetch(endpoint, options);
            console.log("succuss");
          }}
        >
          צור קשר
        </Button>
      </Box>
    </Box>
  );
};

export default ContactSection;
