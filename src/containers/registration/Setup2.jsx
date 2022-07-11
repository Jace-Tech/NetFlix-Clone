import { Box, Checkbox, Container, Heading, Text } from "@chakra-ui/react"
import CustomButton from "../../components/CustomButton"


const FormInput = ({ placeholder, type, value, style, error }) => {
    return (
        <Box mb={3}>
            <Box 
                as={"input"} value={value} outline={"none"}
                type={type || "text"} placeholder={placeholder} 
                {...style} borderWidth={1} borderRadius={"sm"}
                flex={1} w={"100%"} p={4}
                color={"blackAlpha.700"}
                _placeholder={{ opacity: 1 }}
                borderColor={"blackAlpha.500"}
            />
            {error && <Text mt={1} fontSize={"xs"} color={"red.700"}>{error}</Text>}
        </Box>
    )
}

const Setup2 = ({ handleClick, step }) => {
    return ( 
        <Box pb={"28"} pt={"10"}>
            <Container maxW={"container.sm"} w={{ base: "95%", sm: "75%", md: "60%", lg: "40%" }}>
                <div data-aos="fade-right">
                    <Text mt={{base: 8, md: 8, lg: 4}} textTransform={"uppercase"} fontSize={"sm"}>step <strong>{step}</strong> of <strong>{3}</strong></Text>
                    <Heading fontSize={"4xl"} fontWeight={"semibold"}>Create a password to start your membership</Heading>
                    <Text lineHeight={"7"} mt={4}>Just a few more steps and you're done! <br /> We hate paperwork, too.</Text>

                    <Box mt={3}>
                        <FormInput 
                            placeholder={"Email"}
                        />

                        <FormInput 
                            type={"password"}
                            placeholder={"Add a password"}
                        />

                        <Checkbox size={"lg"}>
                            <Text fontSize={"md"} color={"blackAlpha.700"}>Please do not email me Netflix special offers.</Text>
                        </Checkbox>
                    </Box>

                    <CustomButton handleClick={handleClick} hover style={{ mt: 8, w: "100%", fontSize: "xl", fontWeight: 500, py: 3 }}>
                        Next
                    </CustomButton>
                </div>
            </Container>
        </Box>
    )
}

export default Setup2