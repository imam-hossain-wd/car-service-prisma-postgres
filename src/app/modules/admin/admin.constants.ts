
export const AdminSearchAbleFields: string[] = ['name', 'email', 'contactNo','gender'];

export const AdminFilterableFields: string[] = [
    'searchTerm',
    'name',
    'email',
];


type AdminRelationalFieldsMapper = {
    [key: string]: string;
  };
  
 export const AdminRelationalFieldsMapper: AdminRelationalFieldsMapper = {
    category: 'category',
  };