import { Box, Center, Container, Heading, List, ListIcon, ListItem, Text } from "@chakra-ui/react"
import { IoCheckmarkCircleOutline, IoCheckmark } from "react-icons/io5"
import CustomButton from "../../components/CustomButton"
import { RED } from "../../utils/color"


const Setup3 = ({ step, handleClick }) => {
    return ( 
        <Box>
            <Container maxW={"sm"} w={{ base: "95%", sm: "65%", md: "45%", lg: "35%" }} >
                <Box py={{ base: 16, sm: 20, lg: 24}} textAlign={"center"}>
                    <Center as={IoCheckmarkCircleOutline} color={RED} mx={"auto"} size={"3.5rem"} />
                    <Text mt={5} textTransform={"uppercase"} fontSize={"sm"}>step <strong>{step}</strong> of <strong>{3}</strong></Text>
                    <Heading fontWeight={600} fontSize={"3xl"} mx={"auto"}>Choose your plan</Heading>

                    <List mt={5} mx={"auto"} w={{ base: "100%", sm: "90%", md: "85%", lg: "90%"}}>
                        <ListItem display={"flex"} fontSize={"lg"} mb={3} justifyContent={"center"}>
                            <ListIcon as={IoCheckmark} color={RED} fontSize={"3xl"} />
                            <Text flex={1} textAlign={"left"}>No commitments, cancel anytime</Text>
                        </ListItem>
                        <ListItem display={"flex"} fontSize={"lg"} mb={3} justifyContent={"center"}>
                            <ListIcon as={IoCheckmark} color={RED} fontSize={"3xl"} />
                            <Text flex={1} textAlign={"left"}>Anything on Netflix for one low price</Text>
                        </ListItem>
                        <ListItem display={"flex"} fontSize={"lg"} mb={3} justifyContent={"center"}>
                            <ListIcon as={IoCheckmark} color={RED} fontSize={"3xl"} />
                            <Text flex={1} textAlign={"left"}>No ads and no extra fees. Ever.</Text>
                        </ListItem>
                    </List>

                    <CustomButton handleClick={handleClick} hover style={{ mt: 8, w: "100%", fontSize: "xl", fontWeight: 500, py: 3 }}>
                        Next
                    </CustomButton>
                </Box>
            </Container>
        </Box>
    )
}

export default Setup3