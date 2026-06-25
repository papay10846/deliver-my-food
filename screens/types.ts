export type StackNavigationParams = {
  Restaurant: {
    id: string;
    imgUrl: string;
    title: string;
    rating: number;
    genre: string;
    address: string;
    short_desc: string;
    dishes: Array<dish>;
    long: string;
    lat: string;
  },
  Home: {
    
  }
};

export type dish = {
  _id: string;
  name: string;
  short_description: string;
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  price: number;
}