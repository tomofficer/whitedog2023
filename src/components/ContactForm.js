import { useForm, ValidationError } from '@formspree/react';
import { VStack, Button } from '@chakra-ui/react';
import { secondaryFont } from '../Fonts';
import '../componentStyling/global.css';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('xqkveaqa');
  if (state.succeeded) {
    return <p>Thanks! We'll get back to you soon!</p>;
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <VStack fontFamily={secondaryFont} fontWeight={900}>
          <div className="input-container">
            <label htmlFor="name">Name</label>
            <input
              className="input-box"
              id="name"
              type="name"
              name="name"
              placeholder="Enter your name"
            />
          </div>

          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <div className="input-container">
            <label htmlFor="email">Email Address</label>
            <input
              className="input-box"
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>

          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <div className="input-container">
            <label htmlFor="email">Message</label>
            <textarea
              className="input-box text-area"
              id="message"
              name="message"
              placeholder="Enter your message"
            />
          </div>

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
              bg: 'teal.400',
              transform: 'scale(1.05)',
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
