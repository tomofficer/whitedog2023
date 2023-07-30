import { useForm, ValidationError } from '@formspree/react';
import { VStack, Button, Text } from '@chakra-ui/react';
import { secondaryFont } from '../Fonts';
import '../componentStyling/global.css';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('xqkveaqa');
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <VStack fontFamily={secondaryFont} fontWeight={900}>
          <label htmlFor="name">Name</label>
          <input
            className="input-box"
            id="name"
            type="name"
            name="name"
            placeholder="Enter your name"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <label style={{ textAlign: 'left' }} htmlFor="email">
            Email Address
          </label>
          <input
            className="input-box"
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="email">Message</label>
          <textarea
            className="text-area"
            id="message"
            name="message"
            placeholder="Enter your message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <Button
            type="submit"
            disabled={state.submitting}
            bg="black"
            color="white"
            px={16}
            mt={6}
            _hover={{
              bg: 'green.400',
            }}
          >
            Submit
          </Button>
        </VStack>
      </form>
    </>
  );
};

export default ContactForm;
