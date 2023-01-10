import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

type CyclicProps = {
  items: ((index: boolean) => React.ReactNode)[];
  start: React.ReactNode;
  period?: number; // In ms
  containerProps?: React.ComponentProps<typeof Box>;
};

const Cyclic = ({
  items,
  start,
  period = 3000,
  containerProps,
}: CyclicProps) => {
  const [current, setCurrent] = useState<number>(0); // -1 to start with 0

  useEffect(() => {
    const timerId = setInterval(
      () => setCurrent((c) => (c + 1) % items.length),
      period
    );

    return () => clearInterval(timerId);
  }, [items, start, period]);

  return (
    <Box {...containerProps}>
      {start}
      {items.map((item, i) => item(current === i))}
    </Box>
  );
};

export default Cyclic;
