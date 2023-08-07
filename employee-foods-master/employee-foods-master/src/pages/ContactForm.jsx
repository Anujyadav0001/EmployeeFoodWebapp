import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Container, Row, Col} from "reactstrap";
import "../styles/ContactForm.css";
const ContactForm = () => {
  const {
    register,

    formState: { errors }
  } = useForm();
  const [disabled] = useState(false);



  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center">
            <h2>Contact Us</h2>
          </Col>
          <div className='ContactForm'>
            <div className='container'>
              <div className='row'>
                <div className='col-12 text-center'>
                  <div className='contactForm'>
                    <form id='contact-form' noValidate>

                      <div className='row formRow'>
                        <div className='col-6'>
                          <input
                            type='text'
                            name='name'
                            {...register('name', {
                              required: {
                                value: true,
                                message: 'Please enter your name'
                              },
                              maxLength: {
                                value: 30,
                                message: 'Please use 30 characters or less'
                              }
                            })}
                            className='form-control formInput'
                            placeholder='Name'
                          ></input>
                          {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                        </div>
                        <div className='col-6'>
                          <input
                            type='email'
                            name='email'
                            {...register('email', {
                              required: true,
                              pattern:
                                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                            })}
                            className='form-control formInput'
                            placeholder='Email address'
                          ></input>
                          {errors.email && (
                            <span className='errorMessage'>Please enter a valid email address</span>
                          )}
                        </div>
                      </div>

                      <div className='row formRow'>
                        <div className='col'>
                          <input
                            type='text'
                            name='Number'
                            {...register('Number', {
                              required: {
                                value: true,
                                message: 'Please enter a Number'
                              },
                              maxLength: {
                                value: 10,
                                message: 'Number cannot exceed 10 characters'
                              }
                            })}
                            className='form-control formInput'
                            placeholder='Number'
                          ></input>
                          {errors.Number && (
                            <span className='errorMessage'>{errors.Number.message}</span>
                          )}
                        </div>
                      </div>

                      <div className='row formRow'>
                        <div className='col'>
                          <textarea
                            rows={3}
                            name='message'
                            {...register('message', {
                              required: true
                            })}
                            className='form-control formInput'
                            placeholder='Message'
                          ></textarea>
                          {errors.message && <span className='errorMessage'>Please enter a message</span>}
                        </div>
                      </div>

                      <button className='submit-btn' disabled={disabled} type='submit'>
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
    
  );
};

export default ContactForm;
