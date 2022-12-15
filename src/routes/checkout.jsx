import { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function CheckoutPage() {
  const { cartTotal, checkout } = useContext(CartContext)
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    shippingAddress: '',
    billingAddress: '',
    creditCard: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    checkout(form)
    navigate('/products')
  }
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  return ( 
    <>
      <h3>Checkout</h3>
      <h4>Total: ${cartTotal.toFixed(2)}</h4>
      <Form onSubmit={handleSubmit} name='checkoutForm'>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' name='name' onChange={handleChange} required={true}/>
        </Form.Group>
        <Form.Group >
          <Form.Label>Shipping Address</Form.Label>
          <Form.Control as='textarea' name='shippingAddress' rows={2} value={form.shippingAddress} onChange={handleChange} required={true}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Billing Address</Form.Label>
          <Form.Control as='textarea' name='billingAddress' rows={2} value={form.billingAddress} onChange={handleChange} required={true}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Credit Card Number</Form.Label>
          <Form.Control type='text' name='creditCard' value={form.creditCard} onChange={handleChange} required={true}/>
        </Form.Group>
        <Button type='submit' className='primary' style={{marginTop: '1em'}}>Submit</Button>
      </Form>
    </>
   );
}

export default CheckoutPage;