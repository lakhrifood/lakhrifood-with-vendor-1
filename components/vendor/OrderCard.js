import { Button, Flex, Image, Text } from "@chakra-ui/react";

const OrderCard = ({ status }) => {
  return (
    <Flex
      h="90px"
      alignItems="center"
      borderBottomWidth="1px"
      justifyContent="space-between"
    >
      <Flex alignItems="center">
        <Image
          boxSize="50px"
          objectFit="cover"
          src="https://static.remove.bg/remove-bg-web/8be32deab801c5299982a503e82b025fee233bd0/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg"
          alt="Segun Adebayo"
          borderRadius="full"
        />
        <Text ml="10px">Red john</Text>
      </Flex>
      <Flex>
        {status == "request" ? (
          <>
            {" "}
            <Button size="sm" colorScheme="green" variant="solid">
              Accept
            </Button>
            <Button size="sm" ml="10px" colorScheme="red" variant="solid">
              Reject
            </Button>
          </>
        ) : (
          <>
            {" "}
            <Button size="sm" colorScheme="orange" variant="solid">
              Process
            </Button>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default OrderCard;
