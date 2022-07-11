import { Flex, Container, Text, Heading, Image } from "@chakra-ui/react"
import CustomButton from "../../components/CustomButton"
import device from "../../assets/Devices.png"


const Setup1 = ({ step, handleClick }) => {
    return (
        <Flex justifyContent={"center"} alignItems={"center"} minH={{ base: "60vh", sm: "75vh", md: "85vh", lg: "100vh" }} >
            <Container maxW={"container.sm"} w={"95%"} textAlign={{ base: "left", md: "center", lg: "center" }}>
                <div data-aos="fade-up">
                    <Image src={device} w={{ base: "85%", sm: "70%", md: "50%" }} mx={"auto"} />
                    <Text mt={10} textTransform={"uppercase"} fontSize={"sm"}>step <strong>{step + 1}</strong> of <strong>{3}</strong></Text>
                    <Heading fontWeight={600} fontSize={"3xl"} w={{ base: "100%", sm: "100%", md: "60%" }} mx={"auto"}>Finish setting up your account</Heading>
                    <Text mt={2} w={{ base: "100%", sm: "100%", md: "60%" }} mx={"auto"}>Netflix is personalized for you. Create a password to watch on any device at any time.</Text>
                    <CustomButton handleClick={handleClick} hover style={{ mt: 8, w: { base: "100%", sm: "100%", md: "60%" }, fontSize: "xl", fontWeight: 500, py: 3 }}>
                        Next
                    </CustomButton>
                </div>
            </Container>
        </Flex>
    )
}

export default Setup1