interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null {
    if(products.length > 0){
        const  mostExpensiveProduct = products.find(product => product.price === Math.max(...products.map(product => product.price)));
        return mostExpensiveProduct || null;
    }
    return null;
  }

  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
  ];
  
  console.log(getMostExpensiveProduct(products));
//   getMostExpensiveProduct(products);  
  // Output: { name: "Bag", price: 50 }
