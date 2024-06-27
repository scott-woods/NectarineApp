import { ActionIcon, Button, Card, Code, Collapse, Container, Flex, Grid, Group, ScrollArea, Slider, Stack, Tabs, Text, TextInput, Title, Tooltip } from "@mantine/core";
import { useEffect, useState } from "react";
import { SliderInput } from "../components/shared/SliderInput/SliderInput";
import { IconChevronDown, IconChevronUp, IconCode, IconNumbers } from "@tabler/icons-react";
import { solverCode } from "../constants";
import BubbliciousSolver from "../components/Home/BubbliciousSolver";

const Home = () => {

    //States
    const [limit, setLimit] = useState<number>(100000);
    const [bubbliciousNumbers, setBubbliciousNumbers] = useState<number[]>([]);

    return (
        <Container size="lg">
            <Grid align="flex-start">
                <Grid.Col span={6}>
                    <BubbliciousSolver
                        limit={limit}
                        setLimit={setLimit}
                        bubbliciousNumbers={bubbliciousNumbers as number[]}
                        setBubbliciousNumbers={setBubbliciousNumbers}
                    />
                </Grid.Col>
                <Grid.Col span={6}>
                    <Card shadow="sm" padding="lg">
                        <Tabs defaultValue="code">
                            <Tabs.List mb={20}>
                                <Tabs.Tab value="code" leftSection={<IconCode/>}>
                                    Code
                                </Tabs.Tab>
                                <Tabs.Tab value="results" leftSection={<IconNumbers/>}>
                                    Results
                                </Tabs.Tab>
                            </Tabs.List>
                            <ScrollArea h='50vh'>
                                <Tabs.Panel value="code">
                                    <Code block style={{textAlign:'left'}}>
                                        {solverCode}
                                    </Code>
                                </Tabs.Panel>
                                <Tabs.Panel value="results">
                                    <Flex direction="column">
                                        <Text ta="left" fw={500} mb={20}>
                                            All of the Bubblicious Numbers up to {limit} are:
                                        </Text>
                                        <Text ta="left">
                                            {bubbliciousNumbers?.map(x => `${x}, ` )}
                                        </Text>
                                    </Flex>
                                </Tabs.Panel>
                            </ScrollArea>
                        </Tabs>
                    </Card>
                </Grid.Col>
            </Grid>
        </Container>
    )
}

export default Home;