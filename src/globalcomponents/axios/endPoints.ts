export const endPoints = {
  getMenuitem: `Home/GetMenuItems`,
  getCountry: `Common/GetCountry`,
  getStatebyCountry: (id: number) => `Common/GetStateByCountry?id=${id}`,
  getCitybyState: (id: number) => `Common/GetCityByState?id=${id}`,
};
