import { Title, Text, Flex } from "@mantine/core";
import { SliderInput } from "../shared/SliderInput/SliderInput";
import { useEffect } from "react";

interface BubbliciousSolverProps {
    bubbliciousNumbers : number[],
    setBubbliciousNumbers : any,
    limit : number,
    setLimit : any
}

const BubbliciousSolver = ({bubbliciousNumbers, setBubbliciousNumbers, limit, setLimit} : BubbliciousSolverProps) => {

    //Hooks
    useEffect(() => {
        fetchBubbliciousNumbers();
    }, [limit])

    const fetchBubbliciousNumbers = async () => {
        const result = getBubbliciousNumbers(limit);
        setBubbliciousNumbers(result);
    }

    const isPrime = (num: number) : boolean => {
        if (num <= 1) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }

    const getBubbliciousNumbers = (limit: number) : number[] => {
        const primes = [];
        for (let i = 2; i <= limit; i++) {
            if (isPrime(i) && i.toString(16).endsWith('b')) {
                primes.push(i)
            }
        }
        return primes;
    }

    return (
        <Flex direction="column" align="flex-start" gap={5}>
            <Title ta="left">Bubblicious Numbers</Title>
            <Text ta="left" c="dimmed" mb={10}>A Bubblicious Number is an integer that is prime and whose hexadecimal representation has a last digit of B.</Text>
            <SliderInput
                label="Enter a limit"
                placeholder="100000"
                min={0}
                max={100000}
                step={50}
                onChange={setLimit}
            />
            <Text ta="left">There are {<span style={{fontWeight:'bold'}}>{bubbliciousNumbers.length}</span>} Prime numbers between 1 and {limit} whose hexadecimal representation ends with 'B'.</Text>
        </Flex>
    )
}

export default BubbliciousSolver;