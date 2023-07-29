import { useForm, ValidationError } from '@formspree/react';
import { VStack } from '@chakra-ui/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('xqkveaqa');
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <VStack>
          <label htmlFor="name">Name</label>
          <input id="name" type="name" name="name" placeholder="Your Name" />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="email">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </VStack>
      </form>
    </>
  );
};

export default ContactForm;
