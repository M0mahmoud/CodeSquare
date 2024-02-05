export const getJwtSecret = (): string => {
  const KEY = process.env.JWT_SECRET;
  if (!KEY) {
    console.error("Missing JWT secret");
    process.exit(1);
  }
  return KEY;
};
