import type { TnavigationType } from '@ttypes';

export const checkRole = (navigation: TnavigationType[], role: string) => {
  return navigation.filter((item: any) => item.role?.includes(role));
};
