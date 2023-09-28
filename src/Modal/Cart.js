import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { openModal } from "../Redux/Modal/Reducer";
const Cart=() =>{
  const modal = useSelector((state)=>state.modal.value);
  console.log("Cart",{modal})
  const dispatch = useDispatch()
    return <>
              <Modal isOpen={modal}>
                <ModalHeader>Title</ModalHeader>
                <ModalBody>Body</ModalBody>
                <ModalFooter>
                  <Button onClick={()=>dispatch(openModal())}>OK</Button>
                </ModalFooter>
              </Modal>
    </>
  }
  
  export default Cart;