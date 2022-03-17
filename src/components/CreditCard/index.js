import {useState} from 'react'

import {
  Container,
  SubContainer1,
  SubContainer2,
  ImageContainer,
  CardNumber,
  CardNumberInput,
  FormContainer,
  PaymentHeading,
  CardName,
  Heading,
} from './styledComponents'

const imageUrl = 'https://assets.ccbp.in/frontend/hooks/credit-card-bg.png'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')

  const [cardName, setCardName] = useState('')

  const onChangeNumber = event => {
    setCardNumber(event.target.value)
  }

  const onChangeName = event => {
    setCardName(event.target.value)
  }

  return (
    <Container>
      <SubContainer1>
        <Heading>CREDIT CARD</Heading>
        <ImageContainer imgUrl={imageUrl} data-testid="creditCard">
          <CardNumber>{cardNumber}</CardNumber>
          <p>CARDHOLDER NAME</p>
          <CardName>{cardName.toUpperCase()}</CardName>
        </ImageContainer>
      </SubContainer1>
      <SubContainer2>
        <FormContainer>
          <PaymentHeading>Payment Method</PaymentHeading>
          <CardNumberInput
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={onChangeNumber}
          />
          <CardNumberInput
            type="text"
            placeholder="Cardholder Name"
            value={cardName}
            onChange={onChangeName}
          />
        </FormContainer>
      </SubContainer2>
    </Container>
  )
}

export default CreditCard
