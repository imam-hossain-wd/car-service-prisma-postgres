

export const BookingSearchAbleFields: string[] = ['bookingName', 'userId', 'serviceId'];

export const BookingFilterableFields: string[] = [
    'searchTerm',
    'minPrice',
    'maxPrice',
    'category'
];


type BookRelationalFieldsMapper = {
    [key: string]: string;
  };
  
 export const bookRelationalFieldsMapper: BookRelationalFieldsMapper = {
    category: 'category',
  };