export type addressType = {
  street: string;
  city: string;
  suite: string;
  zipcode: string;
};

export type contactType = {
  id: string;
  email: string;
  name: string;
  address: addressType;
};

export type postType = {
  title: string;
  body: string;
};

export type socialsType = {
  id: string;
  icon: string;
  path: string;
};
