import { AvailabilityBlock } from "./availability";

export function getAvailabilityMap(
  blocks: AvailabilityBlock[],
): Record<string, AvailabilityBlock> {
  return blocks.reduce(
    (acc, block) => {
      acc[block.date] = block;
      return acc;
    },
    {} as Record<string, AvailabilityBlock>,
  );
}
