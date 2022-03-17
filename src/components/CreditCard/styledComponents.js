import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
`

export const SubContainer1 = styled.div`
  background-color: #3b4b69;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SubContainer2 = styled.div`
  background-color: #ffffff;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ImageContainer = styled.div`
  background-image: url(${props => props.imgUrl});
  height: 250px;
  background-repeat: no-repeat;
  width: 80%;
  padding: 60px 30px 40px;
`

export const CardNumber = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  color: #ffffff;
`

export const CardNumberInput = styled.input`
  padding: 10px;
  border: none;
  width: 100%;
  outline: none;
  margin-bottom: 20px;
`

export const FormContainer = styled.div`
  background-color: #d3d9e0;
  height: 200px;
  width: 60%;
  padding: 30px;
`

export const PaymentHeading = styled.h1`
  text-align: center;
`

export const CardName = styled.p`
  color: #ffffff;
`

export const Heading = styled.h1``
