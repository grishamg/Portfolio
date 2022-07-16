import { Image } from "@chakra-ui/image";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Center, Text, VStack } from "@chakra-ui/layout";
import useDocumentTitle from "../hooks/useDocumentTitle";

const About = () => {
	useDocumentTitle();

	return (
		<Box
			minHeight={{ md: "calc(100vh - 120px)" }}
			background={useColorModeValue("gray.50", "black")}
			p={5}
		>
			<Center minHeight={{ md: "calc(100vh - 250px)" }}>
				<VStack>
					<Image
						borderRadius="full"
						boxSize="360px"
						src="/images/DP new.jpeg"
						alt="grisham cover"
						fit="cover"
					/>
					<Text fontSize={{ base: "3xl", md: "7xl" }} fontWeight="600">
						Hi, I'm Grisham Garg
					</Text>
					<Text fontSize={{ base: "xl", md: "4xl" }}>
						a passionate{" "}
						<Text
							display="inline"
							borderBottomColor="gray.500"
							borderBottomWidth="5px"
						>
							Full Stack Web Developer
						</Text>{" "}
						from India.
					</Text>
					<Text fontSize={{ base: "xl", md: "4xl" }} as="span">
						I am interested in building responsive websites using {" "} 
						<Text
							display="inline"
							borderBottomColor="gray.500"
							borderBottomWidth="5px"
						>
							MERN
						</Text>{" "}
						Stack
					</Text>
				</VStack>
			</Center>
		</Box>
	);
};

export default About;
