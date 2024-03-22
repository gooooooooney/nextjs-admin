export type UserProfile = {
  phoneNumber?: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string;
};

export type RestaurantProfile = {
  name: string;
  address?: string;
  timezone?: string;
};

export type Profile = UserProfile & RestaurantProfile & { password: string };
