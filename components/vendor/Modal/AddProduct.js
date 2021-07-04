import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
    Grid,
    Flex,
    Box,
    Badge,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Layout from "../../Layout";
import styles from "../../../styles/products.module.css";

const AddProduct = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <p className="ms-5 text-danger" onClick={onOpen}>Upload Product</p>

            <Modal isOpen={isOpen} onClose={onClose} size="2xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader> Add Product</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Layout>
                            <form action="">
                                <div className="input-group mb-3">
                                    <input type="file" className="form-control d-none" id="inputGroupFile02" />
                                    <label className={styles.uploadImg} htmlFor="inputGroupFile02">
                                        <i className={`${ styles.imgIcon } far fa-file-image`}></i>
                                        Upload / update image <i className="far fa-edit"></i>
                                    </label>
                                </div>
                                <input type="text" name="" placeholder="Product Name" id="" className="form-control mt-3" />
                                <input type="text" name="" placeholder="Price" id="" className="form-control mt-3" />

                                <input type="text" name="" placeholder="Discount" id="" className="form-control mt-3" />
                                <input type="text" name="" placeholder="Category" id="" className="form-control mt-3" />
                                <input type="text" name="" placeholder="Description" id="" className="form-control mt-3" />
                                <div className="text-center">
                                    <input className={`${ styles.submitBtn } btn m-3`} type="submit" value="Submit" />
                                </div>
                            </form>
                        </Layout>
                    </ModalBody>

                    <ModalFooter>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default AddProduct;