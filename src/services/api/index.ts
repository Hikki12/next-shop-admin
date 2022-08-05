const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

type idType = string | number;

const endPoints = {
  products:{
    getProducts: `${API}/api/${VERSION}/products/`,
    postProducts: `${API}/api/${VERSION}/products/`,
    getProduct: (id: idType) => `${API}/api/${VERSION}/products/${id}`,
    putProducts: (id: idType) => `${API}/api/${VERSION}/products/${id}`,
    deleteProducts: (id: idType) => `${API}/api/${VERSION}/products/${id}`
  },
  users:{
    getUsers: `${API}/api/${VERSION}/users`,
    postUsers: `${API}/api/${VERSION}/users`,
  },
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`
  },
  categories:{
    getCategories: `${API}/api/${VERSION}/categories`,
    postCategories: `${API}/api/${VERSION}/categories`,
    getCategoriesProduct: (id: idType) => `${API}/api/${VERSION}/categories/${id}/products`,
    putCategories: (id: idType) => `${API}/api/${VERSION}/categories/${id}`,
  },
  files:{
    postFiles: `${API}/api/${VERSION}/files/upload`,
    getFiles: (fileName: string) => `${API}/api/${VERSION}/${fileName}`
  }

}

export default endPoints
