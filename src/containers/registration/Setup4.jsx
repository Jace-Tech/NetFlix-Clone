import { Box, Center, Container, Flex, Heading, Link, List, ListIcon, ListItem, Table, TableContainer, Td, Text, Th, Thead, Tr, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { IoCheckmarkCircleOutline, IoCheckmark, IoPhonePortrait, IoTv, IoTabletLandscapeOutline, IoPhonePortraitOutline, IoTvOutline, IoLaptopOutline } from "react-icons/io5"
import CustomButton from "../../components/CustomButton"
import { planData } from "../../data/plan"
import { RED } from "../../utils/color"

const ChoiceBox = ({ name, id, isChoosed, handleClick }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <Box
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => handleClick(id)} mx={"auto"}
            pos={"sticky"} borderRadius={"sm"} as={"button"} 
            textTransform={"capitalize"} display={"flex"} 
            fontSize={"lg"} fontWeight={"semibold"} 
            minW={{base: 100, md: 120}} maxW={{base: 100, md: 120}} alignItems={"center"} 
            justifyContent={"center"} py={{base: 10, sm: 10, md: 12}} 
            bgColor={RED} color={"white"} top={0}
            opacity={isChoosed ? 1 : !isHovered ? .5 : 1}>
            { name }

            { isChoosed && (
                <Box
                    pos={"absolute"} top={"100%"} left={"50%"}
                    transform={"translateX(-50%)"} w={0} h={0}
                    borderWidth={"10px"} borderColor={"transparent"}
                    borderTopColor={RED}
                />
            ) }
           
        </Box>
    )
}

const Setup4 = ({ step, handleClick }) => {
    const [chosen, setChosen] = useState(planData.plans[planData.plans.length - 1].id)
    const [chosenIndex, setChosenIndex] = useState(planData.plans.length - 1)


    useEffect(() => {
        setChosenIndex(planData.plans.findIndex(plan => plan.id === chosen))
    }, [chosen])

    return ( 
        <Box color={"blackAlpha.700"}>
            <Container maxW={"container.lg"}>
                <Box py={16}>
                    <Text mt={5} textTransform={"uppercase"} fontSize={"sm"}>step <strong>{ step - 1 }</strong> of <strong>{3}</strong></Text>
                    <Heading fontWeight={600} color={"black"} fontSize={"3xl"} mx={"auto"}>Choose your plan that's right for you.</Heading>

                    <List mt={4}>
                        <ListItem display={"flex"} fontSize={"lg"} mb={2} justifyContent={"center"}>
                            <ListIcon as={IoCheckmark} color={RED} fontSize={"3xl"} />
                            <Text flex={1} textAlign={"left"}>No commitments, cancel anytime</Text>
                        </ListItem>

                        <ListItem display={"flex"} fontSize={"lg"} mb={2} justifyContent={"center"}>
                            <ListIcon as={IoCheckmark} color={RED} fontSize={"3xl"} />
                            <Text flex={1} textAlign={"left"}>Anything on Netflix for one low price</Text>
                        </ListItem>

                        <ListItem display={"flex"} fontSize={"lg"} mb={2} justifyContent={"center"}>
                            <ListIcon as={IoCheckmark} color={RED} fontSize={"3xl"} />
                            <Text flex={1} textAlign={"left"}>No ads and no extra fees. Ever.</Text>
                        </ListItem>
                    </List>

                    <TableContainer mt={5}>
                        <Table>
                            <Tr>
                                <Th></Th>
                                { planData.plans.map(plan =>  (
                                    <Th key={plan.id}>
                                        <ChoiceBox 
                                            isChoosed={plan.id === chosen}  {...plan} 
                                            handleClick={setChosen}
                                        />
                                    </Th>
                                ))}
                            </Tr>

                            { 
                                planData.planDescriptions.map((dec, index) => (
                                    <Tr key={index}>
                                        { 
                                            dec.map((column, _index) => (
                                                <Td 
                                                    key={`${index}-${_index}`} 
                                                    textAlign={_index != 0 ? 'center' : 'left'}
                                                    fontSize={"sm"}
                                                    color={chosenIndex === _index - 1 ? RED : "blackAlpha.700"}
                                                    fontWeight={_index != 0 ? 'semibold' : 'light'}
                                                >
                                                    { column }
                                                </Td>
                                            )) 
                                        }
                                    </Tr>
                                ))
                            }

                            <Tr verticalAlign={"top"}>
                                <Td fontSize={"sm"} color={"blackAlpha.700"} fontWeight={'light'}>Devices you can use to watch</Td>

                                { 
                                    planData.devices.map((device, index) => (
                                        <Td key={index} textAlign={"center"} fontSize={"sm"} color={"blackAlpha.700"} fontWeight={"semibold"}>
                                            { device.map((type, _index) => (
                                                <VStack my={2} key={`${type}-${_index}`} color={ chosenIndex === index ? RED : "blackAlpha.700" }>
                                                    { 
                                                        type === "phone" ? (
                                                            <Center fontSize={"2xl"}>
                                                                <IoPhonePortraitOutline />
                                                            </Center>
                                                        ) :  type === "tv" ? (
                                                            <Center fontSize={"2xl"}>
                                                                <IoTvOutline />
                                                            </Center>
                                                        )  :  type === "tablet" ? (
                                                            <Center fontSize={"2xl"}>
                                                                <IoTabletLandscapeOutline />
                                                            </Center>
                                                        ) : (
                                                            <Center fontSize={"2xl"}>
                                                                <IoLaptopOutline />
                                                            </Center>
                                                        )
                                                    }
                                                    <Text fontSize={"xs"} textTransform={"capitalize"} fontWeight={"normal"}>{ type }</Text>
                                                </VStack>
                                            )) }
                                        </Td>
                                    ))
                                }
                            </Tr>
                        </Table>
                    </TableContainer>
                    <Box mt={5} fontSize={"sm"} lineHeight={"7"} w={{base: "100%", sm: "100%", lg: "80%"}}>
                        <Text>HD (720p), Full HD(1080p), Ultra HD (4K) and HDR are subject to your internet service and device capabilities. Not all content is available in all resolutions. see our <Link>Terms of Use</Link> for more details.</Text>
                        <Text mt={2}>Only people who live with you  may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard and 1 with Basic and Mobile.</Text>
                    </Box>
                    <Flex mt={5}justifyContent={"center"} alignItems={"center"} mb={20}>
                        <CustomButton style={{ w: { base: "full", sm: "55%", md: "45%", lg: "35%" }, py: 3 }} >
                            Next
                        </CustomButton>
                    </Flex>
                </Box>
            </Container>
        </Box>
    )
}

export default Setup4