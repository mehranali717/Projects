import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { displayModal } from "../../Redux/Modal/Reducer";
const IconWrapper = styled.div`
  width: 60px;
  display: flex;
  justify-content: space-between;
  color: #2b2f32;
  transition: 0.6s;
  & > :hover {
    color: #007aff;
  }
`;
const Circularbadge = styled.span`
  background-color: #fd4b6b;
  border: 2px solid #fff;
  border-radius: 50%;
  color: #fff;
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  position: absolute;
  right: -13px;
  text-align: center;
  top: -10px;
  width: 21px;
  height: 21px;
`;
const IconinnerWrapper = styled.span`
  position: relative;
  cursor:pointer;
`;
const CustomModal = styled(Modal)`
  &.slide-from-right .modal-dialog {
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
  }

  &.slide-from-right.modal-open .modal-dialog {
    transform: translateX(0);
  }
`;
const Cart = ({ icon }) => {
    const modal = useSelector((state)=>state.modal.value);
    const dispatch = useDispatch();
  return <>
           <IconWrapper>
              {icon.map((icon, index) => (
                <IconinnerWrapper key={index}>
                  <FontAwesomeIcon onClick={() => dispatch(displayModal())} icon={icon.icon} />
                  <Circularbadge>0</Circularbadge>
                </IconinnerWrapper>
              ))}
    </IconWrapper>
              <CustomModal isOpen={modal} className="slide-from-right">
                <ModalHeader>Shopping Cart</ModalHeader>
                <ModalBody>Add $200.00 more to qualify for free shipping</ModalBody>
                <ModalFooter>
                  <p>Your Cart Is Empty</p>
                  <Button onClick={()=>dispatch(displayModal())}>OK</Button>
                </ModalFooter>
              </CustomModal>
  </>;
};
export default Cart;
