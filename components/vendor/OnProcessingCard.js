import { Flex, Grid, Image, Text } from "@chakra-ui/react";

const onProcessingCard = () => {
  return (
    <Grid templateColumns="3fr 4fr" gap={6} borderWidth="1px" p="30px">
      <Flex flexDirection="column">
        <Flex alignItems="center">
          <Image
            boxSize="80px"
            objectFit="cover"
            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            alt="Mamun Ahmed"
            borderRadius="full"
          />
          <Text ml="10px" fontSize="22px" fontWeight="bold" color="gray.500">
            Mamun Ahmed<Text color="gray.300">⭐⭐⭐⭐⭐</Text>
          </Text>
        </Flex>
        <Flex mt="10px">
          <Text fontWeight="bold" color="gray.500">
            Rider Code:
          </Text>
          <Text color="gray.400" ml="10px">
            3204uoildain
          </Text>
        </Flex>
        <Flex mt="10px">
          <Text fontWeight="bold" color="gray.500">
            Phone Number:
          </Text>
          <Text color="gray.400" ml="10px">
            019284738947
          </Text>
        </Flex>
      </Flex>
      <Flex flexDir="column">
        {" "}
        <Flex alignItems="center">
          <Image
            boxSize="80px"
            objectFit="cover"
            src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            alt="Mamun Ahmed"
            borderRadius="full"
          />
          <Text ml="10px" fontSize="22px" fontWeight="bold" color="gray.500">
            Mamun Ahmed
          </Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Flex flexDir="column">
            <Flex mt="10px">
              <Text fontWeight="bold" color="gray.500">
                Rider Code:
              </Text>
              <Text color="gray.400" ml="10px">
                3204uoildain
              </Text>
            </Flex>
            <Flex mt="10px">
              <Text fontWeight="bold" color="gray.500">
                Phone Number:
              </Text>
              <Text color="gray.400" ml="10px">
                019284738947
              </Text>
            </Flex>
            <Flex mt="10px">
              <Text fontWeight="bold" color="gray.500">
                Food Note:
              </Text>
              <Text color="gray.400" ml="10px">
                019284738947
              </Text>
            </Flex>
          </Flex>
          <Flex flexDir="column">
            <Flex mt="10px">
              <Text fontWeight="bold" color="gray.500">
                Rider Code:
              </Text>
              <Text color="gray.400" ml="10px">
                3204uoildain
              </Text>
            </Flex>
            <Flex mt="10px">
              <Text fontWeight="bold" color="gray.500">
                Phone Number:
              </Text>
              <Text color="gray.400" ml="10px">
                019284738947
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Grid>
  );
};

export default onProcessingCard;
